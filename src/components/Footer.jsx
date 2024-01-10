import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    return(
            <div className="page-footer">
                <div class="container">
                    <footer class="py-3 my-4">
                        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                        <Link to="/" class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></Link>
                        <Link to="/categories" class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Categories</a></Link>
                        <Link to="/shop" class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></Link>
                        <li class="nav-item"><a href="https://www.linkedin.com/in/marcus-mahlatjie-688450237/" target="_blank" class="nav-link px-2 text-body-secondary">About</a></li>
                        <Link to="/contact" class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Contact</a></Link>
                        </ul>
                        <p class="text-center text-body-secondary">© 2024 Marcus Mahlatjie</p>
                    </footer>
                </div>                
            </div>
    )
}