import './App.css';
import useWeapons from './hooks/useWeapons';
import Typography from '@mui/material/Typography';
import useWeaponFilter from './hooks/useWeaponFilter';
import Weapon from './components/Weapon';
import WeaponFilter from './components/WeaponFilter';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const mainTheme = createTheme({
    typography: {
        fontFamily: 'Kanit-Bold',
        fontSize: 20
    },
});

const notFoundTheme = createTheme({
    typography: {
        fontFamily: 'RobotoSlab-Bold',
        fontSize: 20
    },
});

const aclarationTheme = createTheme({
    typography: {
        fontFamily: 'RobotoSlab-Bold',
        fontSize: 20
    },
});

const Weapons = () => {
    const { weapons, loadingWea } = useWeapons()
    const { filteredWeapons, nothingFound, newFilter } = useWeaponFilter()

    return (
        <div className='Parent' style={{ marginTop: "40px" }}>
            <ThemeProvider theme={mainTheme}>
                <Typography className='center centerText' variant="h2" gutterBottom>
                    Armas
                </Typography>
            </ThemeProvider>
            {loadingWea ?
                <>
                    <ThemeProvider theme={mainTheme}><Typography className='center centerText' variant="h4" gutterBottom>
                        Cargando...
                    </Typography></ThemeProvider>
                    <ThemeProvider theme={aclarationTheme}><Typography className='center centerText' variant="body1" gutterBottom>
                        Este proceso puede tardar hasta 30 segundos debido al host gratuito
                    </Typography></ThemeProvider>
                </>
                : <>
                    <WeaponFilter className='center' newFilter={newFilter} />
                    {
                        nothingFound ? <ThemeProvider theme={notFoundTheme}>
                            <Typography className='center centerText' variant="body1" gutterBottom>
                                No se ha encontrado ningun arma que cumpla con estos filtros
                            </Typography> </ThemeProvider>


                            :
                            filteredWeapons.length === 0
                                ? weapons.map((weapon, index) =>
                                    <Weapon key={index} weapon={weapon} index={index} />)
                                : filteredWeapons.map((weapon, index) =>
                                    <Weapon key={index} weapon={weapon} index={index} />)}
                </>

            }

        </div>
    );
}

export default Weapons