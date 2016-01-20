'use strict';

var React = require('react');

var Navbar = React.createClass({
	render: function() {
		return (
			<div>
				<nav className="navbar navbar-default navbar-fixed-top">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				        <span className="sr-only">Toggle navigation</span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				      </button>
				      <a className="navbar-brand" href="#">
				      	<div>
							LCC-OES
						</div>
				      </a>
				    </div>

				      <ul className="nav navbar-nav navbar-right">
				        <li><a href="#"><h4>Hi User!</h4></a></li>
				        <li className="dropdown">
				          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span className="caret"></span></a>
				          <ul className="dropdown-menu">
				            <li><a href="#">My Student Profile</a></li>
				            <li><a href="#">Account Settings</a></li>
				            <li><a href="#">Logout</a></li>
				            <li role="separator" className="divider"></li>
				            <li><a href="#">Report a problem</a></li>
				          </ul>
				        </li>
				      </ul>
				    </div>
				</nav>
			</div>
		);
	}

});

module.exports = Navbar;


