// ProductDetails.tsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Button, Grid, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import '../App.css';

interface Product {
  id: number;
  image: string;
  images: string[];
  title: string;
  description: string;
  price: string;
  details: string;
}

const products: Product[] = [
  
    {
      id: 1,
      image: '/moh1.avif',
      images: ['/curen7.jpg', '/moh2.jpg', '/curen6.jpg', '/moh1.avif'], // أضف الصور الإضافية هنا
      title: 'CURREN WATCH',
      description: 'ساعة كيورين كستك جلد',
      price: '16jd',
      details: 'waterproof',
    },
    {
      id: 2,
      image: '/curemet1.webp',
      images: ['/gold1.jpeg', '/gold2.jpeg', '/gold3.jpeg', '/curemet1.webp'], // أضف الصور الإضافية هنا
      title: 'CURREN WATCH',
      description: 'ساعة كيورين كستك معدن',
      price: '18jd',
      details: 'waterproof',
    },
    {
      id: 3,
      image: '/bab1.jpg',
      images: ['/bab2.jpg', '/bab3.webp', '/bab1.jpg'], // أضف الصور الإضافية هنا
      title: 'CURREN WATCH',
      description: 'ساعة كيورين كستك معدن',
      price: '18jd',
      details: 'waterproof',
    },
    {
      id: 5,
      image: '/men3.jpg',
      images: ['/bobo2.jpg', '/bobo3.jpg', '/men3.jpg'], // أضف الصور الإضافية هنا
      title: 'CURREN WATCH',
      description: 'ساعة كيورين كستك معدن',
      price: '380jd',
      details: 'waterproof',
    },
    {
      id: 6,
      image: '/men4.jpg',
      images: ['/rub1.webp', '/rub2.webp', '/men4.jpg'], // أضف الصور الإضافية هنا
      title: 'CURREN WATCH',
      description: 'ساعة كيورين كستك معدن',
      price: '400jd',
      details: 'waterproof',
    },
    {
      id: 7,
      image: '/boss7.webp',
      images: ['/gogo2.webp', '/gogo4.webp', '/boss7.webp'], // أضف الصور الإضافية هنا
      title: 'CURREN WATCH',
      description: 'ساعة كيورين كستك معدن',
      price: '420jd',
      details: 'waterproof',
    },
    {
      id: 10,
      // ساعات بنات
      image: '/hoho1.jpg',
      images: ['/hoho5.webp', '/hoho4.jpg', '/hoho1.jpg'], // أضف الصور الإضافية هنا
      title: 'CURREN WATCH',
      description: 'ساعة هوجو بوس كستك جلد',
      price: '150jd',
      details: 'waterproof',
    },
    {
      id: 11,
      // ساعات بنات
      image: '/qoqo2.webp',
      images: ['/qoqo4.webp', '/qoqo5.webp', '/qoqo2.webp'], // أضف الصور الإضافية هنا
      title: 'CURREN WATCH',
      description: 'ساعة هوجو بوس كستك معدن',
      price: '140jd',
      details: 'waterproof',
    },
    {
      id: 12,
      // ساعات بنات
      image: '/hoho8.webp',
      images: ['/hoho9.avif', '/hoho10.jpg', '/hoho8.webp'], // أضف الصور الإضافية هنا
      title: 'CURREN WATCH',
      description: 'ساعة هوجو بوس كستك ستانلس',
      price: '100jd',
      details: 'waterproof',
    },
    {
      id: 14,
      // ساعات بنات
      image: '/coco2.jpg',
      images: ['/coco4.webp', '/coco5.jpg', '/coco2.jpg'], // أضف الصور الإضافية هنا
      title: 'CURREN WATCH',
      description: 'ساعة كيورين كستك جلد',
      price: '15jd',
      details: 'waterproof',
    },
    {
      id: 15,
      // ساعات بنات
      image: '/coco10.jpg',
      images: ['/coco11.webp'], // أضف الصور الإضافية هنا
      title: 'CURREN WATCH',
      description: 'ساعة كيورين كستك جلد برسم الورد',
      price: '20jd',
      details: 'waterproof',
    },
  ];
  
  // البيانات المخصصة للمنتجات


interface ProductDetailsProps {
  addToCart: (product: Product) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ addToCart }) => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find(p => p.id === parseInt(productId || '', 10));

  const [currentImage, setCurrentImage] = useState<string>(product?.image || '');

  if (!product) {
    return (
      <div>
        <img  id='koko' src='https://media.tenor.com/d0Wx47yAe9cAAAAi/cry-sad.gif' alt='Not found' />
        <img id='lolo' src='https://media.tenor.com/WS9TNssQALkAAAAM/roughneck-rabbits-roughneck.gif' alt='Not found' />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      ...product,
      image: currentImage
    });
  };

  return (
    <Card sx={{ display: 'flex', maxWidth: 900, marginLeft: 10 }}>
      <Box sx={{ width: '70%' }}>
        <CardMedia
          component="img"
          alt={product.title}
          height="500"
          image={currentImage}
          title={product.title}
        />
      </Box>
      <Box sx={{ width: '30%', padding: 2, overflowY: 'auto'}}>
        <Grid container direction="column" spacing={2}>
          {product.images.map((img, index) => (
            <Grid item key={index}>
              <CardMedia
                component="img"
                alt={`Thumbnail ${index}`}
                image={img}
                sx={{ 
                  width: '100%',
                  height: 'auto',
                  cursor: 'pointer',
                  border: '1px solid black',
                  borderRadius: '4px',
                  marginBottom: 1,
                  borderColor:'red'


                }}
                onClick={() => setCurrentImage(img)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ padding: 2 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.details}
          </Typography>
          <Button sx={{ color: '#f5c518', backgroundColor: '#0b3d91' }} size="small" color="primary" onClick={handleAddToCart}>
            <ShoppingCartIcon  /> إضافة للسلة
          </Button>
        </CardContent>
      </Box>
    </Card>
  );
};

export default ProductDetails;
