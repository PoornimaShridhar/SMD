import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import b1 from "./assets/b1.jpg"; 
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderRounded from '@material-ui/icons/FavoriteBorderRounded';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import { SocialIcon } from 'react-social-icons';

export default function BlogPage() {
  return (  
        <Container>
                    {/* <div style={{border:"2px solid black", margin:"100px"}}>
                <Grid container style={{marginTop:"100px"}}>

                            <Grid item xs={12} sm={6}>
                                <Typography variant='h6'>
                                    Dr. Bharath Kumar B 
                                </Typography> 

                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Typography variant='body'>
                                    Apr 27 2020 ,1 min
                                </Typography> 

                            </Grid>
                        </Grid>
                            <br />
                            <br />
                            <Grid container>
                            <Grid item xs={12}>
                                <Typography variant='h4' >
                                How Do I Know If I am Losing Fat OR Muscle?
                                </Typography> 

                            </Grid>

                    </Grid>
                    <Grid container>        

                            <Grid item xs={12}>
                                <img src={b1}  width="600" height="500"  style={{position:"center", marginTop:"50px"}}/>
                            </Grid>
                    </Grid>
                    <Grid container>    
                            <Grid item xs={12} align="left">
                                <Container  fluid="true" style={{marginTop:"50px", fontSize:"15px", fontFamily: 'Roboto Slab'}}>
                                    <Typography align="left">
                                <pre>
                                    {
                                    `
            During the process of #LosingWeight, the first few kilos of #WeightLoss is all water which is stored 
            along the Glycogen (stored carbohydrates in the liver and muscle).
            The next few kilos of weight loss is a mixture of muscle and fat due to the catabolic state the body is in. 
            However, over a period of few weeks,this stabilizes as 
            the #Anabolism (Building) balances the #Catabolism (Break Down).               
            On a long term basis, if the #Protein intake is adequate and 
            if you are performing #StrengthTraining (Lifting Weights), 
            the muscle mass is preserved and only #FatLoss occurs. 
            The question is, how do we know?

            That is where the #BodyCompositionAnalysis (BCA) provides objective information.

            A simple BCA report has the following parameters:
            1. Weight
            2. Fat %
            3. Muscle %
            4. Visceral Fat

            When #FatLoss occurs, the Fat% goes down while the #Muscle % remains stable or 
            even increase as muscle is gained.

            If BCA is NOT used to monitor the progress, it leads to a 
            medical condition known as 'Sarcopenic Obesity' where in a person has 
            #Sarcopenia (Low Lean Body Mass/Muscle) and still he/she is 
            #Obese due to high body fat percentage. It leads to a multitude 
            of diseases.
            If there is muscle loss despite adequate protein intake and #StrengthTraining,
            it might be due to a condition called 
            #Myopathy which may be fatal in the long term, seeking medical help is most necessary.
                                    `}
                                </pre>
                                </Typography>
                                </Container>
                            </Grid>
                    </Grid>
                    </div> */}
    <br />
    <br />
    <br />
    <br />
    <div className="w3-card-4 w3-margin w3-white" style={{border:"2px solid black", margin:"500px", align:"center"}}>
        <img src={b1} alt="Nature" style={{width:'50%', marginTop:'20px'}}/>
        <div className="w3-container">
        <h2><b>How Do I Know If I am Losing Fat OR Muscle?</b></h2>
        <h4 > Dr. Bharath Kumar B , <span className="w3-opacity">April 7, 2014</span></h4>
        <div align="center">
                <hr style={{
                    height: "1px",
                    backgroundColor: "grey",
                    width:'500px'}}/>
        </div>
        </div>

        <div className="w3-container" align="left">
        <Typography variant="h6" style={{margin:"20px"}}>
During the process of #LosingWeight, the first few kilos of #WeightLoss is all water which is stored along the             
Glycogen (stored carbohydrates in the liver and muscle).
The next few kilos of weight loss is a mixture of muscle and fat due to the catabolic state the body is in. 
However, over a period of few weeks,this stabilizes as the #Anabolism (Building) balances the #Catabolism (Break Down).              
On a long term basis, if the #Protein intake is adequate and if you are performing #StrengthTraining (Lifting Weights), 
the muscle mass is preserved and only #FatLoss occurs. 
The question is, how do we know?

That is where the #BodyCompositionAnalysis (BCA) provides objective information.

A simple BCA report has the following parameters:
1. Weight
2. Fat %
3. Muscle %
4. Visceral Fat

When #FatLoss occurs, the Fat% goes down while the #Muscle % remains stable or even increase as muscle is gained.

If BCA is NOT used to monitor the progress, it leads to a medical condition known as 'Sarcopenic Obesity' where in a person has 
#Sarcopenia (Low Lean Body Mass/Muscle) and still he/she is #Obese due to high body fat percentage. It leads to a multitude 
of diseases.

If there is muscle loss despite adequate protein intake and #StrengthTraining, it might be due to a condition called 
#Myopathy which may be fatal in the long term, seeking medical help is most necessary.
                    </Typography>
        <hr style={{
              marginLeft: 5,
              marginRight: 5,
              height: "1px",
              border: "none",
              backgroundColor: "grey",
            }}/>
         <Grid container>
            <br/>
            <Grid item xs={12} sm={12} align="center">
            <SocialIcon url="https://www.instagram.com/sportsmedicinedoctor/" target="_blank" style={{margin:"5px"}}/>
            

            <SocialIcon url="https://www.facebook.com/SportsMedicineDoctor/" target="_blank" style={{margin:"5px"}}/>
            
           
            <SocialIcon url="https://twitter.com/sportsdocindia" target="_blank" style={{margin:"5px"}}/>
           
            <SocialIcon url="https://www.linkedin.com/in/sportsmedicinedoctor/" target="_blank" style={{margin:"5px"}}/>
            </Grid>
        </Grid> 
        <hr style={{
              marginLeft: 5,
              marginRight: 5,
              height: "1px",
              border: "none",
              backgroundColor: "grey",
            }}/>
        <Box px={2} pb={2} mt={-1}>
            
                    <IconButton>
                    <FavoriteBorderRounded />           
                    </IconButton>
                       3
                    
                    <IconButton>
                    <VisibilityIcon />
                    </IconButton>
                        5
                    
                    <IconButton>
                    <ChatBubbleOutlineIcon />
                    </IconButton>
                        6
                </Box>
        </div>
    </div>
    <div className="w3-card-4 w3-margin w3-white" style={{border:"2px solid black", margin:"100px"}}>
        <br />
        
            <Grid container>
                <Grid item xs={12} sm={2}>
                    2 comments
                </Grid>
                <Grid item xs={12} sm={10}>
                    <select >
                        <option >Oldest</option>
                        <option >Newest</option>
                    </select> 
                </Grid>
            </Grid>
            <hr style={{
              marginLeft: 5,
              marginRight: 5,
              height: "1px",
              border: "none",
              backgroundColor: "grey",
            }}/>
            <div>
                <Grid container spacing={1} alignItems="flex-end" style={{margin:'50px'}}>
                    <Grid item>
                        <AccountCircle fontSize="large"/>
                    </Grid>
                    <Grid item style={{marginLeft:"20px"}}>
                        <TextField id="input-with-icon-grid" label="Write a comment" />
                    </Grid>
                </Grid>
                <Grid container style={{marginLeft:'50px'}}>
                    <Grid item>
                            <Avatar alt="Remy Sharp" src={b1} />
                    </Grid>
                    <Grid item style={{marginLeft:"20px"}}>
                        <Typography>
                            Dr. Bharat Kumar B
                            </Typography>
                            <Typography variant="subtitle2" className="w3-opacity">
                            18th June, 2021
                            </Typography>
                    </Grid>
                </Grid>
                <Grid container style={{marginLeft:'50px', marginTop:"20px"}}>
                Yes, eating with the non dominant hand is difficult. But making it a practice once in a while helps us to focus on what we are eating.
                </Grid>

                <Grid container style={{marginLeft:"20px", marginTop:"20px"}}>
                <Box px={2} pb={2} mt={-1}>
            
                    <IconButton>
                    <FavoriteBorderRounded />           
                    </IconButton>
                       Like 
                    <IconButton>
                    <ChatBubbleOutlineIcon />
                    </IconButton>
                        Reply
                </Box>
                </Grid>
      </div>
      <div style={{borderLeft:"1px solid grey", marginLeft:"100px"}}>
                <Grid container style={{marginLeft:'50px'}}>
                    <Grid item>
                            <Avatar alt="Remy Sharp" src={b1} />
                    </Grid>
                    <Grid item style={{marginLeft:"20px"}}>
                        <Typography>
                            Dr. Bharat Kumar B
                            </Typography>
                            <Typography variant="subtitle2" className="w3-opacity">
                            18th June, 2021
                            </Typography>
                    </Grid>
                </Grid>
                <Grid container style={{marginLeft:'50px', marginTop:"20px"}}>
                Yes, eating with the non dominant hand is difficult. But making it a practice once in a while helps us to focus on what we are eating.
                </Grid>

                <Grid container style={{marginLeft:"20px", marginTop:"20px"}}>
                <Box px={2} pb={2} mt={-1}>
            
                    <IconButton>
                    <FavoriteBorderRounded />           
                    </IconButton>
                       Like
                </Box>
                </Grid>
                <hr style={{marginLeft:'30px',width:'90%' }}/>
                <Grid container style={{marginLeft:'50px'}}>
                    <Grid item>
                            <Avatar alt="Remy Sharp" src={b1} />
                    </Grid>
                    <Grid item style={{marginLeft:"20px"}}>
                        <Typography>
                            Dr. Bharat Kumar B
                            </Typography>
                            <Typography variant="subtitle2" className="w3-opacity">
                            18th June, 2021
                            </Typography>
                    </Grid>
                </Grid>
              
                <Grid container style={{marginLeft:'50px', marginTop:"20px"}}>
                Yes, eating with the non dominant hand is difficult. But making it a practice once in a while helps us to focus on what we are eating.
                </Grid>

                <Grid container style={{marginLeft:"20px", marginTop:"20px"}}>
                <Box px={2} pb={2} mt={-1}>
            
                    <IconButton>
                    <FavoriteBorderRounded />           
                    </IconButton>
                       Like
                </Box>
                </Grid>
      </div>
      <br />
      <br />
      <div>
                <Grid container style={{marginLeft:'50px'}}>
                    <Grid item>
                            <Avatar alt="Remy Sharp" src={b1} />
                    </Grid>
                    <Grid item style={{marginLeft:"20px"}}>
                        <Typography>
                            Dr. Bharat Kumar B
                            </Typography>
                            <Typography variant="subtitle2" className="w3-opacity">
                            18th June, 2021
                            </Typography>
                    </Grid>
                </Grid>
                <Grid container style={{marginLeft:'50px', marginTop:"20px"}}>
                Yes, eating with the non dominant hand is difficult. But making it a practice once in a while helps us to focus on what we are eating.
                </Grid>

                <Grid container style={{marginLeft:"20px", marginTop:"20px"}}>
                <Box px={2} pb={2} mt={-1}>
            
                    <IconButton>
                    <FavoriteBorderRounded />           
                    </IconButton>
                       Like
                    <IconButton>
                    <ChatBubbleOutlineIcon />
                    </IconButton>
                        Reply
                </Box>
                </Grid>
      </div>
      <div style={{borderLeft:"1px solid grey", marginLeft:"100px"}}>
                <Grid container style={{marginLeft:'50px'}}>
                    <Grid item>
                            <Avatar alt="Remy Sharp" src={b1} />
                    </Grid>
                    <Grid item style={{marginLeft:"20px"}}>
                        <Typography>
                            Dr. Bharat Kumar B
                            </Typography>
                            <Typography variant="subtitle2" className="w3-opacity">
                            18th June, 2021
                            </Typography>
                    </Grid>
                </Grid>
                <Grid container style={{marginLeft:'50px', marginTop:"20px"}}>
                Yes, eating with the non dominant hand is difficult. But making it a practice once in a while helps us to focus on what we are eating.
                </Grid>

                <Grid container style={{marginLeft:"20px", marginTop:"20px"}}>
                <Box px={2} pb={2} mt={-1}>
            
                    <IconButton>
                    <FavoriteBorderRounded />           
                    </IconButton>
                       Like
                </Box>
                </Grid>
                <hr style={{marginLeft:'30px',width:'90%' }}/>
                <Grid container style={{marginLeft:'50px'}}>
                    <Grid item>
                            <Avatar alt="Remy Sharp" src={b1} />
                    </Grid>
                    <Grid item style={{marginLeft:"20px"}}>
                        <Typography>
                            Dr. Bharat Kumar B
                            </Typography>
                            <Typography variant="subtitle2" className="w3-opacity">
                            18th June, 2021
                            </Typography>
                    </Grid>
                </Grid>
              
                <Grid container style={{marginLeft:'50px', marginTop:"20px"}}>
                Yes, eating with the non dominant hand is difficult. But making it a practice once in a while helps us to focus on what we are eating.
                </Grid>

                <Grid container style={{marginLeft:"20px", marginTop:"20px"}}>
                <Box px={2} pb={2} mt={-1}>
            
                    <IconButton>
                    <FavoriteBorderRounded />           
                    </IconButton>
                       Like
                </Box>
                </Grid>
        </div>
        </div>
        </Container>
       
  );
}