/* MarqueeTitle Slim v2.0pre | Cameron Samuels License | git.io/vQZbs */
var mqt = {
  start : function(a, b) {
    mqt.d = ((a || document.title) + (b||"  ")).split('');
    setInterval(function(){mqt.d.push(mqt.d[0]),mqt.d.shift();document.title=mqt.d.join("")},250)
  }
}
//mqt.start(); //use this function to start the marquee
