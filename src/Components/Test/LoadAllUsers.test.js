import React from "react";
import  ReactDOM  from "react-dom";
import  Explore  from "../Explore/Explore";

/// All the users data loaded successfully

test("Check Users API Loaded", ()=>{
    const root = document.createElement('div')
    ReactDOM.render(<Explore></Explore>, root)
    expect(root.users).not.toBe(null)
  
  })