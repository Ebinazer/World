# World

The Application is created with nodejs and express server. and Google O2Auth for email. The UI is simple html and css.

Initial setup

# Install the Node.js version required for the app to run
nvm install

# Use the installed Node.js version as the default for the project
nvm use ( i have used v14.20.1)

# Clone the repository: `git clone <repository-url>`
Clone it to the local machine

# Dump sql Data to database
The world.sql contains three table data please run the dump file in the mysql workbench. the data will automatically be stored in the db.


# Database connection
The Dump file would have created schema take the detials like Host, db username and password and replace in the env file. so the db is connected

# Libriraies
Npm i ( would install all the libraries required)

# Good to go for the server
Once the libraries are installed  
Npm start would run the server and it would automatically create the remaining tables which are missing, in our case user and 

# User interface
Once the backend is up and running and the table are syncronized. Go the UI folder .click on .login or signup folder and open the html file. and its good to go
