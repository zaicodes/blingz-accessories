from flask import Flask, render_template, jsonify
import os
import json

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/contact")
def contact():
    return render_template("contact.html")


@app.route("/shop")
def shop():
    data=[]
    with open("data/products.json","r") as json_data:
     data = json.load(json_data)
    return render_template("shop.html",company=data)


@app.route("/signup")
def signup():
    return render_template("signup.html")


# Endpoint to provide Products data as JSON
@app.route("/api/products")
def products():
    return jsonify(products_data)

if __name__ == "__main__" : 
    app.run(debug=True)
    
    