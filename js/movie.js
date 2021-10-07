import { $soundBtn, $videoPlayer, $prevBtn, $addBtn } from './selectors.js';
import { goBack, mute, addMovie, focusHandle } from './functions.js';

document.addEventListener('visibilitychange', (e) => {
	focusHandle(e.target, $videoPlayer);
});
$soundBtn.addEventListener('click', (e) => mute(e, $videoPlayer));
$prevBtn.addEventListener('click', goBack);
$addBtn.addEventListener('click', addMovie);
