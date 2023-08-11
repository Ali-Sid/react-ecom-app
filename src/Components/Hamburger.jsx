import { useState } from 'react';
import { IconButton, Drawer, List, ListItem, ListItemText, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { LogoutOutlined } from '@mui/icons-material';


const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div style={{position: "absolute", top: "10px", right: "10px"}}>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleMenu}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={isOpen} onClose={closeMenu} PaperProps={{style: {width: "300px", backgroundColor: "#f1f1f1"}}}>
        <CloseIcon onClick={closeMenu} style={{cursor: "pointer", marginTop: "10px", marginLeft: "10px"}}/>
        <List>
          <ListItem Button component="a" href="/" onClick={closeMenu} style={{color: "#0a0a0a"}}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem Button component="a" href="/catalogue" onClick={closeMenu} style={{color: "#0a0a0a"}}>
            <ListItemText primary="Shop" />
          </ListItem>
          <ListItem Button component="a" href="/login" onClick={closeMenu} style={{color: "#0a0a0a"}}>
            <ListItemText primary="Logout" />
            <Link href="/login" style={{ color: "#0a0a0a" }}>
              <LogoutOutlined />
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default HamburgerMenu;
