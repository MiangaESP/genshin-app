import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const aboutTheme = createTheme({
    typography: {
        fontFamily: 'RobotoCondensed-Regular',
        fontSize: 16
    },
});
const About = () => {
    return (
        <div className='centerAbout'>
            <ThemeProvider theme={aboutTheme}>
                <Typography className='center centerText' variant="h4" gutterBottom>
                    Creado por: Miguel Angel Garcia Vich
                </Typography>
            </ThemeProvider>
            <div className='centerAboutLogos'>
                <div className='centerAboutSeparation'>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/miguel-%C3%A1ngel-garc%C3%ADa-vich/">
                        <img width={100} height={100} src="/icons/linkedin.svg" alt="Linkedin svg" />
                    </a>
                </div>
                <div >
                    <a target="_blank" rel="noreferrer" href="https://github.com/MiangaESP">
                        <img width={100} height={100} src="/icons/github.svg" alt="Github svg" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About