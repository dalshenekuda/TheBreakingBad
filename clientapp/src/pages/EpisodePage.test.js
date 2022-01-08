import React from "react";
import axios from "axios";
import {render, act} from "@testing-library/react";
import EpisodePage from './EpisodePage.js';
import {BrowserRouter} from "react-router-dom";
import {findByText} from "@testing-library/dom";


jest.mock("axios");
const data = [
    {
        "episode_id": 1,
        "title": "Pilot",
        "season": "1",
        "air_date": "01-20-2008",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Krazy-8",
            "Bogdan Wolynetz"
        ],
        "episode": "1",
        "series": "Breaking Bad"
    }
]

describe("EpisodePage", () => {
    it("fetches episode from an API", async () => {

        axios.get.mockImplementationOnce(() => Promise.resolve({data: data}));
        const {findByText} = render(
            <BrowserRouter>
                <EpisodePage/>
            </BrowserRouter>);

        const title = await findByText(/Pilot/);
        expect(title).toBeInTheDocument();
        const date = await findByText(/01-20-2008/);
        expect(date).toBeInTheDocument();
        expect(axios.get).toHaveBeenCalledTimes(1);
    });
});