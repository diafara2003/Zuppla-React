import { Add } from '@mui/icons-material'
import { Box, TextField, InputAdornment, Button, CircularProgress } from '@mui/material'
import React from 'react'
import TableUsuario from '../components/view/TableUsuario'
import { ActionUser } from '../model/usuarioDTO'
import SearchIcon from '@mui/icons-material/Search';
import HistoryIcon from '@mui/icons-material/History';
import { useLayoutUsuario } from '../hook/useLayoutUsuario'

export const userLayout = () => {

const {isLoading,state} = useLayoutUsuario();

  return (
    <>
      <Box display={"flex"} justifyContent={"end"} pt={"10px"} >

        <TextField
          id="outlined-basic"
          size='small'
          placeholder='Buscar...'
          sx={{ width: "400px" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          label="Buscar..." variant="outlined" />
        <Button sx={{ ml: "20px" }} variant="text" onClick={handleClickDialogOpen} > <Add sx={{ mr: "8px" }} />Agregar usuario</Button>
        <Button variant="text" > <HistoryIcon sx={{ mr: "8px" }} />Historial</Button>
      </Box>
      <Box m={"10px"} mt={"25px"}>
        {state == null ?
          <CircularProgress color="inherit" />
          :
          <TableUsuario
            onDelete={(dataAction) => {
              if (dataAction.action != ActionUser.Default) {
                dataUserSelect.current = (dataAction.userData)
                actionUser(dataAction.action)
              }
            }} />}
      </Box>
    </>
  )
}
