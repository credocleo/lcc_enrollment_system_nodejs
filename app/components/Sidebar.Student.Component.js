'use strict';

var React = require('react');

var SidebarStudentComponent = React.createClass({
	render: function() {
		return (
			<div>
				<div id="sidebar" className="sidebar responsive">

					<ul className="nav nav-list">
						<li>
							<a href="index.html">
								<i className="menu-icon fa fa-home"></i>
								<span className="menu-text"> Home </span>
							</a>

							<b className="arrow"></b>
						</li>
						<li className="active">
							<a href="users.html">
								<i className="menu-icon fa fa-user"></i>
								<span className="menu-text"> Student Profile </span>
							</a>

							<b className="arrow"></b>
						</li>

						<li className="active">
							<a href="users.html">
								<i className="menu-icon fa fa-book"></i>
								<span className="menu-text"> Enroll Subjects </span>
							</a>

							<b className="arrow"></b>
						</li>

						<li className="active">
							<a href="users.html">
								<i className="menu-icon fa fa-pencil-square-o"></i>
								<span className="menu-text"> Grades </span>
							</a>

							<b className="arrow"></b>
						</li>

						<li className="">
							<a href="#" className="dropdown-toggle">
								<i className="menu-icon fa fa-cogs"></i>
								<span className="menu-text">
									Settings
								</span>

								<b className="arrow fa fa-angle-down"></b>
							</a>

							<b className="arrow"></b>

							<ul className="submenu">
								<li className="">
									<a href="syncstatus.html">
										<i className="menu-icon fa fa-caret-right"></i>
										Profile Settings
									</a>

									<b className="arrow"></b>
								</li>

								<li className="">
									<a href="useractivity.html">
										<i className="menu-icon fa fa-caret-right"></i>
										Account Settings
									</a>

									<b className="arrow"></b>
								</li>

								<li className="">
									<a href="apisync.html">
										<i className="menu-icon fa fa-caret-right"></i>
										Report a Problem
									</a>

									<b className="arrow"></b>
								</li>
							</ul>
						</li>
					</ul>

					<div className="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
						<i className="fa fa-toggle-left"></i>
					</div>
				</div>

			</div>
		);
	}

});

module.exports = SidebarStudentComponent;


