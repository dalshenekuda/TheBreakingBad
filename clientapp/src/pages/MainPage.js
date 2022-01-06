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
        episodeList.sort((a,b)=>
            a.season - b.season
        )
        setEpisodes(episodeList)
        setLoading(false)
    }, [])

    return (
        <div>
            {isLoading && <Loading/>}


            {episodes &&
                <div>
                    {episodes.map((episode) => (
                        <div> <EpisodeLink episode={episode}/> </div>
                        ))
                    }
                </div>
            }


        </div>
    );
};

export default MainPage;