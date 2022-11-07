import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PeopleIndex from '../src/people_index'
import CareersIndex from '../src/career_index'

export default (
  <Router>
    <div className='d-flex'>
      <Switch>
        <Route path='/people' exact component={PeopleIndex}/>
        <Route path='/careers' exact component={CareersIndex}/>
      </Switch>

    </div>
  </Router>
);

