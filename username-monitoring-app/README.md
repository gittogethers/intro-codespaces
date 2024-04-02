# Username Monitoring Application

## Overview

This application is designed to monitor and extract usernames from comments made on the `gittogethers/intro-codespaces` repository. It maintains a list of unique usernames and provides a function to randomly select a username from this list. This document provides setup and usage instructions, along with details on the application's functionality and error handling.

## Setup and Configuration

1. Clone the `gittogethers/intro-codespaces` repository to your local machine.
2. Navigate to the `username-monitoring-app` directory.
3. Install the necessary dependencies by running `npm install`.

## Running the Application

To start the application, run `node app.js` from the `username-monitoring-app` directory. The application will begin monitoring comments for new usernames and update the list of unique usernames stored in `usernames.json`.

## Functionality

- **Username Extraction**: The application listens for new comments on the repository. When a new comment is detected, it extracts the username of the commenter and checks if it is already in the list of unique usernames.
- **Maintaining a Unique List**: If the username is not already in the list, it is added to `usernames.json`, ensuring that each username is only listed once.
- **Random Username Selection**: The application includes a function to randomly select a username from the list of unique usernames. This can be triggered manually as needed.

## Error Handling

The application includes comprehensive error handling to manage exceptions and provide meaningful error messages. This includes handling errors related to network issues, file access, and unexpected data formats.

## Logging

Logging mechanisms are in place to track the application's behavior and assist with debugging. Logs are stored in a designated log file within the `username-monitoring-app` directory.

## Unit Tests

Unit tests are provided in the `username-monitoring-app/tests` directory. These tests verify the functionality of username extraction, list management, and random selection components. To run the tests, execute `npm test` from the `username-monitoring-app` directory.
