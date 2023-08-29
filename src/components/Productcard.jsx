import * as React from 'react';
import '../color.css'
import image from '../product.jpg'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import VisibilitySharpIcon from '@mui/icons-material/VisibilitySharp';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
//import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
//import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 500}}>
      <CardMedia 
        component="img"
        alt="Butterfly"
        height="500"
        img src={image}
        /*image="../product.jpg"*/
      />

      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          Home Decore
        </Typography>
        <Typography variant="body2" color="text.secondary" >
         Home Decor Butterfly with Sticking Pad | DIY Decorative Wall Art Crafts for Home Decor 
        - These butterfly wall stickers look 2D on the package, but you have to fold the wings slightly to create a 3D effect, just peel and stick, then shape yourself;
         Please clean the smooth surface before sticking them on.
        </Typography >
        <Typography paragraph > 
        <h1> {<CurrencyRupeeIcon />}400</h1>
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" startIcon={<AddShoppingCartIcon />}>Add to Cart</Button>
        <Button size="small" startIcon={<VisibilitySharpIcon />}>View</Button>
        {/*<Button  size="small" startIcon={<ThumbUpOutlinedIcon />}>like</Button>*/}
      </CardActions>
    </Card>
  );
}
