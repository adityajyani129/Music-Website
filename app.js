const music = new Audio('audio/1.mp3');
// music.play();

const songs = [
    {
        id: '1',
        songName: `Lovely <br>
        <div class="subtitle">Billrie Eilish</div>`,
        poster:  "img/1.jpeg"
    },
    {
        id: '2', 
        songName: `Thousand years <br>
        <div class="subtitle">Billie Eilish</div>`,
        poster:  "img/2.jpeg"
    },
    {
        id: '3',
        songName: `There's Nothing Holding Me Back <br>
        <div class="subtitle">Shawn Mendes</div>`,
        poster:  "img/3.jpeg"
    },
    {
        id: '4',
        songName: `Middle Of The Night <br>
        <div class="subtitle">Elley Duhé</div>`,
        poster:  "img/4.jpeg"
    },
    {
        id: '5',
        songName: `Darkside <br>
        <div class="subtitle">NEONI</div>`,
        poster:  "img/5.jpeg"
    },
    {
        id: '6',
        songName: `Lovely <br>
        <div class="subtitle">Billie Eilish</div>`,
        poster:  "img/1.jpeg"
    },
    {
        id: '7',
        songName: `Lovely <br>
        <div class="subtitle">Billie Eilish</div>`,
        poster:  "img/1.jpeg"
    },
    {
        id: '8',
        songName: `Lovely <br>
        <div class="subtitle">Billie Eilish</div>`,
        poster:  "img/1.jpeg"
    },
    {
        id: '9',
        songName: `Lovely <br>
        <div class="subtitle">Billie Eilish</div>`,
        poster:  "img/1.jpeg"
    },
    {
        id: '10',
        songName: `Lovely <br>
        <div class="subtitle">Billie Eilish</div>`,
        poster:  "img/1.jpeg"
    },
    {
        id: '11',
        songName: `Lovely <br>
        <div class="subtitle">Billie Eilish</div>`,
        poster:  "img/1.jpeg"
    },
    {
        id: '12',
        songName: `Lovely <br>
        <div class="subtitle">Billie Eilish</div>`,
        poster:  "img/2.jpeg"
    },
    {
        id: '13',
        songName: `Lovely <br>
        <div class="subtitle">Billie Eilish</div>`,
        poster:  "img/2.jpeg"
    },
    {
        id: '14',
        songName: `Lovely <br>
        <div class="subtitle">Billie Eilish</div>`,
        poster:  "img/2.jpeg"
    },
    {
        id: '15',
        songName: `Lovely <br>
        <div class="subtitle">Billie Eilish</div>`,
        poster:  "img/2.jpeg"
    },
    {
        id: '16',
        songName: `Dash <br>
        <div class="subtitle">Billie Eilish</div>`,
        poster:  "img/2.jpeg"
    }


]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

})

let masterPlay = document.getElementById('masterPlay');

masterPlay.addEventListener('click' , ()=>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        
    } else {
        music.pause();
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-play-fill');

    }
});


let index = 0;
let poster_master_play = document.getElementById(`poster_master_play`);
let title = document.getElementById(`title`);

Array.from(document.getElementsByClassName('playListPlay')).forEach((e) =>{
    e.addEventListener('click', (el)=>{  
        //  let abc = el.target.id;
        //  console.log(abc);
         let index = el.target.id;
         music.src = `audio/${index}.mp3`;
         poster_master_play.src = `img/${index}.jpeg`
         music.play();
         masterPlay.classList.remove('bi-play-fill');
         masterPlay.classList.add('bi-pause-fill');

         let songTitles = songs.filter((els) =>{    // now its new array a filter one
             return els.id == index;

         })

         songTitles.forEach(elss =>{
             let {songName} = elss
             title.innerHTML = songName;
         })

    })

})


