import React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import './CartWidget.css'; 

const CartWidget = ({ itemCount }) => {
  return (
    <div className="cart-widget">
      <IconButton color="inherit">
        <Badge badgeContent={itemCount} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </div>
  );
};

export default CartWidget;
