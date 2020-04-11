# EmployeeDirectoryApp

# Unit 19 React Homework: Employee Directory

## Overview

For this assignment, you'll create a employee directory with React. This assignment will require you to break up your application's UI into components, manage component state, and respond to user events.

## User Story

* As a user, I want to be able to view my entire employee directory at once so that I have quick access to their information.

## Business Context

An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name.

## Acceptance Criteria

Given a table of random users, when the user loads the page, a table of employees should render. 

The user should be able to:

  * Sort the table by at least one category

  * Filter the users by at least one property.

## Commit Early and Often

One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

1. Your commit history is a signal to employers that you are actively working on projects and learning new skills

2. Your commit history allows you to revert your code base in the event that you need to return to a previous state

Follow these guidelines for committing:

* Make single purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits

* Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history

* Don't commit half done work, for the sake of your collaborators (and your future self!)

* Test your application before you commit to ensure functionality at every step in the development process

We would like you to have well over 200 commits by graduation, so commit early and often!


## Submission on BCS

You are required to submit the following:

* the URL to the deployed application

* the URL to the Github repository

Components needed: 
--------------------------------------------------------------------------------------
* Header Component: (JumboTron) In small words, says, "Click on Cards to Filter By Heading, or use the search box to narrow your results.  
--------------------------------------------------------------------------------------
* Input Component: (SearchForm) underneath Header.
* You can search for Employee name inside the Search Form and have it pull out the first- or last-name of employees searched.
* You should make a filter() Function to Filter the Employees by Name.  
--------------------------------------------------------------------------------------
* Container Component To hold Properties of Employees (table) (table Element):  
* Properties for which to account: (1) Image, (2) Name, (3) Phone, (4) Email, (5) DOB.
--------------------------------------------------------------------------------------
* TableRow Component (tr): The TableRow Component is needed to fill in the Information
* The (tr) component should receive 'props' that render each individual Property from above inside the (tr).
--------------------------------------------------------------------------------------
* All columns can be sorted when clicked.  'Name' will sort by 'name'. 'Image', 'Phone', 'email', and DOB are not sorted.  You can pick which of the properties to sort.  
 --------------------------------------------------------------------------------------

# Managing Data

* Make an axios call to the API, and then store the Data in (state).  

* Importing from a "friends.json" like the SpongeBob example is a good bluepring, but set the (state) equal to whatever comes back from the API; however, create the Data like the SpongeBob Example.  

* Set (state) equal to whatever comes back from the API.

* API Call
-------------------------------------------------------------------------------------
import axios from 'axios';

export default {
    // Gets all users
    getUsers: function() {
        return axios.get("https://randomuser.me/api/?results=200=us");
    }
}
-------------------------------------------------------------------------------------

* Components used in Key: 'DataArea.js', 'DataBody.js', 'DataTable.js', 'Header.js', 'Main.js', 'Nav.js', [] 'SearchBox.js', 'Wrapper.js', 'App.js'.  

* App.js is a Functional Component - no Class in Key.

* Class-Based Component, in Example: 'DataArea.js (should be class-like)', 'Header' (doesn't do anything-make Function), 'Main.js' - (make Function).  

** Whatever Stores you Data should be created like a Class-Like Component **

* Directories: 

* public
* src
* components
* styles
* utils

* Least amount of Components

* Header Component
* Search Component 
* TableRow Component for Each Employee

* (Hints)

* Every Component should have its own CSS StyleSheet. 

* Put all the CSS StyleSheets - 'DataArea.css', 'DataBody.css', etc. - in one 'styles' Directory.  

* Put all JavaScript files (.js) -- 'DataArea.js', 'DataBody.js' - in the 'components' Directory.  

* Both 'components' and 'styles' are inside the 'src' folder.  

** Change **

* Change the Directory Structure to be each component having its own Directory.  Each Component/Directory has an 'index.js' and 'style.css' Files. 


