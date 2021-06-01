import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../Header';
import { AppWrapper, AppBody } from './style';
import FunActivity from '../FunActivity';
import StartActivity from '../FunActivity/StartActivity';
import ConsolidatedResults from '../FunActivity/ConsolidatedResults';
import Results from '../FunActivity/SeeResults';

const App = () => {
  return (
    <Router>
      <AppWrapper>
        <Header />
        <AppBody>
          <Switch>
            <Route path="/fun/consolidatedresults" exact component={ConsolidatedResults} />
            <Route path="/fun/results" exact component={Results} />
            <Route path="/fun/startActivity" exact component={StartActivity} />
            <Route path="/fun" exact component={FunActivity} />
          </Switch>
        </AppBody>
      </AppWrapper>
    </Router>
  );
}

export default App;
