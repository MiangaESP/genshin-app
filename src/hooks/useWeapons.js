import { useState, useEffect } from "react"
const {REACT_APP_API_MAIN_PATH}= process.env

const useWeapons = () => {
    const [loadingWea, setLoadingWea] = useState(false)
    const [weapons, setWeapons] = useState([])
    useEffect(() => {
        setLoadingWea(true)
        fetch(`${REACT_APP_API_MAIN_PATH}/armas`)
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