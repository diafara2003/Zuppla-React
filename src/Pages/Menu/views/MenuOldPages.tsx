
export const MenuOldPages = () => {
    const item = localStorage.getItem('APP_PROVEEDOR_MENU_V01') ?? "";
    debugger;
    return (
        <div>
            <iframe
                id='frmOpOld'
                style={{
                    width: '100%',
                    padding: 0,
                    margin: 0,
                    height: 'calc(100vh - 84px)',
                    border: 0,
                }}
                src={item}
            ></iframe>
        </div>
    )
}


export default MenuOldPages;
