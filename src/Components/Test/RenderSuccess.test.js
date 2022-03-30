import React from "react";
import  ReactDOM  from "react-dom";
import App from "../../App"

/// Rendering React Application Successfully

test("Login Page Rendering", ()=>{
    const root = document.createElement('div');
    ReactDOM.render(<App></App>, root);
  
})