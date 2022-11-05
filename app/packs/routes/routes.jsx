import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PeopleIndex from '../src/people_index'
import AddressesIndex from '../src/addresses_index'

export default (
  <Router>
    <div className='d-flex'>
      <Switch>
        <Route path='/people' exact component={PeopleIndex}/>
        <Route path='/addresses' exact component={AddressesIndex}/>
      </Switch>
    </div>
  </Router>
);
