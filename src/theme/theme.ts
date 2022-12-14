import { createTheme } from '@mui/material/styles';



export const theme = createTheme({

    typography: {
        button: {
            textTransform: 'none'
        },
        h6: {
            color: '#1B344C'
        }

    },
    palette: {
        primary: {
            main: '#1E62A1',

        },
        neutral: {
            main: 'black'
        },
        secondary: {
            main: 'rgba(8, 21, 36, 0.6);'
        },
        error: {
            main: '#D14343'
        },
        success: {
            main: '#0CBBE2'
        }

    },

    components: {

        MuiTableHead: {
            defaultProps: {
                color: 'red'
            }
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    "&.MuiTabs-indicator": {
                        color: 'rgba(8, 21, 36, 0.6) !important',
                       
                    },
                    // "& button.Mui-selected": {
                    //     fontWeight: 'bold'
                    // }
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        backgroundColor: `white`,
                        color: '#1E62A1 !important',
                        fontWeight: '600 !important'
                    },
                    "&.MuiTabs-indicator": {
                        color: 'rgba(8, 21, 36, 0.6) !important'
                    },
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    "&:last-child": {
                        paddingBottom: "0.5rem"
                    }
                }
            }

        },

        MuiTableBody: {
            styleOverrides: {
                root: {
                    "& .MuiTableCell-sizeSmall": {
                        padding: "2px 8px" // <-- arbitrary value
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
                        backgroundColor: "#d4e4f1",
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