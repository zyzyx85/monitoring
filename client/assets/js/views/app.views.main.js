/**
 * Created by federico on 01/11/14.
 */

"use strict";
var m = require("mithril");
var swipe = require("../components/swipe");
var cpus_comp = require("../components/cpu");

var views = {};

module.exports = function(ctrl){
  return m(".page",[
    views.nav(ctrl),
    views.swipe(ctrl)
  ])
};


views.nav = function(ctrl){
  return m(".tab-bar.tab-bar--top.tab-bar--top-border", [
    m("label.tab-bar__item.tab-bar--top-border__item", [
      m("input[name='top-tab-bar-b'][type='radio']",{
        checked: ctrl.page() === 0,
        onclick: ctrl.swipe.bind(ctrl,0)
      }),
      m("button.tab-bar__button.tab-bar--top-border__button", "Cpu")
    ]),
    m("label.tab-bar__item.tab-bar--top-border__item", [
      m("input[name='top-tab-bar-b'][type='radio']",{
        checked: ctrl.page() === 1,
        onclick: ctrl.swipe.bind(ctrl,1)
      }),
      m("button.tab-bar__button.tab-bar--top-border__button", "Ram")
    ]),
    m("label.tab-bar__item.tab-bar--top-border__item", [
      m("input[name='top-tab-bar-b'][type='radio']",{
        checked: ctrl.page() === 2,
        onclick: ctrl.swipe.bind(ctrl,2)
      }),
      m("button.tab-bar__button.tab-bar--top-border__button", "I/O")
    ])
  ])
}

views.swipe = function(ctrl){
  return m("#content",[
    m("div.swipe",{config:swipe.config({ctrl:ctrl})},[
      m("div.swipe-wrap",[
        m("div.d-page",[
          ctrl.cpus().map(function(cpu){
            return m("div.cpu",[
              m("canvas",{
                config:cpus_comp.config({ctrl:ctrl,cpu:cpu})
              }),
              m("legend.frequency",cpu.id()+" @ "+cpu.frequency()+"%")
            ])
          })

        ]),
        m("div.d-page","Ram"),
        m("div.d-page","I/O")
      ])

    ])
  ]);
};

