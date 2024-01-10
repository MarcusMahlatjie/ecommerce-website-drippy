import React from "react";
import sidelogo  from "./images/mm-logo.jpg";

export default function Contact(){
    return(
        <div className="contact">
            <div class="row featurette">
                <div class="col-md-7">
                    <h2 class="featurette-heading fw-normal lh-1">Developed by Marcus Mahlatjie</h2>
                    <p class="lead">This is a project I developed to work on my React JS skills while
                    learning to implement UI frameworks like MaterialUI and Bootstrap. The website
                    is not yet responsive but there will definitely be an update soon that 
                    accomodates different device sizes.I do not own the rights to any of the pictures
                    used on this website and they are strictly for display purposes.</p>
                    <h4>Contact Me</h4>
                    <p>nicmahlatjie@icloud.com</p>
                </div>
                <div class="col-md-5">
                    <img src={sidelogo} />
                </div>
            </div>
        </div>
    )
}