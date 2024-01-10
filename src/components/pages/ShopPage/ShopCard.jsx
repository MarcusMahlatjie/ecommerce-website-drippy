import * as React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ShopCard({title, img, description, price, sale, saleprice}){
    let saleText;
    let originalPrice;
    if (sale === "yes")
    {
        saleText = "SALE";
        originalPrice = price;
        price = saleprice;
    }

    const styles = {
        media: {
          height: 0,
          paddingTop: '56.25%', // 16:9,
          marginTop:'30'
        }
    };

    return(     
        <Card sx={{ maxWidth: 300 }}>
            {saleText && <div className="card-badge"><h4>{saleText}</h4></div>}
            
            <CardMedia>
                <img src={img}/>
            </CardMedia>

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {title}
                </Typography>
                <Typography className="card-discount" gutterBottom variant="h8" component="div">
                    R{price}.00
                    {saleText && <p className="card-saleprice">R{originalPrice}.00</p>}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to cart</Button>
                <Button size="small">Share</Button>
            </CardActions>
        </Card> 
    )
}              
             