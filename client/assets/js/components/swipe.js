/**
 * Created by federico on 03/11/14.
 */
"use strict"

var Dragend = require("../lib/dragend");
var cpus = require("./cpu")
var smoothie = require('smoothie');
var m = require("mithril");
var swipe = {};

swipe.config = function(config){
  return function(element, isInitialized) {
    if(!isInitialized){
      config.ctrl.dragend = new Dragend(element, {
        pageClass : "d-page",
        onSwipeEnd:function(el,container,page){
          config.ctrl.page(page)
          m.redraw.strategy("diff")
          m.redraw()
        }
      });

      config.ctrl.cpus().map(function(cpu){
        cpus({ctrl:config.ctrl,cpu:cpu},{})
      });
    }


  }.bind(this)
};

swipe.view = function(ctrl,views) {
  return m("div",{config:swipe.config({ctrl:ctrl})}, [
    views.map(function(view){
      return view
    })
  ])
};

module.exports = swipe;

