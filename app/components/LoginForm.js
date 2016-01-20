'use strict';

var React = require('react');
var $ = require('jquery');


var LoginForm = React.createClass({
	login: function(){
		//alert('You just logged in');
		//alert('hi');
		$.ajax({
			method: "POST",
			url: "/login",
			data: {username: "cleo", 
					password: "credo"}
		}).done(function(msg){
			alert("Data saved:" + msg.username);

		}).fail(function(msg){
			alert(msg.responseText);
		}).always(function(){
			alert('always');
		});

		alert('hi');
	},
	render: function() {
		return (
			<div className="container">
		    	<div className="row">
					<div className="col-md-6 col-md-offset-3">
						<div className="panel panel-login">
							<div className="panel-heading">
								<div className="row">
									<div className="col-lg-12 col-md-offset-3">
										<h2>Log in to your account</h2>
									</div>
								</div>
								<hr />
							</div>
							<div className="panel-body">
								<div className="row">
									<div className="col-md-6 col-md-offset-3">
										<form id="login-form" action="/login" method="post" role="form">
											<div className="form-group">
					                            <label htmlFor="username">Username</label>
					                            <input type="text" className="form-control" id="username" ref="username" placeholder=" Username " autoFocus />
					                        </div>
					                        <div className="form-group">
					                            <label htmlFor="password">Password</label>
					                            <input type="password" className="form-control" id="password" ref="password" placeholder=" Password " />
					                        </div>
											<div className="form-group text-center">
												<input type="checkbox"  className="" name="remember" id="remember" />

												<label htmlFor="remember">     Remember Me </label>
											</div>
											<div className="form-group">
												<div className="row">
													<div className="col-sm-6 col-sm-offset-3">
														<input type="submit" name="login-submit" id="login-submit" className="btn-primary btn btn-login" onClick={this.login} value="Log In" />
													</div>
												</div>  
											</div>
											<div className="form-group">
												<div className="row">
													<div className="col-lg-12">
														<div className="text-center">
															<a href="#" className="forgot-password">Forgot Password?</a>
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
