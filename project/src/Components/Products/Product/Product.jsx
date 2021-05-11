import React from 'react';
import {Card , CardMedia , CardContent ,CardActions,IconButton,Typography} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import { borders } from '@material-ui/system';
import useStyles from './Style';
import shose from '../../../assets/shosee.jpg';
const Product = (props) =>
{
    const classes = useStyles();
    
    return (
        <Card className={classes.root} >
            <CardMedia className={classes.media} image={shose} />
            <CardContent className={classes.CardContent}>
                <div>
                    <Typography variant="h5" gutterBottom className={classes.font}>  
                      {props.product.name}
                    </Typography>
                    <Typography variant="body2" color='textSecondary'>
                    {props.product.description}
                    </Typography>
                </div>
                <Typography variant="h5" align="right" className={classes.font}> 
                      {props.product.price}
                </Typography>
                
            </CardContent>
            <CardActions className={classes.cardActions} disableSpacing>
                <IconButton aria-label='Add to Cart'>
                  <AddShoppingCart />
                </IconButton>
            </CardActions>

        </Card>
        
    )

}
export default Product;