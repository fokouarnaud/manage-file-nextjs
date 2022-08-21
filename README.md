# Manage file

Organizations generally want to show their student's work to a large number of people or other organizations. With manage-file they can save important documents such as dissertations and theses, safely.

All code follows [ESLint style guide](https://eslint.org/docs/latest/rules/). 



## Getting Started

### Pre-requisites and Local Development 
Developers using this project should already have [nodejs](https://nodejs.org) installed on their local machines.

#### Backend

The backend was profide by an api. [View the README.md from source repository for more details.](https://github.com/fokouarnaud/manage-file-api-express)


#### Frontend

Run the following commands to start the client: 
```
npm install // only once to install dependencies
export NODE_OPTIONS=--openssl-legacy-provider
npm start 
```

By default, the frontend will run on localhost:3000. 

### Tests
In order to run tests navigate to the backend folder and run the following commands: 

```
dropdb trivia_test
createdb trivia_test
psql trivia_test < trivia.psql
python test_flaskr.py
```
