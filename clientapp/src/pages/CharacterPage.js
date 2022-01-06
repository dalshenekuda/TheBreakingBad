import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {getCharacter} from "../functions/requests";
import Loading from "../components/Loading";
import EpisodeLink from "../components/EpisodeLink";

const CharacterPage = () => {
    const {name} = useParams()
    const [character, setCharacter] = useState({})
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(async () => {
        setLoading(true)
        const {data} = await getCharacter(setError, name)
        console.log(data)
        setCharacter(data[0])

        setLoading(false)
    }, [])

    return (
        <div>
            {isLoading && <Loading/>}

            {character &&
            <div className="flex font-sans mt-10">
                <div className="flex-none w-48 relative">
                    <img src={`${character.img}`} alt="" className="rounded-md absolute inset-0 w-full h-full"/>
                </div>
                <form className="flex-auto p-6">
                    <div className="flex flex-wrap">
                        <h1 className="flex-auto text-lg font-semibold text-gray-900">
                            {`${character.name} (${character.nickname})`}
                        </h1>

                        <div className="w-full flex-none text-sm font-medium text-gray-700 mt-2">
                            {"Birthday : "+ character.birthday}
                        </div>
                    </div>
                    <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-gray-200">
                        <div className="space-x-2 flex text-sm">
                            <label>
                                <input className="sr-only peer" name="size" type="radio" value="xs" checked/>
                                <div
                                    className="p-2 rounded-lg flex items-center justify-center text-gray-700 peer-checked:font-semibold peer-checked:bg-gray-900 peer-checked:text-white">
                                    {character.status}
                                </div>
                            </label>

                        </div>
                    </div>

                    <p className="text-lg text-gray-800">
                        List of occupations
                    </p>

                    {character.occupation &&

                        character.occupation.map((occu) => (
                            <div> {occu} </div>
                        ))
                    }


                </form>
            </div>


            }

        </div>


    );
};

export default CharacterPage;