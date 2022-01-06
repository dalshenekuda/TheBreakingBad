import React from 'react';
import {Link} from "react-router-dom";

const EpisodeLink = ({episode}) => {
    return (
            <Link to={`/episodes/${episode.episode_id}`}>
                {episode.title}
                {episode.air_date}
            </Link>

    );
};

export default EpisodeLink;