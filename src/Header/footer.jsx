import { Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import React from "react";

function Footer() {
  return (
<Grid style={{paddingTop: '100px'}, {paddingBottom: '50px'}}>
    <Typography variant='h6' style={{marginLeft: '50px', marginTop: '0px', marginBottom: '0px'}}>
        {`Contact`}
    </Typography>
    <Typography variant='h8' style={{marginLeft: '50px', marginTop: '0px', marginBottom: '0px'}}>
        {`Email.com`}
    </Typography>
    <Grid>
        <Typography variant='h8' style={{marginLeft: '50px', marginTop: '0px', marginBottom: '0px'}}>
            {`Phone: xxx-xxx-xxxx`}
        </Typography>
    </Grid>
</Grid>
  );
}

export default Footer;