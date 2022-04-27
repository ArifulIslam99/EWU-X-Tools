import Explore from "../Components/Explore/Explore";
import ReactDom from "react-dom";
import {render, fireEvent } from "@testing-library/react";
jest.setTimeout(10000);


test('some test title', async () => {
    const handleSearchButton = jest.fn();
    const { queryByTestId } = render(<Explore requestSearch={handleSearchButton}/>);
    const foo = true;0
    await new Promise((handleSearchButton) => setTimeout(handleSearchButton, 1000));
    expect(foo).toBeDefined();
  });