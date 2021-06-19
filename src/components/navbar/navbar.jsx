import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import logo from './assets/logo1.jpg'
import Journey from '../aboutMe/journey'
import './style.css'

function Navbar() {

  return (
      <AppBar style={{backgroundColor:"#FF5252" , color:"black", fontSize:"20px"}}>
        <Toolbar>
            <Grid container alignItems="center">
                <Grid  style={{ display: "flex", justifyContent: "flex-start" }} item sm={5}>
                    <a href="/" style={{textDecoration:"none"}}><img src={logo} alt=""  style={{borderRadius: '50%',height:'100px', width:'100px', margin:'10px', marginLeft:"50px"}}/>
                    </a> 
                  
                </Grid>
                <Grid item sm={1} style={{marginRight:"40px"}}>
                   <a href="/aboutMe" style={{textDecoration:"none", fontSize:"25px"}}>About Me</a> 
                </Grid>
                <Grid item sm={1} style={{marginRight:"40px"}}>
                    <a href="/achievements" style={{textDecoration:"none", fontSize:"25px"}}>Achievements</a>
                </Grid>
    
                <Grid item sm={1}>
                    <a href="/consult" style={{textDecoration:"none", fontSize:"25px"}}>Consult</a> 
                </Grid>
                <Grid item sm={1}>
                    <a href="https://www.kinesissportsclinic.in/" style={{textDecoration:"none", fontSize:"25px"}} target="_blank">Kinesis</a> 
                </Grid>
                <Grid item sm={1} style={{fontSize:"25px"}}>
                    Medifit
                </Grid>
                <Grid item sm={1}>
                    <a href="/blog" style={{textDecoration:"none", fontSize:"25px"}}>Blog</a> 
                </Grid>
            </Grid>
        </Toolbar>
      </AppBar>    
  );
}

export default Navbar;