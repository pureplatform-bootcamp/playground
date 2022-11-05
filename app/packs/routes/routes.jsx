import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PeopleIndex from '../src/people_index'

export default (
  <Router>
    <div className='d-flex'>
      <Switch>
        <Route path='/people' exact component={PeopleIndex}/>
      </Switch>

    </div>
  </Router>
);
