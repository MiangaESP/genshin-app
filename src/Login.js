import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { Button, Snackbar } from '@mui/material';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useUser from './hooks/useUser';

import { ThemeProvider, createTheme } from '@mui/material/styles';

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

const valueTheme = createTheme({
    typography: {
        fontFamily: 'RobotoCondensed-Regular',
        fontSize: 16
    },
});

const GridContent = () => {
    const { message, handleLogin, setErrorMessage } = useUser()

    useEffect(() => {
        if (message === 'logged') {
            window.location.replace('/');
        }
    }, [message])

    return (
        <form onSubmit={handleLogin}>
            <Grid container spacing={1}>
                <Grid xs={12} item>
                    <TextField label="Usuario" name="username" placeholder='Usuario' variant='outlined' fullWidth required />
                </Grid>
                <Grid xs={12} item>
                    <TextField label="Contraseña" name="password" type={"password"} placeholder='Contraseña' variant='outlined' fullWidth required />
                </Grid>
                {message !== "" && message !== "logged"
                    ?
                    <Grid xs={12} item>
                        <Stack >
                            <Alert severity="error" onClose={() => { setErrorMessage("") }}>
                                <AlertTitle>Error</AlertTitle>
                                {message}
                            </Alert>
                        </Stack>
                    </Grid> : null}
                <Grid xs={12} item >
                    <Button fullWidth type="submit" variant="contained">
                        Iniciar Sesion
                    </Button>
                </Grid>
            </Grid>
        </form>
    )

}

const Login = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (searchParams.get("registered")) {
            setOpen(true);
            searchParams.delete("registered")
            setSearchParams(searchParams)
        }
    }, [searchParams, setSearchParams])


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    return (
        <div style={{ marginTop: "70px" }}>
            <ThemeProvider theme={mainTheme}>
                <Typography className='center centerText' variant="h4" gutterBottom>
                    Inicia sesion
                </Typography>
            </ThemeProvider>
            <Card style={{ maxWidth: 600, margin: "0 auto", padding: "20px 5px" }}>
                <ThemeProvider theme={filterTheme}>
                    <CardContent>
                        <GridContent />
                    </CardContent>
                </ThemeProvider>
            </Card>
            <div className='center centerText'>
                <ThemeProvider theme={valueTheme}>
                    <Typography style={{marginTop:"5px"}} variant="body1" gutterBottom>
                        Aun no estas registrado?
                    </Typography>
                    <Button className='center centerText' component={Link} to='/register'>Registrate aquí</Button>
                </ThemeProvider>
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Te has registrado correctamente
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Login