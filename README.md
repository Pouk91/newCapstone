# PO Car Repair Management Web Application

  PO Car Repair Management is a web application developed to help users maintain car repairs and costs. Users are able to log the cars make, model, year, repair name, and costs.

# Technologies:

  - HTML: Used to display content on the web application
  - CSS: Used to style the content on the web application.
  - Handlebars: Separates the generation of HTML from JS.
  - Jquery: Controls the behavior of the web application i.e clicks, submit form fields, and changing views.
  - AJAX: Connects the library to the front-end and calls upon POST, PATCH, GET, and DELETE methods.

# General Approach:

  The idea of this project was for mechanics, enthusiasts, and the general public to keep track of their vehicle repairs, and costs. As a developer I wanted users to be able to enter the year, make, model, repair name and costs. The planning phase consisted of modeling ERDs and wireframes. After planning and based on user stories the next steps were to implement actions associated with the ERD and wireframe.

  After succesfully creating a database with tables and columns within those tables. I proceeded to create and migrate the db in rails. Then I created cURL scripts within the back-end files and tested them within the terminal by providing the credentials needed and the file path(Ex: EMAIL=email@email.com PASSWORD=password filepath/filepath.sh). Once necessary POST, PATCH, GET, and DELETE methods were functional i proceeded to create the front-end framework.

  Next steps create a basic html template and created the necessary functions to connect the front-end to the library. I used console.logs to debug and ensure that the correct data was being sent to the web application.

  The application functions by connecting to a PostgreSQL databse to store users, credentials, and repairs data. The front-end uses the AJAX method to ping the back-end. Within the AJAX return methods used to ping the library POST, PATCH, GET, and DELETE.

# Dependencies Installation:

  NPM dependencies installed to execute grunt server for test environment and grunt deploy to deploy prod environment.

  - sudo npm install(ubuntu)
  - npm install

# User Stores:

  - As a want I want users to be able to log a repair.
  - As a want I want users to be able to update a repair.
  - As a want I want users to be able to delete a repair.
  - As a want I want users to be able to see a list of their logged repairs.

# Wireframe:

  - [Wireframe Link](http://i.imgur.com/d8YDxLq.jpg)

# Data Model/ERD:

  - [ERD Link](http://i.imgur.com/lbDsQ14.jpg)

# Unsovled Problems/Major Hurdles I Overcame

  Improve styling, add comment box, and creating another table in the library. Future itteration involves implementing a nav-bar and connecting handle-bars to it.

  A major hurdle I overcame was handlebars. It was difficult to implement, after reading documents and examining existing projects I was able to follow and understand the patterns, I was able to successfully implement a delete and update button on the repairs lists. Users are now able to delete a repair and update a repair sucessfully.

# Screenshot
  !['application' View](http://imgur.com/2kunVd6.png)

- [Deployed Web Application](https://pouk91.github.io/newCapstone/)
- [Deployed Back-end](https://stormy-crag-69533.herokuapp.com/)
- [Backend Repo](https://github.com/Pouk91/newCapstoneAPi)
