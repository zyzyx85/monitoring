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
      config.ctrl.swipe = new swipejs(element);

    }


  }.bind(this)
};



module.exports = swipe;

