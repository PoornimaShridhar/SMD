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
import c5 from './assets/c5.jpg';

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
                    <a href="https://www.youtube.com/watch?v=CzQ8z9YBEkY" target="_blank">IAPES</a>     
                </div>
            </div>  
            </Grid>        
        </Grid>
        <Grid container>
         
            <Grid item xs={12} sm={4} style={{marginTop:"30px", paddingRight:"20px"}} align="right">
            <div class="ui-card4 ui-card">
                <img src={v1}/>
                <div class="description">
                    {/* <h3>Mountain Morning</h3> */}
                    <a href="https://www.youtube.com/watch?v=QoPGuFmPtNM" target="_blank">PEFI International E-Conference on Doping in Sports</a>
                    
                </div>
            </div>
            </Grid>
            <Grid item xs={12} sm={4} style={{marginTop:"30px"}}>
            <div class="ui-card5 ui-card">
                <img src={v2}/>
                <div class="description">
                <a href="https://youtu.be/1W7CQlq6XxQ" target="_blank">Family Doctor | Kannada Serial | Full Episode - 8 | Zee Kannada</a>
                    
                </div>
            </div>
            </Grid>

            <Grid item xs={12} sm={3} style={{marginTop:"30px"}}>
            <div class="ui-card5 ui-card">
                <img src={c5}/>
                <div class="description">
                    <h3>Training Programme on NUTRIGENOMICS</h3>
                </div>
            </div>
            </Grid>
            
        </Grid>
        <br/><br/>
        </div>
  );
}



// import React from 'react';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import MobileStepper from '@material-ui/core/MobileStepper';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import c1 from "./assets/c1.jpg";
// import c3 from "./assets/c3.jpg";
// import c4 from "./assets/c4.jpg";
// import v1 from "./assets/v1.png";
// import v2 from "./assets/v2.png";
// import c5 from './assets/c5.jpg';
// // import "./achievements.scss";


// const tutorialSteps = [
//   {
//     label: 'International E-Conference on Doping in Sports',
//     imgPath:
//       c1,
//   },
//   {
//     label: 'International Webinar on Sports Nutrition',
//     imgPath:
//       c3,
//   },
//   {
//     label: 'IAPES',
//     imgPath:
//       c4,
//       link:'https://www.youtube.com/watch?v=CzQ8z9YBEkY'
//   },
//   {
//     label: 'PEFI International E-Conference on Doping in Sports',
//     imgPath:
//       v1,
//   },
//   {
//     label: 'Family Doctor | Kannada Serial | Full Episode - 8 | Zee Kannada',
//     imgPath:
//       v2,
//   },
//   {
//     label: 'Training Programme on NUTRIGENOMICS',
//     imgPath:
//       c5,
//   },
// ];

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: '50%',
//     flexGrow: 1,
//     marginLeft: "450px",
//     marginTop: "100px",
//     border: "3px solid black"
//   },
//   header: {
//     display: 'flex',
//     alignItems: 'center',
//     height: 50,
//     paddingLeft: theme.spacing(4),
//     backgroundColor: theme.palette.background.default,
//   },
//   img: {
//     height: 700,
//     maxWidth: '100%',
//     overflow: 'hidden',
//     display: 'block',
//     width: '100%',
//   },
// }));

// export default function Achievements() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = tutorialSteps.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   return (
//       <>
//     <div className={classes.root}>
//       <Paper square elevation={0} className={classes.header}>
//         <Typography variant="h5">{tutorialSteps[activeStep].label}
//         </Typography>
//         <Typography variant="h6"><a href={tutorialSteps[activeStep].link}>Link</a>
//         </Typography>
//       </Paper>
//       <img
//         className={classes.img}
//         src={tutorialSteps[activeStep].imgPath}
//         alt={tutorialSteps[activeStep].label}
//       />
//       <MobileStepper
//         steps={maxSteps}
//         position="static"
//         variant="text"
//         activeStep={activeStep}
//         nextButton={
//           <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
//             Next
//             {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//           </Button>
//         }
//         backButton={
//           <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//             {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//             Back
//           </Button>
//         }
//       />
//     </div>
//     <br/>
//       <br/>
//     </>
//   );
// }
