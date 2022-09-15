import React from "react"
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useMediaQuery } from '@mui/material';

import { ThemeProvider, createTheme } from '@mui/material/styles';

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

const Weapon = ({ weapon, index }) => {
    const matches = useMediaQuery("(min-width:600px)");
    return (
        <>
        <div key={index} className={`centerCharacter ${matches ? 'characterParent' : 'characterParentMobile'}`}>
            <div key={weapon.key} style={borderImg} name="characterImage">
                <img height='250px' width={matches ? '250' : '320'}
                    src={`${weapon.img}`}
                    alt={`imagen de ${weapon.nombre} `} />
            </div>
            <div key={0} className="keysParent">
                {
                    Object.keys(weapon).map((key, index) => {
                        if (key !== "img") {
                            return (
                                <div key={key} className="keyParent" >

                                    <div style={border} className="keyWea centerText">
                                        <ThemeProvider theme={keyTheme}>
                                            <Typography variant="h6" gutterBottom>
                                                {capitalizeFirstLetter(key)}
                                            </Typography>
                                        </ThemeProvider>
                                    </div>
                                    <div key={weapon[key]} style={border}
                                        className={index === 0
                                            ? " valueUp value centerText"
                                            : index === Object.keys(weapon).length - 1
                                                ? "valueDown value centerText"
                                                : "value centerText"}
                                    >
                                        <ThemeProvider theme={valueTheme}>
                                            <Typography variant="body1" gutterBottom>
                                                {weapon[key]}
                                            </Typography>
                                        </ThemeProvider>
                                    </div>
                                </div>)
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

export default Weapon