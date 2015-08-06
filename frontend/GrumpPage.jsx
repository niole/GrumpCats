"use strict";
var React = require('react');
var GrumpsModels = require('./GrumpsModels');
var Test = require('./Test.jsx');

var GrumpPage = React.createClass({
  render: function(){
    var cats = [];
    for (var cat in GrumpsModels){
      cats.push(
        <Test
          name={GrumpsModels[cat].name}
          imagePath={GrumpsModels[cat].imagePath}
        />
           );
    }
    return (<div>{cats}</div>);
  }
});

module.exports = GrumpPage;
