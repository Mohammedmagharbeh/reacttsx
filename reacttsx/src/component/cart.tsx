import React from 'react';
import { Card, CardContent, Typography, Grid, Box, CardMedia } from '@mui/material';
import CheckoutForm from './CheckoutForm'; // تأكد من مسار الاستيراد

interface CartProps {
  cartItems: {
    title: string;
    image: string;
    description: string;
    price: string;
  }[];
}

const Cart: React.FC<CartProps> = ({ cartItems }) => {
  const totalItems = cartItems.length;

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" component="div" gutterBottom>
        
      </Typography>

      {totalItems === 0 ? (
        <Typography variant="body1" color="text.secondary">
          {/* عرض GIF هنا */}
          <img src='https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif' alt="Loading" />
        </Typography>
      ) : (
        <>
          <Grid container spacing={2}>
            {cartItems.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    alt={item.title}
                    height=""
                    image={item.image}
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ marginTop: 2 }}>
            <Typography variant="h6" component="div" gutterBottom>
              
            </Typography>
            <CheckoutForm totalItems={totalItems} />
          </Box>
        </>
      )}
    </Box>
  );
};

export default Cart;
