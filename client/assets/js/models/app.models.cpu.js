/**
 * Created by federico on 02/11/14.
 */
"use strict";
//TODO refactoring
var host = "212.47.228.57";
var Cpu = function (param) {
  this.id = m.prop(param.id);
  this.model = m.prop(param.model);
  this.user = m.prop(param.user);
  this.nice = m.prop(param.nice);
  this.sys = m.prop(param.sys);
  this.idle = m.prop(param.idle);
  this.irq = m.prop(param.irq);
  this.frequency = m.prop(parseInt(param.user) +
  parseInt(param.nice) +
  parseInt(param.sys));

  this.update = function(req){
    this.frequency(parseInt(req.user) +
    parseInt(req.nice) +
    parseInt(req.sys));
    this.user(req.user);
    this.nice(req.nice);
    this.sys(req.sys);
    this.idle(req.idle);
    this.irq(req.irq);
  }

};


Cpu.getCpu = function () {
  return m.request({
    method:     'GET',
    //url:        "http://212.47.228.57:3000/cpu",
    url:        "http://"+host+":3000/cpu",
    background:true,
    type:       Cpu
  })
};

module.exports = Cpu;
