import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {grey} from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SurveyForm from './Form/SurveyForm';
import FormComplete from './Form/FormComplete';
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
              enterprise_name='Jimmy'
              enterprise_msg='Gas on me!'
              />
            </Route>
            <Route path="/survey/form-complete">
              <FormComplete
              enterprise_name='Jimmy'
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
