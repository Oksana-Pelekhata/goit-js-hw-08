import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const STORAGE_KEY = 'videoplayer-current-time'

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const currentTimeCatchUp = player.on('timeupdate', throttle(function(data) {
    console.log(data.seconds)
    localStorage.setItem(STORAGE_KEY, data.seconds);
}, 1000));

const savedTime = localStorage.getItem(STORAGE_KEY) || 0;


player.setCurrentTime(savedTime)
