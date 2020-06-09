This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Remote Roofing Project

<strong>Project built by:</strong> Dorian Gosse <br/>
<strong>Created on:</strong> June 8, 2020 <br/>

<strong>Purpose:</strong> <br/>
This the front end to a service application streaming movies and TV series. <br/>
The goal of this application is to allow consumers to sign up or start a free trial of the service <br/>
and watch their favorite moives or TV series on desktop, mobile devices or tablets on demand.<br/>

This project was built with ReactJS, CSS3, and HTML5.

## Technical are Architectural Choises

<strong>File Structure:</strong><br/>
When deciding on how to structure the files for this application I tried to keep in mind <br/>
the ease of access for the developer. I tried to make file locations easily navigated to from any components<br/>
that would need to use those files. Keep in mind however, file structure for deployment took precedence.<br/>

The test files for each component can be found in that set of components **test** file. Each folder and <br/>
sub-folder containing components each have a corresponding test folder with test files for each component within.<br/><br/>

<strong>Components:</strong><br/>
The goal when creating react components was to create the components in such a way as to limit<br/>
congestion within components to maintain reusability and maintainability.<br/><br/>
To do this, I took the approach of siloing off components to the point of serving only one purpose and importing <br/>
all components needed to complete the pages. <br/>

## Improvements

<Strong>General Note:</Strong><br/>
Having no experience in ReactJS, deploying applications, testing React components, and even fully documenting a project,
<br/> for this project I undertook learning these skills from ground zero. I thoroughly enjoyed learning the new technologies to create <br/>
this application however, learning a brand new language in a short amount of time left some room for improvement. <br/>

<Strong> Improvements: </Strong> <br/>

<Strong> With More Time: </Strong><br/>
Had I been given more time to conclude this project I believe I would have done a number of things. <br/>
Firstly I would start with making particular parts of the code more maintainable. There are a couple of <br/>
areas where the code is not as totally maintainable as I would like it to be. An example being in Home.js <br/>
some ul items are not written to be changeable (see comment in file). <br/> <br/>

Although the project is accurate from a visual standpoint, I believe there is potential to make the UI more <br/>
aestheticly pleasing. For example I would like to have used different menu styles using react-images when using <br/>
different devices. <br/><br/>

I'd also like to be able to have some hover effects when a user is hovering over the selected movie or series. <br/>
This would include a description box pop-up showing the user what the film is about. A hover function that highlights<br/>
which film the user is looking at (much like when hovering over a netflix tile)<br/>

Aside from getting to 100% test coverage, if I had more time I'd like to be able to make the application more <br/>
mobile and tablet friendly.

## Setup Instructions

<i>After importing the .gitignore files run the following:</i> <br/>
npm install react-router-dom <br/>
npm install react-image --save <br/>
npm install @testing-library/react react-test-render er jest-dom --save-dev<br/>
lastly, npm start to run the project locally on localhost<br/>

## Components/Specifications

<strong>General Note:</Strong><br/>
For in depth details on components and any other in depth information you might need to continue developing this project<br/>
comments will be left in the appropriate files associated with their code. <br/>

<Strong>./src</Strong><br/>
<i>App.js:</i> Imports and renders ./src/components to render the navbar, footer components for all pages and body for home page.<br/>
Different pages are navigated to using and importing { Route, Switch } from react-router-dom. All pages except for the error <br/>
page require and exact url otherwise the error page will render.

<Strong>./src/components:</Strong><br/>
This folder holds all the components and their css files that are shown on every page (think global componenets) with <br/>
the excpetion of the body component.The NavBar and footer components are both rendered on every page including the error page. <br/>

<Strong>./src/pages</Strong><br/>
Folder contains the components that will render each page of the application (Home, Movies, Serires and Error pages) as well <br/>
as the corresponding css style sheets. Each page component is imported by App.js and rendered as an imported object. <br/>

<Strong>./src/pages/json_data</Strong><br/>
This folder contains the components that pull from the hosted JSON file from the given url as well as the css style sheet that <br/>
will eventually be rendered by the pages components. Both movies_data and series data share the same css file. <br/><br/>

movies_data.js and series_data.js pull data from the hosted JSON file and have the same functionality of rendering the movie/series cover<br/>
image and linking to the page where the movie/series can be found. The only difference between the two .js files is that one filters for only<br/>
movies on the list (movie_data)and the other filters rendering only series(series_data).<br/>

<Strong>./src/assets</Strong><br/>
This is where assets can be found that are used across the applicaton. This file generally contains images for the footer, error page, and navbar components.<br/>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
