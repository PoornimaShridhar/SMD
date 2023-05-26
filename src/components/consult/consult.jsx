import React from 'react';
import Grid from '@material-ui/core/Grid';
import SportsInjury from './assets/Col1.jpg';
export const Consult = React.memo(function Consult() {

  return (
    <>
      <Grid container style={{ marginTop: '2vh' }}>
        <Grid item xs={12} md={12}>
          <img src={SportsInjury} alt="" width="1300vw" height="1200vh" />
        </Grid>
      </Grid>
    </>
  );
});
export default Consult