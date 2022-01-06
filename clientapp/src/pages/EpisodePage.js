import React, {useEffect, useState} from 'react';
import { useHistory, useParams } from "react-router";
import {getCharacter, getEpisode, getEpisodes} from "../functions/requests";
import Loading from "../components/Loading";
import {Link} from "react-router-dom";

const EpisodePage = () => {

    const {id} = useParams();
    const hist = useHistory();

    const [episode, setEpisode] = useState({})
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const linkHandler = async (name) =>{

        const {data}= await getCharacter(setError, name)
        // console.log(character)
        // hist.push(`/characters/${data[0].char_id}`)
    }

    useEffect(async () => {
        setLoading(true)

        const currEpisode = await getEpisode(setError,id)
        setLoading(false)
        setEpisode(currEpisode[0])

    }, [])

    return (
        <div>
            {isLoading && <Loading/>}
            {episode &&
                <div>
                    <h1>{episode.title}</h1>
                    <h2>{episode.air_date}</h2>
                    <br/>
                    {episode.characters &&
                        episode.characters.map((character)=>
                            // <div onClick={()=>linkHandler(character)} >{character}</div>
                            <Link className="block" to={`/characters/${character}`}>{character}</Link>
                        )
                    }

                </div>
            }


        </div>
    );
};

export default EpisodePage;