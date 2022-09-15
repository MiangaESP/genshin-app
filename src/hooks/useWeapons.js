import { useState, useEffect } from "react"

const useWeapons = () => {
    const [loadingWea, setLoadingWea] = useState(false)
    const [weapons, setWeapons] = useState([])
    useEffect(() => {
        setLoadingWea(true)
        fetch('https://genshin-api-tau.vercel.app/armas')
            .then((response) => response.json())
            .then((response) => {
                setLoadingWea(false)
                setWeapons(response)
            })
    }, [])

    return {
        weapons,
        loadingWea
    }
}

export default useWeapons