var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');

var MainPage = require('./../components/menu-items.jsx');
var MenuItems = require('../components/menu-items.json');
var menuCollection = new models.MenuCollection(MenuItems);


var Router = Backbone.Router.extend({

  routes: {
    '': 'index',
    'menu': 'menupage'
  }
});

module.exports = new Router();
menuCollection.fetch();
