'use strict';

var React = require('react');


var LoginHeader = React.createClass({
	render: function() {
		return (
			<div>
				<div id="navbar" className="navbar navbar-default navbar-fixed-top">

					<div className="navbar-container" id="navbar-container">
						<div className="navbar-header pull-left">
							<a href="#" className="navbar-brand">
								<div>
									<img src='/images/lacoco.png' />La Consolacion College-Liloan Online Enrollment System (LCCL-OES)
								</div>
							</a>

						</div>

					</div>
				</div>
			</div>
		);
	}

});

module.exports = LoginHeader;