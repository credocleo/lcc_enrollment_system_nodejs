'use strict';

var React = require('react');
var LoginHeader = require('./LoginHeader');
var LoginForm = require('./LoginForm');
var Navbar = require('./Navbar');
var Container = React.createClass({
	render: function() {
		return (
			<div>
				<Navbar />
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