
<p align="center">
  A simple and beautiful <a href="https://www.codecademy.com/articles/what-is-crud">CRUD</a> application built with <a href="https://reactjs.org">React</a> based on https://github.com/SafdarJamal/crud-app.
</p>

![crud-app](https://user-images.githubusercontent.com/48409548/94567114-8aa5ea80-0284-11eb-99f6-87401b099848.png)


## Development

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

Since you are running the application, executes in another terminal window:

```
$ npm run cypress:run
```

This command it will run the end-to-end tests (E2E tests) in headless mode.

By the way, you also can run E2E tests without running the application early if you using this following command:

```
$ npm run test:e2e
```


#### Available Scripts

| Script        | Description                                                             |
| ------------- | ----------------------------------------------------------------------- |
| npm start     | Runs the app in the development mode.                                   |
| npm run build | Builds the app for production to the `build` folder.                    |
| npm run cypress:open | Open the Cypress platform to execute the end-to-end tests |
| npm run cypress:run | Executes the end-to-end tests in headless mode |
| npm run test:e2e | Starts the application in test mode and executes the end-to-end tests in headless mode  |


