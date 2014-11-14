/**
 * Created by federico on 01/11/14.
 */
"use strict";
var cpu_model = require("../models/app.models.cpu")

module.exports = function(){
  this.page = m.prop(1);
  this.cpus = m.prop(cpu_model.getCpu());

  this.swipe = function(page){
    this.page(page);
    this.dragend.scrollToPage(page);
    return true;
  }

  this.getCpu = function(cpu) {
    cpu = cpu.getCpu();
    m.redraw.strategy("diff")
    m.redraw()
    return cpu;
  }




}