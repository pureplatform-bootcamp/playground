import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HelloReact from '../src/hello_react'

export default (
  <Router>
    <div className='d-flex'>
      <Switch>
        <Route path='/people' exact component={HelloReact}/>
      </Switch>

    </div>
  </Router>
);
