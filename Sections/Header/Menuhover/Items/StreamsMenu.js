import IconButton from '@mui/material/IconButton';
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';



const ITEM_HEIGHT = 48;

export default function StreamMenu({ options, Icon, MenuList }) {
    const [stream, setStream] = React.useState(null);
    const open = Boolean(stream);
    const handleClick = (event) => {
        setStream(event.currentTarget);
    };
    const handleClose = () => {
        setStream(null);
    };


    return (
        <div>
            <IconButton
                aria-label="more"
                id="Mega-menu"
                aria-controls={open ? 'sub-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                onMouseEnter={handleClick}
                sx={{
                    display: "grid",
                    justifyItems: 'center',
                    marginRight:'.5em',
                }}

            >
                {Icon}
                <Typography  > {MenuList}  </Typography>
            </IconButton>

            <Menu
                id="sub-menu"
                MenuListProps={{
                    'aria-labelledby': 'Mega-menu',
                }}
                anchorEl={stream}
                open={open}
                onClose={handleClose}
                // onMouseOut={handleClose}
                onMouseLeave={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '50ch',
                    },
                }}
            >
                {options.map((option, i) => (
                    <MenuItem
                        key={i}
                        //   selected={i[0]} 
                        onClick={handleClose}
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
