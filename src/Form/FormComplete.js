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
                        {`Thank you, from RFRL x ${enterprise_name}.`}
                    </Typography>
                </Grid>
                <Typography variant='p'>{`Now, it's time to relax. Your work here is done. 
                Expect a surprise from ${enterprise_name} coming your way in the near future.`}</Typography>
            </Grid>
        </Grid>
    )
}