This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


## Challenge

Fork this project and continue


##### 0) Project structure

- `src` should contain `components`, `containers` and `utils`.
- a component is a fully reusable react class or functional component.
- a container has multiple components and it's usually not reusable.
- every directories must be in `kebab-case`
- every folder must have an `index.js`
- if a folder must contain another component, file naming must be in `PascalCase.js`


##### 1) create a login form with react.

- create Input as a component which gets `type` and `onChange` function callback from props, and keeps current value of the input in state. (to learn more about `state` and `props` check out [props-docs](https://reactjs.org/docs/components-and-props.html#rendering-a-component) and [state-and-lifecycles](https://reactjs.org/docs/state-and-lifecycle.html))

> Note: login page is a container, while form and input are components.



- after user hitting submit button should navigate to home page. use [react-router](https://reacttraining.com/react-router/web/guides/quick-start) for routing.

> Note: for install npm package use `npm install <package>` or `yarn add <package>`

##### 1.5) create a form component with react.

- should have props fields which is an array of objects, the object schema should be: `{name, placeholder, type, required}`

- should have `onSubmitCallback` function prop
- title and info props

##### 2) create a modal component.

- a modal component is a nasty and hacky component but will make a better UI (I don't agree actually).

- implement [redux](https://react-redux.js.org/introduction/quick-start) store

- create an action which will open the modal

- create a reducer which has the app modal state `{ isOpen, modalType }`


###### 3) create a post page

- route should be like `/posts/:postId`
- calls dummy api defined in `/src/api`
- should present data passed from api call
- should have next and previous posts button (which rouutes will be `/routes/<:postId+1>` and `/routes/<:postId-1>`)

> Goals: learning promises, api calls, dynamic routing with react-router


###### 4) Styling

- animate modal opening and closing with `react-transition-group`

- style post page with `styled-components`
