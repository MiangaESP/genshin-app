import './App.css';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link, BrowserRouter, Route, Routes, useSearchParams } from 'react-router-dom'
import '@fontsource/roboto/300.css';
import Weapons from './Weapons';
import Characters from './Characters';
import AddItem from './AddItem'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Login from './Login';
import Register from './Register';
import useUser from './hooks/useUser';
import About from './About';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Alert, Snackbar } from '@mui/material';
require('dotenv').config()


const headerTheme = createTheme({
  typography: {
    fontFamily: 'Rubik-Bold',
    fontSize: 24
  },
});

const mainTheme = createTheme({
  typography: {
    fontFamily: 'Kanit-Bold',
    fontSize: 20
  },
});

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (searchParams.get("created")) {
      setOpen(true);
      searchParams.delete("created")
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
    <>
    <ThemeProvider theme={mainTheme}>
      <Typography style={{ marginTop: "200px" }} className='centerText' variant="h1" gutterBottom>
        Genshin APP
      </Typography>
    </ThemeProvider>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        El personaje o arma se ha creado correctamente
    </Alert>
</Snackbar></>)
}



function App() {
  const { user, handleLogout } = useUser()
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const Header = () => {
    return (
      <ThemeProvider theme={headerTheme}>
        <AppBar position="static" style={{ backgroundColor: "#000000" }}>
          <Container maxWidth="x2">
            <Toolbar disableGutters>
              {/* Menu desplegable que se muestra unicamente en pantallas pequeñas */}
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchororigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  <MenuItem key={"home"} component={Link} to='/' onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Home</Typography>
                  </MenuItem>
                  <MenuItem key={"personajes"} onClick={handleCloseNavMenu} component={Link} to='/personajes'>
                    <Typography textAlign="center">Personajes</Typography>
                  </MenuItem>
                  <MenuItem key={"armas"} onClick={handleCloseNavMenu} component={Link} to='/armas'>
                    <Typography textAlign="center">Armas</Typography>
                  </MenuItem>
                  <MenuItem key={"crear"} onClick={handleCloseNavMenu} component={Link} to='/crear'>
                    <Typography textAlign="center">Crear</Typography>
                  </MenuItem>
                  <MenuItem key={"about"} onClick={handleCloseNavMenu} component={Link} to='/about'>
                    <Typography textAlign="center">Acerca de</Typography>
                  </MenuItem>
                  <MenuItem key={"logout"} onClick={handleLogout}>
                    <Typography textAlign="center">Cerrar Sesion</Typography>
                  </MenuItem>
                </Menu>
              </Box>
              {/* Mostramos las opciones de la pagina */}
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <MenuItem>
                  <Button component={Link} to='/'
                    sx={{ fontSize: 20, my: 1, color: 'white', display: 'block' }}
                    style={{ textDecoration: 'none' }}>Home</Button>
                </MenuItem>
                <MenuItem>
                  <Button component={Link} to='/personajes'
                    sx={{ fontSize: 20, my: 1, color: 'white', display: 'block' }}
                    style={{ textDecoration: 'none' }}>Personajes</Button>
                </MenuItem>
                <MenuItem>
                  <Button component={Link} to='/armas'
                    sx={{ fontSize: 20, my: 1, color: 'white', display: 'block' }}
                    style={{ textDecoration: 'none' }}>Armas</Button>
                </MenuItem>
                <MenuItem>
                  <Button component={Link} to='/crear'
                    sx={{ fontSize: 20, my: 1, color: 'white', display: 'block' }}
                    style={{ textDecoration: 'none' }}>Crear</Button>
                </MenuItem>
                <MenuItem>
                  <Button component={Link} to='/about'
                    sx={{ fontSize: 20, my: 1, color: 'white', display: 'block' }}
                    style={{ textDecoration: 'none' }}>Acerca de</Button>
                </MenuItem>
              </Box>
              {/* Mostramos iniciar sesion o cerrar sesion segun si el usuario esta logeado */}
              <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                {user
                  ?
                  <div className='center'>
                    <Typography fontSize={20} textAlign="center">{user?.username}</Typography>
                    <MenuItem>
                      <Button onClick={handleLogout}
                        sx={{ fontSize: 20, my: 1, color: 'white', display: 'block' }}
                        anchororigin={{ vertical: 'top', horizontal: 'right' }}
                        style={{ textDecoration: 'none' }}>Cerrar Sesion</Button>
                    </MenuItem>
                  </div>
                  : <MenuItem>
                    <Button component={Link} to='/login'
                      sx={{ fontSize: 20, my: 1, color: 'white', display: 'block' }}
                      anchororigin={{ vertical: 'top', horizontal: 'right' }}
                      style={{ textDecoration: 'none' }}>Iniciar Sesion</Button>
                  </MenuItem>
                }
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    )

  }

  return (
    <BrowserRouter>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className='App '>
        <div className=' centerItems '>
          <Header />
          {/* Las distintas rutas de la pagina */}
          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/crear' element={<AddItem />} />
            <Route path='/personajes' element={<Characters />} />
            <Route path='/armas' element={<Weapons />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App;
