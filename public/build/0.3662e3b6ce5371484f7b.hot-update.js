webpackHotUpdate(0,{

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar React = __webpack_require__(1);\n\nvar LoginForm = React.createClass({\n\tdisplayName: 'LoginForm',\n\n\tlogin: function login() {\n\t\talert('You just logged in');\n\t},\n\trender: function render() {\n\t\treturn React.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'container' },\n\t\t\tReact.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'row' },\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'col-md-6 col-md-offset-3' },\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'panel panel-login' },\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ className: 'panel-heading' },\n\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ className: 'row' },\n\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t{ className: 'col-lg-12 col-md-offset-3' },\n\t\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\t'h2',\n\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t'Log in to your account'\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\tReact.createElement('hr', null)\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ className: 'panel-body' },\n\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ className: 'row' },\n\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t{ className: 'col-md-6 col-md-offset-3' },\n\t\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\t'form',\n\t\t\t\t\t\t\t\t\t\t{ id: 'login-form', action: '/login', method: 'post', role: 'form' },\n\t\t\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t\t\t{ className: 'form-group' },\n\t\t\t\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t'label',\n\t\t\t\t\t\t\t\t\t\t\t\t{ htmlFor: 'username' },\n\t\t\t\t\t\t\t\t\t\t\t\t'Username'\n\t\t\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t\t\tReact.createElement('input', { type: 'text', className: 'form-control', id: 'username', ref: 'username', placeholder: ' Username ', autoFocus: true })\n\t\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t\t\t{ className: 'form-group' },\n\t\t\t\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t'label',\n\t\t\t\t\t\t\t\t\t\t\t\t{ htmlFor: 'password' },\n\t\t\t\t\t\t\t\t\t\t\t\t'Password'\n\t\t\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t\t\tReact.createElement('input', { type: 'password', className: 'form-control', id: 'password', ref: 'password', placeholder: ' Password ' })\n\t\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t\t\t{ className: 'form-group text-center' },\n\t\t\t\t\t\t\t\t\t\t\tReact.createElement('input', { type: 'checkbox', className: '', name: 'remember', id: 'remember' }),\n\t\t\t\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t'label',\n\t\t\t\t\t\t\t\t\t\t\t\t{ htmlFor: 'remember' },\n\t\t\t\t\t\t\t\t\t\t\t\t'     Remember Me '\n\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t\t\t{ className: 'form-group' },\n\t\t\t\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t\t\t\t{ className: 'row' },\n\t\t\t\t\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t\t\t\t\t{ className: 'col-sm-6 col-sm-offset-3' },\n\t\t\t\t\t\t\t\t\t\t\t\t\tReact.createElement('input', { type: 'submit', name: 'login-submit', id: 'login-submit', className: 'btn-primary btn btn-login', onClick: this.login, value: 'Log In' })\n\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t\t\t{ className: 'form-group' },\n\t\t\t\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t\t\t\t{ className: 'row' },\n\t\t\t\t\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t\t\t\t\t{ className: 'col-lg-12' },\n\t\t\t\t\t\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{ className: 'text-center' },\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'a',\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{ href: '#', className: 'forgot-password' },\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'Forgot Password?'\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n\n});\n\nmodule.exports = LoginForm;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/components/LoginForm.js\n ** module id = 161\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/components/LoginForm.js?");

/***/ }

})