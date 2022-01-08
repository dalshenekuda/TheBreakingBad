import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router";
import {getCharacter, getEpisode, getEpisodes} from "../functions/requests";
import Loading from "../components/Loading";
import {Link} from "react-router-dom";

const EpisodePage = () => {
    const {id} = useParams();
    const [episode, setEpisode] = useState({})
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(async () => {
        setLoading(true)
        const currEpisode = await getEpisode(setError, id)
        setLoading(false)
        setEpisode(currEpisode[0])
    }, [])

    return (
        <div>
            {isLoading && <Loading/>}
            {error && error}

                    {Object.keys(episode).length !== 0 &&
                    <>
                        <div>
                            <a className="text-3xl md:text-6xl mr-20 mb-10 font-bold">{episode.title}</a>
                            <a className="text-xl md:text-3xl font-bold"><a>{episode.air_date}</a></a>
                        </div>
                        <Link className="block decoration-sky-800 mt-5 text-xl" to="/">Go back to all episodes</Link>

                        <div className="mt-10">
                            {episode.characters &&
                            episode.characters.map((character) =>

                                <Link key={character.char_id} className="block text-2xl m-5 font-semibold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-purple-500 duration-300"
                                      to={`/characters/${character}`}>{character}</Link>
                            )
                            }
                        </div>
                    </>
                    }
        </div>
    );
};

export default EpisodePage;