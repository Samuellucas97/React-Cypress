
A simple <a href="https://www.codecademy.com/articles/what-is-crud">CRUD</a> application built with <a href="https://reactjs.org">React</a> based on https://github.com/SafdarJamal/crud-app.

<!-- We use GitLab CI/CD & Heroku to execute the continuous delivery pipeline. You can found the GitLab version of this project here:  [https://gitlab.com/Samuellucas97/Admin-CI-CD](https://gitlab.com/Samuellucas97/Admin-CI-CD). -->

App deployed:
- `Staging mode`: [https://admin-lte2-staging.herokuapp.com](https://admin-lte2-staging.herokuapp.com)
- `Production mode`: [https://admin-lte2.herokuapp.com](https://admin-lte2.herokuapp.com)



### Content
- [Prerequisites](#prerequisites)
- [How to Install and to Run](#how-to-install-and-to-run)
- [Available Pages](#available-pages)
- [GitLab CI/CD & Heroku](#gitlab-cicd--heroku)


## Requirements 

- Node (version 11)
- NPM (version 11)


## How to Install and to Run

To get a local copy of the code, clone it using git:

```
$ git clone https://github.com/Samuellucas97/React-Cypress.git
$ cd React-Cypress
```

Install dependencies:

```
$ npm install
```

Now, you can start a local web server by running:

```
$ npm start
```

and then you can open http://localhost:3000 to view it in the browser.

### Run E2E tests 

Since you are running the application, executes in another terminal window the following command:

```
$ CYPRESS_BASE_URL=http://localhost:3000 npm run cypress:run
```

This command it will run the end-to-end tests (E2E tests) in headless mode. The variable `CYPRESS_BASE_URL` is optional, with default value in `cypress.json` file.

By the way, you also can run E2E tests without running the application early if you using this following command: 

```
$ npm run test:e2e
```
Theese command start the application in test mode and executes the end-to-end tests in headless mode. The application is down after finished the tests.

#### Available Scripts

| Script        | Description                                                             |
| :-------------: | ----------------------------------------------------------------------- |
| `npm install`     | Install the project dependencies.                                   |
| `npm start`     | Runs the app in the development mode.                                   |
| `npm run build` | Builds the app for production to the `build` folder.                    |
| `npm run cypress:open` | Open the Cypress platform to execute the end-to-end tests |
| `npm run cypress:run` | Executes the end-to-end tests in *headless mode* |
| `npm run test:e2e` | Starts the application in test mode and executes the end-to-end tests in *headless mode*  |


## Available Pages

You can see some of the available pages. The implementation of this app used React.js tecnhology, thus  



| Title Page |                URL               |              Screenshots             |
|:------------------------------------:|:------------------------------------:|:------------------------------------:|
| Login | http://localhost:3000 |          ![Login Page](img/login.png "Login Page")         |
| Dashboard | http://localhost:3000 |          ![crud-app](https://user-images.githubusercontent.com/48409548/94567114-8aa5ea80-0284-11eb-99f6-87401b099848.png)        |





## GitLab CI/CD & Heroku

If you have cloned this repository, and you would like to execute the pipeline available on `.gitlab-ci.yaml`, you have: 

1. access the Heroku platform
2. create two new Heroku app (staging app and production app)
3. add Postgres as add-on
4. get Heroku API Key from your account
5. access GitLab.com platform
6. create a new project
7. choose the option`Run CI/CD for external repository`
8. import from GitHub 
   1. For this, you will need connect your GitHub account with your GitLab account
9. Create new variables in `Setting -> CI/CD`
   1. name: HEROKU_APP_STAGING; value: `<name of your staging app>`
   2. name: HEROKU_APP_PRODUCTION; value: `<name of your production app>`
   3. name: HEROKU_API_KEY; value: `<heroku api key>`