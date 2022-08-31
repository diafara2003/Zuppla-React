import { useState } from 'react'

import { styled } from '@mui/material/styles';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, Stack, Tab, Tabs } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

function App() {
 
  const [value, setValue] = useState(0); 
  const Selected = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  }
  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',

    color: theme.palette.text.secondary,
  }));

  return (

    <>

      <Tabs value={value} onChange={Selected} aria-label="icon label tabs example">
        <Tab icon={<PhoneIcon />} label="RECENTS" />
        <Tab icon={<FavoriteIcon />} label="FAVORITES" />
        <Tab icon={<PersonPinIcon />} label="NEARBY" />
      </Tabs>
    </>


  )
}

export default App
