document.addEventListener('keydown', check);
		const bend = {
			81:"clap-808.wav",
			87:"cowbell-808.wav",
			69:"crash-808.wav",
			82:"hihat-808.wav",
			84:"kick-808.wav",
			89:"openhat-808.wav",
			85:"perc-808.wav",
			73:"snare-808.wav",
			79:"tom-808.wav",
}

function check(event) {
	var audio = new Audio(bend[event.keyCode]);
	audio.play();
}