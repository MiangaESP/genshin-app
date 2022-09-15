import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { createSearchParams, useNavigate } from "react-router-dom";
import axios from 'axios'

import { ThemeProvider, createTheme } from '@mui/material/styles';
const {REACT_APP_TOKEN}= process.env

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

const GridContent = () => {
    const [errorMessage, setErrorMessage] = useState("")
    const [registered, setRegistered] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        if (registered) {
            navigate({
                pathname: "/login",
                search: createSearchParams({
                    registered: "true"
                }).toString()
            })
        }
    }, [registered, navigate]);

    const failedProcess = (error) => {
        setErrorMessage(error.response.data.error)
        setTimeout(() => {
            setErrorMessage("")
        }, 5000)
    }

    const sendForm = async (event) => {
        event.preventDefault()
        try {
            await axios.post(
                "https://genshin-api-tau.vercel.app/usuarios",
                { username: event.target.username.value, password: event.target.password.value, token: REACT_APP_TOKEN }
            );
            setRegistered(true)

        } catch (error) {
            failedProcess(error)
        }
    }

    return (
        <>
            <form onSubmit={sendForm}>
                <Grid container spacing={1}>
                    <Grid xs={12} item>
                        <TextField label="Usuario" name="username" placeholder='Usuario' variant='outlined' fullWidth required />
                    </Grid>
                    <Grid xs={12} item>
                        <TextField label="Contraseña" name="password" type={"password"} placeholder='Contraseña' variant='outlined' fullWidth required />
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
                    <Grid xs={12} item >
                        <Button fullWidth type="submit" variant="contained">
                            Registrarse
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <div>
            </div>
        </>
    )

}

const Register = () => {
    return (
        <div style={{ marginTop: "70px" }}>
            <ThemeProvider theme={mainTheme}>
                <Typography className='center centerText' variant="h4" gutterBottom>
                    Registrate
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

export default Register