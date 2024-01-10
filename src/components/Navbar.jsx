import { React } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="nav-bar">
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand">  D R I P P Y </a>
                    <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            <div class="container">             
                <header class="d-flex justify-content-center py-3">
                    <nav>
                        <ul className="nav nav-pills">  
                            <NavLink 
                                className="navlink-style" to="/" 
                                style={({ isActive }) => {
                                    return {
                                        backgroundColor: isActive ? "lightgrey" : "",
                                    }}}>
                                <li class="nav-item">
                                    <a href="#" class="nav-link" aria-current="page">HOME</a>
                                </li>
                            </NavLink>
                            <NavLink to="/categories" 
                                className="navlink-style"
                                style={({ isActive }) => {
                                    return {
                                        backgroundColor: isActive ? "lightgrey" : "",
                                    }}}> 
                                <li class="nav-item"><a href="#categories" class="nav-link" >CATEGORIES</a></li>
                            </NavLink>
                            <NavLink 
                                to="/shop"
                                className="navlink-style" 
                                style={({ isActive }) => {
                                    return {
                                        backgroundColor: isActive ? "lightgrey" : "",
                                    }}}> <li class="nav-item"><a href="#" class="nav-link">SHOP</a></li>
                            </NavLink>
                            <NavLink 
                                to="/deals"
                                className="navlink-style" 
                                style={({ isActive }) => {
                                    return {
                                        backgroundColor: isActive ? "lightgrey" : "",
                                    }}}><li class="nav-item"><a href="#" class="nav-link">DEALS</a></li>
                            </NavLink>
                            <NavLink 
                                to="/contact"
                                className="navlink-style" 
                                style={({ isActive }) => {
                                    return {
                                        backgroundColor: isActive ? "lightgrey" : "",
                                    }}}><li class="nav-item"><a href="#" class="nav-link">CONTACT</a></li>
                                    
                            </NavLink>
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    )
}