# Google Image Scrape

Google Image Scrape build using Node.js, MongoDB, and various node modules which scrape images from Fetch images from google and save top 15 images after passing through a compression algorithm then through a black and white filter and saved to a Amazon S3.

Keyword List tab will display all the keywords searched by the user.

After clicking on any keyword on the Keyword List tab open up another page (dashboard ) which will have all the images for that particular keyword but now these images will be retrieve from the Amazon S3.

To run this project first make sure you have MongoDB in your machine.

Next follow these steps.

git clone https://github.com/raoalok/imgscrape or download repository on your machine.

Then install all the node dependencies using ' npm install '*

Then install pm2 using ' npm install pm2 -g '* & then run using ' pm2 start server.js '*

Open the server at http://localhost:3000



* remove all ' before typing in command prompt.


# dependencies: {
    "body-parser": "^1.15.1",
    "compression": "^1.6.2",
    "dotenv": "^4.0.0",
    "express": "^4.13.4",
    "express-flash": "0.0.2",
    "express-handlebars": "^3.0.0",
    "express-session": "^1.2.1",
    "express-validator": "^4.3.0",
    "images-scraper": "^2.0.11",
    "jimp": "^0.2.28",
    "method-override": "^2.3.5",
    "mongoose": "^4.4.8",
    "mongoskin": "^2.1.0",
    "morgan": "^1.7.0",
    "s3": "^4.4.0"
  # }
