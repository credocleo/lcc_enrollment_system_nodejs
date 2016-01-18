'use strict';

var React = require('react');


var LoginForm = React.createClass({
	render: function() {
		return (
			<div className="container">
		    	<div className="row">
					<div className="col-md-6 col-md-offset-3">
						<div className="panel panel-login">
							<div className="panel-heading">
								<div className="row">
									<div className="col-md-12 ">
										<h2>Log in to your account</h2>
									</div>
								</div>
								<hr />
							</div>
							<div className="panel-body">
								<div className="row">
									<div className="col-lg-12">
										<form id="login-form" action="http://phpoll.com/login/process" method="post" role="form">
											<div className="form-group">
												<input type="text" name="username" id="username" tabIndex="1" className="form-control" placeholder="Username" value="" />
											</div>
											<div className="form-group">
												<input type="password" name="password" id="password" tabIndex="2" className="form-control" placeholder="Password" />
											</div>
											<div className="form-group text-center">
												<input type="checkbox" tabIndex="3" className="" name="remember" id="remember" />
												<label htmlFor="remember"> Remember Me</label>
											</div>
											<div className="form-group">
												<div className="row">
													<div className="col-sm-6 col-sm-offset-3">
														<input type="submit" name="login-submit" id="login-submit" tabIndex="4" className="form-control btn-primary btn btn-login" value="Log In" />
													</div>
												</div>
											</div>
											<div className="form-group">
												<div className="row">
													<div className="col-lg-12">
														<div className="text-center">
															<a href="http://phpoll.com/recover" tabIndex="5" className="forgot-password">Forgot Password?</a>
														</div>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = LoginForm;
