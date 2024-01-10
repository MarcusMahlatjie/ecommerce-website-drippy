import * as React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function DealsCard({title, img, description, price, saleprice}){
    return(    
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia
                sx={{ height: 200 }}
                image= {img}
            />
             <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {title}
                </Typography>
                <Typography className="card-discount" gutterBottom variant="h8" component="div">
                    R{saleprice}.00<p className="card-saleprice" >R{price}.00</p>
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
             