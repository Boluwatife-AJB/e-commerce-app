import React from 'react';
import { Grid } from '@material-ui/core';
import cap from '../../assets/cap.jpg';
import macbook from '../../assets/macbook.jpg';
import runningShoes from '../../assets/runningShoes.jpg';
import sneakers from '../../assets/sneakers.jpg';
import tShirt from '../../assets/tShirt.jpg';
import wristwatch from '../../assets/wristwatch.jpg';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
  {
    id: 1,
    name: 'Shoes',
    description: 'Running Shoes',
    price: '₦5',
    image: sneakers,
  },
  {
    id: 2,
    name: 'Macbook',
    description: 'Apple Macbook',
    price: '₦40',
    image: macbook,
  },
  {
    id: 3,
    name: 'T-Shirt',
    description: 'YHWH Shirt',
    price: '₦7',
    image: tShirt,
  },
  { id: 4, name: 'Cap', description: 'Face Cap', price: '₦2', image: cap },
  {
    id: 5,
    name: 'WristWatch',
    description: 'Male Wristwatch',
    price: '₦4.29',
    image: wristwatch,
  },
  {
    id: 6,
    name: 'Sneakers',
    description: 'Dope High Tops',
    price: '₦15.29',
    image: runningShoes,
  },
];

const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
