import Typography from '@material-ui/core/Typography';
import logo from './logo.jpg'
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './navbar.css';
import { Link } from "react-router-dom";
import { FaRegGrinTongue } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function Navbar() {
    const classes = useStyles();
    const [user_image, setUser_image] = useState(0);
    const [user_name, setUser_name] = useState("");
    useEffect(() => {
        setUser_image(localStorage.getItem("user_image"))
        setUser_name(localStorage.getItem("user_name"))
        console.log("user_name", user_name)
    })
    return (
        <div>
            <nav class="navbar navbar-inverse" style={{ height: "auto", textAlign: "center", }}>
                <div class="container-fluid" style={{ color: "black" }}>
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar" style={{ paddingtop: "3vh" }}>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="/" style={{ textDecoration: "none" }}>
                            <img src={logo} alt="" style={{ borderRadius: '50%', height: 'auto', width: '100px', margin: '1vh', marginLeft: "5vh", borderColor: "white" }} />
                        </a>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar" style={{ color: "none" }}>
                        <ul class="nav navbar-nav navbar-right" style={{ textAlign: "center", paddingTop: "3vh", paddingBottom: "3vh" }}>
                            <li><a href="#" style={{ color: "none", textDecoration: "none" }}>
                                <Typography style={{ marginRight: '20px', fontFamily: 'Comfortaa', color: "none" }}>

                                    <div class="dropdown">
                                        <Link to="/about" className="nav_ele" style={{ textDecoration: "none", fontSize: "3vh", color: "none" }}>
                                            Arjuna
                                        </Link>
                                    </div>
                                </Typography>
                            </a></li>

                            <li><a href="#">
                                <Typography style={{ color: "white" }}>
                                    <Link to="/spl" style={{ textDecoration: "none", fontSize: "3.8vh", padding: "0", color: "white" }}>
                                        <div style={{ color: "white" }}>
                                            <FaRegGrinTongue class="cap" />
                                        </div>
                                    </Link>
                                </Typography>
                            </a></li>

                            <li><a href="#">
                                <Typography style={{ fontFamily: 'Comfortaa', fontSize: "30px" }}>
                                    <Link to="/:p" class="nav_ele" style={{ textDecoration: "none", fontSize: "4vh", color: "none" }}>
                                        <div style={{ color: "white" }}>
                                            <FaHeart class="cap" />
                                        </div>
                                    </Link>
                                </Typography>
                            </a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;