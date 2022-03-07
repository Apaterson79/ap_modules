
(function () 

{
var byeSpeaker = {};

var speakWord = "Good Bye";

(byeSpeaker.speak = function(name) {
  console.log("GoodBye" + name);
})

window.byeSpeaker = byeSpeaker;

})()