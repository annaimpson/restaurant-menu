var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');

// var Welcome = require('./components/welcome-page.jsx');
// var MenuPage = require('./components/index.jsx');
// var MenuItems = require('././components/menu-items.json');
// var menuCollection = new models.MenuCollection(MenuItems);


var WelcomeRouter = Backbone.Router.extend({
  routes: {
    '': 'welcome',
    'menu': 'menuClick'
  },

  welcome: function(){
    ReactDOM.render(
      React.createElement(Welcome), document.getElementById('app')
    );
  },

  menuClick: function(){
    ReactDOM.render(
      React.createElement(MenuPage, {collection: menuCollection}), document.getElementById('app')
    );
  }
});
