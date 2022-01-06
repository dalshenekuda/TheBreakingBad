import axios from "axios";

export const getEpisodes = async (setError) => {
    try {
        const {data} = await axios.get("https://www.breakingbadapi.com/api/episodes")
        return data

    } catch (e) {
        setError(e.message)
    }

}

export const getEpisode = async (setError,episodeId) => {
    try {
        const {data} = await axios.get(`https://www.breakingbadapi.com/api/episodes/${episodeId}`)
        return data

    } catch (e) {
        setError(e.message)
    }

}

export const getCharacter = async (setError,name) => {
    try {
        const newName = name.replaceAll(' ', "+");
        const data = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${newName}`)
        return data

    } catch (e) {
        setError(e.message)
    }

}

