import { $addBtn, $videoPlayer, $soundBtn } from './selectors.js';
import { addMovie, focusHandle, mute } from './functions.js';

document.addEventListener('visibilitychange', (e) => {
	focusHandle(e.target, $videoPlayer);
});
$soundBtn.addEventListener('click', function () {
	mute(this, $videoPlayer);
});

$addBtn.addEventListener('click', addMovie);

const myObserver = new IntersectionObserver(
	(entries) => {
		if (entries[0].isIntersecting) {
			entries[0].target.play();
		} else {
			entries[0].target.pause();
		}
	},
	{
		rootMargin: '-100px',
	}
);

myObserver.observe($videoPlayer);
