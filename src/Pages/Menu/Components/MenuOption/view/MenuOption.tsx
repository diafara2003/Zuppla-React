import { Button, Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react'
import { ExpandMore } from '@mui/icons-material';
import { Box } from '@mui/system';
import { useMenu } from '../hook/useMenu';

export const MenuOption = () => {

  const { pages, isLoading, handleNavigate } = useMenu();


  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };
  const handleClose = () => {
    setAnchorEl(null);
  };




  return (

    <>


      {!isLoading && pages != null && pages.map(({ descripcion, ubicacion, tieneHijos, mencodigo }) => (


        <Box key={`box${mencodigo}`}>
          <Button
            key={mencodigo}
            id={`id${mencodigo}`}
            aria-controls={`id${mencodigo}`}
            aria-haspopup="true"
            aria-expanded={false}
            endIcon={tieneHijos > 0 ? <ExpandMore color="primary" /> : null}
            onClick={tieneHijos > 0 ? () => { } : () => { handleNavigate(ubicacion) }}
            sx={{ color: '#003972' }}
          >
            <Typography
              // fontSize="0.75rem"
              variant="body2" noWrap={true}>{descripcion}</Typography>
            {/* <Link to={ubicacion}>{descripcion}</Link> */}
          </Button>
          {tieneHijos == 0 ? null :
            <Menu
              key={`menu${mencodigo}`}
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >

            </Menu>
          }

        </Box>

      ))}
    </>
  )
}
