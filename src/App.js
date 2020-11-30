import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {grey} from '@material-ui/core/colors';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SurveyForm from './Form/SurveyForm';
import FormComplete from './Form/FormComplete';
import DashboardContainer from './Dashboard/DashboardContainer';
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
            <Route path="/">
              <div>
                <p>hi</p>
              </div>
            </Route>
          </Switch>
        </Router>
    </ThemeProvider>
  );
}

export default App;
