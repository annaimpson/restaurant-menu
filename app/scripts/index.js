var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var models = require('./models/models.js');
var menu = require('./components/menu-items.json');

var menuInfo = require('./components/index.jsx');
var Header = menuInfo.Header;
var Pictures = menuInfo.Pictures;
var Menu = menuInfo.Menu;
var Footer = menuInfo.Footer;
var MenuApp = menuInfo.MenuApp;

Backbone.history.start();

var pretentiousCollection = new models.MenuCollection( menu );
// pretentiousCollection.fetch();



ReactDOM.render(
  React.createElement(Header),
  document.getElementById('header')
);

ReactDOM.render(
  React.createElement(Pictures),
  document.getElementById('container-pictures')
);

ReactDOM.render(
  React.createElement(Menu, {collection: pretentiousCollection}),
  document.getElementById('container-menu')
);

ReactDOM.render(
  React.createElement(Footer),
  document.getElementById('container-footer')
);
