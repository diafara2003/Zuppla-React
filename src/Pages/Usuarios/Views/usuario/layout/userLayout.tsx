import { Add } from '@mui/icons-material'
import { Box, TextField, InputAdornment, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material'
import React, { useState } from 'react'
import TableUsuario from '../components/view/TableUsuario'
import { ActionUser } from '../model/usuarioDTO'
import SearchIcon from '@mui/icons-material/Search';
import HistoryIcon from '@mui/icons-material/History';
import { useLayoutUsuario } from '../hook/useLayoutUsuario'
import { SkeletonDinamic } from '../../../../../SharedComponents/Skeleton/view/SkeletonDynamic'
import { AlertPortal } from '../../../../../SharedComponents/Alert/View/AlertPortal'
import { Eliminar } from '../../../../GestionProveedores/Components/ImgComponents/View/Eliminar'
import { FrmNewUser, typeModal } from '../components/view/FrmNewUser'
import { useUsuario } from '../hook/useUsuario'
import { SinInformacion } from '../../../../GestionProveedores/Components/ImgComponents/View/SinInformacion'
type tipoModal =
  { type: 'add' } | { type: 'edit' }

export const UserLayout = () => {

  const { state } = useLayoutUsuario();

  const { data, isLoading, dataUserSelect, openD, tipoModal,
    openDelete, actionUser, newUser, setOpen, handleClickDialogOpenAdd } = useUsuario();

  return (
    <>
      {
        isLoading ?
          <Box mt={6}>
            <SkeletonDinamic NoColumnas={1} NoFilas={4} Tipo={'table'} />
          </Box>
          :
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
              <Button sx={{ ml: "20px" }} variant="text" onClick={handleClickDialogOpenAdd} > <Add sx={{ mr: "8px" }} />Agregar usuario</Button>
              <Button variant="text" > <HistoryIcon sx={{ mr: "8px" }} />Historial</Button>
            </Box>
            {
              state?.length != 0 ?
                <Box m={"10px"} mt={"25px"}>
                  {state == null
                    ?
                    <CircularProgress color="inherit" />
                    :
                    <TableUsuario
                      onClick={(dataAction) => {
                        if (dataAction.action != ActionUser.Default) {
                          dataUserSelect.current = (dataAction.userData)
                          actionUser(dataAction.action)
                        }
                      }} />}
                </Box>
                :
                <Box mt={2} justifyContent={'center'} display={'flex'}>
                  <SinInformacion />
                </Box>
            }
          </>
      }
      {/* Dialog insercion - edicion */}
      {openD
        ?
        <FrmNewUser
          open={openD}
          tipo={tipoModal}
          editUser={dataUserSelect.current!}
          newUser={(dataUser) => {           
            newUser(dataUser);
          }}
          close={(close) => {
            setOpen(close);
          }} />
        :
        null}


      {/* Dialog de eliminacion */}
      {/* <Dialog
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"md"}
      >
        <DialogTitle id="alert-dialog-title" justifyContent={'center'} display={"flex"}>
          <Typography>  Eliminar usuario </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box justifyContent={'center'} display={"flex"}>
              <Eliminar />
            </Box>
            <Typography>¿Esta seguro que desea eliminar este usuario?</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={handleCloseDelete} >Cancelar</Button>
          <Button variant="outlined" color="error" onClick={handleDeleteUser} autoFocus >
            Eliminar
          </Button>
        </DialogActions>
      </Dialog> */}
    </>
  )
}
