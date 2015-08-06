"use strict";
/*global React*/

var React = require('react');
var GrumpPage = require('./GrumpPage.jsx');

var App = React.render( <GrumpPage/>, $('#container')[0]);

module.exports = App;
