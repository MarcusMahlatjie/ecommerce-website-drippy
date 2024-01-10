import * as React from "react";
import { Row } from "react-bootstrap";
import DealsCard from './DealsCard';
import SalesData from "./saledata";

export default function Deals(){
    return(
        <div className="deals-page">
            <div className="sale-page">
                <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-pink">
                    <img src="/src/components/pages/DealsPage/images/discount.svg"  className="discount-image"/>
                    <div class="col-md-6 p-lg-5 mx-auto my-5">
                        <h1 class="display-3 fw-bold sale-heading">SUMMER SALE</h1>
                        <div class="d-flex gap-3 justify-content-center lead fw-normal">          
                        <p className="sale-description">Take a look at our summer sale
                        and find the perfect piece for your home! Limited time offer.</p>
                        </div>
                    </div>
                    <div class="product-device shadow-sm d-none d-md-block">
                        <h1></h1>
                    </div>
                    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                </div>
            </div>

            <div className="card-container deal-cards">       
                <Row>
                    {           
                    SalesData.map((details, index) => {
                        return (
                            <DealsCard
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