import React from "react";
import { Link } from "react-router-dom";
import ctg1 from "./images/ladies.jpg";
import ctg2 from "./images/mens.jpg";
import ctg3 from "./images/kids.jpg";
import ctg4 from "./images/home.jpg";

export default function Categories(){
    return (
        <div className="categories">          
            <nav className="category-images">
                <Link to="/shop"><img src={ctg1}/></Link>
                <Link to="/shop"><img src={ctg2} /></Link>
                <Link to="/shop"><img src={ctg3} /></Link>
                <Link to="/shop"><img src={ctg4} /></Link>
            </nav>
            
            <div className="sale-page">
            <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-pink">
                <div class="col-md-6 p-lg-5 mx-auto my-5">
                    <h1 class="display-3 fw-bold">SUMMER SALE</h1>
                    <h3 class="fw-normal text-muted mb-3">#SUMMERCOLLECTIONSALE 2023</h3>
                    <div class="d-flex gap-3 justify-content-center lead fw-normal">          
                    <Link to="/deals"><button class="btn btn-outline-success" type="submit">SHOP NOW</button></Link>
                    </div>
                </div>
                <div class="product-device shadow-sm d-none d-md-block">
                    <h1></h1>
                </div>
                <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>
        </div>       
        </div>
    )
}