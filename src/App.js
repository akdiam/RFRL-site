import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {grey} from '@material-ui/core/colors';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SurveyForm from './Form/SurveyForm';
import FormComplete from './Form/FormComplete';
import DashboardContainer from './Dashboard/DashboardContainer';
import LandingPage from './LandingPage';
import EnterpriseLandingPage from './LandingPages/EnterpriseLandingPage';
import AffiliateLandingPage from './LandingPages/AffiliateLandingPage';
import Footer from "./Header/footer";
import './App.css';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[800],
    },
    secondary: {
      main: grey[900],
    },
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/survey/jimmy">
              <SurveyForm 
              enterprise_name='jimmy'
              campaign_name='gas_station'
              enterprise_msg='Gas on me!'
              />
            </Route>
            <Route path="/survey/form-complete">
              <FormComplete
              enterprise_name='jimmy'
              />
            </Route>
            <Route path="/enterprise/jimmy/dashboard">
              <DashboardContainer 
              enterprise_name='jimmy'
              campaign_name='gas_station'
              />
            </Route>
            <Route path="/enterprise/learnmore">
              <EnterpriseLandingPage/>
            </Route>
            <Route path="/affiliate/learnmore">
              <AffiliateLandingPage/>
            </Route>
            <Route path="/">
              <LandingPage/>
            </Route>
          </Switch>
          <Footer/>
        </Router>
    </ThemeProvider>
  );
}

export default App;
