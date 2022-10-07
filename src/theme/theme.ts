import { createTheme } from '@mui/material/styles';

import { IconButton, SvgIconTypeMap, CssBaseline, ListItemIcon, colors } from '@mui/material';

 

export const theme = createTheme({

    typography: {

        button: {

            textTransform: 'none'

        },

        fontFamily: 'Nunito, Arial',

    },

    palette: {

        primary: {

            main: '#1E62A1'

        },

        neutral: {

            main: 'black'

        },

        secondary: {

            main: 'rgba(8, 21, 36, 0.6);'

        },

        error: {

            main: '#D14343'

        }

    },

 

    components: {

        MuiCssBaseline: {

            styleOverrides: `

              @font-face {

                font-family: 'Nunito';

              }

             

              `,

 

        },

        MuiTableHead: {

            defaultProps: {

 

                color: 'red'

            }

        },

        MuiTabs: {

            styleOverrides: {

                root: {

 

                    "&.MuiTabs-indicator": {

                        color: '#2d9fc5 !important'

                    },

 

                }

            }

        },

        MuiTab: {

            styleOverrides: {

                root: {

 

                    "&.Mui-selected": {

                        backgroundColor: `white`,

                        color: '#2d9fc5 !important'

                    },

                    "&.MuiTabs-indicator": {

                        color: '#2d9fc5 !important'

                    },

                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    "&:last-child": {
                        paddingBottom: 0
                    }
                }

            }

        },
        MuiListItemButton: {

            styleOverrides: {

 

                root: {

                    "&.Mui-selected svg": {

                        color: '#1e62a1 !important'

                    },

                    "&.Mui-selected": {

                        backgroundColor: `#e9eff4`,

                        color: '#1e62a1 !important'

                    },

                    "&:hover": {

                        backgroundColor: "#a9d2f5",

                    }

                }

            }

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