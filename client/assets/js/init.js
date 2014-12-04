var fastclick = require('fastclick')
var route = require('./route.js')

var app = {
  initialize:    function () {
    this.bindEvents();
  },

  bindEvents:    function () {
    window.addEventListener('load', this.onload, false);
    //document.addEventListener('deviceready', this.onDeviceReady, false);
  },

  onload: function() {
    fastclick(document.body);
    app.receivedEvent('deviceready');
    route();
  },


  onDeviceReady: function () {
    //app.receivedEvent('deviceready');
    //route();
  },
  receivedEvent: function (id) {
    console.log('Received Event: ' + id);
  },

  models:      {},
  views:       {
    icons:    {},
    partials: {},
    layout:   {}
  },
  controllers: {
    main : {}
  },
  components:  {},
  helpers:     {},
  conf:        {
    name:     'Monitoring Dashboard',
    formats:  {
      date:     'DD-MM-YYYY',
      number:   '',
      currency: ''
    },
    defaults: {

    }
  }



};

app.initialize();

