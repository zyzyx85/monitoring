/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var fastclick = require('fastclick')
var route = require('./route.js')

var app = {
  // Application Constructor
  initialize:    function () {
    this.bindEvents();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents:    function () {
    window.addEventListener('load', this.onload, false);
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  //onload EventHandler
  onload: function() {
    fastclick(document.body);
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicitly call 'app.receivedEvent(...);'
  onDeviceReady: function () {
    app.receivedEvent('deviceready');
    route()
    //app.route.call()
  },
  // Update DOM on a Received Event
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

