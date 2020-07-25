import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fab from '@material-ui/core/Fab';
import MoreIcon from '@material-ui/icons/More';
import Tooltip from '@material-ui/core/Tooltip';
import '../style.css';

export default function TagMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Tooltip title="Special Pages">
        <Fab onClick={handleClick} size="small">
          <MoreIcon />
        </Fab>
      </Tooltip>
      <Menu
        id="tag-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Combat</MenuItem>
        <MenuItem onClick={handleClose}>Explore</MenuItem>
        <MenuItem onClick={handleClose}>Social</MenuItem>
      </Menu>
    </div>
  );
}