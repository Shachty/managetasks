# Readme for Taskmanager
Author: Daniel Shatkin

# Installation
You were provided by an archive named Taskmanager.zip. Please unzip the content of it to a directory of your choice. 
The application consists of two modules, the back-end(/managetasks-1.0.0-SNAPSHOT.jar) and the front-end(/manageTasksFront).

## Installation Front-End

The Backend is a Spring Boot Application. In order to run it on your machine, open your console and navigate to the file managetasks-1.0.0-SNAPSHOT.jar and run it with the command

    java -jar managetasks-1.0.0-SNAPSHOT.jar

The application runs on localhost:8080.
## Installation Back-End

Second, the front-end has to be started. This is an Angular 4 Cli application. In order to start the application you need to have installed npm.If npm isn't installed on your machine, please visit 
https://nodejs.org/en/download/ and download node.js. If you've installed npm on your machine, open another console window and navigate inside /taskmanagerFront.
In order to install the dependencies you need for running the apllication type:

    npm install
    
This may take some minutes. After the dependencies are downloaded on your machine, you can start the front-end everytime with:

    npm start

This command will start the Angular application on localhost:4200. The whole Taskmanager should be controlled though the front-end 

# Contact
If you have questions don't hesitate to contact me at Daniel.Shatkin@gmail.com