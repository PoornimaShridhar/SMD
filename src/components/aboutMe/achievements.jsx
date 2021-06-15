import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import "./achievements.scss";
import c1 from "./assets/c1.jpg";
import c3 from "./assets/c3.jpg";
import c4 from "./assets/c4.jpg";
import v1 from "./assets/v1.png";
import v2 from "./assets/v2.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 310,
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
  },

});

export default function Achievements(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    raised:false,
    shadow:1,
  })

  return (
      <div>
     <Grid container>
         <Grid item xs={12} sm={4} style={{marginTop:"100px", paddingRight:"20px"}}>
            <div class="ui-card1 ui-card">
                <img src={c1}/>
                <div class="description">
                    <h3>International E-Conference on Doping in Sports</h3>
                </div>
            </div>  
            </Grid>
            
            <Grid item xs={12} sm={4} style={{marginTop:"100px"}}>
            <div class="ui-card2 ui-card">
                <img src={c3}/>
                <div class="description">
                    <h3>International Webinar on Sports Nutrition</h3>
                   
                </div>
            </div>
            </Grid>
            <Grid item xs={12} sm={3} style={{marginTop:"100px"}}>
            <div class="ui-card3 ui-card">
                <img src={c4}/>
                <div class="description">
                    <h3>IAPES</h3>
                    
                </div>
            </div>  
            </Grid>        
        </Grid>
        <Grid container>
         
            <Grid item xs={12} sm={6} style={{marginTop:"30px", paddingRight:"20px"}} align="right">
            <div class="ui-card4 ui-card">
                <img src={v1}/>
                <div class="description">
                    {/* <h3>Mountain Morning</h3> */}
                    <a href="https://www.youtube.com/watch?v=QoPGuFmPtNM" target="_blank">PEFI International E-Conference on Doping in Sports</a>
                    
                </div>
            </div>
            </Grid>
            <Grid item xs={12} sm={6} style={{marginTop:"30px"}}>
            <div class="ui-card5 ui-card">
                <img src={v2}/>
                <div class="description">
                <a href="https://youtu.be/1W7CQlq6XxQ" target="_blank">Family Doctor | Kannada Serial | Full Episode - 8 | Zee Kannada</a>
                    
                </div>
            </div>
            </Grid>
            
        </Grid>
        </div>
  );
}