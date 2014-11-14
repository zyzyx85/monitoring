/**
 * Created by federico on 03/11/14.
 */

"use strict";
var smoothie = require('smoothie');
var cpu = {};


cpu.config = function(config){

  return function(element, isInitialized) {
    if(!isInitialized){
      var opt = config.opt || {};
      var height     = opt.height      || 100;
      var width     = opt.width      || window.innerWidth -20;
      var millisPerPixel = opt.millisPerPixel || 46;
      var gridFillStyle = opt.gridFillStyle || "#1a1a1a";
      var sharpLines = opt.sharpLines || true;
      var verticalSections = opt.verticalSections || 7;
      var labelFillStyle = opt.labelFillStyle || '#dddddd';
      var maxValue = opt.maxValue || 100;
      var minValue = opt.minValue || 0;
      var lineWidth = opt.lineWidth || 3.1;
      var strokeStyle = opt.strokeStyle || "#3d74ff";
      var tsFillStyle = opt.tsFillStyle || "rgba(84,148,209,0.30)";
      var delay = opt.delay || 1000;

      var ctrl = config.ctrl;
      var cpu = config.cpu;

      var line = new smoothie.TimeSeries();

      //element = document.getElementById(cpu.id())
      element.height = height;
      element.width = width;
      var smoothieChart = new smoothie.SmoothieChart({millisPerPixel:millisPerPixel,
        grid:{fillStyle:gridFillStyle,
          sharpLines:sharpLines,
          verticalSections:verticalSections
        },
        labels:{fillStyle:labelFillStyle},
        timestampFormatter:smoothie.SmoothieChart.timeFormatter,
        maxValue:maxValue,minValue:minValue});

      smoothieChart.streamTo(element,delay);
      smoothieChart.addTimeSeries(line, {lineWidth:lineWidth,
        strokeStyle:strokeStyle,
        fillStyle:tsFillStyle});


      setInterval(function() {
        line.append(new Date().getTime(), ctrl.getCpu(cpu).frequency());
      }, delay);

    };
  }.bind(this)
};

module.exports = cpu;

//TODO refactoring
//module.exports = function(config,opt){
//  opt = opt || {};
//  var height     = opt.height      || 100;
//  var width     = opt.width      || window.innerWidth -20;
//  var millisPerPixel = opt.millisPerPixel || 46;
//  var gridFillStyle = opt.gridFillStyle || "#1a1a1a";
//  var sharpLines = opt.sharpLines || true;
//  var verticalSections = opt.verticalSections || 7;
//  var labelFillStyle = opt.labelFillStyle || '#dddddd';
//  var maxValue = opt.maxValue || 100;
//  var minValue = opt.minValue || 0;
//  var lineWidth = opt.lineWidth || 3.1;
//  var strokeStyle = opt.strokeStyle || "#3d74ff";
//  var tsFillStyle = opt.tsFillStyle || "rgba(84,148,209,0.30)";
//  var delay = opt.delay || 1000;
//
//  var ctrl = config.ctrl
//  var cpu = config.cpu
//
//  var line = new smoothie.TimeSeries();
//  var element = document.getElementById(cpu.id())
//  element.height = height;
//  element.width = width;
//  var smoothieChart = new smoothie.SmoothieChart({millisPerPixel:millisPerPixel,
//    grid:{fillStyle:gridFillStyle,
//      sharpLines:sharpLines,
//      verticalSections:verticalSections
//    },
//    labels:{fillStyle:labelFillStyle},
//    timestampFormatter:smoothie.SmoothieChart.timeFormatter,
//    maxValue:maxValue,minValue:minValue});
//
//  smoothieChart.streamTo(element,delay);
//  smoothieChart.addTimeSeries(line, {lineWidth:lineWidth,
//    strokeStyle:strokeStyle,
//    fillStyle:tsFillStyle});
//
//  setInterval(function() {
//    line.append(new Date().getTime(), ctrl.getCpu(cpu).frequency());
//  }, delay);
//};
