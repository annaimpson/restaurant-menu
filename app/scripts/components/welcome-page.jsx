var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');
require('backbone-react-component');

var Welcome = React.createClass({
  render: function(){
    return(
      <div>
        <header>
          <div className="background"></div>
          <h1 className ="title">pretentious</h1>
          <h6 className="slogan">small plates. large prices.</h6>
          <h5 className ="welcom">Welcome</h5>
        </header>
      </div>
    );
  }
});
