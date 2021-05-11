import react from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './style';
//import css from './Title.module.css';
import CssStyle from './style.module.css';
// fack products
const products = [
{id:1,name:'Shose',description:'Sport shose',price:'$10',img:'https://www.google.com/search?q=shoes+jpg&tbm=isch&ved=2ahUKEwiBkeXmtqnwAhUN86QKHYyrBU4Q2-cCegQIABAA&oq=shoes+jp&gs_lcp=CgNpbWcQARgAMgIIADICCAAyAggAMgYIABAFEB4yBggAEAUQHjIGCAAQBRAeMgYIABAFEB4yBggAEAUQHjIGCAAQBRAeMgYIABAFEB46BwgAELEDEEM6BAgAEEM6BQgAELEDUIGJA1jNjgNgpJgDaABwAHgAgAHXAYgBpASSAQUwLjIuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=QMiNYIHxGo3mkwWM15bwBA&rlz=1C1CHBD_enSY904SY904#imgrc=Fp3w1vQ8tumlnM'},
{id:2,name:'Macbook',description:'Apple macbook',price:'$200',img:'https://www.google.com/search?q=mackbook+air&tbm=isch&ved=2ahUKEwjx6NSs46DwAhVBgM4BHWzaCUkQ2-cCegQIABAA&oq=mackb&gs_lcp=CgNpbWcQARgCMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoHCCMQ6gIQJzoECCMQJzoECAAQQzoHCAAQsQMQQzoFCAAQsQNQyuUBWLmdAmCgpAJoAnAAeAOAAYEHiAH_GpIBCTAuNS41LTIuMpgBAKABAaoBC2d3cy13aXotaW1nsAEKwAEB&sclient=img&ei=AD-JYPHoHcGAur4P7LSnyAQ&rlz=1C1CHBD_enSY904SY904#imgrc=N3Gj-t9i2vSQHM'}
];

const Products = () => {

const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <div className={CssStyle.h1} >
                <h1><span className={CssStyle.span}>Featured products</span></h1>
            </div>
            <Grid container justify="center" spacing={4}>
               {products.map(product => (
                   <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                       <Product product={product}/>
                   </Grid>    
               ))}
            </Grid>
            
        </main>
    )
}

export default Products
