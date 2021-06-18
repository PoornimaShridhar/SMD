import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderRounded from '@material-ui/icons/FavoriteBorderRounded';
import Share from '@material-ui/icons/Share';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import Grid from '@material-ui/core/Grid';
import b1 from "./assets/b1.jpg";
import b2 from "./assets/b2.jpeg";
import b3 from "./assets/b3.jpeg";
import b4 from "./assets/b4.jpg";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 304,
    margin: 'auto',
  },
  content: {
    padding: 24,
  },
  avatar: {
    width: 50,
    height: 50,
    border: '2px solid #fff',
    margin: '-48px 32px 0 auto',
    '& > img': {
      margin: 0,
    },
  },
}));

export const Blog = React.memo(
    function Blog() {
  const cardStyles = useStyles();
  const mediaStyles = useSlopeCardMediaStyles();
  const shadowStyles = useSoftRiseShadowStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();

  var credentials = [
    {
        heading: 'How Do I Know If I am Losing Fat OR Muscle?',
        body: "Dr. Bharath Kumar B",
        logo: b1,
        created_at: "Apr 27 2020 ,1 min",
        like:"1",
        views:"3",
        comments:"2"
    },
    {
        heading: 'When is Snacking GOOD for You?',
        body: "Dr. Bharath Kumar B",
        logo: b2,
        created_at: "Apr 27 2020 ,1 min",
        like:"1",
        views:"3",
        comments:"2"
    },
    {
        heading: 'How to Eat Healthy without Counting Calories?',
        body: "Dr. Bharath Kumar B",
        logo: b3,
        created_at: "Apr 27 2020 ,1 min",
        like:"1",
        views:"3",
        comments:"2"
    },
]


  return (
      <div>
          <Grid container>
              {
                  credentials.map((cred) =>

                  <Grid item xs={12} sm={4} style={{marginTop:"100px", paddingRight:"20px"}}>
                      <Card className={cx(cardStyles.root, shadowStyles.root)}>
                      <CardMedia
                          classes={mediaStyles}
                          image={
                          cred.logo
                          }
                      />
                      <Avatar className={cardStyles.avatar} >
                      <IconButton>
                          <Share />
                      </IconButton>
                      </Avatar>
                      
                      <CardContent className={cardStyles.content}>
                          <TextInfoContent
                          classes={textCardContentStyles}
                          heading={cred.heading}
                          body={ cred.body}
                          />
                          <div style={{fontSize:"12px" , color:'grey'}}>
                              {cred.created_at}       
                          </div>
                      </CardContent>
                      <Box px={2} pb={2} mt={-1}>
                  
                          <IconButton>
                          <FavoriteBorderRounded />           
                          </IconButton>
                              {cred.like}
                          
                          <IconButton>
                          <VisibilityIcon />
                          </IconButton>
                              {cred.views}
                          
                          <IconButton>
                          <ChatBubbleOutlineIcon />
                          </IconButton>
                              {cred.comments}
                      </Box>
                      </Card> 
                  </Grid>
                  )
              }
          </Grid>
   </div>
  );
});

export default Blog;