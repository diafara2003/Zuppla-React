import { ButtonGroup, Button, Popper, Grow, Paper, ClickAwayListener, MenuList, MenuItem, Skeleton } from '@mui/material';
import React from 'react'
import { useConstructoras } from '../Hook/useConstructoras';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import { ConstructoraDTO } from '../Model/ModelConstructoras';
const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];


type props = {
    selected: (value: ConstructoraDTO) => void
}

export const SelectorConstructora = ({ selected }: props) => {
    const { dataConst, isLoading } = useConstructoras();

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleClick = () => {        
        selected(dataConst[selectedIndex]);
    };

    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLLIElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
        setOpen(false);
        selected(dataConst[index]);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            {
                isLoading ? <Skeleton></Skeleton> :
                    <>
                        <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
                            <Button startIcon={<MapsHomeWorkOutlinedIcon />} onClick={handleClick}>{dataConst![selectedIndex].nombre}</Button>
                            <Button
                                size="small"
                                aria-controls={open ? 'split-button-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-label=""
                                aria-haspopup="menu"
                                onClick={handleToggle}
                            >
                                <ArrowDropDownIcon />
                            </Button>
                        </ButtonGroup>
                        <Popper
                            sx={{
                                zIndex: 1,
                            }}
                            open={open}
                            anchorEl={anchorRef.current}
                            role={undefined}
                            transition
                            disablePortal
                        >
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{
                                        transformOrigin:
                                            placement === 'bottom' ? 'center top' : 'center bottom',
                                    }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList id="split-button-menu" autoFocusItem>
                                                {dataConst!.map((option, index) => (
                                                    <MenuItem
                                                        key={option.id}
                                                        selected={index === selectedIndex}
                                                        onClick={(event) => handleMenuItemClick(event, index)}
                                                    >
                                                        {option.nombre}
                                                    </MenuItem>
                                                ))}
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </>
            }

        </>
    )
}
