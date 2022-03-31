import React from "react";
import  ReactDOM  from "react-dom";
import Explore from "../Components/Explore/Explore"
import {render, fireEvent } from "@testing-library/react";


describe("SearchButton", ()=>{
    describe("With Empty QUery", ()=>{
        it("Does Not Trigger", ()=>{
            const handleSearchButton = jest.fn();
            const { queryByTestId } = render(<Explore requestSearch={handleSearchButton}/>);
            fireEvent.click(queryByTestId("search-button"))
            expect(handleSearchButton).not.toHaveBeenCalled()
        })
    })
})
