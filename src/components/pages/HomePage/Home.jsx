import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import thumbnail1 from "./images/thumbnailjacket1.png";
import thumbnail2 from "./images/thumbnailjacket2.png";
import thumbnail3 from "./images/thumbnailjacket3.png";

export default function Home(){
    const [image, setImage] = useState("/src/components/pages/HomePage/images/thumbnailjacket1.png");
    return (
        <div className="page">
            <div className="hero-section">
                <section className="lhs">
                    <h1><b>Finding your perfect items</b></h1>
                    <p>Where comfort meets elegance, welcome to Drippy. We'd love to be your choice of style.</p>
                    <Link to="/shop"><a href="#"><button type="button" class="btn btn-secondary">SHOP NOW</button></a></Link>
                    <div className="shop-stats">
                        <h4><b>1,500+</b></h4>
                        <h4><b>500+</b></h4>
                        <h4><b>99,000+</b></h4>
                    </div>
                    <div className="shop-stats-details">
                        <p>Brands</p>
                        <p>Outlets</p>
                        <p>Customers</p>
                    </div>
                </section>

                <section className="rhs">
                    <div className="bg-image">                  
                        <img className="bg-image-thumbnail" src= {image} />
                        <div className="jacket-imgs">
                            <img 
                                className="icon-img" 
                                src={thumbnail1} 
                                alt=""
                                onClick={()=> setImage("/src/components/pages/HomePage/images/thumbnailjacket1.png")}
                            />
                            <img 
                                className="icon-img" 
                                src={thumbnail2}
                                alt=""
                                onClick={()=> setImage("/src/components/pages/HomePage/images/thumbnailjacket2.png")}
                            />
                            <img 
                                className="icon-img" 
                                src={thumbnail3}
                                alt=""
                                onClick={()=> setImage("/src/components/pages/HomePage/images/thumbnailjacket1.png")}
                            />
                        </div>
                    </div>
                </section>
            </div>

            <div className="sale-page">
            <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-pink">
                <div class="col-md-6 p-lg-5 mx-auto my-5">
                    <h1 class="display-3 fw-bold">SUMMER SALE</h1>
                    <h3 class="fw-normal text-muted mb-3">#SUMMERCOLLECTIONSALE 2023</h3>
                    <div class="d-flex gap-3 justify-content-center lead fw-normal">        
                    <Link to="/deals" ><button class="btn btn-outline-success" type="submit">SHOP NOW</button></Link>
                    </div>
                </div>
                <div class="product-device shadow-sm d-none d-md-block">
                    <h1></h1>
                </div>
                <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>
        </div>

        <div className="new-arrivals">
            <div class="container px-4 py-5" id="hanging-icons">
                <h2 class="pb-2 border-bottom"><b>New Arrivals</b></h2>
                <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div class="col d-flex align-items-start">
                    <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <img src="https://freesvg.org/img/Luminor.png" style={{height:"40px"}}/>
                    </div>
                    <div>
                    <h3 class="fs-2 text-body-emphasis">Watches</h3>
                    <p>
                        Discover timeless elegance and precision in our Watches Collection. 
                        From classic designs to cutting-edge technology, explore a curated 
                        selection of wristwatches that seamlessly blend style and functionality.
                    </p>
                    <Link to="/shop">
                        <a href="#" class="btn btn-outline-success">
                        Shop Now
                        </a>
                    </Link>
                    </div>
                </div>
                <div class="col d-flex align-items-start">
                    <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <img src="https://freesvg.org/img/1290325543.png" style={{height:"40px"}}/>   
                    </div>
                    <div>
                    <h3 class="fs-2 text-body-emphasis">Cosmetics</h3>
                    <p>
                        Indulge in the artistry of self-expression with our Cosmetics Section.
                        Dive into a spectrum of colors, textures, and innovative formulations that empower 
                        you to enhance your natural beauty. textures, and innovative formulations.
                    </p>
                    <Link to="/shop">
                        <a href="#" class="btn btn-outline-success">
                        Shop Now
                        </a>
                    </Link>
                    </div>
                </div>
                <div class="col d-flex align-items-start">
                    <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <img src="https://freesvg.org/img/Converse-Chucks.png" style={{height:"40px"}}/> 
                    </div>
                    <div>
                    <h3 class="fs-2 text-body-emphasis">Footwear</h3>
                    <p>
                        Step into a world of fashion and comfort with our Footwear Collection.
                        Explore a diverse range of shoes that combine style, durability, and 
                        functionality. Immerse yourself in the latest trends and timeless classics.
                    </p>
                    <Link to="/shop">
                        <a href="#" class="btn btn-outline-success">
                        Shop Now
                        </a>
                    </Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}