import React, {useEffect, useState} from 'react';
import {getEpisodes} from "../functions/requests";
import {data} from "autoprefixer";
import Loading from "../components/Loading";
import EpisodeLink from "../components/EpisodeLink";

const MainPage = () => {
    const [episodes, setEpisodes] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(async () => {
        setLoading(true)
        const episodeList = await getEpisodes(setError)
        //sort by season
        episodeList.sort((a, b) =>
            a.season - b.season
        )
        setEpisodes(episodeList)
        setLoading(false)
    }, [])

    return (
        <div>
            {isLoading && <Loading/>}
            {error && error}

            {episodes.length!==0 &&
            <ul className="mt-7">
                {episodes.map((episode) => (
                    <li>
                        <EpisodeLink key={episode.id} episode={episode}/>
                    </li>
                ))
                }
            </ul>
            }
        </div>
    );
};

export default MainPage;