import './App.css';
import Character from './components/Character';
import useCharacters from './hooks/useCharacter';
import CharacterFilter from './components/CharacterFilter';
import useCharFilter from './hooks/useCharFilter';
import Typography from '@mui/material/Typography';
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

const Characters = () => {
    const { characters, loadingChar } = useCharacters()
    const { filteredCharacters, nothingFound, newFilter } = useCharFilter()

    return (
        <div className='Parent' style={{ marginTop: "40px" }}>
            <ThemeProvider theme={mainTheme}>
                <Typography className='center centerText' variant="h2" gutterBottom>
                    Personajes
                </Typography></ThemeProvider>
            {loadingChar ?
                <>
                    <ThemeProvider theme={mainTheme}><Typography className='center centerText' variant="h4" gutterBottom>
                        Cargando...
                    </Typography></ThemeProvider>
                    <ThemeProvider theme={aclarationTheme}><Typography className='center centerText' variant="body1" gutterBottom>
                        Este proceso puede tardar hasta 30 segundos debido al host gratuito
                    </Typography></ThemeProvider>
                </>
                : <>
                    <CharacterFilter className='center' newFilter={newFilter} />
                    {
                        nothingFound ?
                            <ThemeProvider theme={notFoundTheme}><Typography className='center centerText' variant="body1" gutterBottom>
                                No se ha encontrado ningun personaje que cumpla con estos filtros
                            </Typography></ThemeProvider>
                            :
                            filteredCharacters.length === 0
                                ? characters.map((character, index) =>
                                    <Character key={index} character={character} index={index} />)
                                : filteredCharacters.map((character, index) =>
                                    <Character key={index} character={character} index={index} />)}
                </>

            }

        </div>
    );
}

export default Characters