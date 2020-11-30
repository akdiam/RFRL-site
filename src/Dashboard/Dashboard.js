import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      maxHeight: 600,
    },
    listSection: {
      backgroundColor: 'inherit',
    },
    ul: {
      backgroundColor: 'inherit',
      padding: 0,
    },
}));

export default function Dashboard({ userList, referrerList }) {
    const classes = useStyles();

    return (
        <Grid container justify='center'>
            <Grid container item xs={12} sm={6} style={{marginTop: '200px'}} justify='center'>
                <Grid container item xs={12} justify='center'>
                    <Typography>All Form Submissions</Typography>
                </Grid>
                <Grid container item xs={12} justify='center'>
                    <Card>
                        <List className={classes.root} subheader={<li />} style={{margin: '20px'}}>
                            {Object.keys(userList).map((user) => (
                                <li key={`section-${user}`} className={classes.listSection}>
                                <ul className={classes.ul}>
                                    <ListSubheader>{`Submission: ${user}`}</ListSubheader>
                                    {Object.keys(userList[user]).map((item) => (
                                    <ListItem key={`item-${user}-${item}`}>
                                        <ListItemText primary={`${item}: ${userList[user][item]}`} />
                                    </ListItem>
                                    ))}
                                </ul>
                                </li>
                            ))}
                        </List>
                    </Card>
                </Grid>
            </Grid>
            <Grid container item xs={12} sm={6} style={{marginTop: '200px'}} justify='center'>
                <Grid container item xs={12} justify='center'>
                    <Typography>Affiliate Performance</Typography>
                </Grid>
                <Grid container item xs={12} justify='center'>
                    <Card>
                        <List className={classes.root} subheader={<li />} style={{margin: '20px'}}>
                            {Object.keys(referrerList).map((referrer) => (
                                <li key={`section-${referrer}`} className={classes.listSection}>
                                <ul className={classes.ul}>
                                    <ListSubheader>{`Affiliate: ${referrer}`}</ListSubheader>
                                    {referrerList[referrer].map((item) => (
                                    <ListItem key={`item-${referrer}-${item}`}>
                                        <ListItemText primary={`${item}`} />
                                    </ListItem>
                                    ))}
                                </ul>
                                </li>
                            ))}
                        </List>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
}