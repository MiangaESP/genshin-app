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
const WeaponFilter = ({ newFilter }) => {

    return (
        <div name='Filtro' className="filterContainer" >
            <ThemeProvider theme={filterTheme}>
                <div className='filterContainerChild'>
                    <FormControl sx={{ m: 1, minWidth: 140 }}>
                        <InputLabel >Tipo</InputLabel>
                        <Select defaultValue={"Todos"} label="Arma" onChange={newFilter} name="tipo">
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
                        <InputLabel >Stat Secundario</InputLabel>
                        <Select defaultValue={"Todos"} label="Region" onChange={newFilter} name="stat_secundario">
                            <MenuItem value={"Todos"}>Todos</MenuItem>
                            <MenuItem value={"ATQPER"}>ATQ%</MenuItem>
                            <MenuItem value={"DEFPER"}>DEF%</MenuItem>
                            <MenuItem value={"HPPER"}>HP%</MenuItem>
                            <MenuItem value={"PhDMG"}>Phisical Damage</MenuItem>
                            <MenuItem value={"Crit DMG"}>Crit DMG</MenuItem>
                            <MenuItem value={"Crit Rate"}>Crit Rate</MenuItem>
                            <MenuItem value={"ERPER"}>ER</MenuItem>
                            <MenuItem value={"EM"}>EM</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </ThemeProvider>
        </div>

    )
}

export default WeaponFilter