/**
 * Created by federico on 01/11/14.
 */
"use strict";
var cpu_model = require("../models/app.models.cpu")

module.exports = function(){
  this.page = m.prop(0);
  this.cpus = m.prop([]);
  m.startComputation();
  cpu_model.getCpu().then(function(data){
    this.cpus(data);
    m.endComputation();
  }.bind(this));
  this.swipe = function(page){
    this.page(page);
    this.swiper().slide(page, this.swiper().speed());
    return true;
  }

  this.getCpu = function(cpu) {
    m.startComputation();
    cpu.update().then(function(){
      m.endComputation();
    });
    return cpu;
  }




}