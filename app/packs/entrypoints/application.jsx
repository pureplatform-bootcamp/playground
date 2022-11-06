import Rails from "@rails/ujs"
import * as ActiveStorage from "@rails/activestorage"
import { render } from 'react-dom';
import React from 'react';
import App from 'src/app'

Rails.start()
ActiveStorage.start()


document.addEventListener('DOMContentLoaded', () => {
	render(
		<App/>,
		document.getElementById('react-root')
	);
});

var componentRequireContext = require.context("src", true);
var ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContext);
