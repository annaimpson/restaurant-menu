var $ = require('jquery');
var Backbone = require('backbone');

var MenuModel = Backbone.Model.extend({
  idAttribute: 'cid'
});

var MenuCollection = Backbone.Collection.extend({
  model: MenuModel,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/anna',
  parse: function(data){
    return data;
  }
});

module.exports = {
  MenuModel: MenuModel,
  MenuCollection: MenuCollection
};
