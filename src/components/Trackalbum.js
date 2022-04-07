import { Typography, Box } from '@mui/material';

import styles from "../styles/Trackalbum.module.css"

import music from '../images/logo/music.png'

function TrackAlbum({handleControl}) {
 
    return (
        <>
        <Box className={styles.trackTitle} onClick={handleControl}>
           <Box sx={{display: "flex", justifyContent: 'space-between'}}>
              <img
              className={styles.zIndex}
                src={music}
                alt="formusic"
                
              />
                <Box sx={{ml: 2}}>
                    <Typography className={styles.trackmusic}>No Stress</Typography>
                    <Typography  className={styles.trackmusic}>Wizkid me me me wjike poay</Typography>
                </Box>

                
           </Box>
           <Typography className={styles.trackmusic}> 3:50 </Typography>
            
          </Box>
        </>
    )
}

export default TrackAlbum