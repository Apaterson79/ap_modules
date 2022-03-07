
(function () {

var helloSpeaker = {};

var speakWord = "Hello";

(helloSpeaker.speak = function(name) {
  console.log("Hello" + name);

})

window.helloSpeaker = helloSpeaker;

})()