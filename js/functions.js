function mute(e, video) {
	const isMute = e.target.classList.toggle('mute');
	video.muted = isMute ? true : false;
}

function goBack() {
	window.history.back();
}

function addMovie(e) {
	e.target.classList.toggle('added');
}

function focusHandle(tab, video) {
	if (tab.hidden) {
		video.pause();
	} else {
		video.play();
	}
}

export { mute, goBack, addMovie, focusHandle };
