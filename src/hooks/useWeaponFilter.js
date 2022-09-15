import { useState} from "react"
import useWeapons from "./useWeapons"

const useWeaponFilter = () => {
    const { weapons} = useWeapons()
    const [nothingFound, setNothingFound] = useState(false)
    const [filters, setFilters] = useState({
        tipo: "Todos",
        rareza: "Todos",
        stat_secundario: "Todos",
    })
    const [filteredWeapons, setFilteredWeapons] = useState(weapons)

    const filterWeapon = (weapon) => {
        const filtersToApply = {}
        let isValid = true
        Object.keys(filters).forEach(key => {
            if (filters[key] !== "Todos") {
                filtersToApply[key] = filters[key]
            }
        })
        Object.keys(filtersToApply).forEach(key => {
            if (weapon[key] !== filters[key]) {
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
        const newFilteredCharacters = weapons?.filter(weapon => filterWeapon(weapon))
        setFilteredWeapons(newFilteredCharacters)
        if(newFilteredCharacters.length===0){
            setNothingFound(true)
        }else{
            setNothingFound(false)
        }
    }

    return {
        filteredWeapons,
        nothingFound,
        newFilter
    }
}

export default useWeaponFilter