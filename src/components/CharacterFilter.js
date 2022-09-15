import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const filterTheme = createTheme({
    typography: {
        fontFamily: 'RobotoSlab-Regular',
        fontSize: 16
    },
});



const CharacterFilter = ({ newFilter }) => {

    return (
        <div name='Filtro' className="filterContainer" >
            <ThemeProvider theme={filterTheme}>
                <div className='filterContainerChild'>
                    <FormControl sx={{ m: 1, minWidth: 140 }}>
                        <InputLabel >Elemento</InputLabel>
                        <Select style={{ backgroundColor: "white" }} defaultValue={"Todos"} label="Elemento" onChange={newFilter} name="elemento">
                            <MenuItem value={"Todos"}>Todos</MenuItem>
                            <MenuItem value={"Pyro"}>Pyro</MenuItem>
                            <MenuItem value={"Hydro"}>Hydro</MenuItem>
                            <MenuItem value={"Cryo"}>Cryo</MenuItem>
                            <MenuItem value={"Electro"}>Electro</MenuItem>
                            <MenuItem value={"Anemo"}>Anemo</MenuItem>
                            <MenuItem value={"Geo"}>Geo</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='filterContainerChild'>
                    <FormControl sx={{ m: 1, minWidth: 140 }}>
                        <InputLabel >Arma</InputLabel>
                        <Select defaultValue={"Todos"} label="Arma" onChange={newFilter} name="arma">
                            <MenuItem value={"Todos"}>Todos</MenuItem>
                            <MenuItem value={"Arco"}>Arco</MenuItem>
                            <MenuItem value={"Catalizador"}>Catalizador</MenuItem>
                            <MenuItem value={"Espada"}>Espada</MenuItem>
                            <MenuItem value={"Mandoble"}>Mandoble</MenuItem>
                            <MenuItem value={"Lanza"}>Lanza</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='filterContainerChild'>
                    <FormControl sx={{ m: 1, minWidth: 140 }}>
                        <InputLabel >Rareza</InputLabel>
                        <Select defaultValue={"Todos"} label="Rareza" onChange={newFilter} name="rareza">
                            <MenuItem value={"Todos"}>Todos</MenuItem>
                            <MenuItem value={"4"}>4*</MenuItem>
                            <MenuItem value={"5"}>5*</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='filterContainerChild'>
                    <FormControl sx={{ m: 1, minWidth: 140 }}>
                        <InputLabel >Region</InputLabel>
                        <Select defaultValue={"Todos"} label="Region" onChange={newFilter} name="region">
                            <MenuItem value={"Todos"}>Todos</MenuItem>
                            <MenuItem value={"Mondstadt"}>Mondstadt</MenuItem>
                            <MenuItem value={"Liyue"}>Liyue</MenuItem>
                            <MenuItem value={"Inazuma"}>Inazuma</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </ThemeProvider>
        </div>

    )
}

export default CharacterFilter