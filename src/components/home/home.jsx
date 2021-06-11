import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import img from './doc.jpg';
import doc from "./diploma.jpg";
import msc from './msc.jpeg';
import sai from './sai.jpeg';
import msrit from './msrit.png';
import nutri from './nutri.png';
import eash from "./eash.webp";
import person from './person.png';
// import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Container from 'react-bootstrap/Container';
import { AiOutlineInstagram , AiOutlineFacebook, AiFillTwitterCircle, AiFillLinkedin} from "react-icons/ai";  
import cx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BrandCardHeader from '@mui-treasury/components/cardHeader/brand';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useN03TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n03';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';    
import Modal from '@material-ui/core/Modal';
// import Carousel from 'react-bootstrap/Carousel';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';

function Item(props)
{
    const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    return (
        <Paper>
            <Grid container >
                <Grid item xs={12} sm={3}>
                    {/* <img width="300" height="300" src={props.item.avatar} alt=""/> */}
                    <Avatar alt="Dr. Bharath Kumar" className={classes.large} src={props.item.avatar} style={{marginLeft:"120px"}}/>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Typography variant="h5"  gutterBottom align="left" style={{fontFamily: 'Roboto Slab', fontSize:'20px', margin:"30px" }}>
                    {props.item.name}
                    </Typography>
                    <Typography variant="h6" gutterBottom align="left" style={{fontFamily: 'Roboto Slab', fontSize:'20px', margin:"30px" }}>
                    {props.item.description}
                    </Typography>
                    <Button onClick={handleOpen}>Read More...</Button>
                </Grid>
            </Grid>
            <Modal
                        open={open}
                        onClose={handleClose}
                        // aria-labelledby="simple-modal-title"
                        // aria-describedby="simple-modal-description"
                    >
                            <div style={modalStyle} className={classes.paper}>
                            <Typography variant="h6" gutterBottom align="left" style={{fontFamily: 'Roboto Slab', fontSize:'20px', margin:"30px" }}>
                            {props.item.rm}
                            </Typography>
                            </div>
                    </Modal>
        </Paper>
    )
}

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(25),
      height: theme.spacing(25),
    },
    root: {
        maxWidth: 343,
        borderRadius: 20,
        backgroundColor: "#ededeb",
      },
      content: {
        padding: 24,
      },
    paper: {
    position: 'absolute',
    width: 1100,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    },
  }));

function Home() {
  const classes = useStyles();
  const styles = useN03TextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles();
  const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  var items = [
    {
        name: "Vijayindra Prabhakar",
        description: "Dear all, my name is Vijayindra P. and I have been running for more than an year now. I have participated in quite a few 10K and 5K runs and I intend to run a half marathon soon.Around 7 months back, I fell and injured my left shoulder while running. ",
        avatar: person,
        rm:"I slipped on a stone and fell on my shoulder and had a very tough time moving my shoulder. My range of motion had become so weak that I used to experience excruciating pain even while externally rotating to 30 degrees. I met many doctors who were specialized in Orthopedics. They had a look at the x-ray of my shoulder and came to a conclusion that the only way they can treat my shoulder was through an invasive route (surgical method). I was somehow hesitant to get my shoulder operated and was looking out for a person who could treat my shoulder through a noninvasive method. In the ensuing period, I got my shoulder treated at a known Ayurvedic Clinic which did not help me either.One day while sipping coffee at Hotel Maiyas, I came across Kinesis Sports Clinic which was close-by and thought of visiting the doctor. I met Dr. Bharat Kumar who in turn had a look at my left shoulder and ordered for an ultrasound of the same. My ultrasound did reveal some tears, but the doctor said he could give it a try in treating nonsurgically.I started visiting Dr. Bharat Kumar everyday and he started treating my shoulder in the form of various exercises. Initially, I had a tough time to move my shoulder, but over time, I was able to rotate my shoulder internally and externally. With each day, I was able to slowly increase my range of motion from 30 degrees to 50, 60, 70, and 80 degrees, respectively. Within 8 weeks, I was able to externally rotate my shoulder to 90 degrees.It was Dr. Bharat Kumar who took great care in treating my shoulder and I will be ever so grateful to him. But for him, I would have ended with surgical option which would cost me lot of money and it would have taken more time to heal.From last month or so, Dr. Bharat has been treating my knees as I had developed severe knee pain. My core strength had become extremely weak and he started teaching many knee strengthening exercises which I have been doing at home and my pain has reduced to a large extent now. I was not able to do planks for 30 seconds earlier, but now I can reach up to 2 minutes. He has taught me to do squats, lunges, step-ups, side kicks, dead lifts and other very useful exercises. I ran a 10K event at Jayanagar last week and I could finish my 10K in under 60 minutes. My previous best timings was 63 minutes and I owe my success to Dr. Bharath.I have not written this article to get some mileage for Dr. Bharath Kumar. I can only say he is the best person to contact if you have any sports related injuries as he takes great care in treating them. He is one person who is not after money. There were many days wherein he used to come all the way from his home just to treat me and he has been charging nominal fees from me and others.Dr. Bharat Kumar can be contacted at 8884244200. Post my visits, many of my friends who are into running have visited him and they have reaped rich benefits after meeting him.I once again thank you, Dr. Bharat Kumar for all the trouble you took in treating my shoulder and knees. I wish you good luck and may you be one of the most sought after doctors as far as the sports related injuries are concerned."
    },
    {
        name: "Dr. Eash Hoskote",
        description: "Dr Bharath is an excellent sports Doctor who relies more on clinical diagnosis than investigative diagnosis.I had a persistent Knee problem for years and was slowly going into depression and overweight.He made a simple diagnosis and the treatment was very simple and advised changes in lifestyle.",
        avatar: eash,
        rm:"Small steps towards healthy lifestyle and the Whatsapp group where he offers lots of info was the turning point.Keep up the good work Doctor 💪.God Bless you."
    },
    {
        name: "Jayanta Ghosh",
        description: "Let me start by saying that Individuals like Dr. Bharath are boon to society. You don’t find many professionals in sports medicine field and even if we do they may not be easily accessible. I chanced upon him while I was searching for sports medicine professional since my tennis elbow treatment had gone wrong while consulting another famous ortho doctor. I had developed a secondary tear in the elbow area. I was suffering because of this for almost half a year then. I met Dr Bharath and he first listened (he is a very good patient listener) to everything that had transpired and then explained why it happened.",
        avatar: person,
        rm:"He also explained the exercises required to heal the tennis elbow issue and as to how those exercises will heal the affected area. It has been 2 months now I have recovered 80%. When I met him I did not even have strength to do a hand shake with firm grip and today because of the treatment by Dr. Bharath I have regained that strength. I and my wife also have started consulting him for fat loss and overall health well being for a month now. There are very positive results and I have lost almost 1.5 kgs of fat mass. The programmatic approach of step by step capturing the data and auditing it is the most important aspect here which guides an individual if something goes wrong. I had been into fat loss journey for 3 years now however my journey for last 1 year had become stagnant. I did not know why! Dr. Bharath conducted few blood parameter tests and we identified the reason. It is a lifetime journey of adhering to healthy lifestyle and we learn everyday from him and his team. Dr. Bharath patiently responds to all our questions <Sorry Sir, I bug you with too many questions :-) > and explains the concept behind it. I am really thankful that we found him."
    }
]

  return (
     <div>
    <Container>
        
        <Col style={{}}>
            <Row>
            {/* <Avatar alt="Dr. Bharath Kumar" className={classes.large} src={img} style={{top:"150px", position:"absolute"}}/> */}
            <img src={img}  width="300" height="300"  style={{verticalAlign:"top", position:"center", marginTop:"100px"}}/>
            </Row>
            <Row>
                <Typography variant="h3"  gutterBottom style={{fontFamily: 'Roboto Slab'}}>
                    DR. BHARATH KUMAR B
                    
                </Typography>
                <Typography variant="h5"  gutterBottom style={{fontFamily: 'Roboto Slab'}}>
                    <i>MBBS, PGDSM (Sports Medicine)</i>
                </Typography>
            </Row>
            <br/>
            <Row>
            <AiOutlineInstagram size="40"/>
            <AiOutlineFacebook size="40"/>
            <AiFillTwitterCircle size="40"/>
            <AiFillLinkedin size="40"/>
               
            </Row>
        </Col>

       



    </Container>  
    <br/>
    <br/>
    <Container fluid="true">
    <Grid container spacing={3} style={{backgroundColor:"#d9d8d5"}}>
            <Grid item xs={12} sm={7}>
            <Typography  variant="h6" align="left" style={{fontFamily: 'Roboto Slab', fontSize:'20px', margin:"30px" , fontWeight:"500"}}>
                
                    This is Dr. Bharath Kumar B. I am an Allopathic Doctor specialized in Sports Medicine. I graduated from the prestigious 
                    Netaji Subhas National Institute of Sports. 
                    I am the Founder, Director of Kinesis Sports Clinic and Creator & Program Director of MediFit, an online Medical Weight Loss program.
              
                    
                    </Typography>
            </Grid>
            <Grid item xs={12} sm={1}>
                                <div style={{ borderWidth: 1, height: 175, backgroundColor: 'black', width: 5, marginLeft: 'auto', marginRight: 'auto' }}></div>
                                </Grid>                  

            <Grid item xs={12} sm={4}>
            <Typography variant="h6" align="left" style={{fontFamily: 'Roboto Slab', fontSize:'20px', margin:"30px" }}>
                    My mission is to help the athletes to win Gold medals at the Olympics. He strives to create a Fit India through 
                    Nutrition, Exercise, and Lifestyle. He envisions a world free from lifestyle disorders!
                    </Typography>
            </Grid>
        </Grid>

        
    </Container>
    
    <br/><br/>
    <Container>
    <Grid container>
            <Grid item xs={12} >
            <Typography  variant="h3" align="center" style={{fontFamily: 'Roboto Slab', margin:"30px" , fontWeight:"500"}}>
                
                    My Credentials
                    
                    </Typography>
            </Grid>
     </Grid>
     <br/>
     <br/>
     <Grid container style={{marginLeft:"50px"}}>
            <Grid item xs={12} sm={3}>
                            <Card className={cx(classes.root, shadowStyles.root)}>
                    <BrandCardHeader
                        image={sai}
                        extra={ <button type="button" onClick={handleOpen}>
                        View Certificate
                    </button>
                    }
                    />
                    
                    <CardContent className={classes.content}>
                        <TextInfoContent
                        classes={styles}
                        //   overline={'FACEBOOK INC.'}
                        heading={'POST GRADUATE DIPLOMA IN SPORTS MEDICINE'}
                        body={
                            'Netaji Subhas National Institute of Sports, Patiala'
                        }
                        />
                    </CardContent>
                    </Card>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                            <div style={modalStyle} className={classes.paper}>

                                <img src={doc} alt="" width="1100" height="700" style={{position:"center"}}/>
                            </div>
                    </Modal>
            </Grid>
            <Grid item xs={12} sm={3}>
                            <Card className={cx(classes.root, shadowStyles.root)}>
                    <BrandCardHeader
                        image={msrit}
                        extra={ <button type="button" onClick={handleOpen}>
                        View Certificate
                    </button>
                    }
                    />
                    
                    <CardContent className={classes.content}>
                        <TextInfoContent
                        classes={styles}
                        //   overline={'FACEBOOK INC.'}
                        heading={'BACHELOR OF MEDICINE & BACHELOR OF SURGERY'}
                        body={
                            'M S Ramaiah Medical College, Bangalore'
                        }
                        />
                    </CardContent>
                    </Card>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                            <div style={modalStyle} className={classes.paper}>

                                <img src={doc} alt="" width="1100" height="700" style={{position:"center"}}/>
                            </div>
                    </Modal>
            </Grid>
            <Grid item xs={12} sm={3}>
                            <Card className={cx(classes.root, shadowStyles.root)}>
                    <BrandCardHeader
                        image={nutri}
                        extra={ <button type="button" onClick={handleOpen}>
                        View Certificate
                    </button>
                    }
                    />
                    
                    <CardContent className={classes.content}>
                        <TextInfoContent
                        classes={styles}
                        //   overline={'FACEBOOK INC.'}
                        heading={'PROFESSIONAL TRAINING IN LOW CARBOHYDRATE HIGH FAT / KETOGENIC TREATMENT'}
                        body={
                            'Nutrition Network'
                        }
                        />
                    </CardContent>
                    </Card>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                            <div style={modalStyle} className={classes.paper}>

                                <img src={doc} alt="" width="1100" height="700" style={{position:"center"}}/>
                            </div>
                    </Modal>
            </Grid>
            <Grid item xs={12} sm={3}>
                            <Card className={cx(classes.root, shadowStyles.root)}>
                    <BrandCardHeader
                        image={msc}
                        extra={ <button type="button" onClick={handleOpen}>
                        View Certificate
                    </button>
                    }
                    />
                    
                    <CardContent className={classes.content}>
                        <TextInfoContent
                        classes={styles}
                        //   overline={'FACEBOOK INC.'}
                        heading={'MSC (DIETETICS AND FOOD SERVICE MANAGEMENT)'}
                        body={
                            'Indira Gandhi National Open University (Currently Pursuing)'
                        }
                        />
                    </CardContent>
                    </Card>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                            <div style={modalStyle} className={classes.paper}>

                                <img src={doc} alt="" width="1100" height="700" style={{position:"center"}}/>
                            </div>
                    </Modal>
            </Grid>
     </Grid>
    </Container>
    <br/><br/><br/>
    <Container>
        <Grid container >
                <Grid item xs={12} >
                <Typography  variant="h3" align="center" style={{fontFamily: 'Roboto Slab', margin:"30px" , fontWeight:"500"}}>
                    
                        Testimonials
                        
                </Typography>
                </Grid>
        </Grid>
           <br/><br/>
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        
    </Container>
    
    </div>
  );
}

export default Home;