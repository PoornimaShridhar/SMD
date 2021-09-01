import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import logo from './logo1.jpg'
import CopyrightIcon from '@material-ui/icons/Copyright';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { SocialIcon } from 'react-social-icons';
import Fab from '@material-ui/core/Fab';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: theme.palette.background.paper,
//     width: 500,
//     position: 'relative',
//     minHeight: 200,
//   },
//   fab: {
//     position: 'absolute',
//     bottom: theme.spacing(2),
//     right: theme.spacing(2),
//   },
  
// }));

function Footer() {
  // const classes = useStyles();

  // const fabs = [
  //   {
  //     color: 'primary',
  //     className: classes.fab,
  //     icon: <AddIcon />,
  //     label: 'Add',
  //   },
  //   {
  //     color: 'secondary',
  //     className: classes.fab,
  //     icon: <EditIcon />,
  //     label: 'Edit',
  //   },
  //   {
  //     color: 'inherit',
  //     className: clsx(classes.fab, classes.fabGreen),
  //     icon: <UpIcon />,
  //     label: 'Expand',
  //   },
  // ];
  return ( 
    // <div style={{backgroundColor:'black', color:'#F59300'}}>
       
       
        // <AppBar>
        // <Toolbar style={{backgroundColor:"#BEBEBE" , color:"black",}} position="absolute">
        //     <Grid container>
               
        //         <Grid item sm={3}>
        //             <SocialIcon url="https://www.instagram.com/sportsmedicinedoctor/" target="_blank" style={{ height: 40, width: 40 ,marginRight:'10px', }}/>
        //         {/* </Grid>
        //         <Grid item sm={1}> */}
        //             <SocialIcon url="https://www.facebook.com/SportsMedicineDoctor/" target="_blank" style={{ height: 40, width: 40 ,marginRight:'10px', }}/>
        //         {/* </Grid>
        //         <Grid item sm={1}> */}
        //             <SocialIcon url="https://twitter.com/sportsdocindia" target="_blank" style={{ height: 40, width: 40 ,marginRight:'10px',}}/>
        //         {/* </Grid>
        //         <Grid item sm={1}> */}
        //             <SocialIcon url="https://www.linkedin.com/in/sportsmedicinedoctor/" target="_blank" style={{ height: 40, width: 40 ,marginRight:'10px'}}/>
        //         </Grid>
        //     </Grid>
        // </Toolbar>
        // </AppBar>
        
    // </div> 

      <div style={{backgroundColor:"#231F20", paddingTop:"1vw"}}>
        <Fab style={{paddingLeft:"10px", marginRight:"0.5vw"}} >
             <SocialIcon url="https://www.instagram.com/sportsmedicinedoctor/" target="_blank" style={{ height: 40, width: 40 ,marginRight:'10px', }}/>
            </Fab> 
             <Fab style={{paddingLeft:"10px", marginRight:"0.5vw"}}>
             <SocialIcon url="https://www.facebook.com/SportsMedicineDoctor/" target="_blank" style={{ height: 40, width: 40 ,marginRight:'10px', }}/>
          </Fab> 
           <Fab style={{paddingLeft:"10px", marginRight:"0.5vw"}}>
             <SocialIcon url="https://twitter.com/sportsdocindia" target="_blank" style={{ height: 40, width: 40 ,marginRight:'10px',}}/>
           </Fab>  
           <Fab style={{paddingLeft:"10px"}}>
             <SocialIcon url="https://www.linkedin.com/in/sportsmedicinedoctor/" target="_blank" style={{ height: 40, width: 40 ,marginRight:'10px'}}/>
          </Fab>
          </div>
  );
}

export default Footer;