
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
const { REACT_APP_TOKEN, REACT_APP_API_MAIN_PATH} = process.env

require('dotenv').config()

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
            <InputLabel >Arma</InputLabel>
            <Select defaultValue={"Arco"} label="Arma" name="arma">
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

const ElementSelect = () => {
    return (
        <FormControl fullWidth>
            <InputLabel >Elemento</InputLabel>
            <Select defaultValue={"Pyro"} label="Elemento" name="elemento">
                <MenuItem value={"Pyro"}>Pyro</MenuItem>
                <MenuItem value={"Hydro"}>Hydro</MenuItem>
                <MenuItem value={"Cryo"}>Cryo</MenuItem>
                <MenuItem value={"Electro"}>Electro</MenuItem>
                <MenuItem value={"Anemo"}>Anemo</MenuItem>
                <MenuItem value={"Geo"}>Geo</MenuItem>
            </Select>
        </FormControl>
    )
}

const RegionSelect = () => {
    return (
        <FormControl fullWidth>
            <InputLabel >Region</InputLabel>
            <Select defaultValue={"Mondstadt"} label="Region" name="region">
                <MenuItem value={"Mondstadt"}>Mondstadt</MenuItem>
                <MenuItem value={"Liyue"}>Liyue</MenuItem>
                <MenuItem value={"Inazuma"}>Inazuma</MenuItem>
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
            console.log(formData)
            console.log(REACT_APP_API_MAIN_PATH)
            try {
                await axios.post(
                    `${REACT_APP_API_MAIN_PATH}personajes`,
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
                <Grid xs={12} md={6} item>
                    <ElementSelect />
                </Grid>
                <Grid xs={12} md={6} item>
                    <RegionSelect />
                </Grid>
                <Grid xs={12} item>
                    <TextField label="Descripcion" name="descripcion" placeholder='Descripcion del personaje' variant='outlined' fullWidth required />
                </Grid>
                <Grid xs={12} md={6} item>
                    <TextField label="Habilidad1" name="habilidad1" placeholder='Nombre Habilidad 1' variant='outlined' fullWidth required />
                </Grid>
                <Grid xs={12} md={6} item>
                    <TextField label="Descripcion1" name="descripcion1" placeholder='Descripcion Habilidad 1' variant='outlined' fullWidth required />
                </Grid>
                <Grid xs={12} md={6} item>
                    <TextField label="Habilidad2" name="habilidad2" placeholder='Nombre Habilidad 2' variant='outlined' fullWidth required />
                </Grid>
                <Grid xs={12} md={6} item>
                    <TextField label="Descripcion2" name="descripcion2" placeholder='Descripcion Habilidad 2' variant='outlined' fullWidth required />
                </Grid>
                <Grid xs={12} md={6} item>
                    <TextField label="Habilidad3" name="habilidad3" placeholder='Nombre Habilidad 3' variant='outlined' fullWidth required />
                </Grid>
                <Grid xs={12} md={6} item>
                    <TextField label="Descripcion3" name="descripcion3" placeholder='Descripcion Habilidad 3' variant='outlined' fullWidth required />
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

const CharacterForm = () => {
    return (
        <div >
            <ThemeProvider theme={mainTheme}>
                <Typography className='center centerText' variant="h4" gutterBottom>
                    Formulario del personaje
                </Typography>
            </ThemeProvider>
            <Card style={{ maxWidth: 600, margin: "0 auto", padding: "20px 5px" }}>
                <ThemeProvider theme={filterTheme}>
                    <CardContent>
                        <GridContent />
                    </CardContent>
                </ThemeProvider>
            </Card>

        </div >
    )
}

export default CharacterForm