import { Autocomplete, Box, TextField } from "@mui/material"
import './App.css'
const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 }
];

export const Especialidad = () =>{
    return(
        <>
        <div className="row">
                <Box component="form" sx={{ '& .MuiTextField-root ': { m: 1, width: '39ch' }, }}
                    noValidate
                    autoComplete="off"
                >
                    <div >
                        <Autocomplete
                            disablePortal
                            id=""
                            options={top100Films}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Especialidad" />}
                        />
                    </div>


                </Box>
            </div>
        </>
    )
}