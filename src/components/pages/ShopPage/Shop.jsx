import * as React from "react";
import { Row } from "react-bootstrap";
import ShopCard from './ShopCard';
import Data from "./data";

export default function Shop(){

    return (
        <div className="shop">
            <h1 className="shop-heading">Welcome to our catalogue</h1>
            <p className="shop-tag">Shop a range of authentic and quality 
                clothing all from your mobile device</p>

            <div className="card-container">       
                <Row>
                    {           
                    Data.map((details, index) => {
                        return (
                            <ShopCard
                                key={index}
                                {...details}
                                />
                            )
                        })
                    }
                </Row>                    
            </div>     
        </div>
    )
}