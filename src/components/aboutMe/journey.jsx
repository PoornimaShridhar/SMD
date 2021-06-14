import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import SchoolIcon from '@material-ui/icons/School';
import { HiOutlineLightBulb } from "react-icons/hi";
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import { FaUserGraduate, FaStethoscope } from "react-icons/fa";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import WorkIcon from '@material-ui/icons/Work';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from 'react-bootstrap/Container';
import { AiOutlineQuestion } from "react-icons/ai";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { GiStairsGoal } from "react-icons/gi";

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
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2002
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant="outlined">
            <SchoolIcon fontSize="large"/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              College
            </Typography>
            <Typography>I joined M S Ramaiah Medical College, Bangalore in September 2002. I was an average student in class who was more inclined towards playing cricket and going to the gym than academics. Although I progressed steadily with ups and down, it never really struck me why I was studying what I was studying. The question of 'why?' remained throughout my undergraduate career.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <HiOutlineLightBulb size='35' />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper} align="center">
            <Typography variant="h6" component="h1">
              How it all began...
            </Typography>
            <Typography>One single class remains etched in my memory forever. It was a class of preventive and social medicine. A few of us were attending the class and the teacher prompted us to ask 'any' question. A fellow student nudged me to ask 'what is the use of studying preventive and social medicine?'. I gathered the courage and asked the question, the entire class looked at me in surprise that I had actually asked the question that was in their minds. The teacher answered, 'why treat diseases when you can prevent it?'. That thought stuck to my mind. That was my tuning towards 'preventive medicine'.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <SportsCricketIcon fontSize="large"/>
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              My experience
            </Typography>
            <Typography>I continued my journey of fitness and cricket throughout my medical career represented the college and university. I was haunted with frequent back pains. I saw half a dozen orthopedic doctors who failed to diagnose my condition. An angel in disguise, a trainee physiotherapist diagnosed it correctly and prescribed 'exercise therapy'. The pain which lingered for years, disappeared. That was my personal experience about how exercise can heal the pain.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2008
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <FaUserGraduate size='35'/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper} align="center">
            <Typography variant="h6" component="h1">
              Graduation and Life after that
            </Typography>
            <Typography>I graduated in April 2008, started to work with my father in a surgical super-specialty hospital. Although I was inclined towards being a surgeon, was good at it as well, the thought of working in a hospital did not seem very exciting to me. I did not want to see sick people every day, it was depressing. I continued to physically and mentally train myself hoping to join the Armed Forces. I stumbled upon a gym personal trainer's manual which taught me the science of exercise. My interest in exercise and training grew over a period of time and one fine day I decided that mainstream medicine is not my cup of tea since I hated working in a hospital set-up, decided that I wanted to make a career out of fitness and sports which I loved.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant="outlined">
            <WorkIcon fontSize="large"/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              My First Job
            </Typography>
            <Typography>In December 2009, I started working with Sports Authority of India, as a Medical Officer prior to Commonwealth Games. That is where I got exposed to high end athletes. I worked for 6 months</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2012-2015
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <FaUserGraduate size='35'/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper} align="center">
            <Typography variant="h6" component="h1">
              Post-Graduation
            </Typography>
            <Typography> I got selected to pursue post graduation at the prestigious Netaji Subhas National Institute of Sports, Patiala which is widely regarded as the 'Mecca of Indian Sports'. It also gave me the opportunity to work with the finest athletes of the country.In May 2012, I completed the course. As it turned out, there were no ready made opportunities in Sports Medicine. I had to carve a niche for myself out of nothing. I started to consult privately but had to work in a corporate setup in the clinical research field to earn a living.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2015
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <FaStethoscope size="35"/>
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Birth of Kinesis
            </Typography>
            <Typography>I felt the need to extend my services to the recreational athletes too and founded Kinesis Sports Clinic, a signature sports clinic in Bangalore, the first of it's kind.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <AiOutlineQuestion size="35"/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper} align="center">
            <Typography variant="h6" component="h1">
              Food or Medicine?
            </Typography>
            <Typography>Over a period of years, I too struggled with my own medical conditions for which I could not find a cure in allopathy. I started to research other forms of medicine like Ayurveda, Homeopathy etc. It was during this research that I found that the principles of Ayurveda were so much in tune with prevention of disease that the curative aspect. Nutrition and Lifestyle played such an important role, more than I had ever imagined. That is when the concept of Nutritional Medicine, using food as medicine, dawned upon me.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant="outlined">
            <FavoriteBorderIcon  fontSize="large"/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Health and Lifestyle
            </Typography>
            <Typography>My health condition began to improve as I began to incorporate the principles of Intermittent Fasting (IF), regular exercise and modified lifestyle into my life. What started as a quest to improve my health, became a passion to improve the health of the humankind. I began to help people in their fitness journey and to enable them to improve their quality of life.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2017
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LocalHospitalIcon fontSize="large" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper} align="center">
            <Typography variant="h6" component="h1">
              MediFit
            </Typography>
            <Typography> In the year 2017, we as a team founded the MediFit program (previously known at GetFit program) on the principles Nutritional Medicine, Exercise Medicine and Lifestyle Medicine. We continue to change people's live for the better through innovation.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <GiStairsGoal size='35'/>
          </TimelineDot>
         
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              My Aim
            </Typography>
            <Typography>As of today, my life's calling is to improve the health of humankind by treating, preventing and reversing medical disorders with Nutrition, Exercise and Lifestyle!</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      
    </Timeline>
    </Container>
  );
}
