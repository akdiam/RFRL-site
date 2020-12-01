import logo from './RFRL_Logo_Transparent_.png';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

export default function LandingPage() {
    return (
        <Grid container spacing={2} style={{paddingTop: '50px'}}>
            <Grid container item xs={12} justify='center' style={{marginBottom: '20px'}}>
                <Grid container item xs={12} justify='center'>
                    <Typography variant='h4' style={{marginTop: '14px', marginBottom: '10px'}}>
                        {`EASY, FREE, CENTRALIZED`}
                    </Typography> 
                    <Typography variant='h8' style={{marginTop: '30px', marginBottom: '0px', marginLeft: '5px'}}>
                        {`affilate marketing for small businesses,`}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}