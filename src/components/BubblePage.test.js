import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import {fetchColors as mockFetchColors} from '../api/fetchColors'

const fakeData = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc",
    },
    id: 2,
  },
]

jest.mock('../api/fetchColors');


test("Renders BubblePage without errors", () => {
  mockFetchColors.mockResolvedValueOnce({
    data: []
  })
  // Finish this test
  render(<BubblePage />)
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  mockFetchColors.mockResolvedValueOnce({
    data: fakeData
  })
  
  render(<BubblePage />)
  await waitFor(()=> {
    expect(screen.queryAllByTestId('bubble')).toHaveLength(2)
  })


});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading