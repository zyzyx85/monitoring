/**
 * Created by federico on 01/11/14.
 */
"use strict";
var cpu_model = require("../models/app.models.cpu");

module.exports = function(){
  this.page = m.prop(0);
  this.cpus = m.prop([]);

  this.swipe = function(page){
    this.page(page);
    this.swiper().slide(page, this.swiper().speed());
    return true;
  };

  this.update = function(request){
    var obj = JSON.parse(request);
    this.cpus().forEach(function(cpu,i){
      //console.log(obj[i]);
      cpu.update(obj[i]);
    })
  }.bind(this);


  (function(self){
    m.startComputation();
    cpu_model.getCpu().then(function(data){
      self.cpus(data);
      m.endComputation();
      require('../ws')(function(request){
        this.update(request);
      }.bind(self));
    });
  })(this)

};