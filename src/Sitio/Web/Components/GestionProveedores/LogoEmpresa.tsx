import { Box } from '@mui/material';
import '../../Styles/App.css'
import reactLogo from './../../../../assets/react.svg'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';


export const LogoEmpresa = () => {

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Box style={{ cursor: "pointer", padding: "0px" }} display={"flex"} className="container"  alignItems={"center"} justifyContent={"center"} width={"30%"}>
                    <Box style={{ width: "100%", borderRadius: "4px" }} display={"flex"} alignItems={"center"} justifyContent={"center"}  >
                        <img id="logoTercero" className="m-2 image" style={{ width: "150px" }} src={reactLogo}></img>
                        <div className="overlay d-flex justify-content-center">
                            <a href="#" className="icon">
                                <AddAPhotoIcon id="newLogo" style={{ fontSize: "75px", color: "#00000047", marginBottom: "15px" }} />
                            </a>
                        </div>
                    </Box>
                </Box>
            </div>

        </>
    );
}