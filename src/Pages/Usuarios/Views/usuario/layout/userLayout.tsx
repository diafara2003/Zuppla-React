import { Add } from '@mui/icons-material'
import { Box, TextField, InputAdornment, Button, CircularProgress } from '@mui/material'
import TableUsuario from '../components/TableUsuario/view/TableUsuario'
import { ActionUser } from '../model/usuarioDTO'
import SearchIcon from '@mui/icons-material/Search';
import HistoryIcon from '@mui/icons-material/History';
import { useLayoutUsuario } from '../hook/useLayoutUsuario'
import { SkeletonDinamic } from '../../../../../SharedComponents/Skeleton/view/SkeletonDynamic'
import { FrmNewUser, typeModal } from '../components/FrmNewUser/view/FrmNewUser'
import { useUsuario } from '../hook/useUsuario'
import { SinInformacion } from '../../../../GestionProveedores/Components/ImgComponents/View/SinInformacion'
type tipoModal =
  { type: 'add' } | { type: 'edit' }

export const UserLayout = () => {

  const { state } = useLayoutUsuario();

  const { isLoading, dataUserSelect, openD, tipoModal,
    actionUser, newUser, setOpen, handleClickDialogOpenAdd } = useUsuario();

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
    </>
  )
}
