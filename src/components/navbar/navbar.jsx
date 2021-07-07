import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import { SocialIcon } from 'react-social-icons';
import logo from './logo1.jpg'

function Navbar() {
  return (
      <AppBar>
        <Toolbar style={{backgroundColor:"#FF9933" , color:"black"}}>
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
                    <SocialIcon url="https://www.instagram.com/sportsmedicinedoctor/" target="_blank" style={{ height: 40, width: 40 ,marginRight:'10px'}}/>
                {/* </Grid>
                <Grid item sm={1}> */}
                    <SocialIcon url="https://www.facebook.com/SportsMedicineDoctor/" target="_blank" style={{ height: 40, width: 40 ,marginRight:'10px'}}/>
                {/* </Grid>
                <Grid item sm={1}> */}
                    <SocialIcon url="https://twitter.com/sportsdocindia" target="_blank" style={{ height: 40, width: 40 ,marginRight:'10px'}}/>
                {/* </Grid>
                <Grid item sm={1}> */}
                    <SocialIcon url="https://www.linkedin.com/in/sportsmedicinedoctor/" target="_blank" style={{ height: 40, width: 40 ,marginRight:'10px'}}/>
                </Grid>
            </Grid>
        </Toolbar>

        <Toolbar style={{backgroundColor:'black', color:"orange", fontSize:"20px"}}>
            <Grid container alignItems="center">
                <Grid  style={{ display: "flex", justifyContent: "flex-start" }} item sm={8}>

                  <a href="/" style={{textDecoration:"none"}}>
                      <img src={logo} alt=""  style={{borderRadius: '50%',height:'100px', width:'100px', margin:'10px', marginLeft:"50px"}}/>
                  </a>

                </Grid>
                <Grid item sm={1}>
                    <Typography variant="h5" style={{marginRight:'20px',fontFamily: 'Comfortaa',fontSize:"25px"}}>
                        About Me    
                    </Typography>
                </Grid>
                <Grid item sm={1}>
                    <Typography variant="h5" style={{fontFamily: 'Comfortaa',fontSize:"25px"}}>
                        Consult   
                    </Typography>
                </Grid>
                <Grid item sm={1}>
                    <Typography variant="h5" style={{fontFamily: 'Comfortaa',fontSize:"25px"}}>
                        Blog    
                    </Typography> 
                </Grid>
            </Grid>
        </Toolbar>
      </AppBar>    
  );
}

export default Navbar;