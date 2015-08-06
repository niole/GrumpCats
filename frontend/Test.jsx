"use strict";
/*global React*/

var React = require('react');
var GrumpsModels = require('./GrumpsModels');

var Test = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    imagePath: React.PropTypes.string,
  },
  getInitialState: function(){
    return {counter: 0};
  },
  increment: function(e){
    e.preventDefault();
    this.setState({counter: this.state.counter += 1});
  },
  render: function(){
    return (
        React.createElement('div',{
                                  },
          React.createElement('div',{
                                    className: "state",
                                    style: {
                                      border: "1px solid black",
                                      display: "inline-block"
                                    }
                                    },
            React.createElement('h1',{},this.props.name),
            React.createElement('h1',{},"counter: " + this.state.counter)
                             ),
          React.createElement('Image',{
                                      style: {
                                              maxHeight: "100px",
                                              maxWidth: "100px"
                                             },
                                      src: this.props.imagePath,
                                      onClick: this.increment
                                    })
                           )
    );
  }
});

module.exports = Test;
