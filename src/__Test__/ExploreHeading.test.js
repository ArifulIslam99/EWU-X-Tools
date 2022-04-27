import React from "react";
import  ReactDOM  from "react-dom";
import Explore from "../Components/Explore/Explore"

/// Test to check Heading in Explore Page
test("Check heading under div is discoverable", ()=>{
    const root = document.createElement('div')
    ReactDOM.render(<Explore></Explore>, root)
    expect(root.querySelector("h2").textContent).toBe("Explore Your Friends");
  
  })