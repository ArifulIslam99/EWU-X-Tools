import React from "react";
import  ReactDOM  from "react-dom";
import Explore from "../Components/Explore/Explore"
import {render, fireEvent } from "@testing-library/react";


describe("Proper Input Given", ()=>{
    describe("Must Return With value", ()=>{
        test("Trigger Successfully", ()=>{
            const handleSearchButton = jest.fn();
            const root = document.createElement('div')
            const { queryByTestId } = render(<Explore/>, root);
            fireEvent.click(queryByTestId("search-button"))
            expect(root.users).not.toBe(null)
        })
    })
})
