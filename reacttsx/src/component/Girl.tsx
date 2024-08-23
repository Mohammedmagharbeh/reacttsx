import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

interface Watch {
  id: number;
  name: string;
  price: string;
  details?: string; // جعل هذا الحقل اختياريًا لأن ليس كل العناصر تحتوي عليه
  description?: string; // جعل هذا الحقل اختياريًا لأن ليس كل العناصر تحتوي عليه
  imageUrl: string;
}

const watches: Watch[] = [
  {
    id: 10,
    name: 'HUGO BOSS',
    price: '150jd',
    details: 'waterproof',
    description: 'كستك جلد',
    imageUrl: '/hoho1.jpg',
  },
  {
    id: 11,
    name: 'HUGO BOSS',
    price: '140JD',
    imageUrl: '/qoqo2.webp',
  },
  {
    id: 12,
    name: 'HUGO BOSS',
    price: '100jd',
    imageUrl: './hoho8.webp',
  },
  {
    id: 13,
    name: 'HUGO BOSS',
    price: '110jd',
    imageUrl: '/hoho11.jpg',
  },
  {
    id: 14,
    name: 'CURREN WATCH',
    price: '15jd',
    imageUrl: '/coco2.jpg',
  },
  {
    id: 15,
    name: 'CURREN WATCH',
    price: '20JD',
    imageUrl: '/coco10.jpg',
  },
];

interface WatchCardProps {
  watch: Watch;
}

const WatchCard: React.FC<WatchCardProps> = ({ watch }) => (
  <Card>
    <Link to={`/product/${watch.id}`} style={{ textDecoration: 'none' }}>
      <CardMedia
        component="img"
        alt={watch.name}
        height="300"
        image={watch.imageUrl}
        title={watch.name}
        style={{ cursor: 'pointer' }}
      />
    </Link>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {watch.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {watch.price}
      </Typography>
    </CardContent>
  </Card>
);

const WatchGrid: React.FC = () => (
  <Grid container spacing={3}>
    {watches.map((watch) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={watch.id}>
        <WatchCard watch={watch} />
      </Grid>
    ))}
  </Grid>
);

const Girl: React.FC = () => {
  return (
    <div style={{ padding: 20 }}>

      <WatchGrid />
    </div>
  );
};

export default Girl;
