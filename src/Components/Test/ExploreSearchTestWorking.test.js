import React from "react";
import  ReactDOM  from "react-dom";
import  Explore  from "../Explore/Explore";

import {render, fireEvent } from "@testing-library/react";


test("Input Filed work perfectly", ()=>{ 
    const { queryByTestId, queryAllByPlaceholderText } = render(<Explore/>);
    expect(queryByTestId("search-box")).toBeTruthy();
    expect(queryAllByPlaceholderText("Write Email to Search")).toBeTruthy();
    
})