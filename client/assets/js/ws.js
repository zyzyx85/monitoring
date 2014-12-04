/**
 * Created by federico on 28/11/14.
 */

module.exports = function(callback){
  var host = window.document.location.host.replace(/:.*/, '');
  //var host = "192.168.1.100";
  var ws = new WebSocket('wss://' + host + ':3000/');
  ws.onmessage = function (event) {
    callback(event.data);
  };

};