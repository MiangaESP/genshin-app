import { useState } from 'react';
import useUser from '../hooks/useUser';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'

const Header = () => {
    const { user, handleLogout } = useUser()
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
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
                    </Box>
                    {/* Mostramos las opciones de la pagina */}
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
    )
}

export default Header