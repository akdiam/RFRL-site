import React from 'react'
import { useFormik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import * as Yup from 'yup';
import logo from './RFRL_Logo_Transparent_.png';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}))

export default function SurveyForm({ enterprise_name }) {
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            phone_num: '',
            snap_user: '',
            email: '',
        },  
        validationSchema: Yup.object({
            first_name: Yup.string().required('Required'),
            last_name: Yup.string().required('Required'),
            phone_num: Yup.string().required('Required'),
            email: Yup.string().required('Required')
        }),
        onSubmit: values => {
            console.log(values);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit} style={{paddingTop: '100px'}}>
            <Grid container className={classes.root} spacing={2}>
                <Grid container item xs={12} justify='center'>
                    <img src={logo} alt='image not found'/>
                </Grid>
                <Grid container item xs={12} justify='center'>
                    <Typography variant='h6'>{`RFRL x ${enterprise_name}`}</Typography>
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
                    <Button type='submit' variant='outlined' color='seconary'>Submit</Button>
                </Grid>
            </Grid>
        </form>
    );
}