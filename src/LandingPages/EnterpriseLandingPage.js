import logo from './RFRL_Logo_Transparent_Smaller.png';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

export default function EnterpriseLandingPage() {
    return (
        <Grid container spacing={2} style={{paddingTop: '20px'}}>
            <Grid container item xs={12} justify='left' style={{marginLeft: '20px'}}>
                <Link to='/'>
                    <Button>
                        <img src={logo}/>
                    </Button>
                </Link>
                
            </Grid>
            <Grid container item xs={12} justify='center' style={{marginBottom: '20px'}}>
                <Typography variant='h4' style={{marginTop: '0px', marginBottom: '10px'}}>
                    {`Enterprise Landing Page`}
                 </Typography> 
            </Grid>
            <Grid container item xs={12} justify='center' style={{marginBottom: '0px'}}>
                <Typography variant='h6' style={{marginTop: '0px', marginBottom: '10px'}}>
                    {`Affiliate Marketing Made Easy`}
                 </Typography> 
            </Grid>
            <Grid container item xs={12} justify='center'>
                <Grid container item xs={4} justify='center'>
                    <Typography variant='h5' style={{marginTop: '20px', marginBottom: '100x', marginLeft: '20px'}}>
                        {`Create a campaign`}
                    </Typography>
                    <Grid container item xs={12} justify='center'>
                        <Typography variant='h7' style={{marginTop: '0px', marginBottom: '0x', marginLeft: '50px', marginRight: '50px'}}>
                            {`Customize your campaign for what you want to advertise.`}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={4} justify='center'>
                    <Typography variant='h5' style={{marginTop: '20px', marginBottom: '100x'}}>
                        {`Pick and find clients`}
                    </Typography>
                    <Grid container item xs={12} justify='center'>
                        <Typography variant='h7' style={{marginTop: '0px', marginBottom: '0x',marginLeft: '50px', marginRight: '50px'}}>
                            {`Pick and choose who YOU want to represent your business.`}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={4} justify='center'>
                    <Typography variant='h5' style={{marginTop: '20px', marginBottom: '100x'}}>
                        {`We do the rest`}
                    </Typography>
                    <Grid container item xs={12} justify='center'>
                        <Typography variant='h7' style={{marginTop: '0px', marginBottom: '0x', marginLeft: '50px', marginRight: '50px'}}>
                            {`We create a link for affiliates to post on all mediums. Paying them on a accurate basis.`}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}