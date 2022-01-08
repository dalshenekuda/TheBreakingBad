import React from "react";
import axios from "axios";
import {render, act} from "@testing-library/react";
import MainPage from './MainPage.js';
import {BrowserRouter} from "react-router-dom";


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
    },
    {
        "episode_id": 2,
        "title": "Cat's in the Bag...",
        "season": "1",
        "air_date": "01-27-2008",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Walter White Jr.",
            "Krazy-8"
        ],
        "episode": "2",
        "series": "Breaking Bad"
    }
]


describe("MainPage", () => {
    it("fetches episodes from an API", async () => {

       axios.get.mockImplementationOnce(() => Promise.resolve({data: data}));
        const {findAllByRole} = render(
            <BrowserRouter>
                <MainPage/>
            </BrowserRouter>);

        const items = await findAllByRole("listitem");

        expect(items).toHaveLength(2);
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(
            "https://www.breakingbadapi.com/api/episodes"
        );
    });

});
