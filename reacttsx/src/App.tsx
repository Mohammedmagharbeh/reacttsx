import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Box, Typography, IconButton, Tooltip, Badge } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Home from './component/home';
import MEN from './component/men';
import Girl from './component/Girl';
import Cart from './component/cart';
import ProductDetails from './component/product.men'; // تأكد من المسار الصحيح
import './App.css';

interface Product {
  
  title: string;
  image: string;
  description: string;
  price: string;
}

const App = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleStoreLocationClick = () => {
    const storeLocationUrl = 'https://maps.app.goo.gl/uVisWzRJk6edMVDm7';
    window.open(storeLocationUrl, '_blank');
  };

  return (
    <BrowserRouter>
      <AppBar position="static" color="default">
        <Toolbar sx={{ position: 'relative', justifyContent: 'center', height: 120, backgroundColor: '#0b3d91' }}>
          <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)' }}>
            <Typography className='appbar-title'
              variant="h6"
              sx={{
                flexGrow: 1,
                marginTop:2,
                fontFamily: 'Amiri, serif',
                fontWeight: 500,
                lineHeight: 1.6,
                color: 'white',
                padding: '20px',
                borderRadius: '10px',
                textAlign: 'inherit',
                fontSize: 'xx-large'
                
              }}
            >
              <b><i>Eternity Watches</i></b>
            </Typography>
          </Box>

          <Box sx={{ position: 'absolute', right: 20 }}>
            <Tooltip title="موقع المتجر">
              <IconButton color="inherit" onClick={handleStoreLocationClick}>
                <LocationOnIcon />
              </IconButton>
            </Tooltip>
            <IconButton color="inherit" component={Link} to="/cart">
              <Badge badgeContent={cart.length} color="secondary">
                <ShoppingCartIcon className="bounce-icon" />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<MEN />} />
        <Route path="/Girl" element={<Girl />} />
        <Route path="/product/:productId" element={<ProductDetails addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cart} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
