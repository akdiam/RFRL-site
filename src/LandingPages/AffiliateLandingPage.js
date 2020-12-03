import logo from './RFRL_Logo_Transparent_Smaller.png';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

export default function AffiliateLandingPage() {
    return (
        <Grid container spacing={2} style={{paddingTop: '20px'}}>
            <Grid container item xs={12} justify='left' style={{marginLeft: '20px'}}>
                <Link to='/'>
                    <Button>
                        <img src={logo} alt='image not found'/>
                    </Button>
                </Link>
            </Grid>
            <Grid container item xs={12} justify='center' style={{marginBottom: '20px'}}>
                <Grid container item xs={12} justify='center'>
                    <Typography variant='h4' style={{marginTop: '0px', marginBottom: '10px'}}>
                        {`Affiliate Landing Page`}
                    </Typography> 
                </Grid>
            </Grid>
            <Grid container item xs={12} justify='center' style={{marginBottom: '0px'}}>
                <Typography variant='h6' style={{marginTop: '0px', marginBottom: '10px'}}>
                    {`Sign Up, Post, Make Money!`}
                 </Typography> 
            </Grid>
            <Grid container item xs={12} justify='center'>
                <Grid container item xs={4} justify='center'>
                    <Typography variant='h5' style={{marginTop: '20px', marginBottom: '100x', marginLeft: '20px'}}>
                        {`Search the marketplace`}
                    </Typography>
                    <Grid container item xs={12} justify='center'>
                        <Typography variant='h7' style={{marginTop: '0px', marginBottom: '0x', marginLeft: '50px', marginRight: '50px'}}>
                            {`Scan the marketplace for the business you want to support.`}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={4} justify='center'>
                    <Typography variant='h5' style={{marginTop: '20px', marginBottom: '100x'}}>
                        {`Apply to be an affiliate`}
                    </Typography>
                    <Grid container item xs={12} justify='center'>
                        <Typography variant='h7' style={{marginTop: '0px', marginBottom: '0x',marginLeft: '50px', marginRight: '50px'}}>
                            {`Apply to your chosen businesses and wait for their response.`}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={4} justify='center'>
                    <Typography variant='h5' style={{marginTop: '20px', marginBottom: '100x'}}>
                        {`Post it!`}
                    </Typography>
                    <Grid container item xs={12} justify='center'>
                        <Typography variant='h7' style={{marginTop: '0px', marginBottom: '0x', marginLeft: '50px', marginRight: '50px'}}>
                            {`Take the link and post it whereever you want!`}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}