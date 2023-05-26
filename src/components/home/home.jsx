import React from 'react';
import Bharat_kumar_doc from './assets/landing.jpg';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './home.css';
import { Link } from "react-router-dom";
import { FaKissWinkHeart } from "react-icons/fa";

function Home(props) {
    console.log("HOMEPAGE", props);

    return (
        <div>
            <div style={{}}>
                <div class="carousel-inner" style={{ width: "100%", }}>
                    <div >
                        <Grid container style={{
                            backgroundColor: '', display: "flex",
                            alignContent: "center",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>

                            <Grid item md={8} style={{
                                fontFamily: "Comfortaa",
                                align: "left", textAlign: "left",
                            }}>
                                <div class="doc_des">
                                    <div class="hi">Happy birthday Arju !</div>

                                    To the cutest, hottest and extremely beautiful human that I know of...
                                    <br />Such a unique combo you are!

                                    <br /> <br />

                                    I feel so lucky and blessed to have met a person like you. That smile is always a turn on to me!
                                    Wishing you more n more love and happiness everyday from everyone around.
                                    I love you just the way you are :p Happy happy birthday my Darling, Puttu, SSS, Baby, Arju, and my lovely partner

                                    <FaKissWinkHeart class="cap" style={{ marginLeft: "0.5vw", paddingTop: "0.5vh" }} />
                                    <br />
                                    <div >
                                        <div class="bharat_kumar" ></div> </div>
                                    <br />
                                    <Link to="/about">
                                        <Button variant='' color="secondary" style={{
                                            marginLeft: "8vw",
                                            fontFamily: "Comfortaa", fontWeight: "600", background: "#fff1d0"
                                        }}>
                                            <br />
                                            <div class="read" >Explore this beauty...</div></Button>
                                    </Link>
                                </div>
                            </Grid>
                            <Grid item md={4} style={{ marginTop: "0" }}>
                                <img class="doc_img" src={Bharat_kumar_doc} alt="Chania"
                                    style={{
                                        height: "auto", width: "32vw", zIndex: "-1", marginRight: "13vw",
                                    }} />

                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;