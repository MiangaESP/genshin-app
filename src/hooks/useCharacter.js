import { useState, useEffect } from "react"
const {REACT_APP_API_MAIN_PATH}= process.env

const useCharacters = () => {
    const [characters, setCharacters] = useState([])

    const [loadingChar, setLoadingChar] = useState(false)

    useEffect(() => {
        setLoadingChar(true)
        fetch(`${REACT_APP_API_MAIN_PATH}personajes`)
            .then((response) => response.json())
            .then((response) => {
                setCharacters(response)
                setLoadingChar(false)
            })

    }, [])

    return {
        characters,
        loadingChar
    }
}

export default useCharacters