# PO Car Repair Management

PO Car Repair Management is a web application developed to help users maintain car repairs and costs. Users are able to log the cars make, model, year, repair name, and costs. Unsolved problems is implementing a nav-bar and connecting handle-bars to the nav-bar.

# Technologies:

  - HTML: Used to display content on the web application
  - CSS: Used to style the content on the web application.
  - Handlebars: Separates the generation of HTML from JS.
  - Jquery: Controls the behavior of the web application i.e clicks, submit form fields, and changing views.
  - AJAX: Connects the back-end with the front-end to call POST, PATCH, GET, and DELETE methods.

# General Approach:

  The idea of this project was for mechanics, enthusiasts, and the general public to keep track of their vehicle repairs, and costs. As a developer I wanted users to be able to enter the year, make, model, costs, and repair name. The planning phase consisted of modeling ERDs and wireframes. After planning and based on user stories the next steps were to implement actions associated with the ERD and wireframe.

  The application functions by connecting to a PostgreSQL databse to store users, credentials, and repairs data. The front-end uses AJAX to ping the back-end. The methods used for AJAX are POST, PATCH, GET, and DELETE. Future iteration will be adding a nav-bar for authorization, creating repairs, and adding a comment box for users to comment about the repair.

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

# ERD:

  - [ERD Link](http://i.imgur.com/lbDsQ14.jpg)

# Unsovled Problems/Major Hurdles I Overcame

  Improve styling, add comment box, and creating another table in the back-end.

  A major hurdle I overcame was handlebars. It was difficult to implement, after reading documents and examining existing projects I was able to follow and understand the patterns, I was able to successfully implement a delete and update button on the repairs lists. Users are now able to delete a repair and update a repair sucessfully.

# Screenshot
  !['application' View](http://imgur.com/2kunVd6.png)

- [Deployed Web Application](https://pouk91.github.io/newCapstone/)
- [Deployed Back-end](https://stormy-crag-69533.herokuapp.com/)
- [Backend Repo](https://github.com/Pouk91/newCapstoneAPi)
