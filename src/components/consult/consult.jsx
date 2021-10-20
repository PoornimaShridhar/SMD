// import React from 'react';
// import NoSsr from '@material-ui/core/NoSsr';
// import GoogleFontLoader from 'react-google-font-loader';
// import { makeStyles } from '@material-ui/core/styles';
// import Avatar from '@material-ui/core/Avatar';
// import Box from '@material-ui/core/Box';
// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
// import { Row, Item } from '@mui-treasury/components/flex';
// import { Info, InfoSubtitle, InfoTitle } from '@mui-treasury/components/info';
// import { useNewsInfoStyles } from '@mui-treasury/styles/info/news';
// import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
// import injury from './assets/sportsinjury.png';
// import musculo from './assets/musculo.webp';
// import dia from './assets/diabetes.webp';
// import nutri from './assets/nutri.webp';
// import weight from './assets/weight.webp';
// import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';


// const useStyles = makeStyles(() => ({
//   card: {
//     minWidth: 320,
//     position: 'relative',
//     boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
//     overflow: 'visible',
//     borderRadius: '1.5rem',
//     transition: '0.4s',
//     '&:hover': {
//       transform: 'translateY(-2px)',
//       '& $shadow': {
//         bottom: '-1.5rem',
//       },
//       '& $shadow2': {
//         bottom: '-2.5rem',
//       },
//     },
//     '&:before': {
//       content: '""',
//       position: 'absolute',
//       zIndex: 0,
//       display: 'block',
//       width: '100%',
//       bottom: -1,
//       height: '100%',
//       borderRadius: '1.5rem',
//       backgroundColor: 'rgba(0,0,0,0.08)',
//     },
//   },
//   main: {
//     overflow: 'hidden',
//     borderTopLeftRadius: '1.5rem',
//     borderTopRightRadius: '1.5rem',
//     zIndex: 1,
//     '&:after': {
//       content: '""',
//       position: 'absolute',
//       bottom: 0,
//       display: 'block',
//       width: '100%',
//       height: '100%',
//     //   background: 'linear-gradient(to top, #014a7d, rgba(0,0,0,0))',
//     },
//   },
//   content: {
//     position: 'absolute',
//     bottom: 0,
//     width: '100%',
//     zIndex: 1,
//     padding: '1.5rem 1.5rem 1rem',
//   },
//   avatar: {
//     width: 48,
//     height: 48,
//   },
//   tag: {
//     display: 'inline-block',
//     fontFamily: "'Sen', sans-serif",
//     backgroundColor: '#ff5dac',
//     borderRadius: '0.5rem',
//     padding: '2px 0.5rem',
//     color: '#fff',
//     marginBottom: '0.5rem',
//   },
//   title: {
//     fontFamily: "'Sen', sans-serif",
//     fontSize: '2rem',
//     fontWeight: 800,
//     color: '#fff',
//   },
//   author: {
//     zIndex: 1,
//     position: 'relative',
//     borderBottomLeftRadius: '1.5rem',
//     borderBottomRightRadius: '1.5rem',
//   },
//   shadow: {
//     transition: '0.2s',
//     position: 'absolute',
//     zIndex: 0,
//     width: '88%',
//     height: '100%',
//     bottom: 0,
//     borderRadius: '1.5rem',
//     backgroundColor: 'rgba(0,0,0,0.06)',
//     left: '50%',
//     transform: 'translateX(-50%)',
//   },
//   shadow2: {
//     bottom: 0,
//     width: '72%',
//     backgroundColor: 'rgba(0,0,0,0.04)',
//   },

//   img1:{
//       border:"1px solid",
//   }

// }));

// export const Consult = React.memo(function Consult() {
//   const styles = useStyles();
//   const mediaStyles = useCoverCardMediaStyles();

//   var credentials = [
//     {
//         title: "Sports Injury",
//         price: "900 Rs | 30 min",
//         bg: injury
//     },
//     {
//         title: "Musculoskeletal Clinic",
//         price: "900 Rs | 30 min",
//         bg: musculo
//     },
//     {
//         title: "Medical Weight Loss Clinic (Medifit+)",
//         price: "1500 Rs | 1 hr",
//         bg: weight
//     },
//     {
//         title: "Diabetes/PCOS Reversal Clinic",
//         price: "1500 Rs | 1 hr",
//         bg: dia
//     },
//     {
//         title: "Sports Nutrition Clinic",
//         price: "1500 Rs | 1 hr",
//         bg: nutri
//     },
// ]

//   return (
//     <>
//     <br /><br /><br /><br /><br /> <br />
//       <NoSsr>
//         <GoogleFontLoader fonts={[{ font: 'Sen', weights: [400, 800] }]} />
//       </NoSsr>

//       <Grid container style={{paddingRight:"300px", paddingLeft:"300px"}}>

//           {
//               credentials.map((cred) =>
//                     <Grid item xs={12} sm={4} style={{marginTop:"100px", paddingRight:"20px"}}>
//                             <Card className={styles.card}>
//                             <Box className={styles.main} minHeight={300} position={'relative'}>
//                             <CardMedia style={{border:"1px solid black", backgroundColor:"black"}}
//                                 classes={mediaStyles}
//                                 image={
//                                 cred.bg
//                                 }
//                             />
//                             <div className={styles.content}>
//                                 <Button variant="contained" color="secondary">
//                                     <h5>Book Now</h5>
//                                 </Button>
//                             </div>
//                             </Box>
                            
//                             <Row
//                             className={styles.author}
//                             m={0}
//                             p={3}
//                             pt={2}
//                             gap={2}
//                             bgcolor={'common.white'}
//                             >
                                
//                             <Info position={'middle'} useStyles={useNewsInfoStyles}>
//                                 <h4>{cred.title}</h4>
//                                 <h5 style={{color:"#999999"}}>{cred.price}</h5>
//                             </Info>
//                             </Row>
//                             <div className={styles.shadow} />
//                             <div className={`${styles.shadow} ${styles.shadow2}`} />
//                         </Card>
            
//                     </Grid> 
//               )
//           } 
//         </Grid>
//         <br /><br /> <br />
//     </>
//   );
// });
// export default Consult

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
import injury from './assets/sportsinjury.png';
import musculo from './assets/musculo.webp';
import dia from './assets/diabetes.webp';
import nutri from './assets/nutri.webp';
import weight from './assets/weight.webp';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SportsInjury from './assets/SportsInjuryManagement.jpeg';
import MusculoSkeletal from './assets/MusculoSkeletalPainSyndrome.jpeg';
import MedicalWeightLoss from './assets/MedicalweightLoss.jpeg';
import AthleteHealth from './assets/AthleteHealthAnddoping.jpeg'
import SportsNutrition from './assets/SportsNutrition.jpg';
import "./consult.scss";
import { BiRupee } from "react-icons/bi";


const useStyles = makeStyles(() => ({
  // card: {
  //   minWidth: 320,
  //   position: 'relative',
  //   boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
  //   overflow: 'visible',
  //   borderRadius: '1.5rem',
  //   transition: '0.4s',
  //   '&:hover': {
  //     transform: 'translateY(-2px)',
  //     '& $shadow': {
  //       bottom: '-1.5rem',
  //     },
  //     '& $shadow2': {
  //       bottom: '-2.5rem',
  //     },
  //   },
  //   '&:before': {
  //     content: '""',
  //     position: 'absolute',
  //     zIndex: 0,
  //     display: 'block',
  //     width: '100%',
  //     bottom: -1,
  //     height: '100%',
  //     borderRadius: '1.5rem',
  //     backgroundColor: 'rgba(0,0,0,0.08)',
  //   },
  // },
  // main: {
  //   overflow: 'hidden',
  //   borderTopLeftRadius: '1.5rem',
  //   borderTopRightRadius: '1.5rem',
  //   zIndex: 1,
  //   '&:after': {
  //     content: '""',
  //     position: 'absolute',
  //     bottom: 0,
  //     display: 'block',
  //     width: '100%',
  //     height: '100%',
  //     background: 'linear-gradient(to top, #014a7d, rgba(0,0,0,0))',
  //   },
  // },
  // content: {
  //   position: 'absolute',
  //   bottom: 0,
  //   width: '100%',
  //   zIndex: 1,
  //   padding: '1.5rem 1.5rem 1rem',
  // },
  // avatar: {
  //   width: 48,
  //   height: 48,
  // },
  // tag: {
  //   display: 'inline-block',
  //   fontFamily: "'Sen', sans-serif",
  //   backgroundColor: '#ff5dac',
  //   borderRadius: '0.5rem',
  //   padding: '2px 0.5rem',
  //   color: '#fff',
  //   marginBottom: '0.5rem',
  // },
  // title: {
  //   fontFamily: "'Sen', sans-serif",
  //   fontSize: '2rem',
  //   fontWeight: 800,
  //   color: '#fff',
  // },
  // author: {
  //   zIndex: 1,
  //   position: 'relative',
  //   borderBottomLeftRadius: '1.5rem',
  //   borderBottomRightRadius: '1.5rem',
  // },
  // shadow: {
  //   transition: '0.2s',
  //   position: 'absolute',
  //   zIndex: 0,
  //   width: '88%',
  //   height: '100%',
  //   bottom: 0,
  //   borderRadius: '1.5rem',
  //   backgroundColor: 'rgba(0,0,0,0.06)',
  //   left: '50%',
  //   transform: 'translateX(-50%)',
  // },
  // shadow2: {
  //   bottom: 0,
  //   width: '72%',
  //   backgroundColor: 'rgba(0,0,0,0.04)',
  // },

  // img1:{
  //     border:"1px solid",
  // }

}));

export const Consult = React.memo(function Consult() {
  const styles = useStyles();
  const mediaStyles = useCoverCardMediaStyles();

  var credentials = [
    {
        title: "Sports Injury",
        price: "900 Rs | 30 min",
        bg: injury
    },
    {
        title: "Musculoskeletal Clinic",
        price: "900 Rs | 30 min",
        bg: musculo
    },
    {
        title: "Medical Weight Loss Clinic (Medifit+)",
        price: "1500 Rs | 1 hr",
        bg: weight
    },
    {
        title: "Diabetes/PCOS Reversal Clinic",
        price: "1500 Rs | 1 hr",
        bg: dia
    },
    {
        title: "Sports Nutrition Clinic",
        price: "1500 Rs | 1 hr",
        bg: nutri
    },
]

  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: 'Sen', weights: [400, 800] }]} />
      </NoSsr>

      {/* <Grid container style={{paddingRight:"300px", paddingLeft:"300px"}}>

          {
              credentials.map((cred) =>
                    <Grid item xs={12} sm={4} style={{marginTop:"100px", paddingRight:"20px"}}>
                            <Card className={styles.card}>
                            <Box className={styles.main} minHeight={300} position={'relative'}>
                            <CardMedia style={{border:"1px solid black", backgroundColor:"black"}}
                                classes={mediaStyles}
                                image={
                                cred.bg
                                }
                            />
                            <div className={styles.content}>
                                <Button variant="contained" color="secondary">
                                    Book Now
                                </Button>
                            </div>
                            </Box>
                            
                            <Row
                            className={styles.author}
                            m={0}
                            p={3}
                            pt={2}
                            gap={2}
                            bgcolor={'common.white'}
                            >
                                
                            <Info position={'middle'} useStyles={useNewsInfoStyles}>
                                <InfoTitle>{cred.title}</InfoTitle>
                                <InfoSubtitle>{cred.price}</InfoSubtitle>
                            </Info>
                            </Row>
                            <div className={styles.shadow} />
                            <div className={`${styles.shadow} ${styles.shadow2}`} />
                        </Card>
            
                    </Grid> 
              )
          } 
        </Grid> */}

      <Grid container style={{marginTop:'12vh'}}>
        <Grid item xs={12} md={6}>
          <img src={SportsInjury} alt="" width="400vw" height="auto"/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography  gutterBottom align="left" style={{fontFamily: 'Comfortaa', 
          fontWeight:"600", fontSize:'25px', margin:"30px" }}>
          Sports Injury Management
          </Typography>
          <Typography variant="h3"  gutterBottom align="left" style={{fontFamily: 'Comfortaa', fontSize:'20px', margin:"30px" }}>
          Injuries are an inevitable part of an athlete's career, but most importantly 90% of the injuries are preventable. 
          They need a comprehensive end to end management which includes treatment, rehabilitation and prevention.          </Typography>
          <Typography variant="h4"  gutterBottom align="left" style={{fontFamily: 'Comfortaa', fontWeight:"600", margin:"30px" }}>
            1000 <BiRupee />
          </Typography>
          <Typography variant="h2"  gutterBottom align="left" style={{fontFamily: 'Comfortaa', fontSize:'30px', margin:"30px" }}>
            <Button variant="contained" color="secondary">
              <h5>Book Now</h5>
            </Button>
          </Typography>
        </Grid>
      </Grid>
        <br />
      <Grid container>
        <Grid item xs={12} md={6}>
          <img src={MusculoSkeletal} alt="" width="400px" height="300px"/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h2"  gutterBottom align="left" style={{fontFamily: 'Comfortaa', fontWeight:"600",fontSize:'25px', margin:"30px" }}>
          Musculoskeletal Pain Syndromes
          </Typography>
          <Typography variant="h3"  gutterBottom align="left" style={{fontFamily: 'Comfortaa', fontSize:'20px', margin:"30px" }}>
          Aches and pain aren't just normal part of life that you have to live with. There is both a treatment and prevention 
          aspect to it which includes not just physical therapy but also a metabolic correction.          </Typography>
          <Typography variant="h4"  gutterBottom align="left" style={{fontFamily: 'Comfortaa', fontWeight:"600", margin:"30px" }}>
            1000 <BiRupee />
          </Typography>
          <Typography variant="h2"  gutterBottom align="left" style={{fontFamily: 'Comfortaa', fontSize:'30px', margin:"30px" }}>
            <Button variant="contained" color="secondary">
            <h5>Book Now</h5>
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <br />
      <Grid container>
        <Grid item xs={12} md={6}>
          <img src={AthleteHealth} alt="" width="400px" height="300px"/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h2"  gutterBottom align="left" style={{fontFamily: 'Comfortaa',fontWeight:"600", fontSize:'25px', margin:"30px" }}>
          Athlete Health & Doping
          </Typography>
          <Typography variant="h3"  gutterBottom align="left" style={{fontFamily: 'Comfortaa', fontSize:'20px', margin:"30px" }}>
          Illness in athletes need special attention since an early return to sport may have deleterous effects on health. 
          Also, the athletes need a prescription in which does not contain a prohibited substance or he/she risks 
          violating the WADA code.          </Typography>
          <Typography variant="h4"  gutterBottom align="left" style={{fontFamily: 'Comfortaa', fontWeight:"600", margin:"30px" }}>
          1000 <BiRupee />
          </Typography>
          <Typography variant="h2"  gutterBottom align="left" style={{fontFamily: 'Comfortaa', fontSize:'30px', margin:"30px" }}>
            <Button variant="contained" color="secondary">
            <h5>Book Now</h5>
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <br />
      <Grid container>
        <Grid item xs={12} md={6}>
          <img src={MedicalWeightLoss} alt="" width="400px" height="300px"/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h2"  gutterBottom align="left" style={{fontFamily: 'Comfortaa',fontWeight:"600", fontSize:'25px', margin:"30px" }}>
          Medical Weight Loss
          </Typography>
          <Typography variant="h3"  gutterBottom align="left" style={{fontFamily: 'Comfortaa', fontSize:'20px', margin:"30px" }}>
          Obesity is a medical disorder and it needs to be treated like one. Eat less and move more isn't enough. 
          Medical weight loss is a specialised approach to lose weigh safely under medical supervision.          </Typography>
          <Typography variant="h4"  gutterBottom align="left" style={{fontFamily: 'Comfortaa',fontWeight:"600",  margin:"30px" }}>
          1000 <BiRupee />
          </Typography>
          <Typography variant="h2"  gutterBottom align="left" style={{fontFamily: 'Comfortaa', fontSize:'30px', margin:"30px" }}>
            <Button variant="contained" color="secondary">
            <h5>Book Now</h5>
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <br />
      <Grid container>
        <Grid item xs={12} md={6}>
          <img src={SportsNutrition} alt="" width="400px" height="300px"/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h2"  gutterBottom align="left" style={{fontFamily: 'Comfortaa', fontWeight:"600",fontSize:'25px', margin:"30px" }}>
          Sports Nutrition
          </Typography>
          <Typography variant="h3"  gutterBottom align="left" style={{fontFamily: 'Comfortaa', fontSize:'20px', margin:"30px" }}>
          Athletes need to fuel their bodies not just to live, but also to maintain optimal health and achieve peak performance.
           Hence, a customized nutrition is mandatory for best results.
          Name of the program and content...with heirarchy          </Typography>
          <Typography variant="h4"  gutterBottom align="left" style={{fontFamily: 'Comfortaa', fontWeight:"600", margin:"30px" }}>
          1000 <BiRupee />
          </Typography>
          <Typography variant="h2"  gutterBottom align="left" style={{fontFamily: 'Comfortaa', fontSize:'30px', margin:"30px" }}>
            <Button variant="contained" color="secondary">
            <h5>Book Now</h5>
            </Button>
          </Typography>
        </Grid>
      </Grid>

    </>
  );
});
export default Consult