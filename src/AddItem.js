import { useState } from "react"
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import CharacterForm from "./components/CharacterForm";
import WeaponForm from "./components/WeaponForm";
import useUser from "./hooks/useUser";

import { ThemeProvider, createTheme } from '@mui/material/styles';

const mainTheme = createTheme({
    typography: {
        fontFamily: 'Kanit-Bold',
        fontSize: 20
    },
});

const filterTheme = createTheme({
    typography: {
        fontFamily: 'RobotoSlab-Regular',
        fontSize: 16
    },
});

const AddItem = () => {
    const [isCharacter, setIsCharacter] = useState(true)
    const { user } = useUser()

    const changeItem = (e) => {
        if (e.target.value === "Personaje") setIsCharacter(true)
        else setIsCharacter(false)
    }

    return (
        user
            ? user.canCreate
                ?
                <div className="Parent">
                    <ThemeProvider theme={mainTheme}>
                        <Typography className='center centerText' variant="h2" gutterBottom>
                            Añade un personaje o arma
                        </Typography>
                    </ThemeProvider>
                    <div name='Filtro' className="filterContainer" >
                        <ThemeProvider theme={filterTheme}>
                            <FormControl sx={{ m: 1, minWidth: 140 }}>
                                <InputLabel >Crear</InputLabel>
                                <Select defaultValue={"Personaje"} onChange={changeItem} label="crear" name="crear">
                                    <MenuItem value={"Personaje"}>Personaje</MenuItem>
                                    <MenuItem value={"Arma"}>Arma</MenuItem>
                                </Select>
                            </FormControl>
                        </ThemeProvider>
                    </div>
                    {isCharacter ? <CharacterForm /> : <WeaponForm />}
                </div>

                : <ThemeProvider theme={mainTheme}>
                    <Typography style={{ marginTop: "150px" }} className='center centerText' variant="h2" gutterBottom>
                        Tienes que ser un usuario con capacidad para crear para acceder a este contenido
                    </Typography>
                </ThemeProvider>
            : <ThemeProvider theme={mainTheme}>
                <Typography style={{ marginTop: "200px" }} className='center centerText' variant="h2" gutterBottom>
                    Tienes que iniciar sesión para acceder a este contenido
                </Typography>
            </ThemeProvider>
    )
}

export default AddItem