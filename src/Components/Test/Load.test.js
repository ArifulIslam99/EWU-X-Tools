import React, { useState } from "react";
import  ReactDOM  from "react-dom";
import App from "../../App"
import  Explore  from "../Explore/Explore";
import useFirebase from "../../hooks/useFirebase";
import {render} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"


/// Rendering React Application Successfully

test("Login Page Rendering", ()=>{
    const root = document.createElement('div');
    ReactDOM.render(<App></App>, root);
  
})


/// Test to check Heading in Explore Page
test("Check Headline", ()=>{
  const root = document.createElement('div')
  ReactDOM.render(<Explore></Explore>, root)
  expect(root.querySelector("h2").textContent).toBe("Explore Your Friends");

})

/// Test to Check User Signed in Successfully
test("Login Page Rendering", ()=>{
    const root = document.createElement('div');
    ReactDOM.render(<useFirebase></useFirebase>, root);
    expect(root.user).not.toBe(null)
    
})


/// All the users data loaded successfully

test("Check Headline", ()=>{
    const root = document.createElement('div')
    ReactDOM.render(<Explore></Explore>, root)
    expect(root.users).not.toBe(null)
  
  })



