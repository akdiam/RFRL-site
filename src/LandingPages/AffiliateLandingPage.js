import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

export default function AffiliateLandingPage() {
    return (
        <Grid container spacing={2} style={{paddingTop: '50px'}}>
            <Grid container item xs={12} justify='center' style={{marginBottom: '20px'}}>
                <Grid container item xs={12} justify='center'>
                    <Typography variant='h4' style={{marginTop: '14px', marginBottom: '10px'}}>
                        {`Affiliate landing page`}
                    </Typography> 
                </Grid>
            </Grid>
        </Grid>
    )
}