import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import SportsInjuryIcon from "./assets/SportsInjuryIcon.png";
import MusculoSkeletal from "./assets/MusculoSkeletal.png";
import MedicalWeightLoss from "./assets/MedicalWeightLoss.png";
import AthleteHealth from "./assets/AthleteHealthAnddoping.png";
import SportsNutrition from "./assets/SportsNutrition.png";
import img from "../assets/All  About Me images/ADoctorAHealer.jpg"
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: 'auto',
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    maxWidth: 400,
    marginLeft: 'auto',
    overflow: 'initial',
    background: '#ffffff',
    // backgroundColor:"#ffe9ec",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: spacing(2),
    border:"2px solid black",
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(2),
    },
  },
  media: {
    width: '88%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: '48%',
    borderRadius: spacing(2),
    backgroundColor: '#fff',
    position: 'relative',
    [breakpoints.up('md')]: {
      width: '100%',
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: 'translateX(-8px)',
    },
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
   
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));

const list1 = [
    {"image":SportsInjuryIcon,
    "title":"Sports Injury Management"
    },
    {"image":MusculoSkeletal,
    "title":"MusculoSkeletal Pain Syndrome"
    },
    {"image":MedicalWeightLoss,
    "title":"Medical Weight Loss"
    },
    {"image":AthleteHealth,
    "title":"Athlete Health and Doping"
    },
    {"image":SportsNutrition,
    "title":"Sports Nutrition"
    },

]

export const BlogCardDemo = React.memo(function BlogCard() {
  const styles = useStyles();
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  return (
      <div>
           <Grid container style={{marginLeft:"150px"}}>
        {
       
        list1.map((l1) =>
        
        <Grid item xs={12} sm={3} style={{margin:"10px", }}>
            <Card className={cx(styles.root, shadowStyles.root)}>
        
            <CardMedia
                className={styles.media}
                image= {l1.image} 
                // style={{width:"200px",height:"100px"}}
            />
            <CardContent style={{}}>
                <TextInfoContent
                classes={contentStyles}
                
                heading={l1.title}
                style={{fontSize:"35px"}}
                />
                {/* <Button className={buttonStyles}>Read more</Button> */}
            </CardContent>
        
            </Card>
            </Grid>
            )
        }</Grid>
    </div>
  );
});

export default BlogCardDemo