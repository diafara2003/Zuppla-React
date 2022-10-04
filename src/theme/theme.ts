import { createTheme } from '@mui/material/styles';
import { IconButton } from '@mui/material';

export const theme = createTheme({

    components: {
        MuiSvgIcon: {


        },

        MuiButton: {
            styleOverrides: {

                startIcon: {

                    color: '#fff',
                },
                endIcon: {
                    root: {
                        color: 'red',
                    },
                    // Some CSS

                },
            }
        }
    },
    status: {
        danger: '#e53e3e',

    },


});


declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: React.CSSProperties['color'];
        };
    }


    interface Palette {
        default: Palette['primary'];
    }

    interface Palette {
        neutral: Palette['primary'];
    }
    interface PaletteOptions {
        neutral: PaletteOptions['primary'];
    }

    interface PaletteColor {
        darker?: string;
    }
    interface SimplePaletteColorOptions {
        darker?: string;
    }
    interface ThemeOptions {
        status: {
            danger: React.CSSProperties['color'];
        };
    }
}