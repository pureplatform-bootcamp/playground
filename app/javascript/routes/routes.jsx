import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PeopleIndex from "../components/people_index";
import PhonesIndex from "../components/phones_index";
import AddressesIndex from '../components/addresses_index';

export default (
  <Router>
    <div className="d-flex">
      <Switch>
        <Route path="/people" exact component={PeopleIndex} />
        <Route path="/phones" exact component={PhonesIndex} />
        <Route path="/addresses" exact component={AddressesIndex} />
      </Switch>
    </div>
  </Router>
);
