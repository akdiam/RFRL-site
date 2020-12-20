import logo from './RFRL_Logo_Transparent_Smaller.png';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

export default function LandingPage() {
    return (
        <Grid container spacing={2} style={{paddingTop: '20px'}}>
            <Grid container item xs={12} justify='left' style={{marginLeft: '20px'}}>
                <Link to='/'>
                    <Button>
                        <img src={logo} alt=''/>
                    </Button>
                </Link>
            </Grid>
            <Grid container item xs={12} justify='center'>
                <image source={require('./assets/landingpageimage1.jpg')}/>
                <Typography variant='h4' style={{marginTop: '100px', marginBottom: '10px'}}>
                    {`EASY, FREE, CENTRALIZED`}
                 </Typography> 
                <Typography variant='h8' style={{marginTop: '115px', marginBottom: '0px', marginLeft: '5px'}}>
                    {`affilate marketing for small businesses.`}
                </Typography>
            </Grid>
            <Grid container item xs={12} justify='center'>
                    <Typography variant='h2' style={{marginTop: '150px', marginBottom: '0px'}}>
                        {`VIDEO PROMO`}
                    </Typography>
            </Grid>
            <Grid container item xs={12} justify='center'>
                <Typography variant='h3' style={{marginTop: '150px', marginBottom: '20x'}}>
                    {`Want to Learn More?`}
                </Typography>
                <Grid container item xs={12} justify='center'>
                    <Link to='/enterprise/learnmore'>
                        <Button variant="contained" color= "primary">Enterprise</Button>
                    </Link>
                    <Link to='/affiliate/learnmore'>
                        <Button variant="contained" color= "primary">Affiliate</Button>
                    </Link>
                </Grid>
            </Grid>
            <Grid container item xs={12} justify='center'>
                <Grid container item xs={4} justify='center'>
                    <Typography variant='h5' style={{marginTop: '20px', marginBottom: '100x'}}>
                        {`Enterprise`}
                    </Typography>
                    <Grid container item xs={12} justify='center'>
                        <Typography variant='h7' style={{marginTop: '0px', marginBottom: '0x'}}>
                            {`Get Traffic!`}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={4} justify='center'>
                    <Typography variant='h5' style={{marginTop: '20px', marginBottom: '100x'}}>
                        {`Affiliate`}
                    </Typography>
                    <Grid container item xs={12} justify='center'>
                        <Typography variant='h7' style={{marginTop: '0px', marginBottom: '0x'}}>
                            {`Get Money!`}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={4} justify='center'>
                    <Typography variant='h5' style={{marginTop: '20px', marginBottom: '100x'}}>
                        {`Consumer`}
                    </Typography>
                    <Grid container item xs={12} justify='center'>
                        <Typography variant='h7' style={{marginTop: '0px', marginBottom: '0x'}}>
                            {`Get Savings!`}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}




