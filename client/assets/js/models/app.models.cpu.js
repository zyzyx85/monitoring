/**
 * Created by federico on 02/11/14.
 */
"use strict";

var Cpu = function(param){
  this.numCore = m.prop(param.numCore)
  this.cores = m.prop(param.cores)
};

Cpu.getCpu = function(){
  return new Cpu({
    numCore:4,
    cores:[
      {
        id : "core_1",
        frequency : parseInt(Math.random() * 100)
      },
      {
        id : "core_2",
        frequency : parseInt(Math.random() * 100)
      },
      {
        id : "core_3",
        frequency : parseInt(Math.random() * 100)
      },
      {
        id : "core_4",
        frequency : parseInt(Math.random() * 100)

      }
    ]
  })
};

module.exports = Cpu;
