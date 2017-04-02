var s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.extension.getURL('start-laughter.js');
s.onload = function() {
	var myAudio = new Audio();        // create the audio object
	myAudio.src = "ben-brode2_1.mp3"; // assign the audio file to its src
	myAudio.play();                   // play the music
};
(document.head || document.documentElement).appendChild(s);
