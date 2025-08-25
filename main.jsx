import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from "react";
import { useState } from "react";

import "./index.css"

// import App from './portfolio/App'
// import { BrowserRouter } from 'react-router-dom';

// import "./planindex.css"
// import Planwithlove from "./Planwithlove";

//import App from './App'
//import Indecrement from './Indecrement';

//import './courseindex.css'
//import Topcourse from './Topcourse';
//import { ToastContainer } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";

// import Testimonial from "./Testimonial"

//import Formdemo from './Formdemo';

//import { BrowserRouter } from 'react-router-dom';
//import Reactrouters from './Reactrouters';

//import Studynotion from "./Studynotion"
//import { ToastContainer } from 'react-toastify';

// import Randomgif from './Randomgif';
// import "./randomgif.css"

//import Blogcontext from './Blogcontext';
//import Appcontextprovider from './blogcontexts/context/Appcontext';
//import { BrowserRouter } from 'react-router-dom';

//import { storeexample } from './redux/slices/storeexample';

import Shoppingcard from './Shoppingcard';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
     //portfolio
  // <BrowserRouter>
  //   <App/>
  // </BrowserRouter>

  //  <StrictMode>
  // <App />

    // <Indecrement />

  // <Planwithlove />

  // <div>
  //   <Topcourse />
  //   <ToastContainer />
  // </div>

  // <Topcourse/>

   // <Testimonial/>
  
  //<Formdemo/>

  // <BrowserRouter>
  //   <Reactrouters/>      
  // </BrowserRouter>

  // <BrowserRouter>
  //   <Studynotion/>
  //   <ToastContainer/>
  // </BrowserRouter>

  //<Randomgif/>

  //  <BrowserRouter>
  //     <Appcontextprovider>
  //         <Blogcontext/>
  //     </Appcontextprovider>
  //  </BrowserRouter> 

  // <Provider store={storeexample}>
  //   <Shoppingcard/>
  // </Provider>

  <BrowserRouter>
    <Provider store={store}>
      <Shoppingcard/>
      <ToastContainer/>
    </Provider>
  </BrowserRouter>
  
  //  </StrictMode>,
);
 