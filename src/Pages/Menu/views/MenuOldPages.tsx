import { useState, useEffect, useContext } from 'react';
import { MenuOptionContext } from '../context/menuOptionContext';

export const MenuOldPages = () => {

    const { pathSelected } = useContext(MenuOptionContext);



    console.log("option v1" + localStorage.getItem('APP_PROVEEDOR_MENU_V01')!)
    return (
        <iframe
            id='frmOpOld'
            style={{
                width: '100%',
                padding: 0,
                margin: 0,
                height: 'calc(100vh - 84px)',
                border: 0,
            }}
            src={`/v1/Views/${(pathSelected != "" ? pathSelected : localStorage.getItem('APP_PROVEEDOR_MENU_V01')!).replace('../', '')}`}
        ></iframe>
    )
}


export default MenuOldPages;
