function playLaugh(source) {
	var laugh = new Audio();
	if (source === 'brode') {
		laugh.src = "laughter/ben.mp3";
	} else if (source === 'feridun') {
		laugh.src = "laughter/feridun.mp3";
	}
	laugh.play();
}

playLaugh('feridun')
document.getElementById("brodeFace").addEventListener("click", function() {
	playLaugh('brode');
})

document.getElementById("feridunFace").addEventListener("click", function() {
	playLaugh('feridun');
})