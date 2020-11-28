import React from 'react'
import { useFormik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import * as Yup from 'yup';
import {useHistory} from 'react-router-dom';
import logo from './RFRL_Logo_Transparent_.png';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {db}from '../firebase';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}))

export default function SurveyForm({ enterprise_name, enterprise_msg }) {
    const classes = useStyles();
    let history = useHistory();

    const sendToSheets = (submission) => {
        db.collection(enterprise_name).doc(submission.email).set({
            first_name: submission.first_name,
            last_name: submission.last_name,
            phone_num: submission.phone_num,
            snap_user: submission.snap_user,
            email: submission.email,
            referrer: submission.referrer,
        })
        .then(() => console.log('Submission accepted'))
        .catch((err) => console.log(`Error: ${err}`));
    }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            phone_num: '',
            snap_user: '',
            email: '',
            referrer: '',
        },  
        validationSchema: Yup.object({
            first_name: Yup.string().required('Required'),
            last_name: Yup.string().required('Required'),
            phone_num: Yup.string().required('Required'),
            email: Yup.string().required('Required'),
            referrer: Yup.string().required('Required'),
        }),
        onSubmit: values => {
            console.log(values);
            sendToSheets(values);
            history.push('/survey/form-complete');
        }
    });

    return (
        <form onSubmit={formik.handleSubmit} style={{paddingTop: '80px'}}>
            <Grid container className={classes.root} spacing={2}>
                <Grid container item xs={12} justify='center'>
                    <img src={logo} alt='image not found'/>
                </Grid>
                <Grid container item xs={12} justify='center' style={{marginBottom: '20px'}}>
                    <Grid container item xs={12} justify='center'>
                        <Typography variant='h6' style={{marginTop: '10px', marginBottom: '10px'}}>{`RFRL x ${enterprise_name}`}</Typography>
                    </Grid>
                    <Typography variant='p'>{`A word from ${enterprise_name}: ${enterprise_msg}`}</Typography>
                </Grid>
                <Grid container item xs={12} justify='center'>
                    <TextField id='referrer' 
                    label='Who Sent You?' 
                    variant='outlined' 
                    onChange={formik.handleChange} 
                    value={formik.values.referrer}
                    style={{marginBottom: '-5px', marginTop: '10px'}}
                    {...(formik.touched.referrer && formik.errors.referrer && {error: true, helperText: formik.errors.referrer})}
                    />                   
                </Grid>

                <Grid container item xs={12} justify='center'>
                    <TextField id='first_name' 
                    label='First Name' 
                    variant='outlined' 
                    onChange={formik.handleChange} 
                    value={formik.values.first_name}
                    style={{margin: '10px'}}
                    {...(formik.touched.first_name && formik.errors.first_name && {error: true, helperText: formik.errors.first_name})}
                    />

                    <TextField id='last_name' 
                    label='Last Name' 
                    variant='outlined'
                    onChange={formik.handleChange} 
                    value={formik.values.last_name}
                    style={{margin: '10px'}}
                    {...(formik.touched.last_name && formik.errors.last_name && {error: true, helperText: formik.errors.last_name})}
                    />
                    
                    <TextField id='phone_num' 
                    label='Phone Number' 
                    variant='outlined' 
                    onChange={formik.handleChange} 
                    value={formik.values.phone_num}
                    style={{margin: '10px'}}
                    {...(formik.touched.phone_num && formik.errors.phone_num && {error: true, helperText: formik.errors.phone_num})}
                    />
                    
                    <TextField id='snap_user' 
                    label='Snapchat User' 
                    variant='outlined' 
                    onChange={formik.handleChange} 
                    value={formik.values.snap_user}
                    style={{margin: '10px'}}/>

                    <TextField id='email' 
                    label='Email' 
                    variant='outlined' 
                    onChange={formik.handleChange} 
                    value={formik.values.email}
                    style={{margin: '10px'}}
                    {...(formik.touched.email && formik.errors.email && {error: true, helperText: formik.errors.email})}
                    />

                </Grid>
                <Grid container item xs={12} justify='center' style={{paddingBottom: '50px'}}>
                    <Button type='submit' variant='outlined' color='secondary'>Submit</Button>
                </Grid>
            </Grid>
        </form>
    );
}