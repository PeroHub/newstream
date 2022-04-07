import { Box, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import styles from '../styles/audio.module.css'
import { FaPlay } from 'react-icons/fa';
// import { FaPause } from 'react-icons/fa';
import { BsFillCaretLeftFill } from 'react-icons/bs';
import { BsFillCaretRightFill } from 'react-icons/bs';

export default function AudioPlayer({control, }) {
    console.log(control)

    const current = {
        display: "none"
      }

      const change = {
        display: "block"
      }
    return (
        <Box className={styles.audioCon} style={control ? change : current}>
            <Stack sx={{m: 2}}>
                <Box className={styles.control}>
                    <BsFillCaretLeftFill style={{marginRight: "20px"}} />
                    <FaPlay />
                    <BsFillCaretRightFill style={{marginLeft: "20px"}} />
                </Box>
                <Box className={styles.rangeCon}>
                    <Box className={styles.range}>
                        <Typography sx={{mr:1}}>2:15</Typography>
                        <input type="range" min="1" max="100" defaultValue="50" className={styles.progressBar}  />
                        <Typography sx={{ml:1}}>3:15</Typography>
                        </Box>

                </Box>
                
            </Stack>
        </Box>
    )
}