# Book Library

This is a full-stack project made to display a database of books that I worked on during week 11 of the nology bootcamp.

The timeframe allowed to complete this project was one week.

[Check out the live demo here!](https://jasenscode.github.io/books/)

[Back end repo here!](https://github.com/jasenscode/books-java-spring)

<div>
<img src="https://github.com/jasenscode/books/blob/main/src/assets/images/books.JPG?raw=true" height="350">
<img src="https://github.com/jasenscode/books/blob/main/src/assets/images/books-find.JPG?raw=true" height="350">
<img src="https://github.com/jasenscode/books/blob/main/src/assets/images/books-add.JPG?raw=true" height="350">
<img src="https://github.com/jasenscode/books/blob/main/src/assets/images/books-zoom.JPG?raw=true" height="350">
</div>

### Technologies

- HTML5
- Sass
- React
- Java
- Spring
- MySQL
_____
### About

This is a full stack project utlising all of the above technologies in order to solidify all of the concepts learnt on the nology bootcamp so far.

The application is made using a React JS front end user interface, which will showcase a series of books fetched via a Java Spring API from a database. The link to the API that I created can be found at the top of this readme.

I first started by creating the API as this was my first time doing so, I felt it would require the most effort from myself. I created GET and POST endpoints, which I tested in Postman to ensure the application/endpoints were working as expected. I then linked this to a SQL database and added some data via Postman to use on the front end.

Once this was done, I moved on to the React application. This required:

- A home page to display the books fetched via a GET request
- A page to show each individual book with further information, again using a GET request utilising the ID
- A page for users to add new books to the database

firstly by creating a component diagram to map out exactly what would be required in order to create the app. 
