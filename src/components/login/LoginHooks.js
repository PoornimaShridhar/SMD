import React, { useState, useEffect } from 'react';
import { useGoogleLogin } from 'react-google-login';
import Navbar from "../navbar/navbar";
import BlogPage from "../blog/blog_page";
// import getCookie from "Utils/getCookie";

// refresh token
import { refreshTokenSetup } from "../../utils/refreshToken"
import { ThreeDRotation } from '@material-ui/icons';

const clientId =
  '739780891982-42f11bv2adht5jrl2u93sig77rifsf6e.apps.googleusercontent.com';

function LoginHooks() {
  const [users,setUsers] = useState([])
  const [loadinguser, setLoadinguser] = useState(true);

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    // alert(
    //   `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    // );
    // refreshTokenSetup(res);
    setUsers(res.profileObj);
    // console.log(users, "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
    const data = {
      email: users.email,
      password: users.name,
      // image: users.imageURL
    }
    localStorage.setItem('user_email', users.email)
    localStorage.setItem('user_name', users.name)
    localStorage.setItem('user_image', users.imageUrl)
    let u = localStorage.getItem('user_email')
    console.log(u,"^^^^^^^^^^^^^^^^^^^^getting from local storage^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
        fetch('http://0.0.0.0:8004/blog/api/user/create_user/',{
          method: "POST",
          headers:{
            'Accept': 'application/json',
            'Content-type': 'application/json',
            // "X-CSRFToken": getCookie("csrftoken")
          },
          body: JSON.stringify(data)
        })
        // .then(res=>{console.log(JSON.stringify(res), "***********************result")})
        .then(response => response.json())
        .then(data => {console.log(data)

        // console.log(data.length(),'user_id_length')
        localStorage.setItem('thread_likes_id', JSON.stringify(data))
        }
        );

        
      };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button onClick={signIn} className="button">
      {/* <img src="icons/google.svg" alt="google login" className="icon"></img> */}

      <span className="buttonText">Post</span>
      {/* {
        users?<BlogPage user={users}/>:null
      } */}
      
    </button>
  );
}

export default LoginHooks;