'use strict';

var React = require('react');
var LoginHeader = require('./LoginHeader');
var LoginForm = require('./LoginForm');

var Container = React.createClass({
	render: function() {
		return (
			<div>
				<LoginHeader />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<LoginForm />
			</div>
		);
	}

});

module.exports = Container;