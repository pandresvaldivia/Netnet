function mute(e, video) {
	const isMute = e.classList.toggle('is-muted');
	video.muted = isMute ? true : false;
}

function goBack() {
	window.history.back();
}

function addMovie() {
	this.classList.toggle('is-added');
}

function focusHandle(tab, video) {
	if (tab.hidden) {
		video.pause();
	} else {
		video.play();
	}
}

export { mute, goBack, addMovie, focusHandle };
