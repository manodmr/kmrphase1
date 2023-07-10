import IconButton from '@mui/material/IconButton';
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';




const ITEM_HEIGHT = 48;

export default function MenuItems({Icon, MenuList , options, state, onclick, onclose}) {
//   const [  anchorEl , setAnchorEl] = useState(null);
  const open = Boolean(state);
 

  return (
    <div>
      <IconButton
        aria-label="more"
        id="Mega-menu"
        aria-controls={open ? 'sub-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={onclick}
        onMouseEnter={onclick}
        sx={{ 
            display:"grid",
            justifyItems:'center'
        }}

      >
       {Icon}
       <Typography > {MenuList}  </Typography>
      </IconButton>

      <Menu
        id="sub-menu"
        MenuListProps={{
          'aria-labelledby': 'Mega-menu',
        }}
        anchorEl={state}
        open={open}
        onClose={onclose}
        onMouseLeave={onclose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '50ch',
          },
        }}
      >
        {options.map((option,i) => (
          <MenuItem className="hashtag" 
          key={i} 
        //   selected={i[0]} 
          onClick={onclose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
