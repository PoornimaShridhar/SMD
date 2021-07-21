import React from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import GoogleFontLoader from 'react-google-font-loader';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoSubtitle, InfoTitle } from '@mui-treasury/components/info';
import { useNewsInfoStyles } from '@mui-treasury/styles/info/news';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import Button from 'react-bootstrap/Button'
import Grid from '@material-ui/core/Grid';
import testimonials from './assets/testimonials.jpg';
import testimonial_bg from './assets/testimonial_bg.jpeg'

import hari from './assets/hari.webp';
import jay from './assets/jay.webp';
import nat from './assets/nat.webp';
import nik from './assets/nik.webp';
import santan from './assets/santan.webp';
import vin from './assets/vin.webp';


export const Testimonials = React.memo(function Consult() {


  return (
    <>
    
      <Grid container style={{backgroundColor:'#FFCE85', marginTop:'100px', paddingTop:"100px"}}>
      <Grid item xs={12} >
                <Typography  variant="h5" align="center" style={{fontFamily: 'Comfortaa', margin:"30px" ,fontSize:'50px'}}>
                   What people say about me ?
                </Typography>
            </Grid>
            <Grid item xs={12} sm={3} ></Grid>   
            
            <Grid item xs={12} sm={2} style={{marginTop:"100px"}}>
                
                <img src={hari} alt="" width="150px" height="150px" style={{borderRadius:'50%'}}/>
                <br />
                <h3>Harinath</h3>
                <Typography  variant="h4" align="left" style={{fontFamily: 'Economica', margin:"30px"}}>                 
                    I was around 88 kgs then, with diabetes and on medication of 1000gm of Metformin every day. After I enrolled in their program, The levels were much better than the time I was on medication. My weight dropped to 81 Kgs. Now, it has been a year and I have reversed diabetes and am living a comfortable life without medication                </Typography>
                <Typography variant="h1" style={{color:'red'}}>
                    ''
                </Typography>
    
                
            </Grid>
            <Grid item xs={12} sm={2} style={{marginTop:"100px"}}>
                <img src={santan} alt="" width="150px" height="150px" style={{borderRadius:'50%'}}/>
                <br />
                <h3>Santan Kuma</h3>
                <Typography  variant="h4" align="left" style={{fontFamily: 'Economica', margin:"30px"}}>                 
                I was gaining weight like nothing before and scored a century (106 KG) which rang bell in my wife's mind and with the help of
                Dr. Bharath, I managed to reduce considerable amount of weight in 3 months. I am extremely happy to see my "weightometer" from 106kg to 88 kg.                </Typography>
                <Typography variant="h1" style={{color:'red'}}>
                    ''
                </Typography>
            </Grid>
            <Grid item xs={12} sm={2} style={{marginTop:"100px"}}>
                <img src={nat} alt="" width="150px" height="150px" style={{borderRadius:'50%'}}/>
                <br />
                <h3>Natesh Basrur</h3>
                <Typography  variant="h4" align="left" style={{fontFamily: 'Economica', margin:"30px"}}>                 
                Being part of the medical weight loss program, I understood that you can't be medically fit by just losing weight - the Medifit team ensured that I become fit from being obese in a time frame of
                3 months with a simple logic - "What to eat, when to eat, and how much to eat along with motivating me to do physical activities                </Typography>
                <Typography variant="h1" style={{color:'red'}}>
                    ''
                </Typography>
            </Grid>
            <Grid item xs={12} sm={3} ></Grid>  
        </Grid>

        <img src={testimonial_bg} height="200px" width="1950px" style={{border:"2px solid black"}}/>
        <Grid container style={{backgroundColor:'#FFCE85', paddingTop:"100px", }}>
            
            <Grid item xs={12} sm={3} ></Grid>   
            
            <Grid item xs={12} sm={2} >
                
                <img src={nik} alt="" width="150px" height="150px" style={{borderRadius:'50%'}}/>
                <br />
                <h3>Nikilesh Nagaraja</h3>
                <Typography  variant="h4" align="left" style={{fontFamily: 'Economica', margin:"30px"}}>                 
                    The MediFit program changed my life. It is a simple, easy to follow program which helped me reverse all my medical conditions. Today, I feel more healthy than ever. Thanks to the MediFit team!                
                </Typography>
                <Typography variant="h1" style={{color:'red'}}>
                    ''
                </Typography>
    
                
            </Grid>
            <Grid item xs={12} sm={2} >
                <img src={vin} alt="" width="150px" height="150px" style={{borderRadius:'50%'}}/>
                <br />
                <h3>Vinutha Harish</h3>
                <Typography  variant="h4" align="left" style={{fontFamily: 'Economica', margin:"30px"}}>                 
                    At MediFit, they give you complete knowledge of how your food habits and lifestyle changes help you for a lifetime. The mantra I learned from them was Food is medicine and Health is home-cooked!                
                </Typography>
                <Typography variant="h1" style={{color:'red'}}>
                    ''
                </Typography>
            </Grid>
            <Grid item xs={12} sm={2} >
                <img src={jay} alt="" width="150px" height="150px" style={{borderRadius:'50%'}}/>
                <br />
                <h3>Jayanta Ghosh</h3>
                <Typography  variant="h4" align="left" style={{fontFamily: 'Economica', margin:"30px"}}>                 
                    I had hit the dreaded plateau for almost a year. No matter what I did nothing worked. Dr. Bharath and his team of MediFit cracked this mystery and also educated me on this.                
                </Typography>
                <Typography variant="h1" style={{color:'red'}}>
                    ''
                </Typography>
            </Grid>
            <Grid item xs={12} sm={3} ></Grid>  
        </Grid>

        {/* <br style={{backgroundColor:'#FFCE85'}}/> */}

    <div style={{backgroundColor:'#FFCE85'}}>
        <Button> <h4>Read more on google</h4></Button>
        <br /><br />
        </div>
        {/* <div style={{backgroundColor:'#FFCE85'}}>
            <h2 style={{backgroundColor:'#FFCE85'}}>
            <a href="https://www.google.com/search?q=medifit+clinic&amp;oq=medifit+clinic&amp;aqs=chrome..69i57j0j69i61j69i60l2j69i65.7465j0j7&amp;sourceid=chrome&amp;ie=UTF-8#lrd=0x3bae158be9614e6d:0xdada6a7500f82cb1,1,,," target="_blank" style={{border:'2px solid red'}}> <Button variant="primary">Read More on Google</Button></a>
            </h2>
        </div> */}

    </>
  );
});
export default Testimonials