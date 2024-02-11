import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { SubApp } from './App';
import reportWebVitals from './reportWebVitals';
import AsyncApp from './AsyncApp';
import Heading from './Heading';
import OtherPractise from './OtherPractise';
const root = ReactDOM.createRoot(document.getElementById('root'));
const doSomething = () => {
  console.log("Run Success");
}
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <OtherPractise />
    {/* <AsyncApp/> */}
    {/* <SubApp /> */}
    {/* <Heading handleFunction={doSomething}/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
