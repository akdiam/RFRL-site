import logo from './RFRL_Logo_Transparent_.png';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default function FormComplete({ enterprise_name }) {
    return (
        <Grid container spacing={2} style={{paddingTop: '80px'}}>
            <Grid container item xs={12} justify='center'>
                <img src={logo} alt='image not found'/>
            </Grid>
            <Grid container item xs={12} justify='center' style={{marginBottom: '20px'}}>
                <Grid container item xs={12} justify='center'>
                    <Typography variant='h6' style={{marginTop: '10px', marginBottom: '10px'}}>
                        {`Thanks for participating in RFRL x ${enterprise_name}!`}
                    </Typography>
                </Grid>
                <Typography variant='p'>{`Expect a surprise from ${enterprise_name} coming your way in the near future.`}</Typography>
            </Grid>
        </Grid>
    )
}