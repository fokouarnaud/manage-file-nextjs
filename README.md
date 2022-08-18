# Manage file

Organizations generally want to show their student's work to a large number of people or other organizations. With manage-file they can upload specific documents online, to allow a large number of people to view them.

All code follows [ESLint style guide](https://eslint.org/docs/latest/rules/). 


## Getting Started

### Pre-requisites and Local Development 
Developers using this project should already have nodejs installed on their local machines.

#### Backend

From the backend folder run `pip install requirements.txt`. All required packages are included in the requirements file. 

To run the application run the following commands: 
```
export FLASK_APP=flaskr
export FLASK_ENV=development
flask run
```

These commands put the application in development and directs our application to use the `__init__.py` file in our flaskr folder. Working in development mode shows an interactive debugger in the console and restarts the server whenever changes are made. If running locally on Windows, look for the commands in the [Flask documentation](http://flask.pocoo.org/docs/1.0/tutorial/factory/).

The application is run on `http://127.0.0.1:5000/` by default and is a proxy in the frontend configuration. 

#### Frontend

From the frontend folder, run the following commands to start the client: 
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

The first time you run the tests, omit the dropdb command. 

All tests are kept in that file and should be maintained as updates are made to app functionality. 

This is a starter template for [Learn Next.js](https://nextjs.org/learn).
## install reference
```shell
npm install remark remark-html
npm install date-fns
npm install gray-matter

```
## challenge link
- https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5
- https://dev.to/andrewespejo/how-to-design-a-simple-and-beautiful-navbar-using-nextjs-and-tailwindcss-26p1
- https://medium.com/get-it-working/get-prismjs-working-in-react-a6d989e59290

### Ressources
- https://tailwindcss.com/
- https://play.tailwindcss.com/
- https://heroicons.dev/
- https://tailblocks.cc/# simu
# nextjs-crud-mysql
