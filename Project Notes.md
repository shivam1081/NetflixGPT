## 1.Setup the tailwind 
- Follow steps from here - https://tailwindcss.com/docs/guides/create-react-app
## 2. Steup Routing :- 
- npm i -D react-router-dom


Notes:- 

- If dealing with a big form then always use formik.
- Instead of using the state variables you can use the reference.
- useRef is used to point some feild like input fields.

Deploying on firebase (Episode 14 -1:41:48)

- first create aproject in firebase.
- then npm install firebase
- npm install -g firebase-tools / sudo npm install -g firebase-tools
- firebase login
- firebase init
- Select build as the folder
- Run npm run build 
- Finally run firebase deploy https://netflixgpt-21ac9.web.app

Install Two libraries for redux toolkit 
- npm i -D @reduxjs/toolkit
- npm i react-redux
  

## Creating a TMDB Account 
- Visit the tmdb website and create one account.
- Then goto profile-> edit profile-> then api-> Create a api token-> and register your app.
- You will get the API key and token 
- In local sometimes apis and some actions are called twice this is because we are using the strict mode 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
THis only happens in the local. Because react just do rendering twice to check for inconsistency.


## Setting up the OPENAI:- 

1. Login to the platform.open.com and create a project and get the key (Remember that it is not be disclosed).
2. Then install the openai library using npm install --save openai from https://www.npmjs.com/package/openai/v/4.8.0


## How to keep secret information of Project ?

1. Create a .env file
2. Add the variable with REACT_APP_<variable name>

## Concept of memoisation in react app

1. If the data is already present in the app then there is no need to fetch that data again.
2. 