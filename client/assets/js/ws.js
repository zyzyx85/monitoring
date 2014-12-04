/**
 * Created by federico on 28/11/14.
 */

module.exports = function(callback){
  //var host = window.document.location.host.replace(/:.*/, '');
  var host = "212.47.228.57";
  var ws = new WebSocket('ws://' + host + ':3000/');
  ws.onmessage = function (event) {
    callback(event.data);
  };

};