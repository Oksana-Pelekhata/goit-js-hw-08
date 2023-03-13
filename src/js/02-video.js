import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const currentTimeCatchUp = player.on('timeupdate', throttle(function(data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
}, 1000));

const savedTime = localStorage.getItem('videoplayer-current-time');
const parsedTime = JSON.parse(savedTime);

player.setCurrentTime(parsedTime)



