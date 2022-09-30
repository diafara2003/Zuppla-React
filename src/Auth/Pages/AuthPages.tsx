
import { NavLink } from 'react-router-dom'

export const AuthPages = () => {
    return (
        <>
          
            <NavLink
                className="nav-item nav-link"
                to="/login">
                login
            </NavLink>
            <NavLink
                className="nav-item nav-link"
                to="/home">
                home
            </NavLink>
            <NavLink
                className="nav-item nav-link"
                to="/gestionproveedor">
                gestionproveedor
            </NavLink>

            
        </>
    )
}
