let songs=[
    {
        name: 'Kita',
        path: '/assets/songs/Kita Saitama Blues.mp3',
        artist: 'Artist 1',
        cover: '/assets/images2/cover1.jpg'
    },
    {
        name: 'Shounen Ki',
        path: '/assets/songs/Shounen Ki.mp3',
        artist: 'Artist 2',
        cover: '/assets/images2/cover2.webp'
    },
    {
        name: 'Uden Jab Jab Zulfen Teri',
        path: '/assets/songs/Uden Jab Jab Zulfen Teri.mp3',
        artist: 'Artist 3',
        cover: '/assets/images2/cover3.jpg'
    }
]

let currentMusic=0;

const music=document.querySelector('#audio2');

const seekBar=document.querySelector('.seek-bar2');
const songName=document.querySelector('.music-name2');
const artistName=document.querySelector('.artist-name2');
const disk=document.querySelector('.disk2');
const currentTime=document.querySelector('.current-time2');
const musicDuration=document.querySelector('.song-duration2'); 
const playBtn=document.querySelector('.play-btn2');
const forwardBtn=document.querySelector('.forward-btn2');
const backwardBtn=document.querySelector('.backward-btn2');

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