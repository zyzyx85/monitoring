/**
 * Created by federico on 01/11/14.
 */
"use strict";

var m = require('mithril');

module.exports = function(){
  m.route(document.getElementById("application"), '/', {
    '/':  {controller: require('./controllers/app.controllers.main'), view: require('./views/app.views.main')}
  });
};
