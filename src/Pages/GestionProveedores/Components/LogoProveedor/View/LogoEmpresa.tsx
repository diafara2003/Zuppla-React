import { Box } from '@mui/material';

import reactLogo from '../../../../../assets/react.svg'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';


export const LogoEmpresa = () => {

    return (
        <>
            <Box style={{ display: 'flex', justifyContent: 'center' }}>
                <Box style={{ cursor: "pointer", padding: "0px" }} display={"flex"} className="container" >
                    <Box style={{ width: "100%", borderRadius: "4px" }} display={"flex"} alignItems={"center"} justifyContent={"center"}  >
                        <img id="logoTercero" className="image" style={{ width: "150px" }} src={reactLogo}></img>
                        <Box className="overlay">
                            <a href="#" className="icon">
                                <AddAPhotoIcon id="newLogo" style={{ fontSize: "75px", color: "#00000047", marginBottom: "15px" }} />
                            </a>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}