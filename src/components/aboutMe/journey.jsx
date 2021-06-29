import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from 'react-bootstrap/Container';
import healer from './assets/healer.jpeg'
import cricket from './assets/cricket.jpeg'
import lifting from './assets/lifting.jpeg'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  body: {
    marginTop: "100px"
  }
}));

export default function Journey() {
  const classes = useStyles();

  return (
    <Container className={classes.body}>
      <br /><br /><br /><br /><hr />
      <Grid container>
        <Grid item xs={12} sm={6}>
          <img src={healer} alt="" width="400px" height="300px"/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h2"  gutterBottom align="left" style={{fontFamily: 'Times New Roman', fontSize:'25px', margin:"30px" }}>
            A doctor, a healer...
          </Typography>
          <Typography variant="h4"  gutterBottom align="left" style={{fontFamily: 'Times New Roman', fontSize:'20px', margin:"30px" }}>
          The seed of healing was sown in my childhood. Inspired by the books, 'Ageless Body, Timeless Mind' and 'Quantum Healing', by Dr. Deepak Chopra, and advice from Dr. K Narendra, a friend of my father, who despite being a pediatrician, believed and incorporated the principles of Ayurveda, went on to study and practice Homeopathy.
          </Typography>
        </Grid>
      </Grid>
      <br />
      <hr />
      <Grid container>
        
        <Grid item xs={12} sm={6}>
          <Typography variant="h2"  gutterBottom align="left" style={{fontFamily: 'Times New Roman', fontSize:'25px', margin:"30px" }}>
            A doctor, who plays cricket...
          </Typography>
          <Typography variant="h4"  gutterBottom align="left" style={{fontFamily: 'Times New Roman', fontSize:'20px', margin:"30px" }}>
          At the tender age of 10, I was introduced to the game of cricket, a time when the 'Master Blaster', the great Sachin Tendulkar was at the peak of his career.

          I began as a bowler, trying to bowl like Javagal Srinath. I quickly gave it up on my father's advice. He said, "anyone can be a bowler, but it takes something to be a batsman". Being an optimist, I became a part-time wicket-keeper batsman, which was the need of the hour for my team.

          In the game of cricket, I was always a hard hitter, always believed that there is more vroom over the fielder's head than on the ground. The hard-hitting allowed me to rise the ranks, went on to represent the school team. I continued to play cricket during my undergraduate days, despite people telling me that it is impossible to play cricket in medical school, due to the vast amount of reading. 

          The hard-hitting continued, clearing the boundaries which were too short to stop me, represented the medical school and the university. Even today, I continue to play professional cricket, for a team called 'Bengaluru Specialists'.          
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={cricket} alt="" width="400px" height="500px"/>
        </Grid>
      </Grid>
      <br /><hr />
      <Grid container>
        <Grid item xs={12} sm={6}>
          <img src={lifting} alt="" width="400px" height="300px"/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h2"  gutterBottom align="left" style={{fontFamily: 'Times New Roman', fontSize:'25px', margin:"30px" }}>
            A Doctor, who lifts weights...
          </Typography>
          <Typography variant="h4"  gutterBottom align="left" style={{fontFamily: 'Times New Roman', fontSize:'20px', margin:"30px" }}>
            As a hard-hitter in cricket, I needed to use a heavy bat to play the lofted shots. It soon became a challenge lifting the bat during longer innings. A friend of my father suggested a solution, he said: "start lifting a dumbell which is heavier than your bat, you will soon get used to it and the bat will feel lighter". This simple advice sowed the seed of resistance training.

            I have always fantasized about being fit and looking muscular, like Salman Khan to be precise. I consider myself fortunate to have stumbled across a copy of a book titled 'Perfect Physique', written by Professor K V Iyer. It introduced me to the vast world of physical culture. The chiseled physiques of people mentioned in the book and the way the information flowed, inspired me to take up strength training. 

            Even today, I continue to lift weights, in the quest for a perfect physique...
          </Typography>
        </Grid>
      </Grid>





    </Container>
  );
}
