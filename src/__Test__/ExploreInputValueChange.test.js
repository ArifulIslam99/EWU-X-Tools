import React from "react";
import  ReactDOM  from "react-dom";
import Explore from "../Components/Explore/Explore"

import {render, fireEvent } from "@testing-library/react";


test("Input Filed work perfectly", ()=>{ 

    const { queryByPlaceholderText } = render(<Explore/>);
    const searchInput = queryByPlaceholderText("Write Email to Search");
    fireEvent.change(searchInput, {target: {value: "East West University"}})
    expect(searchInput.value).toBe("East West University")
    
    
})