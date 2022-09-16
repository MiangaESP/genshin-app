import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import { Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios'
import { ThemeProvider, createTheme } from '@mui/material/styles';
require('dotenv').config()

const {REACT_APP_TOKEN, REACT_APP_API_MAIN_PATH}= process.env

const filterTheme = createTheme({
    typography: {
        fontFamily: 'RobotoSlab-Regular',
        fontSize: 16
    },
});

const mainTheme = createTheme({
    typography: {
        fontFamily: 'Kanit-Bold',
        fontSize: 20
    },
});

const WeaponSelect = () => {
    return (
        <FormControl fullWidth>
            <InputLabel >Tipo</InputLabel>
            <Select defaultValue={"Arco"} label="Tipo" name="tipo">
                <MenuItem value={"Arco"}>Arco</MenuItem>
                <MenuItem value={"Catalizador"}>Catalizador</MenuItem>
                <MenuItem value={"Espada"}>Espada</MenuItem>
                <MenuItem value={"Mandoble"}>Mandoble</MenuItem>
                <MenuItem value={"Lanza"}>Lanza</MenuItem>
            </Select>
        </FormControl>
    )
}

const RareSelect = () => {
    return (
        <FormControl fullWidth>
            <InputLabel >Rareza</InputLabel>
            <Select defaultValue={"4"} label="Rareza" name="rareza">
                <MenuItem value={"4"}>4</MenuItem>
                <MenuItem value={"5"}>5</MenuItem>
            </Select>
        </FormControl>
    )
}

const StatSelect = () => {
    return (
        <FormControl fullWidth>
            <InputLabel >Stat Secundario</InputLabel>
            <Select defaultValue={"ATQPER"} label="Stat Secundario" name="stat_secundario">
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
    )
}

const GridContent = () => {
    const [file, setFile] = useState()
    const [fileName, setFileName] = useState("")
    const [successImagen, setSuccessImagen] = useState(false)
    const [successEnviar, setSuccessEnviar] = useState(false)
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    const buttonEnviarSx = {
        ...(successEnviar && {
            bgcolor: green[500],
            '&:hover': {
                bgcolor: green[700],
            },
        }),
    };

    const buttonImagenSx = {
        ...(successImagen && {
            bgcolor: green[200],
            '&:hover': {
                bgcolor: green[300],
            },
        }),
    };

    const saveFile = (e) => {
        setFile(e.target.files[0]);
        console.log(e.target.files[0])
        setFileName(e.target.files[0].name);
        setSuccessImagen(true)
    }

    const successProcess = () => {
        setSuccessMessage("El personaje se ha guardado correctamente")
        setErrorMessage("")
        setSuccessEnviar(true);
        setLoading(false);
        setTimeout(() => {
            setSuccessMessage("")
            setSuccessEnviar(false);
        }, 5000)
    }

    const failedProcess = (error) => {
        setErrorMessage(error.response.data.error)
        setSuccessImagen(false)
        setLoading(false);
        setTimeout(() => {
            setErrorMessage("")
        }, 5000)
    }

    const sendForm = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target);
        if (fileName !== "") {
            setSuccessEnviar(false);
            setLoading(true);
            formData.append("token", REACT_APP_TOKEN);
            formData.append("file", file);
            formData.append("fileName", fileName);
            console.log(JSON.stringify(Object.fromEntries(formData)))
            try {
                await axios.post(
                    `${REACT_APP_API_MAIN_PATH}armas`,
                    formData
                );
                successProcess()
                window.location.replace("/?created=true");
            } catch (error) {
                failedProcess(error)
            }
        } else {
            setErrorMessage("Por favor, sube una imagen")
            setTimeout(() => {
                setErrorMessage("")
            }, 5000)
        }

    }

    return (
        <form onSubmit={sendForm}>
            <Grid container spacing={1}>
                <Grid xs={12} item>
                    <TextField label="Nombre" name="nombre" placeholder='Nombre' variant='outlined' fullWidth required />
                </Grid>
                <Grid xs={12} md={8} item>
                    <WeaponSelect />
                </Grid>
                <Grid xs={12} md={4} item>
                    <RareSelect />
                </Grid>
                <Grid xs={12} md={8} item>
                    <TextField label="Ataque básico" name="ataque_basico" placeholder='Ataque basico' variant='outlined' fullWidth required />
                </Grid>
                <Grid xs={12} md={4} item>
                    <StatSelect />
                </Grid>
                <Grid xs={12} item>
                    <TextField label="Descripcion" name="descripcion" placeholder='Descripcion del arma' variant='outlined' fullWidth required />
                </Grid>
                <Grid xs={12} item>
                    <TextField label="Efecto pasivo" name="efecto_pasivo" placeholder='Nombre del efecto pasivo' variant='outlined' fullWidth required />
                </Grid>
                <Grid xs={12} item>
                    <Button fullWidth variant="outlined" component="label" sx={buttonImagenSx}>
                        Subir Imagen <input type="file" onChange={saveFile}
                            name="myFile" accept="image/png, image/jpg, image/jpeg" hidden />
                    </Button>
                </Grid>
                {errorMessage !== ""
                    ?
                    <Grid xs={12} item>
                        <Stack >
                            <Alert severity="error" onClose={() => { setErrorMessage("") }}>
                                <AlertTitle>Error</AlertTitle>
                                {errorMessage}
                            </Alert>
                        </Stack>
                    </Grid> : null}
                {successMessage !== ""
                    ?
                    <Grid xs={12} item>
                        <Stack >
                            <Alert severity="success" onClose={() => { setSuccessMessage("") }}>
                                <AlertTitle>Conseguido</AlertTitle>
                                {successMessage}
                            </Alert>
                        </Stack>
                    </Grid> : null}
                <Grid xs={12} item >
                    <Button fullWidth type="submit" variant="contained" sx={buttonEnviarSx} disabled={loading}>
                        Enviar
                    </Button>
                    {loading && (
                        <CircularProgress
                            size={24}
                            sx={{
                                color: green[500], position: 'absolute', top: '50%',
                                left: '50%', marginTop: '-12px', marginLeft: '-12px',
                            }}
                        />
                    )}
                </Grid>
            </Grid>
        </form>
    )

}

const WeaponForm = () => {
    return (
        <div >
            <ThemeProvider theme={mainTheme}>
                <Typography className='center centerText' variant="h4" gutterBottom>
                    Formulario de arma
                </Typography>
            </ThemeProvider>
            <Card style={{ maxWidth: 600, margin: "0 auto", padding: "20px 5px" }}>
                <ThemeProvider theme={filterTheme}>
                    <CardContent>
                        <GridContent />
                    </CardContent>
                </ThemeProvider>
            </Card>
        </div>
    )
}

export default WeaponForm