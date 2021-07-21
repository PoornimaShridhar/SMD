import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import { SocialIcon } from 'react-social-icons';
import logo from './logo1.jpg'
import LoginHooks from '../login/LoginHooks';
import LogoutHooks from "../logout/LogoutHooks";
import Avatar from '@material-ui/core/Avatar';
import React, { useState, useEffect } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

function Navbar() {
    const classes = useStyles();
    const [user_image, setUser_image] = useState(0);
    const [user_name, setUser_name] = useState("");
    useEffect(() => {
        setUser_image(localStorage.getItem("user_image"))
        setUser_name(localStorage.getItem("user_name"))
        console.log("user_name",user_name)
    })
  return (
      <AppBar>
        <Toolbar style={{backgroundColor:"#F68D91" , color:"black"}}>
            <Grid container>
                <Grid  style={{ display: "flex", justifyContent: "flex-start"}} item sm={3}>
                    <EmailIcon fontSize='large'/>
                  <Typography variant="h5" style={{marginLeft:'10px',fontFamily: 'Comfortaa',fontSize:"20px"}}>
                      drbkb@sportmedicinedoctor.in
                  </Typography>
                </Grid>
                <Grid style={{ display: "flex", justifyContent: "flex-start" }} item sm={6}>
                    <PhoneAndroidIcon fontSize='large'/>
                    <Typography variant="h5" style={{marginLeft:'10px',fontFamily: 'Comfortaa',fontSize:"20px"}}>
                        +91-9482861070
                    </Typography> 
                </Grid>
                <Grid item sm={3}>
                    <SocialIcon url="https://www.instagram.com/sportsmedicinedoctor/" target="_blank" style={{ height: 40, width: 40 ,marginRight:'10px', }}/>
                {/* </Grid>
                <Grid item sm={1}> */}
                    <SocialIcon url="https://www.facebook.com/SportsMedicineDoctor/" target="_blank" style={{ height: 40, width: 40 ,marginRight:'10px', }}/>
                {/* </Grid>
                <Grid item sm={1}> */}
                    <SocialIcon url="https://twitter.com/sportsdocindia" target="_blank" style={{ height: 40, width: 40 ,marginRight:'10px',}}/>
                {/* </Grid>
                <Grid item sm={1}> */}
                    <SocialIcon url="https://www.linkedin.com/in/sportsmedicinedoctor/" target="_blank" style={{ height: 40, width: 40 ,marginRight:'10px'}}/>
                </Grid>
            </Grid>
        </Toolbar>

        <Toolbar style={{backgroundColor:'black', color:"white", fontSize:"20px"}}>
            <Grid container alignItems="center">
                <Grid  style={{ display: "flex", justifyContent: "flex-start" }} item sm={7}>

                  <a href="/" style={{textDecoration:"none"}}>
                      <img src={logo} alt=""  style={{borderRadius: '50%',height:'100px', width:'100px', margin:'10px', marginLeft:"50px"}}/>
                  </a>

                </Grid>
                <Grid item sm={1}>
                    <Typography variant="h5" style={{marginRight:'20px',fontFamily: 'Comfortaa',fontSize:"30px"}}>
                        About Me    
                    </Typography>
                </Grid>
                <Grid item sm={1}>
                    <Typography variant="h5" style={{fontFamily: 'Comfortaa',fontSize:"30px"}}>
                        Consult   
                    </Typography>
                </Grid>
                <Grid item sm={1}>
                    <Typography variant="h5" style={{fontFamily: 'Comfortaa',fontSize:"30px"}}>
                        Blog    
                    </Typography> 
                </Grid>
                <Grid item sm={1}>
                    <Avatar src={user_image} />
                   
                </Grid>
                <Grid item sm={1}>
                {/* <LoginHooks/> */}
                    {user_name!="undefined"?
                    user_name==null? <LoginHooks />:
                   <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" style={{backgroundColor:"black", color:"white", fontSize:"30px"}} type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {user_name}
                        </button>
                   <div class="dropdown-menu" aria-labelledby="dropdownMenu2" style={{backgroundColor:"grey", fontSize:"25px", alignItems:"center"}}>
                       <LogoutHooks />
                   </div>
                 </div>
                        :<LoginHooks />
                    }
                   
                </Grid>
            </Grid>
        </Toolbar>
      </AppBar>    
  );
}

export default Navbar;