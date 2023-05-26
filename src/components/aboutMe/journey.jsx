import React from 'react';
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";
import img5 from "./assets/5.jpg";
import img6 from "./assets/6.jpg";
import img7 from "./assets/7.jpg";
import img8 from "./assets/8.jpg";
import img9 from "./assets/9.jpg";
import img10 from "./assets/10.jpg";
import img11 from "./assets/11.jpeg";
import img12 from "./assets/12.jpg";
import img13 from "./assets/13.jpeg";
import img14 from "./assets/14.jpg";
import img15 from "./assets/15.jpg";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './home.css';
import { FaRegLaughSquint } from "react-icons/fa";
import { BiCool } from "react-icons/bi";
import { FaKissWinkHeart } from "react-icons/fa";

function Home(props) {
    console.log("HOMEPAGE", props);

    return (
        <div>

            <div style={{}}>
                <div class="carousel-inner" style={{ width: "100%", }}>
                </div>
            </div>

            <div>
                <br />

                <div id="myCarousel1" class="carousel slide" data-ride="carousel" data-interval="5000" style={{ color: "Black", backgroundColor: "black" }}>

                    <ol class="carousel-indicators" align="center">
                        <li data-target="#myCarousel1" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel1" data-slide-to="1"></li>
                        <li data-target="#myCarousel1" data-slide-to="2"></li>
                        <li data-target="#myCarousel1" data-slide-to="3"></li>
                        <li data-target="#myCarousel1" data-slide-to="4"></li>
                        <li data-target="#myCarousel1" data-slide-to="5"></li>
                        <li data-target="#myCarousel1" data-slide-to="6"></li>
                        <li data-target="#myCarousel1" data-slide-to="7"></li>
                        <li data-target="#myCarousel1" data-slide-to="8"></li>
                        <li data-target="#myCarousel1" data-slide-to="9"></li>
                        <li data-target="#myCarousel1" data-slide-to="10"></li>
                        <li data-target="#myCarousel1" data-slide-to="11"></li>
                        <li data-target="#myCarousel1" data-slide-to="12"></li>
                        <li data-target="#myCarousel1" data-slide-to="13"></li>
                        <li data-target="#myCarousel1" data-slide-to="14"></li>

                    </ol>

                    <div class="carousel-inner slides" style={{ fontFamily: 'Comfortaa' }}>

                        <div class="item active row" >
                            <Grid container style={{ backgroundColor: 'white' }}>

                                <Grid item xs={12} sm={9} >
                                    <img src={img1} height="950vh" width="855vw" style={{
                                        borderRadius: '0%', border: "1px solid black",

                                    }} />
                                </Grid>

                                <Grid item xs={12} sm={3} style={{ backgroundColor: 'white' }}>
                                    <br />
                                    <br />
                                    <div class="names" style={{ color: "white" }}></div>
                                    <Typography class="write_up" align="left" style={{
                                        fontFamily: 'Lemon Jelly', fontSize: "6vw",
                                        lineHeight: "1", margin: "1vh", color: "black"
                                    }}>
                                        <i>Certainly one of God's beautiful creations</i>
                                    </Typography>
                                </Grid>

                            </Grid>
                        </div>

                        <div class="item row" >
                            <Grid container style={{ backgroundColor: 'white' }}>
                                <Grid item xs={12} sm={3} style={{ backgroundColor: 'white' }}>

                                    <div class="names" style={{ color: "white" }}></div>
                                    <Typography class="write_up" align="left" style={{
                                        fontFamily: 'Lemon Jelly', fontSize: "6vw",
                                        lineHeight: "1", margin: "1vh", color: "black"
                                    }}>
                                        <i>Spirit in swag !<div style={{ marginTop: "5vh", color: "white" }}>
                                            <FaRegLaughSquint class="cap" />
                                        </div></i>
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} sm={9} >
                                    <img src={img2} height="950vh" width="855vw" style={{
                                        borderRadius: '0%', border: "1px solid black",

                                    }} />
                                </Grid>
                            </Grid>
                        </div>

                        <div class="item row" >
                            <Grid container style={{ backgroundColor: 'white' }}>
                                <Grid item xs={12} sm={8} >
                                    <img src={img3} height="950vh" width="800vw" style={{
                                        borderRadius: '0%', border: "1px solid black",

                                    }} />
                                </Grid>

                                <Grid item xs={12} sm={3} style={{ backgroundColor: 'white' }}>
                                    <br />
                                    <br />
                                    <div class="names" style={{ color: "white" }}></div>
                                    <Typography class="write_up" align="left" style={{
                                        fontFamily: 'Lemon Jelly', fontSize: "6vw",
                                        lineHeight: "1", margin: "1vh", color: "black"
                                    }}>
                                        <i>Handsome young man ;)</i>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>

                        <div class="item row" >
                            <Grid container style={{ backgroundColor: 'white' }}>
                                <Grid item xs={12} sm={3} style={{ backgroundColor: 'white' }}>
                                    <br />
                                    <br />
                                    <div class="names" style={{ color: "white" }}></div>
                                    <Typography class="write_up" align="left" style={{
                                        fontFamily: 'Lemon Jelly', fontSize: "6vw",
                                        lineHeight: "1", margin: "1vh", color: "black"
                                    }}>
                                        <i>The SSS</i>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={8} >
                                    <img src={img4} height="850vh" width="935vw" style={{
                                        borderRadius: '0%', border: "1px solid black",

                                    }} />
                                </Grid>
                            </Grid>
                        </div>

                        <div class="item row" >
                            <Grid container style={{ backgroundColor: 'white' }}>
                                <Grid item xs={12} sm={8} >
                                    <img src={img5} height="950vh" width="855vw" style={{
                                        borderRadius: '0%', border: "1px solid black",

                                    }} />
                                </Grid>

                                <Grid item xs={12} sm={3} style={{ backgroundColor: 'white' }}>
                                    <br />
                                    <br />
                                    <div class="names" style={{ color: "white" }}></div>
                                    <Typography class="write_up" align="left" style={{
                                        fontFamily: 'Lemon Jelly', fontSize: "6vw",
                                        lineHeight: "1", margin: "1vh", color: "black"
                                    }}>
                                        <i>My adorable Puttu</i>
                                    </Typography>
                                </Grid>

                            </Grid>
                        </div>
                        <div class="item row" >
                            <Grid container style={{ backgroundColor: 'white' }}>

                                <Grid item xs={12} sm={8} >
                                    <img src={img6} height="850vh" width="855vw" style={{
                                        borderRadius: '0%', border: "1px solid black",

                                    }} />
                                </Grid>

                                <Grid item xs={12} sm={3} style={{ backgroundColor: 'white' }}>
                                    <br />
                                    <br />
                                    <div class="names" style={{ color: "white" }}></div>
                                    <Typography class="write_up" align="left" style={{
                                        fontFamily: 'Lemon Jelly', fontSize: "6vw",
                                        lineHeight: "1", margin: "1vh", color: "black"
                                    }}>
                                        <i>Zen mode</i>
                                    </Typography>
                                </Grid>

                            </Grid>
                        </div>
                        <div class="item row" >
                            <Grid container style={{ backgroundColor: 'white' }}>

                                <Grid item xs={12} sm={8} >
                                    <img src={img7} height="950vh" width="855vw" style={{
                                        borderRadius: '0%', border: "1px solid black",

                                    }} />
                                </Grid>

                                <Grid item xs={12} sm={3} style={{ backgroundColor: 'white' }}>
                                    <br />
                                    <br />
                                    <div class="names" style={{ color: "white" }}></div>
                                    <Typography class="write_up" align="left" style={{
                                        fontFamily: 'Lemon Jelly', fontSize: "6vw",
                                        lineHeight: "1", margin: "1vh", color: "black"
                                    }}>
                                        <i>Ready to conquer the world
                                            <div style={{ marginTop: "5vh", color: "white" }}>
                                                <BiCool class="cap" />
                                            </div>
                                        </i>
                                    </Typography>
                                </Grid>

                            </Grid>
                        </div>
                        <div class="item row" >
                            <Grid container style={{ backgroundColor: 'white' }}>
                                <Grid item xs={12} sm={3} style={{ backgroundColor: 'white' }}>
                                    <br />
                                    <br />
                                    <div class="names" style={{ color: "white" }}></div>
                                    <Typography class="write_up" align="left" style={{
                                        fontFamily: 'Lemon Jelly', fontSize: "6vw",
                                        lineHeight: "1", margin: "1vh", color: "black"
                                    }}>
                                        <i>Such a cutie
                                            <div style={{ marginTop: "5vh", color: "white" }}>
                                                <FaKissWinkHeart class="cap" />
                                            </div>
                                        </i>
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} sm={8} >
                                    <img src={img8} height="950vh" width="855vw" style={{
                                        borderRadius: '0%', border: "1px solid black",

                                    }} />
                                </Grid>

                            </Grid>
                        </div>
                        <div class="item row" >
                            <Grid container style={{ backgroundColor: 'white' }}>

                                <Grid item xs={12} sm={8} >
                                    <img src={img9} height="950vh" width="855vw" style={{
                                        borderRadius: '0%', border: "1px solid black",

                                    }} />
                                </Grid>

                                <Grid item xs={12} sm={3} style={{ backgroundColor: 'white5' }}>
                                    <br />

                                    <br />
                                    <div class="names" style={{ color: "white" }}></div>
                                    <Typography class="write_up" align="left" style={{
                                        fontFamily: 'Lemon Jelly', fontSize: "6vw",
                                        lineHeight: "1", margin: "1vh", color: "black"
                                    }}>
                                        <i>Teddu or Arju? :p</i>
                                    </Typography>
                                </Grid>

                            </Grid>
                        </div>
                        <div class="item row" >
                            <Grid container style={{ backgroundColor: 'white' }}>

                                <Grid item xs={12} sm={3} style={{ backgroundColor: 'white' }}>
                                    <br />
                                    <br />
                                    <div class="names" style={{ color: "white" }}></div>
                                    <Typography class="write_up" align="left" style={{
                                        fontFamily: 'Lemon Jelly', fontSize: "6vw",
                                        lineHeight: "1", margin: "5vh", color: "black"
                                    }}>
                                        <i>Even kids love him!</i>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={8} >
                                    <img src={img10} height="950vh" width="855vw" style={{
                                        borderRadius: '0%', border: "1px solid black",

                                    }} />
                                </Grid>

                            </Grid>
                        </div>

                        <div class="item row" >
                            <Grid container style={{ backgroundColor: 'white' }}>

                                <Grid item xs={12} sm={8} >
                                    <img src={img11} height="950vh" width="835vw" style={{
                                        borderRadius: '0%', border: "1px solid black",

                                    }} />
                                </Grid>

                                <Grid item xs={12} sm={3} style={{ backgroundColor: 'white' }}>
                                    <br />
                                    <br />
                                    <div class="names" style={{ color: "white" }}></div>
                                    <Typography class="write_up" align="left" style={{
                                        fontFamily: 'Lemon Jelly', fontSize: "6vw",
                                        lineHeight: "1", margin: "1vh", color: "black"
                                    }}>
                                        <i>Such a cute papa</i>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>

                        <div class="item row" >
                            <Grid container style={{ backgroundColor: 'white' }}>

                                <Grid item xs={12} sm={8} >
                                    <img src={img12} height="950vh" width="855vw" style={{
                                        borderRadius: '0%', border: "1px solid black",

                                    }} />
                                </Grid>

                                <Grid item xs={12} sm={3} style={{ backgroundColor: 'white' }}>
                                    <br />
                                    <br />
                                    <div class="names" style={{ color: "white" }}></div>
                                    <Typography class="write_up" align="left" style={{
                                        fontFamily: 'Lemon Jelly', fontSize: "6vw",
                                        lineHeight: "1", margin: "1vh", color: "black"
                                    }}>
                                        <i>That's the spirit :D</i>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>

                        <div class="item row" >
                            <Grid container style={{ backgroundColor: 'white' }}>

                                <Grid item xs={12} sm={8} >
                                    <img src={img13} height="850vh" width="695vw" style={{
                                        borderRadius: '0%', border: "1px solid black",

                                    }} />
                                </Grid>

                                <Grid item xs={12} sm={3} style={{ backgroundColor: 'white' }}>
                                    <br />
                                    <br />
                                    <div class="names" style={{ color: "white" }}></div>
                                    <Typography class="write_up" align="left" style={{
                                        fontFamily: 'Lemon Jelly', fontSize: "6vw",
                                        lineHeight: "1", margin: "1vh", color: "black"
                                    }}>
                                        <i>Arju also studies hard</i>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>

                        <div class="item row" >
                            <Grid container style={{ backgroundColor: 'white' }}>

                                <Grid item xs={12} sm={9} >
                                    <img src={img14} height="850vh" width="1085vw" style={{
                                        borderRadius: '0%', border: "1px solid black",

                                    }} />
                                </Grid>

                                <Grid item xs={12} sm={3} style={{ backgroundColor: 'white' }}>
                                    <br />
                                    <br />
                                    <div class="names" style={{ color: "white" }}></div>
                                    <Typography class="write_up" align="left" style={{
                                        fontFamily: 'Lemon Jelly', fontSize: "6vw",
                                        lineHeight: "1", margin: "1vh", color: "black"
                                    }}>
                                        <i>Eyantra's charm</i>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>

                        <div class="item row" >
                            <Grid container style={{ backgroundColor: 'white' }}>

                                <Grid item xs={12} sm={8} >
                                    <img src={img15} height="950vh" width="855vw" style={{
                                        borderRadius: '0%', border: "1px solid black",

                                    }} />
                                </Grid>

                                <Grid item xs={12} sm={3} style={{ backgroundColor: 'white' }}>
                                    <br />
                                    <br />
                                    <div class="names" style={{ color: "white" }}></div>
                                    <Typography class="write_up" align="left" style={{
                                        fontFamily: 'Lemon Jelly', fontSize: "6vw",
                                        lineHeight: "1", margin: "1vh", color: "black"
                                    }}>
                                        <i>Could anyone get enough of this!?</i>
                                    </Typography>
                                </Grid>

                            </Grid>
                        </div>
                        <br /> <br /> <br />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;