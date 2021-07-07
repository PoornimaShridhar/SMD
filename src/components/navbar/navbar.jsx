import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';

function Navbar(props) {
    const [user,setUser] = useState(localStorage.getItem('users'))
    const [loadinguser, setLoadinguser] = useState(true);
    const [loadinguser2, setLoadinguser2] = useState(true);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [user_image, setUser_image] = useState("");
    
    console.log(props,"props in navbar")
    console.log(localStorage.getItem("user_email"), "users from local storage")



    useEffect(() => {
        if (loadinguser)
        {
        // fetch('http://0.0.0.0:8004/blog/api/user/1/')
        //     .then((result) => result.json())
        //     .then((res) =>
        //     {
        //         setUser(res)
        //         setLoadinguser(false)
        //         console.log(user,"User")
        //      })
            }
            console.log(props.user,'User  in Navbar')
            setUser(props.user)
            setEmail(localStorage.getItem("user_email"))
            setName(localStorage.getItem("user_name"))
            setUser_image(localStorage.getItem("user_image"))
        
        }
        )

   
    

  return (
      <AppBar style={{backgroundColor:"#FF5252" , color:"black", fontSize:"20px"}}>
        <Toolbar>
            <Grid container>
                <Grid  style={{ display: "flex", justifyContent: "flex-start" }} item sm={4}>
                  <Typography variant="h5" >
                    Logo
                  </Typography>
                </Grid>
                {email!=null?
                <div>
                    <Grid item sm={1}>
                    <Avatar src={user_image}/>

                    </Grid>
                    <Grid item sm={1}>
                        {email}
                    </Grid>
                </div>
                
                :null}
                
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