var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var menu = require('./menu-items.json');
var Backbone = require('backbone');
require('backbone-react-component');
console.log(menu)

var Header = React.createClass({
  render: function(){
    return(
      <div>
        <header>
          <div className="background"></div>
          <h1 className ="title">pretentious</h1>
          <h6 className="slogan">small plates. large prices.</h6>
        </header>
      </div>
    );
  }
});

var Pictures = React.createClass({
  render: function(){
    return(
      <div>
        <div className="container-pictures">
          <div className = "col-md-12 pictures">

            <div className = "row">
              <div className="col-md-4 picture-1">
                <img src="../dist/images/alinea-1.jpeg" alt=""/>
              </div>
              <div className="col-md-4 picture-2">
                <img src="../dist/images/alinea-2.jpg" alt=""/>
              </div>
              <div className="col-md-4 picture-3">
                <img src="../dist/images/alinea-3.jpg" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

var Menu = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleAdd: function(item){
    this.props.addItem(item);
  },
  render: function(){
    var foodItems = this.props.collection.map(function(item){
      return(
        <div className ="menu-items" key={item.cid}>
          <h5>{item.get('item')}</h5>
          <p>{item.get('description')}</p>
          <span>${item.get('price')}</span>
        </div>
        );
      });
      console.log(foodItems);
      return(
        <div className="container menu">
          <div className="col-md-12 menu">
            <div className="row">
              <h2 className="menu-title">Today's Menu</h2>
            </div>
            <div>{foodItems}</div>
          </div>
        </div>
      );
  }
});

var Footer = React.createClass({
  render: function(){
    return(
        <div>
          <div className="container footer">
            <div className="col-md-6 hours">
              <div className="row">
                <p>Hours: Wednesday-Saturday: 6pm-until</p>
                <p>(123) 555-5555</p>
              </div>
            </div>
            <div className="col-md-6 location">
              <div className="row">
                <p>123 S Halsted St. Chicago, IL 60926</p>
              </div>
            </div>
          </div>
        </div>
    );
  }
});

var MenuApp = React.createClass({
  render: function(){
    return(
      <div>
        <Pictures />
        <Menu />
        <Footer />
      </div>
    )
  }
});

module.exports = {
  'Header': Header,
  'Pictures':Pictures,
  'Menu':Menu,
  'Footer':Footer,
  'MenuApp': MenuApp
};
