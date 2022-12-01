import { Add } from '@mui/icons-material'
import { Box, TextField, InputAdornment, Button, CircularProgress, TextFieldProps } from '@mui/material'
import TableUsuario from '../components/TableUsuario/view/TableUsuario'
import { ActionUser } from '../model/usuarioDTO'
import SearchIcon from '@mui/icons-material/Search';
import HistoryIcon from '@mui/icons-material/History';
import { useLayoutUsuario } from '../hook/useLayoutUsuario'
import { SkeletonDinamic } from '../../../../../SharedComponents/Skeleton/view/SkeletonDynamic'
import { FrmNewUser, typeModal } from '../components/FrmNewUser/view/FrmNewUser'
import { useUsuario } from '../hook/useUsuario'
import { SinInformacion } from '../../../../GestionProveedores/Components/ImgComponents/View/SinInformacion'
import { useRef, useState } from 'react';
import { HistorialComponent } from '../../../../../SharedComponents/Historial/View/HistorialComponent';
import { TiposAuditoria } from '../../../../../SharedComponents/Historial/Model/Historial-Model';
import { HeaderComponent } from '../../../../../SharedComponents/Header';
type tipoModal =
  { type: 'add' } | { type: 'edit' }

export const UserLayout = () => {

  const { state } = useLayoutUsuario();
  const typing = useRef<TextFieldProps>(null);

  const { isLoading, dataUserSelect, openD, tipoModal, filter, openHistorial,
    actionUser, newUser, setOpen, handleClickDialogOpenAdd, handleChangeBuscar, OcultarHistorial, MostrarHistorial } = useUsuario();





  return (
    <Box m={1} sx={{ background: 'white', height: 'calc(100vh - 150px)' }}>
      <HeaderComponent title={`${openHistorial ? 'Historial' : ''} Administración de usuarios`} />
      {

        !openHistorial
          ?
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
                  name="Buscar"
                  sx={{ width: "400px" }}
                  inputRef={typing}
                  onChange={handleChangeBuscar}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  label="Buscar..." variant="outlined" />
                <Button sx={{ ml: "20px" }} variant="text" onClick={handleClickDialogOpenAdd} > <Add sx={{ mr: "8px" }} />Agregar usuario</Button>
                <Button variant="text" onClick={MostrarHistorial}> <HistoryIcon sx={{ mr: "8px" }} />Historial</Button>
              </Box>
              {
                state?.length != 0 ?
                  <Box m={"10px"} mt={"25px"} sx={{ overflow: 'auto', maxHeight: 'calc(100vh - 17rem)' }}>
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
                        }}
                        filter={filter as string}
                      />
                    }
                  </Box>
                  :
                  <Box mt={2} justifyContent={'center'} display={'flex'}>
                    <SinInformacion />
                  </Box>
              }
            </>
          :
          <HistorialComponent
            _tipoAuditoria={TiposAuditoria.AdminUsuarios}
            onClose={(estado) => {
              OcultarHistorial();
            }}
            idDocumento={dataUserSelect.current?.id}
          />
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
    </Box>
  )
}
