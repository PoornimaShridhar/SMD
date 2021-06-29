import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import logo from './logo1.jpg'
import CopyrightIcon from '@material-ui/icons/Copyright';

function Footer() {
  return ( 
    <div style={{backgroundColor:'black', color:'#F59300'}}>
        <div style={{float:'left',marginLeft:'50px',marginTop:'20px'}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.057708754633!2d77.5932881153864!3d12.904010790900259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15992f341037%3A0x5e31909a0673fc9c!2sKinesis%20Sports%20Clinic!5e0!3m2!1sen!2sin!4v1624887826446!5m2!1sen!2sin" width="500" height="250"  allowFullscreen="" loading="lazy"></iframe>

        </div>
        <br /><br />
        <div>
        <img src={logo} alt="" width='200px' height="200px" style={{borderRadius: '50%'}}/>
        <br /><br />
        <CopyrightIcon fontSize="large"/> 2021 Dr. Bharath Kumar B
        </div>
        
    </div> 
  );
}

export default Footer;