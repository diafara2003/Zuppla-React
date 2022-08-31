import { Box, FormControlLabel, MenuItem, Switch, TextField } from "@mui/material"
import { useState } from "react";

import reactLogo from './assets/react.svg'

export const DatosEmpresa = () => {
  console.log('empresa');
    const [valorSel, setvalorSel] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setvalorSel(event.target.value as string);
    };

    return(
        <>
         <div className="row m-1" style={{ border: "4px double #c6e3ff73" }}>
            <div style={{ cursor: "pointer", padding: "0px" }}>
              <div style={{ width: "100%", borderRadius: "4px" }} className="d-flex justify-content-center container">
                <img id="logoTercero" className="m-2 image" style={{ width: "150px" }} src={reactLogo}></img>
                <div className="overlay d-flex justify-content-center">
                  <a href="#" className="icon">
                    <i className='bx bxs-camera-plus' id="newLogo" style={{ fontSize: "75px", color: "#00000047", marginBottom: "15px" }}></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Box sx={{ mt: 5 }} display={"flex"} alignItems={"center"} justifyContent={"center"} >
            <Box component="form" sx={{ '& .MuiTextField-root ': { m: 1, width: '40ch' }, }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField id="" select label="Tipo persona" value={valorSel}
                  onChange={handleChange}
                // helperText=""
                >
                  <MenuItem value={10}>Natural</MenuItem>
                  <MenuItem value={20}>Juridica</MenuItem>
                </TextField>
                <TextField
                  required
                  id=""
                  label="Nombres"
                  defaultValue=""
                />
                <TextField
                  required
                  id=""
                  label="Apellidos"
                  defaultValue=""
                />
                <TextField
                  required
                  id=""
                  label="Identificación"
                  defaultValue=""
                />
                <TextField
                  required
                  id=""
                  label="Ciudad"
                  defaultValue=""
                />
                <TextField
                  required
                  id=""
                  label="Direccion"
                  defaultValue=""
                />
                <TextField
                  required
                  id=""
                  label="Correo"
                  defaultValue=""
                />
                <TextField
                  required
                  id=""
                  label="Telefono"
                  defaultValue=""
                />
                <TextField
                  required
                  id=""
                  label="Pagina WEB"
                  defaultValue=""
                />
                <TextField id="" select label="Actividad economica" value={valorSel}
                  onChange={handleChange}
                // helperText=""
                >
                  <MenuItem value={10}>prueba</MenuItem>
                  <MenuItem value={20}>2</MenuItem>
                </TextField>
                <FormControlLabel sx={{ margin: 2, fontSize: '12px !important' }} control={<Switch defaultChecked />} label="Se encuentra certificado en normas ISO" />
              </div>
            </Box>
          </Box>
        </>
    )
}