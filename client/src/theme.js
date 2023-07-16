import { createTheme } from '@mui/material/styles'

export const shades = {
    primary: {
        100: "#ccd5d8",
        200: "#9aaab0",
        300: "#678089",
        400: "#355561",
        500: "#022b3a",
        600: "#02222e",
        700: "#011a23",
        800: "#011117",
        900: "#00090c"
    },

    secondary: {
        100: "#d2e4e8",
        200: "#a5cad1",
        300: "#79afba",
        400: "#4c95a3",
        500: "#1f7a8c",
        600: "#196270",
        700: "#134954",
        800: "#0c3138",
        900: "#06181c"
    },
    
    neutral: {
        100: "#ffffff",
        200: "#ffffff",
        300: "#ffffff",
        400: "#ffffff",
        500: "#ffffff",
        600: "#cccccc",
        700: "#999999",
        800: "#666666",
        900: "#333333"
    },
}

export const theme = ({
    palette: {
        primary: {
            main: shades.primary[500]
        }, 
        secondary: {
            main: shades.secondary[500]
        }, 
        neutral: {
            dark: shades.neutral[700],
            main: shades.neutral[500],
            light: shades.neutral[100]
        }
    }, 
    typography: {
        fontFamily: ["Fauna One", "sans-serif"].join(","),
        fontSize: 11,
        h1: {
            fontFamily: ["IBM Plex Sans", "sans-serif"].join(","),
            fontSize: 48,
        },
        h2: {
            fontFamily: ["IBM Plex Sans", "sans-serif"].join(","),
            fontSize: 36,
        },
        h3: {
            fontFamily: ["IBM Plex Sans", "sans-serif"].join(","),
            fontSize: 20,
        },
        h4: {
            fontFamily: ["IBM Plex Sans", "sans-serif"].join(","),
            fontSize: 14,
        }
    }
})