import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function Navbar() {
  return (
      <AppBar style={{backgroundColor:"#FF5252" , color:"black", fontSize:"20px"}}>
        <Toolbar>
            <Grid container>
                <Grid  style={{ display: "flex", justifyContent: "flex-start" }} item sm={6}>
                  <Typography variant="h5" >
                    Logo
                  </Typography>
                </Grid>
                <Grid item sm={1}>
                    About Me
                </Grid>
                <Grid item sm={1}>
                    Achievements
                </Grid>
                <Grid item sm={1}>
                    Consult
                </Grid>
                <Grid item sm={1}>
                    Kinesis
                </Grid>
                <Grid item sm={1}>
                    Medifit
                </Grid>
                <Grid item sm={1}>
                    Blog
                </Grid>
            </Grid>
        </Toolbar>
      </AppBar>    
  );
}

export default Navbar;