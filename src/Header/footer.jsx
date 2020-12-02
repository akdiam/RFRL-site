import { Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import React from "react";

function Footer() {
  return (
<Grid>
    <Typography variant='h5' style={{marginLeft: '50px', marginTop: '0px', marginBottom: '0px'}}>
        {`Contact`}
    </Typography>
    <Typography variant='h7' style={{marginLeft: '50px', marginTop: '0px', marginBottom: '0px'}}>
        {`Email.com`}
    </Typography>
    <Typography variant='h7' style={{marginLeft: '50px', marginTop: '0px', marginBottom: '0px'}}>
        {`Phone: xxx-xxx-xxxx`}
    </Typography>
</Grid>
  );
}

export default Footer;