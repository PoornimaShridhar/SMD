// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import "./achievements.scss";
// import c1 from "./assets/c1.jpg";
// import c3 from "./assets/c3.jpg";
// import c4 from "./assets/c4.jpg";
// import v1 from "./assets/v1.png";
// import v2 from "./assets/v2.png";
// import Modal from '@material-ui/core/Modal';
// import BrandCardHeader from '@mui-treasury/components/cardHeader/brand';
// import TextInfoContent from '@mui-treasury/components/content/textInfo';
// import cx from 'clsx';
// import diploma from "./assets/diploma.jpg";
// import pd from "./assets/pd.jpg";
// import bachelordegree from "./assets/bachelordegree.jpg";
// import msc from './assets/msc.jpeg';
// import sai from './assets/sai.jpeg';
// import msrit from './assets/msrit.png';
// import nutri from './assets/nutri.png';
// import nutri_cert from './assets/nutri_cert.jpg';
// import { useN03TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n03';
// import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';
// import Table from 'react-bootstrap/Table'



// function rand() {
//     return Math.round(Math.random() * 20) - 10;
//   }
  
//     function getModalStyle() {
//     const top = 50 + rand();
//     const left = 50 + rand();
  
//     return {
//       top: `${top}%`,
//       left: `${left}%`,
//       transform: `translate(-${top}%, -${left}%)`,
//     };
//   }

// const useStyles = makeStyles((theme) => ({
//     large: {
//       width: theme.spacing(25),
//       height: theme.spacing(25),
//     },
//     root: {
//         maxWidth: 343,
//         height:400,
//         borderRadius: 20,
//         backgroundColor: "#ededeb",
//         transition: "transform 0.15s ease-in-out",
//         "&:hover": { transform: "scale3d(1.05, 1.05, 1)" }
//       },
//       content: {
//         padding: 24,
//       },
//     paper: {
//     position: 'absolute',
//     width: 1100,
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//     },
//   }));

// export default function Achievements(props) {
//   const classes = useStyles();
//   const [state, setState] = useState({
//     raised:false,
//     shadow:1,
//   })
//   const styles = useN03TextInfoContentStyles();
//   const shadowStyles = useLightTopShadowStyles();
//   const [open, setOpen] = React.useState(false);
//   const [modalStyle] = React.useState(getModalStyle);
//   const [image , setImage] = React.useState("");


//   const handleOpen = (img) => {
//     setOpen(true);
//     setImage(img);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   var credentials = [
//     {
//         heading: 'POST GRADUATE DIPLOMA IN SPORTS MEDICINE',
//         body: "Netaji Subhas National Institute of Sports, Patiala ",
//         logo: sai,
//         certificate: diploma
//     },
//     {
//         heading: 'BACHELOR OF MEDICINE & BACHELOR OF SURGERY',
//         body: "M S Ramaiah Medical College, Bangalore",
//         logo: msrit,
//         certificate: bachelordegree
//     },
//     {
//         heading: 'PROFESSIONAL TRAINING IN LOW CARBOHYDRATE HIGH FAT / KETOGENIC TREATMENT',
//         body: "Nutrition Network",
//         logo: nutri,
//         certificate: pd
//     },
//     {
//         heading: 'MSC (DIETETICS AND FOOD SERVICE MANAGEMENT)',
//         body: "Indira Gandhi National Open University (Currently Pursuing)",
//         logo: msc,
//         certificate: "",
//     }
// ]

//   return (
//       <div>
//      {/* <Grid container>
//          <Grid item xs={12} sm={4} style={{marginTop:"100px", paddingRight:"20px"}}>
//             <div class="ui-card1 ui-card">
//                 <img src={c1}/>
//                 <div class="description">
//                     <h3>International E-Conference on Doping in Sports</h3>
//                 </div>
//             </div>  
//             </Grid>
            
//             <Grid item xs={12} sm={4} style={{marginTop:"100px"}}>
//             <div class="ui-card2 ui-card">
//                 <img src={c3}/>
//                 <div class="description">
//                     <h3>International Webinar on Sports Nutrition</h3>                   
//                 </div>
//             </div>
//             </Grid>
//             <Grid item xs={12} sm={3} style={{marginTop:"100px"}}>
//             <div class="ui-card3 ui-card">
//                 <img src={c4}/>
//                 <div class="description">
//                     <h3>IAPES</h3>
//                 </div>
//             </div>  
//             </Grid>        
//         </Grid>
//         <Grid container>
         
//             <Grid item xs={12} sm={6} style={{marginTop:"30px", paddingRight:"20px"}} align="right">
//             <div class="ui-card4 ui-card">
//                 <img src={v1}/>
//                 <div class="description">
//                     <a href="https://www.youtube.com/watch?v=QoPGuFmPtNM" target="_blank">PEFI International E-Conference on Doping in Sports</a>
//                 </div>
//             </div>
//             </Grid>
//             <Grid item xs={12} sm={6} style={{marginTop:"30px"}}>
//             <div class="ui-card5 ui-card">
//                 <img src={v2}/>
//                 <div class="description">
//                 <a href="https://youtu.be/1W7CQlq6XxQ" target="_blank">Family Doctor | Kannada Serial | Full Episode - 8 | Zee Kannada</a>
                    
//                 </div>
//             </div>
//             </Grid>
            
//         </Grid> */}
//         <h1 style={{marginTop:'250px'}}>My Credentials</h1>
//         <Grid container style={{marginLeft:"50px",marginTop:'50px'}}>
//             {
//                 credentials.map( (cred, i) => 
                
//                 <Grid item xs={12} sm={3}>
//                     <Card className={cx(classes.root, shadowStyles.root)}>
//                         <BrandCardHeader
//                             image={cred.logo}
//                             extra={ cred.certificate === "" ? <a href="https://www.kinesissportsclinic.in/" target="_blank">Kinesis Sports Clinic</a> :<button type="button" onClick={()=>{handleOpen(cred.certificate)}}>View Certificate</button> } 
//                         />
//                         <CardContent className={classes.content}>
//                             <TextInfoContent
//                             classes={styles}
//                             heading= {cred.heading}
//                             body= {cred.body}
//                             />
//                         </CardContent>
//                     </Card>
//                     <Modal
//                         open={open}
//                         onClose={handleClose}
//                         aria-labelledby="simple-modal-title"
//                         aria-describedby="simple-modal-description"
//                     >
//                         <div style={modalStyle} className={classes.paper}>
//                             <img src={image} alt="Test"  width="1100" height="700" style={{position:"center"}}/>
//                         </div>
//                     </Modal>
//                 </Grid>
//                 )
//             }
//         </Grid>
//         <br /><br />

//         <h1 style={{marginTop:'100px'}}>My Achievements</h1>
//         <br />
//         <Table striped bordered hover>
//         {/* <thead>
//             <tr>
//             <th>#</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Username</th>
//             </tr>
//         </thead> */}
//         <tbody>
//             <tr>
//             {/* <td> <h3 style={{marginTop:'100px'}}>My Certificates</h3></td> */}
//             <td><div id="certhover"><img src={c1} alt="" height='200px' width='200px'/></div><br /> <h3>International E-Conference on Doping in Sports</h3></td>
//             <td><div id="certhover"><img src={nutri_cert} alt="" height='200px' width='200px'/></div><br /> <h3> Nutri Certificate</h3></td>
//             </tr>
//             <tr>
//             <td><div id="certhover"><img src={v1} alt="" height='200px' width='200px'/></div><br /> <h3> <a href="https://www.youtube.com/watch?v=QoPGuFmPtNM" target="_blank">PEFI International E-Conference on Doping in Sports</a> </h3></td>
//             <td><div id="certhover"><img src={v2} alt="" height='200px' width='200px'/></div><br /> <h3> <a href="https://youtu.be/1W7CQlq6XxQ" target="_blank">Family Doctor | Kannada Serial | Full Episode - 8 | Zee Kannada</a></h3></td>
//             </tr>
//             <tr>
//             <td>
//             <audio controls="controls" src="./podcast.mp3">
//                 Your browser does not support the HTML5 audio element.
//             </audio>
//             </td>
//             <td><div id="certhover"><img src={c3} alt="" height='200px' width='200px'/></div><br /> <h3>International E-Conference on Doping in Sports</h3></td>
//             </tr>
//         </tbody>
//         </Table>

//         <br /><br />

//         {/* <section>
//             <div class="container" style={{marginTop:'100px'}}>
//                 <div class="carousel">
//                     <input type="radio" name="slides" checked="checked" id="slide-1"/>
//                     <input type="radio" name="slides" id="slide-2"/>
//                     <input type="radio" name="slides" id="slide-3"/>
//                     <input type="radio" name="slides" id="slide-4"/>
//                     <input type="radio" name="slides" id="slide-5"/>
//                     <input type="radio" name="slides" id="slide-6"/>
//                     <ul class="carousel__slides">
//                         <li class="carousel__slide">
//                             <figure>
//                                 <div>
//                                     <img src={c1} alt=""/>
//                                 </div>
//                                 <figcaption>
//                                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                                     <span class="credit">Photo: Tim Marshall</span>
//                                 </figcaption>
//                             </figure>
//                         </li>
//                         <li class="carousel__slide">
//                             <figure>
//                                 <div>
//                                     <img src={c3} alt=""/>
//                                 </div>
//                                 <figcaption>
//                                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                                     <span class="credit">Photo: Christian Joudrey</span>
//                                 </figcaption>
//                             </figure>
//                         </li>
//                         <li class="carousel__slide">
//                             <figure>
//                                 <div>
//                                     <img src={c4} alt=""/>
//                                 </div>
//                                 <figcaption>
//                                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                                     <span class="credit">Photo: Steve Carter</span>
//                                 </figcaption>
//                             </figure>
//                         </li>
//                         <li class="carousel__slide">
//                             <figure>
//                                 <div>
//                                     <img src={v1} alt=""/>
//                                 </div>
//                                 <figcaption>
//                                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                                     <span class="credit">Photo: Aleksandra Boguslawska</span>
//                                 </figcaption>
//                             </figure>
//                         </li>
//                         <li class="carousel__slide">
//                             <figure>
//                                 <div>
//                                     <img src={v2} alt=""/>
//                                 </div>
//                                 <figcaption>
//                                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                                     <span class="credit">Photo: Rosan Harmens</span>
//                                 </figcaption>
//                             </figure>
//                         </li>
//                         <li class="carousel__slide">
//                             <figure>
//                                 <div>
//                                     <img src="https://picsum.photos/id/1052/800/450" alt=""/>
//                                 </div>
//                                 <figcaption>
//                                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                                     <span class="credit">Photo: Annie Spratt</span>
//                                 </figcaption>
//                             </figure>
//                         </li>
//                     </ul>
//                     <ul class="carousel__thumbnails">
//                         <li>
//                             <label for="slide-1"><img src={c1} alt=""/></label>
//                         </li>
//                         <li>
//                             <label for="slide-2"><img src={c3} alt=""/></label>
//                         </li>
//                         <li>
//                             <label for="slide-3"><img src={c4} alt=""/></label>
//                         </li>
//                         <li>
//                             <label for="slide-4"><img src={v1} alt=""/></label>
//                         </li>
//                         <li>
//                             <label for="slide-5"><img src={v2} alt=""/></label>
//                         </li>
//                         <li>
//                             <label for="slide-6"><img src="https://picsum.photos/id/1052/150/150" alt=""/></label>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </section> */}


        


//         </div>
//   );
// }

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from 'react-bootstrap/Button'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import "./achievements.scss";
import c1 from "./assets/c1.jpg";
import c3 from "./assets/c3.jpg";
import c4 from "./assets/c4.jpg";
import v1 from "./assets/v1.png";
import v2 from "./assets/v2.png";
import Modal from '@material-ui/core/Modal';
import BrandCardHeader from '@mui-treasury/components/cardHeader/brand';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import cx from 'clsx';
import diploma from "./assets/diploma.jpg";
import pd from "./assets/pd.jpg";
import bachelordegree from "./assets/bachelordegree.jpg";
import msc from './assets/msc.jpeg';
import sai from './assets/sai.jpeg';
import msrit from './assets/msrit.png';
import nutri from './assets/nutri.png';
import nutri_cert from './assets/nutri_cert.jpg';
import iapes from './assets/iapes.jpeg';
import { useN03TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n03';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';
import Table from 'react-bootstrap/Table'
import { Container } from '@material-ui/core';



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
        height:400,
        borderRadius: 20,
        backgroundColor: "#ededeb",
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" }
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

export default function Achievements(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    raised:false,
    shadow:1,
  })
  const styles = useN03TextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles();
  const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);
  const [image , setImage] = React.useState("");


  const handleOpen = (img) => {
    setOpen(true);
    setImage(img);
  };

  const handleClose = () => {
    setOpen(false);
  };

  var credentials = [
    {
        heading: 'POST GRADUATE DIPLOMA IN SPORTS MEDICINE',
        body: "Netaji Subhas National Institute of Sports, Patiala",
        logo: sai,
        certificate: diploma
    },
    {
        heading: 'BACHELOR OF MEDICINE & BACHELOR OF SURGERY',
        body: "M S Ramaiah Medical College, Bangalore",
        logo: msrit,
        certificate: bachelordegree
    },
    {
        heading: 'PROFESSIONAL TRAINING IN LOW CARBOHYDRATE HIGH FAT / KETOGENIC TREATMENT',
        body: "Nutrition Network",
        logo: nutri,
        certificate: pd
    },
    {
        heading: 'MSC (DIETETICS AND FOOD SERVICE MANAGEMENT)',
        body: "Indira Gandhi National Open University (Currently Pursuing)",
        logo: msc,
        certificate: "",
    }
]

  return (
      <div>
     {/* <Grid container>
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
            
        </Grid> */}
        <h1 style={{marginTop:'250px', fontFamily:"Comfortaa"}}>My Credentials</h1>
        {/* <Grid container style={{marginLeft:"50px",marginTop:'50px'}}>
            {
                credentials.map( (cred, i) => 
                
                <Grid item xs={12} sm={3}>
                    <Card className={cx(classes.root, shadowStyles.root)}>
                        <BrandCardHeader
                            image={cred.logo}
                            extra={ cred.certificate === "" ? <a href="https://www.kinesissportsclinic.in/" target="_blank">Kinesis Sports Clinic</a> :<button type="button" onClick={()=>{handleOpen(cred.certificate)}}>View Certificate</button> } 
                        />
                        <CardContent className={classes.content}>
                            <TextInfoContent
                            classes={styles}
                            heading= {cred.heading}
                            body= {cred.body}
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
                            <img src={image} alt="Test"  width="1100" height="700" style={{position:"center"}}/>
                        </div>
                    </Modal>
                </Grid>
                )
            }
        </Grid> */}
    <br />
        <Container>
        <Table striped bordered hover style={{border:"2px solid black"}}>
        <tbody>
            <tr style={{backgroundColor:"#FCD8D4"}}>
            {/* <td> <h3 style={{marginTop:'100px'}}>My Certificates</h3></td> */}
            <td><img src={sai} width="100px" height="100px" style={{borderRadius:'50%', border:"2px solid black"}}/><h3>POST GRADUATE DIPLOMA IN SPORTS MEDICINE</h3> <br /> <h4>Netaji Subhas National Institute of Sports, Patiala</h4></td>
            <td><div id="certhover"><img src={diploma} alt="" height='300px' width='300px' style={{border:"2px solid black"}}/></div></td>
            </tr>
            <tr style={{backgroundColor:"#FCD8D4"}}>
            <td><img src={msrit} width="100px" height="100px" style={{borderRadius:'50%', backgroundColor:"lightgoldenrodyellow",border:"2px solid black"}}/><h3>BACHELOR OF MEDICINE & BACHELOR OF SURGERY</h3> <br /> <h4>M S Ramaiah Medical College, Bangalore</h4></td>
            <td><div id="certhover"><img src={bachelordegree} alt="" height='300px' width='300px' style={{border:"2px solid black"}}/></div></td>
            </tr>
            <tr style={{backgroundColor:"#FCD8D4"}}>
            <td><img src={nutri} width="100px" height="100px" style={{borderRadius:'50%', backgroundColor:"lightgoldenrodyellow",border:"2px solid black"}}/><h3>PROFESSIONAL TRAINING IN LOW CARBOHYDRATE HIGH FAT / KETOGENIC TREATMENT</h3> <br /> <h4>Nutrition Network</h4></td>
            <td><div id="certhover"><img src={pd} alt="" height='300px' width='300px' style={{border:"2px solid black"}}/></div></td>
            </tr>
            <tr style={{backgroundColor:"#FCD8D4"}}>
            <td><img src={msc} width="100px" height="100px" style={{borderRadius:'50%', backgroundColor:"lightgoldenrodyellow",border:"2px solid black"}}/><h3>MSC (DIETETICS AND FOOD SERVICE MANAGEMENT)</h3> <br /> <h4>Indira Gandhi National Open University (Currently Pursuing)</h4></td>
            <td></td>
            </tr>
            
        </tbody>
        </Table>
        </Container>
        <br /><br /><br />

<hr />

        <h1 style={{marginTop:'100px',fontFamily:"Comfortaa"}}>My Achievements</h1>
        <br />
        <Container maxWidth="xl">

            <Grid container>
                <Grid item xs={12} sm={4}>

                <div class="responsive">
                    <div class="gallery">
                        <img src={c1}  width="500" height="400" style={{border:"2px solid black"}}/>
                    </div>
                </div>

                </Grid>

                <Grid item xs={12} sm={4}>

                <div class="responsive">
                    <div class="gallery">
                        <img src={nutri_cert}  width="500" height="400" style={{border:"2px solid black"}}/>
                    </div>
                </div>

                </Grid>

                <Grid item xs={12} sm={4}>

                <div class="responsive">
                    <div class="gallery">
                    <div class="desc"><a href="https://www.youtube.com/watch?v=QoPGuFmPtNM" target="_blank">
                         <img src={v1} width="500" height="400" style={{border:"2px solid black"}}/></a></div>
                        <br />
                        <div class="desc"><a href="https://www.youtube.com/watch?v=QoPGuFmPtNM" target="_blank">
                        <Button variant="primary" size="lg"> PEFI International E-Conference on Doping in Sports</Button></a></div>
                    </div>
                </div>

                </Grid>
               
                <Grid item xs={12} sm={4} style={{marginTop:'20px'}}>

                <div class="responsive">
                    <div class="gallery">
                    <div class="desc"><a href="https://youtu.be/1W7CQlq6XxQ" target="_blank"> 
                    <img src={v2}  width="500" height="400"/></a></div>
                        <div class="desc"><a href="https://youtu.be/1W7CQlq6XxQ" target="_blank">
                            <br />
                           <Button variant="primary" size="lg"> Family Doctor | Kannada Serial | Full Episode - 8 | Zee Kannada</Button></a></div>
                    </div>
                </div>

                </Grid>

                <Grid item xs={12} sm={4} style={{marginTop:'20px'}}>

                <div class="responsive">
                    <div class="gallery">
                        <img src={c3}  width="500" height="400" style={{border:"2px solid black"}}/>
                    </div>
                </div>

                </Grid>

                <Grid item xs={12} sm={4} style={{marginTop:'20px'}}>

                <div class="responsive">
                    <div class="gallery">
                        <img src={iapes}  width="500" height="400" style={{border:"2px solid black"}}/>
                    </div>
                </div>

                </Grid>

            </Grid>

        </Container>
        

        <br /><br />

        </div>
  );
}