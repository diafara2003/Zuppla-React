import { IconButton, Avatar, Box } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

export const UserMenu = () => {

    const color = "#003972";
    const stringAvatar = (name: string) => {
        return {
            sx: { color, background: '#ebebeb' },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }


    return (
        <Box display={'flex'} alignItems={"center"} >
            <NotificationsActiveIcon sx={{ marginRight: '10px' }} />
            <Avatar {...stringAvatar('Kent Dodds')} />
        </Box>
    )
}
