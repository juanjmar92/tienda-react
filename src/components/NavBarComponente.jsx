import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBarComponente.css';

const NavBarComponente = () => {
  
  const itemCount = 3;

  return (
    <AppBar position="static" className="navbar">
      <Toolbar className="toolbar">
        <Typography variant="h6" className="title">
          MyApp
        </Typography>
        <div className="nav-items">
          <Button color="inherit" className="button" component={Link} to="/">Home</Button>
          <Button color="inherit" className="button" component={Link} to="/about">producto1</Button>
          <Button color="inherit" className="button" component={Link} to="/contact">producto2</Button>
          <CartWidget itemCount={itemCount} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarComponente;
