import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from 'react-bootstrap/Container';
import healer from './assets/healer.jpeg'
import cricket from './assets/cricket.jpeg'
import lifting from './assets/lifting.jpeg'
import ADoctorAHealer from "./assets/ADoctorAHealer2.jpg"
import ADoctorWhoPlaysCricket from './assets/All  About Me images/ADoctorWhoPlaysCricket.jpg';
import ADoctorWhoLiftsWeights from './assets/All  About Me images/ADoctorWhoLiftsWeights.jpg';
import ExerciseIsMedicine from './assets/All  About Me images/ExcerciseIsMedicine.jpg';
import GymRatherThanHospital from './assets/All  About Me images/GymRatherThanHospital.jpg';
import DoctorWhoCombinedSportsAndMedicine from './assets/All  About Me images/DoctorWhoCombinedSportsAndMedicine.jpg';
import DoctorWhoDoesNotPrescribeMedicine from './assets/All  About Me images/DoctorWhoDoesNotPrescribeMedicine.jpg';
import DoctorWhoIsAFoodie from './assets/All  About Me images/ADoctorWhoISAFoodie.jpg';
import DoctorAThinker from './assets/All  About Me images/ADoctorAThinker.jpg';
import ExcerciseIsMedicine from './assets/ExcerciseIsMedicine.jpg'

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
    <div className={classes.body}>
      <br /><br /><br /><br /> <br />
      <Grid container>
        <Grid item xs={12} sm={6}>
          <img src={ADoctorAHealer} alt="" width="500px" height="300px" style={{margin:"2px solid black"}}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h1"  gutterBottom align="left" style={{fontFamily: 'Comfortaa', margin:"30px" }}>
             A doctor, a healer...
          </Typography>
          <Typography variant="h4"  gutterBottom align="left" style={{fontFamily: 'Comfortaa', margin:"30px" }}>
          The seed of healing was sown in my childhood. Inspired by the books, 'Ageless Body, Timeless Mind' and 'Quantum Healing', by Dr. Deepak Chopra, and advice from Dr. K Narendra, a friend of my father, who despite being a pediatrician, believed and incorporated the principles of Ayurveda, went on to study and practice Homeopathy.
          </Typography>
        </Grid>
      </Grid>
      <br />
    
      <Grid container style={{backgroundColor:"#FCD8D4"}}>
        
        <Grid item xs={12} sm={6}>
          <Typography variant="h1"  gutterBottom align="left" style={{fontFamily: 'Comfortaa', margin:"30px" }}>
            A doctor, who plays cricket...
          </Typography>
          <Typography variant="h4"  gutterBottom align="left" style={{fontFamily: 'Comfortaa', margin:"30px" }}>
          At the tender age of 10, I was introduced to the game of cricket, a time when the 'Master Blaster', the great Sachin Tendulkar was at the peak of his career.

          I began as a bowler, trying to bowl like Javagal Srinath. I quickly gave it up on my father's advice. He said, "anyone can be a bowler, but it takes something to be a batsman". Being an optimist, I became a part-time wicket-keeper batsman, which was the need of the hour for my team.

          In the game of cricket, I was always a hard hitter, always believed that there is more vroom over the fielder's head than on the ground. The hard-hitting allowed me to rise the ranks, went on to represent the school team. I continued to play cricket during my undergraduate days, despite people telling me that it is impossible to play cricket in medical school, due to the vast amount of reading. 

          The hard-hitting continued, clearing the boundaries which were too short to stop me, represented the medical school and the university. Even today, I continue to play professional cricket, for a team called 'Bengaluru Specialists'.          
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} style={{paddingTop:"100px", marginBottom:"50px"}}>
          <img src={ADoctorWhoPlaysCricket} alt="" width="500px" height="350px" style={{border:"2px solid black"}}/>
        </Grid>
      </Grid>
    
      <Grid container style={{backgroundColor:"#B2B1B9"}}>
        <Grid item xs={12} sm={6}>
          <img src={ADoctorWhoLiftsWeights} alt="" width="500px" height="450px" style={{marginTop:"50px",border:"2px solid black"}}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h1"  gutterBottom align="left" style={{fontFamily: 'Comfortaa',margin:"30px" }}>
            A Doctor, who lifts weights...
          </Typography>
          <Typography variant="h4"  gutterBottom align="left" style={{fontFamily: 'Comfortaa', margin:"30px" }}>
            As a hard-hitter in cricket, I needed to use a heavy bat to play the lofted shots. It soon became a challenge lifting the bat during longer innings. A friend of my father suggested a solution, he said: "start lifting a dumbell which is heavier than your bat, you will soon get used to it and the bat will feel lighter". This simple advice sowed the seed of resistance training.

            I have always fantasized about being fit and looking muscular, like Salman Khan to be precise. I consider myself fortunate to have stumbled across a copy of a book titled 'Perfect Physique', written by Professor K V Iyer. It introduced me to the vast world of physical culture. The chiseled physiques of people mentioned in the book and the way the information flowed, inspired me to take up strength training. 

            Even today, I continue to lift weights, in the quest for a perfect physique...
          </Typography>
        </Grid>
      </Grid>
     

      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography variant="h1"  gutterBottom align="left" style={{fontFamily: 'Comfortaa', margin:"30px" }}>
          Exercise is Medicine...
          </Typography>
          <Typography variant="h4"  gutterBottom align="left" style={{fontFamily: 'Comfortaa',margin:"30px" }}>
          The quest for a perfect physique continued to inspire me to learn the science behind exercise. I happened to read the Personal Trainer Manual from American Council on Exercise. The book taught me about the various aspects of testing, exercise prescription, and insight on the impact of exercise on health and disease. 

          As I continued to train, one fine day I woke up and got the thought that I am not built for mainstream medicine.

          Inspired by the book, I continued to read more about exercise and felt I should take it up as a career. As I continued to lift weights, I wanted to learn the science behind it.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={ExerciseIsMedicine} alt="" width="400px" height="500px" style={{border:"2px solid black"}}/>
        </Grid>
      </Grid>
      <br />

      <Grid container style={{backgroundColor:"#FCD8D4"}}>
        <Grid item xs={12} sm={6}>
          <img src={GymRatherThanHospital} alt="" width="500px" height="400px" style={{marginTop:"50px", border:"2px solid black"}}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h1"  gutterBottom align="left" style={{fontFamily: 'Comfortaa', margin:"30px" }}>
            A doctor who would rather work in a gym than a hospital...
          </Typography>
          <Typography variant="h4"  gutterBottom align="left" style={{fontFamily: 'Comfortaa',  margin:"30px" , marginBottom:"100px"}}>
          As I was preparing for postgraduate entrance exams, working at the same time in a hospital, I woke up with the thought that I wanted to be a gym trainer. I strongly believed that healthcare truly happens with exercise in the gym and only sick care happens in the hospital.

          I continued to build on that thought and happened to read an American Council on Exercise Personal Trainer Manual. The book taught me about the various aspects of testing, exercise prescription, and insight on the impact of exercise on health and disease. 

          At some point, I did approach my father to help me open a gym. But the idea was not well taken. But it sowed a seed for something better to come...Sports Medicine!
          </Typography>
        </Grid>
      </Grid>
     

      <Grid container style={{backgroundColor:"#B2B1B9"}}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h1"  gutterBottom align="left" style={{fontFamily: 'Comfortaa', margin:"30px" }}>
            A doctor who combined Sports and Medicine... 
          </Typography>
          <Typography variant="h4"  gutterBottom align="left" style={{fontFamily: 'Comfortaa',  margin:"30px" }}>
          As I despised the idea of getting into mainstream medicine, I happened to find an advertisement for a job as a Doctor in the Sports Authority of India (SAI). Being the explorer that I am, wanted to see what it was all about. So I quit the hospital job and joined the SAI.

          The job at the SAI was very fulfilling since it allowed me to be a Doctor and an athlete at the same time. Being on the field with the athletes, staying physically active, and exercise was encouraged as a part of the job. What more do I need?

          As I continued to work among the athletes and be one myself, I explored the possibility of combining Sports and Medicine. Fortunately, SAI did offer a postgraduate program in Sports Medicine. Voila, I even got selected...

          I quit my job and pursued my postgraduation in Sports Medicine at Netaji Subhas National Institute of Sports, Patiala, an esteemed institute known as the 'Mecca of Indian Sports' amongst the sports fraternity.

          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={DoctorWhoCombinedSportsAndMedicine} alt="" width="500px" height="400px" style={{marginTop:"50px", border:"2px solid black"}}/>
        </Grid>
      </Grid>
      <br />

      <Grid container>
        <Grid item xs={12} sm={6}>
          <img src={ExcerciseIsMedicine} alt="" width="550px" height="350px" style={{marginTop:"30px", border:"2px solid black"}}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h1"  gutterBottom align="left" style={{fontFamily: 'Comfortaa',  margin:"30px" }}>
            Exercise is Medicine...
          </Typography>
          <Typography variant="h4"  gutterBottom align="left" style={{fontFamily: 'Comfortaa', margin:"30px" }}>
          World over, sports medicine and exercise medicine are offered as a combined degree titled sport & exercise medicine. As a part of the postgraduate curriculum, I learned that exercise can be used to treat, and prevent various lifestyle-related medical disorders like obesity, diabetes, etc. 

          Although exercise has been mentioned as a part of treatment in the ancient science of Ayurveda, the concept of exercise medicine was still in infancy in India. I wanted to change that.

          With the western culture being imposed on us,  
          </Typography>
        </Grid>
      </Grid>
      <br />


      <Grid container style={{backgroundColor:"#FCD8D4"}}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h1"  gutterBottom align="left" style={{fontFamily: 'Comfortaa',  margin:"30px" }}>
            A doctor who does not prescribe medicine...
          </Typography>
          <Typography variant="h4"  gutterBottom align="left" style={{fontFamily: 'Comfortaa', margin:"30px" }}>
          I was a weakling when it came to health, born to doctor parents who got married late and had kids late in their late 30s. I suffered from my share of medical problems, like allergies, and was almost labeled an asthmatic for life.

          When I became a doctor, I often thought medicine would cure me. But I was wrong. All the medicines, like antibiotics, only made me sicker. Not a single doctor told me, 'medicine is not healthy'.

          One day, I woke up with this thought, "why does not medicine cure me of my health issues? If it does not cure, then what is the cure?"

          In my quest for health, I started researching, something that was not a part of conventional medicine (allopathy). I began to read books about alternative medicine, which was a small disregarded chapter in books of modern medicine.

          One of the first few books which I came across was 'What Your Doctor Doesn't Know About Nutritional Medicine May Be Killing You', by Ray D Strand. This book was a mind opener, which spoke about how nutrition could be used as medicine to treat, reverse, and prevent medical disorders. 

          Inspired by the book, I continued to dig deeper and found a solution. I regained my health back. I stopped falling sick often. I stopped my allergy medicine, stopped the antibiotics. I focussed on my diet, food for medicine.

          Thus began my journey of 'Nutritional Medicine' and I stopped prescribing allopathic medicine unless it was an emergency.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={DoctorWhoDoesNotPrescribeMedicine} alt="" width="550px" height="500px" style={{paddingTop:"100px",}}/>
        </Grid>
      </Grid>
      <br />





    </div>
  );
}
