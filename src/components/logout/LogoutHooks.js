import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import './LogoutHooks.css';

const clientId =
  '739780891982-42f11bv2adht5jrl2u93sig77rifsf6e.apps.googleusercontent.com';

function LogoutHooks() {
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    // alert('Logged out Successfully ✌');
    localStorage.setItem('user_email', undefined)
    localStorage.setItem('user_name', undefined)
    localStorage.setItem('user_image', undefined)
    localStorage.setItem('id', undefined)
    window.location.reload(true);
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="nav_ele" style={{color:"#9D9D9D", backgroundColor:"#222", fontSize:"2.5vh", border:"1px solid #9D9D9D"}}>
      {/* <img src="icons/google.svg" alt="" className="icon"></img> */}

      <span className="buttonText">Logout</span>
    </button>
  );
}

export default LogoutHooks;
