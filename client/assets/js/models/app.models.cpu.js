/**
 * Created by federico on 02/11/14.
 */
"use strict";

var Cpu = function(param){
  this.id = m.prop(param.id)
  this.frequency = m.prop(param.frequency)
  this.getCpu = function(){
    this.frequency(parseInt(Math.random() * 100))
    return this
  }.bind(this)
};

Cpu.getCpu = function(){
  return [
    new Cpu({
      id : "core_1",
      frequency : parseInt(Math.random() * 100)
    }),
    new Cpu({
      id : "core_2",
      frequency : parseInt(Math.random() * 100)
    }),
    new Cpu({
      id : "core_3",
      frequency : parseInt(Math.random() * 100)
    }),
    new Cpu({
      id : "core_4",
      frequency : parseInt(Math.random() * 100)
    }),
  ]
};

module.exports = Cpu;
