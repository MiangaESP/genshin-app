import { useState} from "react"
import useCharacters from "./useCharacter"

const useCharFilter = () => {
    const { characters} = useCharacters()
    const [nothingFound, setNothingFound] = useState(false)
    const [filters, setFilters] = useState({
        elemento: "Todos",
        arma: "Todos",
        rareza: "Todos",
        region: "Todos"
    })
    const [filteredCharacters, setFilteredCharacters] = useState(characters)

    const filterCharacter = (character) => {
        const filtersToApply = {}
        let isValid = true
        Object.keys(filters).forEach(key => {
            if (filters[key] !== "Todos") {
                filtersToApply[key] = filters[key]
            }
        })
        Object.keys(filtersToApply).forEach(key => {
            if (character[key] !== filters[key]) {
                isValid = false
            }
        })
        return isValid
    }

    const newFilter = (e) => {
        const changeFilter = filters
        if(e.target.name === "rareza" && e.target.value!=="Todos"){
            changeFilter[e.target.name] = parseInt(e.target.value)
        }else{
            changeFilter[e.target.name] = e.target.value
        }
        setFilters(changeFilter)
        const newFilteredCharacters = characters?.filter(character => filterCharacter(character))
        setFilteredCharacters(newFilteredCharacters)
        if(newFilteredCharacters.length===0){
            setNothingFound(true)
        }else{
            setNothingFound(false)
        }
    }

    return {
        filteredCharacters,
        nothingFound,
        newFilter
    }
}

export default useCharFilter