import React from "react"
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useMediaQuery } from '@mui/material';
import { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
const {REACT_APP_API_MAIN_PATH}= process.env

const keyTheme = createTheme({
    typography: {
        fontFamily: 'RobotoSlab-Regular',
        fontSize: 16
    },
});

const valueTheme = createTheme({
    typography: {
        fontFamily: 'RobotoCondensed-Regular',
        fontSize: 16
    },
});

const borderImg = {
    border: "2px solid black",
    borderRadius: "20px 0 0 20px"
}

const border = {
    border: "2px solid black"
}

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const Habilities = ({ character, habilities }) => {
    return (
        <div key={habilities}>
            {
                character[habilities].map((hability, index) => {
                    return (
                        Object.keys(hability).map((key) => {
                            return (
                                key === 'nombre'
                                    ? <div key={index} className="keyParent">
                                        <div key={hability} className="keyParent">
                                            <ThemeProvider theme={valueTheme}>
                                                <Typography variant="body1" gutterBottom>
                                                    {`Habilidad ${index + 1}: ${hability[key]} 
                                                | Descripcion: 
                                                ${hability[Object.keys(hability)[Object.keys(hability).indexOf(key) + 1]]}`}
                                                </Typography>
                                            </ThemeProvider>
                                        </div>
                                    </div>
                                    : null
                            )
                        })
                    )
                })
            }
        </div>
    )
}
const Character = ({ character, index }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const matches = useMediaQuery("(min-width:600px)");
    return (
        <>
            <div key={index} className={`centerCharacter ${matches ? 'characterParent' : 'characterParentMobile'}`}>
                <div key={character.key} style={borderImg} name="characterImage">
                    <img className="imageParent" height='500px' width={matches ? '250' : '320'}
                        src={`${REACT_APP_API_MAIN_PATH}${character.img}`}
                        alt={`imagen de ${character.nombre} `} />
                </div>
                <div key={0} className="keysParent">
                    {
                        Object.keys(character).map((key, index) => {
                            if (key !== "img" && key !== "habilidades") {
                                return (
                                    <div key={key} className="keyParent">
                                        <div style={border} className="keyChar centerText">
                                            <ThemeProvider theme={keyTheme}>
                                                <Typography variant="h6" gutterBottom>
                                                    {capitalizeFirstLetter(key)}
                                                </Typography>
                                            </ThemeProvider>
                                        </div>
                                        <div key={character[key]} style={border}
                                            className={index === 0 ? " valueUp value centerText" : "value centerText"}>
                                            <ThemeProvider theme={valueTheme}>
                                                <Typography variant="body1" gutterBottom>
                                                    {character[key]}
                                                </Typography>
                                            </ThemeProvider>
                                        </div>
                                    </div>)
                            } else if (key === "habilidades") {
                                return (
                                    <div key={key} className="keyParent">
                                        <div style={border} className="keyChar centerText">
                                            <ThemeProvider theme={valueTheme}>
                                                <Typography variant="h6" gutterBottom>
                                                    Habilidades
                                                </Typography>
                                            </ThemeProvider>
                                        </div>
                                        <div style={border} className="centerHabilities " key={key}>
                                            <ThemeProvider theme={valueTheme}>
                                                <Button aria-describedby={id} variant="outlined" onClick={handleClick}>
                                                    Ver habilidades
                                                </Button>
                                            </ThemeProvider>
                                            <Popover
                                                id={id}
                                                open={open}
                                                anchorEl={anchorEl}
                                                onClose={handleClose}
                                                anchorOrigin={{
                                                    vertical: 'bottom',
                                                    horizontal: 'left',
                                                }}
                                            >
                                                <Habilities key={key} character={character} habilities={key} />
                                            </Popover>
                                        </div>
                                    </div>
                                )
                            }
                            return null
                        })
                    }
                </div>
            </div>
            <Divider sx={{border:"1px solid black" ,marginLeft: '5%', marginRight: '5%', marginBottom:'20px'}}/>
        </>
    )
}

export default Character