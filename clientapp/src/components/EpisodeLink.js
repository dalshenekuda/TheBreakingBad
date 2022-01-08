import React from 'react';
import {Link} from "react-router-dom";

const EpisodeLink = ({episode}) => {
    return (
        <div className="episodeBlock flex">
            <div className=" md:m-6 m-1 mt-4 font-semibold season flex space-between">
                {"Season №" + episode.season}
            </div>
            <Link
                className="episodeLink md:m-6 m-1 mt-4  block transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-purple-500 duration-300"
                to={`/episodes/${episode.episode_id}`}>
                <div className="font-semibold">{episode.title}</div>
                <div className="font-semibold"><a>{episode.air_date}</a></div>
            </Link>
        </div>
    );
};

export default EpisodeLink;