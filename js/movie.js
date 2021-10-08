import { $soundBtn, $videoPlayer, $prevBtn, $addBtn } from './selectors.js';
import { goBack, mute, addMovie, focusHandle } from './functions.js';

document.addEventListener('visibilitychange', (e) => {
	focusHandle(e.target, $videoPlayer);
});
$soundBtn.addEventListener('click', function () {
	mute(this, $videoPlayer);
});
$prevBtn.addEventListener('click', goBack);
$addBtn.addEventListener('click', addMovie);
