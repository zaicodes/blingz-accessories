# Blingz-accessories - Milestone Project 3

![Favicon](https://github.com/zaicodes/blingz-accessories/blob/main/documentation/android-chrome-192x192.png)

![Am-I-responsive](https://github.com/zaicodes/blingz-accessories/blob/main/documentation/am-i-responsive.png)

[Live link to website](https://blingz-bbae80235bc4.herokuapp.com/)

## Project Goals

The goal of this project is to create a responsive and dynamic webpage that showcases accessories for the popular fashion brand, Blingz.
Blingz offers a diverse collection of curated, handcrafted jewellery with a user-friendly interface and detailed descriptions for informed choices. The site ensures effortless cart management, allowing seamless updates and personalised profiles for swift checkouts.
With a responsive design, Blingz provides a consistent and enjoyable browsing experience across devices.

### Target Audience

Blingz targets fashion-forward individuals with a passion for jewellery. 
This audience, keen on curated and elegant pieces, values user-friendly features like detailed descriptions, effortless cart management, and personalized profiles for quick checkouts. 

## User Experience (UX)

### Client Goals

As a first-time visitor, I want to:

- Easily navigate through the website which is responsive to different screen sizes.
- See clear and detailed product pages with high-quality images, pricing, and product descriptions.
- Easily create a user account to track my orders.
- Read reviews and ratings from other customers to make informed purchasing decisions.

As a returning user, I want to:

- Log in quickly and securely using my existing credentials.
- Effortlessly add items to my shopping cart for a seamless shopping experience.
- Have the ability to update the cart, adjust quantities, and remove items before proceeding to checkout.


As a frequent user, I want to:

- Have multiple ways for contacting customer support, including a contact form for written queries and find and utilize contact information, such as phone numbers and email addresses, for more urgent inquiries.
- Change my password and username easily from the account settings page.
- Ability to delete the profile account.

## Design

### Wireframes

During the planning stage, I used Balsamiq for crafting the wireframes.
Click [here](https://github.com/zaicodes/blingz-accessories/tree/main/documentation/wireframes) to access them.

### Colour Scheme

![Colour Palette](https://github.com/zaicodes/blingz-accessories/blob/main/documentation/colour-palette.png)

### Typography

The project utilizes the following Google Fonts: with

- Jost
- Prata
  The Jost font is applied to buttons, the navbar, and price and p tags, while Prata is used exclusively for all headings and titles.

### Images

I used Midjourney to create pictures of models wearing jewelry and to generate photos of jewelry products for the shop page.
For the logo design I used Canva to design the logo of the website.

## Features

### Existing Features

Home page:

![navbar](https://github.com/zaicodes/blingz-accessories/blob/main/documentation/features/navbar.png)
The navbar looks the same on every page. It has links to different parts of the website, icons for the cart and profile, and a button to take the user to the shop.

![landing](https://github.com/zaicodes/blingz-accessories/blob/main/documentation/features/landing.png)

- Homepage with a brief introduction of the brand, showcasing some products in a grid format. Each product has an image, title, and button to explore more.

![testimonials](https://github.com/zaicodes/blingz-accessories/blob/main/documentation/features/testimonials.png)

- section that consists of customer ratings and reviews.

![information](https://github.com/zaicodes/blingz-accessories/blob/main/documentation/features/information.png)

- few sections that provide information to the user/customer.

Shop page:

![shop](https://github.com/zaicodes/blingz-accessories/blob/main/documentation/features/shop.png)

- Display a comprehensive shop section featuring a list of jewellery items.
- Include essential details such as item descriptions, prices, and ratings for each product.
- Allow users to add products to their virtual shopping cart before purchasing them.

User Accounts:

![signup](https://github.com/zaicodes/blingz-accessories/blob/main/documentation/features/signup.png)

- Provide users with the option to create a personal account on the website and update their details.

![login](https://github.com/zaicodes/blingz-accessories/blob/main/documentation/features/login.png)

- Allow registered users to log in securely to access personalized features.

![profile](https://github.com/zaicodes/blingz-accessories/blob/main/documentation/features/profile.png)

- Ability for the user to logout, update and delete their profile.

Shopping Cart Management:

![cart](https://github.com/zaicodes/blingz-accessories/blob/main/documentation/features/cart.png)

- Enable users to add items to their shopping cart for a convenient shopping experience.
- Allow users to view the contents of their cart, review item details, and see the total cost.
- Implement the ability to adjust and update the quantity of items in the cart. Provide an option to delete unwanted items from the shopping cart.

![order history](https://github.com/zaicodes/blingz-accessories/blob/main/documentation/features/orderhistory.png)

- Ability to checkout and view order history on profile. 

Contact page:

![contact details](https://github.com/zaicodes/blingz-accessories/blob/main/documentation/features/contactdetails.png)

- Key contact information, such as phone numbers and email addresses, for more urgent enquiries.

![form](https://github.com/zaicodes/blingz-accessories/blob/main/documentation/features/form.png)

- Ability for the customer to send a message directly using the contact form. This form is implemented using EmailJS.

![map](https://github.com/zaicodes/blingz-accessories/blob/main/documentation/features/map.png)

- Additionally, the contact page contains a map to help the user access and find the location.


- Defensive programming:
I've implemented defensive programming in my application to prevent checkout process by users who are not logged in or haven't created a profile. This involves verifying the presence of a user session and ensuring that the session user matches the one who created the profile and cart. If a user is not logged in, a message will be shown on the login window, prompting them to log in before proceeding to checkout.
Additionally, the checkout button is not accessible if the user isn't logged in.

### Features left to implement

In the future, if I have some time, I plan to add these features.
- product filter feature, allowing customers to narrow down their search by category or price range.
- Allow users to rate individual jewellery items based on their preferences.
- Implement a review system, enabling users to leave detailed reviews and comments under each product.

## Accessibility

- The project prioritized accessibility through semantic HTML, alt text, focus styles, and a responsive design.
- Clear contrast ratios, readable fonts, and strategic hover effects enhanced visual and interactive clarity.
- ARIA roles and labeled form fields improved dynamic content accessibility.
- Rigorous testing, including user feedback, validated the commitment to exceeding accessibility standards for an inclusive and enjoyable user experience.

## Technologies and Frameworks

### Technologies used:

- HTML5 - to create the structure of the site.
- CSS3 - to add styling to the site.
- JavaScript + JQuery - to add functionality.
- Python with flask - for backend development.

### Libraries, frameworks and other useful websites:

- Git - for version control.
- Gihub - to store the project's code after being pushed from Git.
- Visual Studio Code - to code my project
- Lighthouse - to test the accessibility of the website
- Am I responsive? - To present the website image on a different devices.
- Google Dev Tools - to test features, and responsiveness and to troubleshoot.
- Balsamiq - to design the wireframes of the project.
- Fontawesome.com - to get icons for the website
- Favicon.io - to generate tab icons for the website
- cloudconvert - to convert images from png or jpg to webp.
- img2go.com - to resize images to any size.
- Coolors - to generate colour palette for the website
- Google fonts - to get typography with free, customizable fonts.
- Canva - to design the logo.
- Midjourney - to create all the photos used across the website.
- Heroku - for hosting and deployment.

### Databases and API

The project has database API as well as curd functionality been implemented through MongoDB:

## Testing

To view testing click [here](https://github.com/zaicodes/blingz-accessories/blob/main/TESTING.md)

## Deployment & Local Development

### Deployment


The website is deployed using Heroku. To initiate the deployment on Heroku, you need to create two essential files: a requirements.txt file and a Procfile.

The requirements.txt file enumerates all the necessary applications and dependencies required for running the app. Generate the requirements.txt file by executing the following command in the terminal:

    ```bash
    pip3 freeze --local > requirements.txt
    ```

The Procfile informs Heroku about which files run the app and how to execute it. Create the Procfile using the following command in the terminal:

    ```bash
    echo web: python app.py > Procfile
    ```

Note: The Procfile uses a capital P and lacks a file extension.

Ensure the Procfile has the Heroku logo next to it after creation. Additionally, check the contents of the Procfile, as a blank line may be inadvertently added at the end during creation. This extra line can potentially cause issues during deployment, so delete it if present and save the file. Save both files, then add, commit, and push them to GitHub.

Next, log in (or sign up) to Heroku.com. Click on the "New" button and then select "Create New App."

Provide a unique name for your app (as names must be unique) and select a region. Once done, click "Create App."

Connect the Heroku app to the GitHub repository for the site. Under the deployment section, choose GitHub, locate the correct repository for the project, and click "Connect."

Once the repository is connected, you need to supply Heroku with the necessary config variables to build the app. Navigate to the "Settings" tab, and click the "Reveal Config Vars" button. Add the environment key/value variables used in the env.py file:

    | KEY | VALUE |
    | :-- | :-- |
    | IP | 0.0.0.0 |
    | PORT | 5000 |
    | SECRET_KEY| YOUR_SECRET_KEY* |
    | MONGO_URI | MONGO_URI* |
    | MONGO_DBNAME | MONGO_DB* |


*Denotes values specific to your app.

Note that the debug is set to true for detecting bugs on the live site; remember to change it to FALSE after deployment.

Finally, enable automatic deploys and click the "Create" button. Heroku will commence building the app.

### Local Development

#### How to Fork

To fork the repository:

- Sign in to GitHub or create an account if you don't have one.

- Navigate to the repository for this project, [Blingz](https://github.com/zaicodes/blingz-accessories).

- Click the Fork button located in the top right corner.

#### How to Clone

To clone the repository:

- Log in (or sign up) to GitHub.

- Go to the repository for this project, [Blingz](https://github.com/zaicodes/blingz-accessories).

- Click on the code button, select whether you would like to clone with HTTPS, SSH, or GitHub CLI and copy the link shown.

- Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.

- Type the following command in the terminal (after the git clone, you will need to paste the link you copied in step 3 above):

  ```bash
  git clone { & THE LINK FROM STEP 3 }
  ```

- Set up a virtual environment (this step is not required if you are using the Code Institute Template in GitPod as this will already be set up for you).

- Install the packages from the requirements.txt file by running the following command in the Terminal:

  ```bash
  pip3 install -r requirements.txt
  ```

---

## Credits

### Code

### Content

- The website's textual content has been written by me.
- The design is inspired by [Jewelly](https://jewelly.webflow.io/).

### Media

- Midjourney was used to generate images used in the website.
- The icons are from Font Awesome.
- Canva was used to design the website's logo

### Acknowledgements

I wish to express profound gratitude to those who offered their invaluable assistance and unwavering support throughout the completion of my second milestone project:

- Narender S. - my mentor, for checking my progress and providing helpful feedback.

- Jessica I. – for the weekly stand-ups which were very helpful and informative.
