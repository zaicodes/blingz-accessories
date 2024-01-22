from flask import Flask, render_template, jsonify, request, redirect, url_for, flash, session
import os
import json
import secrets
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash
if os.path.exists("env.py"):
    import env


app = Flask(__name__)
app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

try:
    mongo = PyMongo(app)
    print("Connected to MongoDB")
except Exception as e:
    print(f"Error connecting to MongoDB: {e}")

@app.route("/")
def index():
    existing_user = None
    if session.get("logged_in"):
        email = session.get("email")
        existing_user = mongo.db.users.find_one({"email": email})
    return render_template("index.html", existing_user=existing_user)

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/shop")
def shop():
    data = []
    with open("data/products.json", "r") as json_data:
        data = json.load(json_data)
    return render_template("shop.html", company=data)

@app.route("/login", methods=["POST"])
def login():
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")
        existing_user = mongo.db.users.find_one({"email": email})
        
        if existing_user and check_password_hash(existing_user["password"], password):
            flash("Login successful", "success")
            # Set the 'logged_in' session variable to True
            session["logged_in"] = True
            session["email"] = email  # Optionally store the email in the session
            return redirect(url_for("profile"))
        else:
            flash("Invalid email or password", "error")

    # Set the 'logged_in' session variable to False if login is not successful
    session["logged_in"] = False
    return redirect(url_for("index"))


@app.route("/profile", methods=["GET", "POST"])
def profile():
    if request.method == "POST":
        # Get the cart items from the request
        cart_items = request.get_json().get("cartItems", [])

        user_email = session.get("email")

        # Update user cart in the database
        if user_email:
            update_user_cart(user_email, cart_items)
            return jsonify({"message": "Cart updated successfully"})

    # Assuming you have a way to retrieve user data from the session or database
    user_data = {"email": "example@email.com", "username": "example_user"}
    return render_template("profile.html", user_data=user_data)

def update_user_cart(email , cart_items):
    # Assuming you have a 'users' collection in your MongoDB
    user_collection = mongo.db.users

    # Find the user by email
    user  = user_collection.find_one({"email": email})
    if user:
        user_collection.update_one({"email": email}, {"$set": {"cart": cart_items}})


@app.route("/signup", methods=["GET", "POST"])
def signup():
    username_exists = False

    # Retrieve the success_exists variable from the session
    success_exists = session.pop("success_exists", False)

    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")
        confirm_password = request.form.get("confirm_password")
        email = request.form.get("email")

        try:
            existing_user = mongo.db.users.find_one({"username": username})

            if existing_user:
                flash("Username already exists", "error")
                username_exists = True
                return render_template("signup.html", username_exists=username_exists)

            elif password != confirm_password:
                flash("Passwords do not match", "error")
                return render_template("signup.html", username_exists=username_exists)

            hashed_password = generate_password_hash(password, method="pbkdf2:sha256")

            mongo.db.users.insert_one({
                "username": username,
                "email": email,
                "password": hashed_password
            })

            # Set success_exists in the session
            session["success_exists"] = True
            return redirect(url_for("signup"))

        except Exception as e:
            print(f"Error accessing or inserting user into MongoDB: {e}")
            flash("Error accessing or inserting user into MongoDB", "error")
            return render_template("signup.html", username_exists=username_exists)

    return render_template("signup.html", username_exists=username_exists, success_exists=success_exists)

# Endpoint to provide Products data as JSON
@app.route("/api/products")
def products():
    return jsonify(products_data)

if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
