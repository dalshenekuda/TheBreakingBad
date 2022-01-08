import axios from "axios";

export const getEpisodes = async (setError) => {
    try {
        const {data} = await axios.get("https://www.breakingbadapi.com/api/episodes")
        return data

    } catch (e) {
        setError(e.message)
    }
}

export const getEpisode = async (setError, episodeId) => {
    try {
        const {data} = await axios.get(`https://www.breakingbadapi.com/api/episodes/${episodeId}`)
        return data

    } catch (e) {
        setError(e.message)
    }

}

//we have an incorrect Api, we have only the names of the Characters in the episode( bad unique identifier),
// then we have to search by name, but for some characters
// the real name does not correspond to what is indicated in the episode and we have to get a list of all the
// characters and search by nickname

export const getCharacter = async (setError, name) => {
    try {
        const newName = name.replaceAll(' ', "+");
        const {data} = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${newName}`)
        let character = data[0]

        if (!character) {
            const listOfCharacters = await axios.get(`https://www.breakingbadapi.com/api/characters`)
            listOfCharacters.data.forEach((char) => {
                if (name.includes(char.nickname)) {
                    character = char
                }
            })
        }

        return character
    } catch (e) {
        setError(e.message)
    }

}

