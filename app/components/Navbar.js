'use strict';

var React = require('react');

var Navbar = React.createClass({
	render: function() {
		return (
			<div>
				<div id="navbar" className="navbar navbar-default">

					<div className="navbar-container" id="navbar-container">
					
						<button type="button" className="navbar-toggle menu-toggler pull-left" id="menu-toggler" data-target="#sidebar">
							<span className="sr-only">Toggle sidebar</span>

							<span className="icon-bar"></span>

							<span className="icon-bar"></span>

							<span className="icon-bar"></span>
						</button>

						
						<div className="navbar-header pull-left">
							
							<a href="#" className="navbar-brand">
								<small>
									LCCL-OES
								</small>
							</a>

						</div>

					
					</div>
				</div>
			</div>
		);
	}

});

module.exports = Navbar;


