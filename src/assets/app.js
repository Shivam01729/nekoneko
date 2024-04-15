let songs=[
    {
        name: 'Kita Saitama',
        path: '/assets/songs/Kita Saitama Blues.mp3',
        artist: 'Keiji',
        cover: '/assets/images2/cover1.jpg'
    },
    {
        name: 'Shounen Ki',
        path: '/assets/songs/Shounen Ki.mp3',
        artist: 'Tetsuya',
        cover: '/assets/images2/cover2.webp'
    },
    {
        name: 'Uden Jab Jab Zulfen Teri',
        path: '/assets/songs/Uden Jab Jab Zulfen Teri.mp3',
        artist: 'Rafi',
        cover: '/assets/images2/cover3c.jpg'
    },
    {
        name: 'Daylight',
        path: '/assets/songs/Daylight.mp3',
        artist: 'David',
        cover: '/assets/images2/cover4.png'
    },
    {
        name: '7 Years',
        path: '/assets/songs/Seven Years.mp3',
        artist: 'Lukas',
        cover: '/assets/images2/cover5.jpg'
    },
    {
        name: 'Genshin Impact',
        path: '/assets/songs/Genshin Impact Main Theme.mp3',
        artist: 'Yu-Peng Chen',
        cover: '/assets/images2/cover6.jpg'
    },
    {
        name: 'Suzume',
        path: '/assets/songs/Suzume.mp3',
        artist: 'Toaka',
        cover: '/assets/images2/cover7.jpg'
    }
]

let currentMusic=0;

const music=document.querySelector('#audio');

const seekBar=document.querySelector('.seek-bar');
const songName=document.querySelector('.music-name');
const artistName=document.querySelector('.artist-name');
const disk=document.querySelector('.disk');
const currentTime=document.querySelector('.current-time');
const musicDuration=document.querySelector('.song-duration'); 
const playBtn=document.querySelector('.play-btn');
const forwardBtn=document.querySelector('.forward-btn');
const backwardBtn=document.querySelector('.backward-btn');

playBtn.addEventListener('click', ()=>{
    if(playBtn.className.includes('pause')){
        music.play();
    }else{
        music.pause();
    }
    playBtn.classList.toggle('pause');
    disk.classList.toggle('play');
});

// Setup Music

const setMusic =  (i) =>{
    seekBar.value=0; 
    let song=songs[i];
    currentMusic=i;
    music.src=song.path;

    songName.innerHTML=song.name;
    artistName.innerHTML=song.artist;
    disk.style.backgroundImage=`url('${song.cover}')`; 

    currentTime.innerHTML='00:00';
    setTimeout(()=>{
        seekBar.max=music.duration;
        // console.log(music.duration);
        musicDuration.innerHTML=FormatTime(music.duration);
    },300);
}

setMusic(0);

// Formatting time in minutes and seconds 

const FormatTime = (t) => {
    let m=Math.floor(t/60);
    if(m<10){
        m=`0${m}`
    }
    let s=Math.floor(t%60);
    if(s<10){
        s=`0${s}`
    }return `${m} : ${s}`;
};


// Seek Bar
setInterval(() => {
    seekBar.value=music.currentTime;
    currentTime.innerHTML=FormatTime(music.currentTime);
    
    // Continuous Running
    if(Math.floor(music.currentTime)==Math.floor(seekBar.max)){
        forwardBtn.click();
    }
},500);

seekBar.addEventListener('change',() => {
    music.currentTime=seekBar.value;
});

const playMusic = () => {
    music.play();
    playBtn.classList.remove('pause');
    disk.classList.add('play');
};

// forward and backward button

forwardBtn.addEventListener('click',() => {
    if(currentMusic>=songs.length-1) currentMusic=0;
    else currentMusic++;
    setMusic(currentMusic);
    // playBtn.click();
    playMusic();
});

backwardBtn.addEventListener('click',() => {
    if(currentMusic<=0) currentMusic=songs.length-1;
    else currentMusic--;
    setMusic(currentMusic);
    // playBtn.click();
    playMusic();
});