import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";




export interface NavigationModel {
    path: string;
    texto:string;
    Icono:()=> JSX.Element
}
