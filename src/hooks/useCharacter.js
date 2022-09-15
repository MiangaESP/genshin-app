import { useState, useEffect } from "react"

const useCharacters = () => {
    const [characters, setCharacters] = useState([])

    const [loadingChar, setLoadingChar] = useState(false)

    useEffect(() => {
        setLoadingChar(true)
        fetch('https://genshin-api-tau.vercel.app/personajes')
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