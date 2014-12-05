/**
 * Created by federico on 03/11/14.
 */

"use strict";
var smoothie = require('smoothie');
var cpu = {};


cpu.config = function(config){

  return function(element, isInitialized) {
    var cpu = config.cpu;

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
      var delay = opt.delay || 1000;



      var total = new smoothie.TimeSeries();
      var user = new smoothie.TimeSeries();
      var sys = new smoothie.TimeSeries();

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

      smoothieChart.addTimeSeries(total, {lineWidth:3,
        strokeStyle:"#3d74ff",
        fillStyle:"rgba(84,148,209,0.30)"});
      smoothieChart.addTimeSeries(user, {lineWidth:1.5,
        strokeStyle:"#FF0BB1"});
      smoothieChart.addTimeSeries(sys, {lineWidth:1.5,
        strokeStyle:"#30D8FF"});




    }

    setInterval(function() {
      //console.log(cpu.frequency());
      total.append(new Date().getTime(), cpu.frequency());
      user.append(new Date().getTime(), cpu.user());
      sys.append(new Date().getTime(), cpu.sys());
    }, delay);

  }.bind(this)
};

module.exports = cpu;

