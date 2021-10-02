import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import bharatKumar from './assets/BharatKumar.jpg';
import Bharat_kumar_doc from './assets/Bharat_kumar_doc.jpg';
import vin from "./assets/vin.webp";
import hari from "./assets/hari.webp";
import santan from "./assets/santan.webp";
import nat from "./assets/nat.webp";
import jay from "./assets/jay.webp";
import nik from "./assets/nik.webp";
import news from './assets/news.png';
import ADoctorAHealer from './assets/ADoctorAHealer.jpg';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from 'react-bootstrap/Container';
import { useN03TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n03';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';
import Button from '@material-ui/core/Button';
import './home.scss';
import BlogCardDemo from './consultCards/consultCards';
import smd_logo from "./assets/smd_logo_black.png";
import kinesis_logo from "./assets/kinesis_logo.png";
import medifit_logo from "./assets/medifit_logo.png";
import complete_logo from "./assets/Complete_logo_with_headings.png"

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(25),
        height: theme.spacing(25),
    },
    root: {
        maxWidth: 343,
        borderRadius: 20,
        backgroundColor: "#ededeb",
    },
    content: {
        padding: 24,
    },
    paper: {
        position: 'absolute',
        width: 1100,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    paperContainer: {
        backgroundImage: `url(${ADoctorAHealer})`
    },

}));

function Home() {
    const classes = useStyles();
    const styles = useN03TextInfoContentStyles();
    const shadowStyles = useLightTopShadowStyles();
    const [open, setOpen] = React.useState(false);
    const [modalStyle] = React.useState(getModalStyle);
    const [image, setImage] = React.useState("");
    const [subscriberEmail, setSubscriberEmail] = useState("");

    const handleOpen = (img) => {
        setOpen(true);
        setImage(img);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const saveEmail=(e)=>{
        setSubscriberEmail(e.target.value)
        console.log(subscriberEmail, "reply text")
    }

    const postEmail=(e)=>{
    
        var base_url = 'http://0.0.0.0:8004/blog/api/subscribers/add_email/'
        var data = ""
       
        data = {
            email_add: subscriberEmail
        }

        fetch(base_url,{
            method: "POST",
            headers:{
              'Accept': 'application/json',
              'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
          })
          .then(response => response.json())
          .then(data => {console.log(data, "reply response_________________________________")
          setSubscriberEmail("")
          window.location.reload(false);
        })
       
    }

    return (
        <div>

            <div style={{  }}>
                    <div class="carousel-inner" style={{ width: "100%", }}>

                        {/* landing screen 1 on home page */}

                        {/* <div class="item active" style={{ width: "2000px", height: "350px" }}>
                           
                            <img src={bharatKumar} alt="Chania"
                                style={{
                                    height: "50vw", width: "1835px", zIndex: "-1",
   
                                }} />
                            <div class="carousel-caption" align="left"
                                style={{
                                    position: "Absolute", top: "50px", color: "white",
                                    fontSize: "27px", textAlign: "left", marginLeft: "550px",
                                    fontWeight: "550",
                                    background: "blur(2px)",
                                    backdropFilter: "blur(25px)",
                                    boxShadow: "10px 10px black",
                                    height: "38vw",
                                    fontFamily: "Comfortaa",
                                    textShadow: "5px 5px 5px black, 5px 5px 5px black, 5px 5px 5px black",
                                }}>

                                <div style={{ fontSize: "35px",  }}>Hi !</div>

                                This is Dr. Bharath Kumar B. I am an Allopathic Doctor specialized
                                <br />in Sports Medicine.
                                I graduated from the prestigious Netaji Subhas National Institute of Sports.
                                <br /> <br />
                                My mission is to help the athletes to win Gold medals at the Olympics.
                                <br /> I strive to create a Fit India
                                through Nutrition, Exercise, and Lifestyle. I envision
                                <br /> a world free from lifestyle disorders!
                                <br /> <br />
                                <div >

                                    <h1 style={{  fontWeight: "600" }}>DR. BHARATH KUMAR B</h1> </div>
                                <div style={{ fontSize: "250px", fontWeight: "800" }}>
                                    <h4 style={{fontWeight: "600" }}>MBBS, PGDSM (Sports Medicine)</h4>
                                </div>
                               
                                <Button variant='' color="secondary" style={{ marginLeft: "8vw",fontFamily: "Comfortaa",fontWeight: "600", background: "#fff1d0" }}><h4 style={{fontWeight:"600"}}>Read More...</h4></Button>
                            </div>
                        </div> */}

                        {/* landing image 2 on home page */}

                        <div >
                           
                            <Grid container style={{backgroundColor:'', display:"flex",    
                            alignContent: "center",
                        justifyContent: "center",
                            alignItems: "center"
                                    }}>

                                <Grid item  md={8} style={{fontFamily:"Comfortaa", 
                                align:"left", textAlign:"left", 
                                textShadow: "5px 5px 5px white, 5px 5px 5px white, 5px 5px 5px black"
                            }}>
                                <div class="doc_des">
                                    <div style={{ fontSize: "2vw", }}>Hi !</div>

                                    This is Dr. Bharath Kumar B. I am an Allopathic Doctor specialized
                                    <br />in Sports Medicine.
                                    I graduated from the prestigious Netaji Subhas National Institute of Sports.
                                    <br /> <br />

                                    My mission is to help the athletes to win Gold medals at the Olympics.
                                    <br /> I strive to create a Fit India
                                    through Nutrition, Exercise, and Lifestyle. I envision
                                    <br /> a world free from lifestyle disorders!
                                    <br /> <br />
                                    <div >

                                        <div class="bharat_kumar" >DR. BHARATH KUMAR B</div> </div>
                                    <div >  
                                        {/* font size in vh not reflecting */}
                                        <div style={{fontWeight:"600"}} class="mbbs">MBBS, PGDSM (Sports Medicine)</div>
                                    </div>

                                    <Button variant='' color="secondary" style={{
                                        marginLeft: "8vw",
                                        fontFamily: "Comfortaa", fontWeight: "600", background: "#fff1d0"
                                    }}>
                                        <br />
                                        <div class="read" >Read More...</div></Button>
                                        </div>
                                </Grid>
                                <Grid item md={4} style={{marginTop:"0"}}>
                                    <img class="doc_img" src={Bharat_kumar_doc} alt="Chania"
                                        style={{
                                            height: "auto", width: "32vw", zIndex: "-1",marginRight:"13vw",
                                        }} />

                                </Grid>
                            </Grid>
                        </div>
                    </div>   
            </div>



            <div >
                <Typography  style={{textShadow:"5px 5px 5px white, 5px 5px 5px white, 5px 5px 5px black"}} class="headings" 
                >
                    <br />
                    How can I help you ?
                    <br />
                </Typography>
                <br /> <br />
                <BlogCardDemo />
                <br /> <br />
            </div>



            <Typography  align="center" class="headings" style={{
                backgroundColor: "#BB2025", fontFamily: 'Comfortaa',
                color: 'white', margintop: "1vw",paddingBottom: "1vw",
                textShadow: "5px 5px 5px black, 5px 5px 5px black, 5px 5px 5px black"
            }}>
                <br />

                My Ventures

            </Typography>
           <br /><br />
            <Grid container style={{ paddingBottom: "", display:"flex"}}>
                <Grid item xs={12} sm={12}>
                    <img src={complete_logo} useMap="#multilinks" style={{
                        height: "auto", width: "40%", 
                    }} />
                    <map name="multilinks" class="multilinks">
                        <area alt="" href="https://medifit.in/" shape="circle" coords="534,496,250" />
                    </map>
                    {/* <Typography  align="center" style={{
                        fontFamily: 'Comfortaa', fontSize: "2vw", color: 'black',
                        color: "white",
                        textShadow: "5px 5px 5px black, 5px 5px 5px black, 5px 5px 5px black"
                    }}>
                        <i>Sports Medicine Doctor</i>
                    </Typography> */}
                </Grid>
                {/* <Grid item xs={12} sm={5}>
                    <Typography  align="center" style={{
                        fontFamily: 'Comfortaa', fontSize: "2vw", color: 'black',
                        marginTop: "7vw", marginRight: "10vw", marginLeft: "2vw", color: "white",
                        textShadow: "5px 5px 5px black, 5px 5px 5px black, 5px 5px 5px black"
                    }}>
                        <i>Sports Medicine Doctor</i>
                    </Typography>
                </Grid> */}

                {/* <Grid item xs={12} sm={3}>
                    <Typography align="center" style={{
                        fontFamily: 'Comfortaa', fontSize: "2vw", color: 'white',
                        marginBottom: "2vw", marginLeft: "25vw",
                        textShadow: "5px 5px 5px black, 5px 5px 5px black, 5px 5px 5px black"
                    }}>
                        <i>Kinesis Sports Clinic</i>
                    </Typography>
                </Grid> */}
                {/* <Grid container align-content-xs-space-between style={{justify:"center"}}>
                <Grid item xs={12} sm={6}>
                    <img src={kinesis_logo} style={{ height: "25vw", width: "18vw",  }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={medifit_logo} style={{ height: "25vw", width: "18vw", }} /> */}
                    {/* <Typography align="center" style={{
                        fontFamily: 'Comfortaa', fontSize: "2vw", color: 'white',
                        marginLeft: "14vw", marginRight: "1vw",
                        textShadow: "5px 5px 5px black, 5px 5px 5px black, 5px 5px 5px black"
                    }}>
                        <i>The Medifit Clinic</i>
                    </Typography> */}
                {/* </Grid>
                </Grid> */}
            </Grid>
           
            <div style={{ backgroundColor: "white" }}>
                <br /> <br />
                <Grid container>
                    <Grid item xs={12}>
                       
                     
                    <Typography  align="center" class="headings" style={{
                backgroundColor: "#BB2025", fontFamily: 'Comfortaa',
                color: 'white', margintop: "1vw",paddingBottom: "1vw",
                textShadow: "5px 5px 5px black, 5px 5px 5px black, 5px 5px 5px black"
            }}>
                <br />

                Subscribe to my newsletter

            </Typography>
                        <br />
                        <img src={news} alt="" width='200vh' height='auto' style={{}} />
                        <br />
                        <input type="text" placeholder='Enter your Email' style={{ width: '300px', fontFamily: 'Comfortaa', 
                        fontWeight: "500" }} value={subscriberEmail} onChange={saveEmail}/>
                        <br /><br />
                        <Button variant='contained' color="white" style={{ backgroundColor: "black" }}><div class="submit"
                         style={{ fontFamily: 'Comfortaa', fontWeight: "600", color: "white" }}
                         onClick={ postEmail } >Submit</div></Button>

                    </Grid>

                </Grid>
                <br />
                <br />
            </div>


          
            <div style={{ backgroundColor: '#BB2025' }}>
                <Grid container style={{ backgroundColor: '#BB2025' }}>
                    <Grid item xs={12} >
                        <Typography class="headings" align="center" style={{
                            fontFamily: 'Comfortaa', marginTop: "30px",
                            textShadow: "5px 5px 5px black, 5px 5px 5px black, 5px 5px 5px black", color: "white"
                        }}>
                            What People Say About Me...
                        </Typography>
                    </Grid>
                </Grid>
                <br />

                <div id="myCarousel1" class="carousel slide" data-ride="carousel" data-interval="100000">

                    <ol class="carousel-indicators" align="center">
                        <li data-target="#myCarousel1" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel1" data-slide-to="1"></li>
                    </ol>

                    <div class="carousel-inner slides" style={{ fontFamily: 'Comfortaa' }}>

                        <div class="item active row" >
                            <Grid container style={{ backgroundColor: '#BB2025' }}>

                                <Grid item xs={12} sm={3} ></Grid>

                                <Grid item xs={12} sm={2} style={{ backgroundColor: 'white' }}>
                                    <br />
                                    <img src={nik}  width="150vw"  style={{
                                        borderRadius: '50%', border: "1px solid black",
                                        filter: "grayscale(100%)"
                                    }} />
                                    <br />
                                    <div class="names" style={{ color: "red" }}>Nikilesh Nagaraja</div>
                                    <Typography class="write_up" align="left" style={{
                                        fontFamily: 'Comfortaa',
                                        lineHeight: "1.5", margin: "3vh", 
                                    }}>
                                        <i>The MediFit program changed my life. It is a simple, easy to follow program which helped me reverse all my medical conditions. Today, I feel more healthy than ever. Thanks to the MediFit team!</i>
                                    </Typography>
                                    <Typography variant="h1" style={{ color: 'red' }}>
                                        ''
                                    </Typography>

                                </Grid>
                                <Grid item xs={12} sm={2} style={{ backgroundColor: 'white' }}>
                                    <br />
                                    <img src={vin} alt="" width="150vw" style={{
                                        borderRadius: '50%', border: "1px solid black",
                                        filter: "grayscale(100%)"
                                    }} />
                                    <br />
                                    <div class="names" style={{ color: "red" }}>Vinutha Harish</div>
                                    <Typography class="write_up" align="left" style={{
                                        fontFamily: 'Comfortaa', margin: "3vh",
                                    
                                    }}>
                                        <i>At MediFit, they give you complete knowledge of how your food habits and lifestyle changes help you for a lifetime. The mantra I learned from them was Food is medicine and Health is home-cooked!</i>
                                    </Typography>
                                    <Typography variant="h1" style={{ color: 'red' }}>
                                        ''
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={2} style={{ backgroundColor: 'white' }}>
                                    <br />
                                    <img src={jay} alt="" width="150vw" style={{
                                        borderRadius: '50%', border: "1px solid black",
                                        filter: "grayscale(100%)"
                                    }} />
                                    <br />
                                    <div class="names" style={{ color: "red" }}>Jayanta Ghosh.</div>
                                    <Typography class="write_up" align="left" style={{
                                        fontFamily: 'Comfortaa',
                                        lineHeight: "1.5", margin: "3vh"
                                    }}>
                                        <i>I had hit the dreaded plateau for almost a year. No matter what I did nothing worked. Dr. Bharath and his team of MediFit cracked this mystery and also educated me on this.</i>
                                    </Typography>
                                    <Typography variant="h1" style={{ color: 'red' }}>
                                        ''
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={3} ></Grid>

                            </Grid>
                        </div>

                        <div class="item row" >
                            <Grid container style={{ backgroundColor: '#BB2025' }}>

                                <Grid item xs={12} sm={3} ></Grid>

                                <Grid item xs={12} sm={2} style={{ backgroundColor: 'white' }}>
                                    <br />
                                    <img src={hari} alt="" width="150vw" style={{
                                        borderRadius: '50%', border: "1px solid black",
                                        filter: "grayscale(100%)"
                                    }} />
                                    <br />
                                    <div class="names" style={{ color: "red" }}>Harinath</div>
                                    <Typography class="write_up" align="left" style={{
                                        fontFamily: 'Comfortaa',
                                        lineHeight: "1.5", margin: "3vh"
                                    }}>
                                        <i>I was around 88 kgs then, with diabetes and on medication of 1000gm of Metformin every day. After I enrolled in their program, The levels were much better than the time I was on medication. My weight dropped to 81 Kgs. Now, it has been a year and I have reversed diabetes and am living a comfortable life without medication</i>
                                    </Typography>
                                    <Typography variant="h1" style={{ color: 'red' }}>
                                        ''
                                    </Typography>

                                </Grid>
                                <Grid item xs={12} sm={2} style={{ backgroundColor: 'white' }}>
                                    <br />
                                    <img src={santan} alt="" width="150vw" style={{
                                        borderRadius: '50%', border: "1px solid black",
                                        filter: "grayscale(100%)"
                                    }} />
                                    <br />
                                    <div class="names" style={{ color: "red" }}>Santan Kumar</div>
                                    <Typography class="write_up" align="left" style={{
                                        fontFamily: 'Comfortaa',
                                        lineHeight: "1.5", margin: "3vh",
                                    }}>
                                        <i>I was gaining weight like nothing before and scored a century (106 KG) which rang bell in my wife's mind and with the help of
                                            Dr. Bharath, I managed to reduce considerable amount of weight in 3 months. I am extremely happy to see my "weightometer" from 106kg to 88 kg. </i>
                                    </Typography>
                                    <Typography variant="h1" style={{ color: 'red' }}>
                                        ''
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={2} style={{ backgroundColor: 'white' }}>
                                    <br />
                                    <img src={nat} alt="" width="150vw"  style={{
                                        borderRadius: '50%', border: "1px solid black",
                                        filter: "grayscale(100%)"
                                    }} />
                                    <br />
                                    <div class="names" style={{ color: "red" }}>Natesh Basrur</div>
                                    <Typography class="write_up" align="left" style={{
                                        fontFamily: 'Comfortaa',
                                        lineHeight: "1.5", margin: "3vh"
                                    }}>
                                        <i> Being part of the medical weight loss program, I understood that you can't be medically fit by just losing weight - the Medifit team ensured that I become fit from being obese in a time frame of
                                            3 months with a simple logic - "What to eat, when to eat, and how much to eat along with motivating me to do physical activities  </i>
                                    </Typography>
                                    <Typography variant="h1" style={{ color: 'red' }}>
                                        ''
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={3} ></Grid>

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