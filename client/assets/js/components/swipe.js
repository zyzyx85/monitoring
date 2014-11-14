/**
 * Created by federico on 03/11/14.
 */
"use strict"

var swipejs = require("../lib/swipe");
var cpus = require("./cpu");
var m = require("mithril");
var swipe = {};

swipe.config = function(config){
  return function(element, isInitialized) {
    if(!isInitialized){
      config.ctrl.swiper = m.prop(new swipejs(element,{
          continuous:false,
          transitionEnd: function(index) {
            config.ctrl.page(index)
            m.redraw.strategy("diff")
            m.redraw()
          }
        })
      );
    }

  }.bind(this)
};



module.exports = swipe;

