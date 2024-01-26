# whack-a-mole - Testing

[Visit Live Site Here!](https://blingz-bbae80235bc4.herokuapp.com/)
[Main READ ME FILE Here](https://github.com/zaicodes/blingz-accessories)

I continuously tested and debugged my project using Chrome developer tools, ensuring proper functionality and responsiveness across various devices. I also utilized Google developer tools to verify different elements and troubleshoot any issues, specifically assessing JavaScript code sections for intended performance.

## Manual Testing

### Testing Client Goals Testing

`First Time Visitors`

`Returning Visitors`

`Frequent Visitors`

### testing using other screen size devices and browsers

Thorough testing was performed on the following devices:

Laptop:

- HP Envy 360

Mobile Devices:

- iPhone 13 Pro
- Samsung Galaxy S23 Ultra

In addition, the website was tested on the following browsers:

- Google Chrome
- Safari
- Firefox

No problems were identified.

### Full testing

## Automated Testing

### W3C Validator

I used [W3C](https://validator.w3.org/) to validate both the HTML and CSS on all pages of the website.

- HTML W3C Validator
Regarding the HTML Validator, it flagged information messages about trailing slashes on void elements, a result of the automatically added /> close tag by Prettier. 
Manual removal will be addressed in the next file save to rectify this issue.

![index.html]()

- CSS Validator (JigSaw)
The CSS Validator Jigsaw was used to validate all the CSS files. There were no errors found.
![style.css]()

### JavaScript Validator

[JSLint](http://www.jslint.com/) was used to check for any errors in JavaScript code. There were none found.

### Lighthouse
Google's Lighthouse tool was used to test performance, accessibility, SEO,
and PWA aspects of the site. The results are as follow:

![Index.html]()

![About.html]()

![Shop.html]()

![Contact.html]()

![Signup.html]()

![Profile.html]()


## Bugs discovered

During development and deployment I noticed a few bugs that needed fixing.

### Solved bugs
- Lighthouse index.html > needed to give alt attributes to images in Testimonials, also needed to change the button that said SEE MORE into more specific name i.e. Our journey as it was too generic. 
- Lighthouse Contact.html > the iframe had no name so I gave it a title attribute of my-map and reduced the space between the iframe and the section title.
- Profile+cart icons were added to smaller screens by placing their icons in the middle of the navbar through css.
- Fixing the profile deleting functionality in database by incorporating the functionality within a form, using a button with name and value attributes, and ensures proper event handling by correctly invoking the confirmDeleteProfile function with parentheses in the onclick attribute.
- limited the python code to 79 ch. max, and added more comments to explain the code and functions further.
- Fixing add to cart functionality which wasn't working and not linking to profile. This was fixed by introducing a new /checkout route for handling the checkout process and streamlines the profile update logic by incorporating it into the existing /profile route.
- Added the missing alt attributes and title for better accessibility, resizing logo so it's more clear.
- Fixed error with config file which wasn't working on heroku. This was solved by changing the file name to env.py


### Unsolved bugs
