import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import styles from "../styles/Track.module.css"
// import {
//   Link
// } from "react-router-dom";
import Typography from '@mui/material/Typography';
import AudioPlayer from "./AudioPlayer"
// import TrackAlbum from './Trackalbum';
// import Controls from './Controls';
// import Details from './Details';
import Player from './Player';



import { IoIosArrowDropleftCircle } from "react-icons/io";


import stress from '../music/stress.mp3'
import blessed from '../music/blessed.mp3'
import essence from '../music/essence.mp3'
import ginger from '../music/ginger.mp3'
import grace from '../music/grace.mp3'
import her from '../music/her.mp3'
import mai from '../music/mai.mp3'
import love from '../music/love.mp3'
import reckless from '../music/reckless.mp3'
import roma from '../music/roma.mp3'
import skepta from '../music/skepta.mp3'
import dj from '../music/dj.mp3'
import wine from '../music/wine.mp3'
import sweet from '../music/sweet.mp3'

export default function Handler({handleClose}) {




const [songs] = useState([
  {
    title: "No Stress",
    artist: "Wizkid",
    img_src: "./images/music.png",
    src: stress,
  },
  {
    title: "Essence",
    artist: "Wizkid",
    img_src: "./images/music.pngg",
    src: essence,
  },
  {
    title: "Love",
    artist: "Wizkid",
    img_src: "./images/music.pngg",
    src: love,
  },
 
  {
    title: "Mai",
    artist: "Wizkid",
    img_src: "./images/music.png",
    src: mai,
  },
  {
    title: "Ginger",
    artist: "Wizkid",
    img_src: "./images/music.png",
    src: ginger,
  },
  {
    title: "her",
    artist: "Wizkid",
    img_src: "./images/music.png",
    src: her,
  },
  {
    title: "Grace",
    artist: "Wizkid",
    img_src: "./images/music.png",
    src: grace,
  },
  {
    title: "Blessed",
    artist: "Wizkid",
    img_src: "./images/music.png",
    src: blessed,
  },
  {
    title: "Roma",
    artist: "Wizkid",
    img_src: "./images/music.png",
    src: roma,
  },
  {
    title: "Reckless",
    artist: "Wizkid",
    img_src: "./images/music.png",
    src: reckless,
  },
  {
    title: "Wine",
    artist: "Wizkid",
    img_src: "./images/music.png",
    src: wine,
  },
  {
    title: "Sweet",
    artist: "Wizkid",
    img_src: "./images/music.png",
    src: sweet,
  },
  {
    title: "Sweet",
    artist: "Wizkid",
    img_src: "./images/music.png",
    src: skepta,
  },
  {
    title: "DJ Foreign music",
    artist: "Dj",
    img_src: "./images/music.png",
    src: dj,
  },
]);

console.log(songs)

const [currentSongIndex, setCurrentSongIndex] = useState(0);
const [nextSongIndex, setNextSongIndex] = useState(0);


useEffect(() => {
  setNextSongIndex(() => {
    if (currentSongIndex + 1 > songs.length - 1) {
      return 0;
    } else {
      return currentSongIndex + 1;
    }
  });
}, [currentSongIndex]);



  return (
   <div>
     
      <IoIosArrowDropleftCircle onClick={handleClose} style={{position: "absolute", fontSize: "2rem", color: "#fff", margin: "10px 30px"}} />
     
    <Box className={styles.main} >
     
      <Box className={styles.backgroundColor} sx={{ display: {xs: "block", md: "block"}, padding: {xs:2, md:10}}}>
        <Box style={{}}>
         
        </Box>
        <Box sx={{mt: {xs: 0,md: 4}, mb: {xs: 0, md: 2}}}>
          <Typography sx={{fontSize: {xs: "2rem"}, fontWeight: "bold", mt: 4}} className={styles.paraColor}>New Song</Typography>
          <Typography className={styles.paraColor}>Naija Hit songs</Typography>
          <Typography className={styles.paraColor}>30 mins</Typography>
        </Box>
      </Box>
      <Box className={styles.track}>
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
        {/* <TrackAlbum handleControl={handleControl} />
        <TrackAlbum handleControl={handleControl}/>
        <TrackAlbum handleControl={handleControl} />
        <TrackAlbum handleControl={handleControl} />
        <TrackAlbum handleControl={handleControl} />
        <TrackAlbum handleControl={handleControl} />
        <TrackAlbum handleControl={handleControl} />
        <TrackAlbum handleControl={handleControl} />
        <TrackAlbum handleControl={handleControl} />
        <TrackAlbum handleControl={handleControl} />
        <TrackAlbum handleControl={handleControl} />
        <TrackAlbum handleControl={handleControl} /> */}
         
      </Box>
      
    </Box>
    <AudioPlayer  />
   </div>
  )
}
