
import styles from '../styles/Home.module.css';
// import {
//   Link
// } from "react-router-dom";
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import BungalowIcon from '@mui/icons-material/Bungalow';
// import QueueMusicIcon from '@mui/icons-material/QueueMusic';
// import EjectIcon from '@mui/icons-material/Eject'; 
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';  
import woman from '../images/logo/woman.svg'

//FOnt-awesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'


export default function Main({handleClick}) {


 
  return (
    <>
   <Box className={styles.container}>
    <Box sx={{display: {xs: "flex"}, flexDirection: {xs: "column", md: "row"}, justifyContent: "center", alignItems: "center"}}>
      <Box sx={{mt: 2,display: "flex", justifyContent: "center", alignItems: "center", width: {xs: "100%", sm: "60%", md: "50%"}}}>
      <img className={styles.img}
          src="/images/logo/wave.svg"
          alt="wave icon"
          
        />
      <Typography sx={{m: {xs: 1}}}>FutureStream</Typography>
      </Box>
      <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", width: {xs: "100%", sm: "60%", md: "80%"}, mt: 2}}>
        
        
          <Typography sx={{m: 2}} className={styles.fontWeight} onClick={handleClick}>Listen to music</Typography>
        
       
      </Box>
      
    </Box>

    <Box className={styles.main} sx={{mt: 6}}>
      <Box className={styles.mainContainer} sx={{width: {xs: "100%", sm: "100%", md: "80%"}, p: 2, display: "flex", flexDirection: {xs: "column", md: "row"}}}>
          <Box sx={{position: "relative", top: {md: "30px", xs: "0px"}, right: "20px"}}>
            <img
                src={woman}
                alt="woman"
                
              />
          </Box>
          <Box sx={{ p: 2}} className={styles.center}>
            <Box sx={{mt: {xs: 0, md: -25}}}>
            <Typography sx={{fontSize: "2rem"}}>Feel the Music</Typography>
            <Typography sx={{mt: 2}}>Stream over 20 thousand songs with one click</Typography>
            
            <Button className={styles.btn} onClick={handleClick}>Listen</Button>
            
           
            </Box>
          </Box>
        </Box>
      </Box>
      
      <Box className={styles.first} sx={{position: "absolute", display: {xs: "none", md: "block"}, width: "400px", height: "400px", borderRadius: "100%", top: "340px", right: "90px"}}></Box>
      <Box className={styles.first} sx={{position: "absolute", display: {xs: "none", md: "block"}, width: "200px", height: "200px", borderRadius: "100%", top: "140px", left: "530px"}}></Box>
      <Box className={styles.third} sx={{position: "absolute", display: {xs: "none", md: "block"}, width: "200px", height: "200px", borderRadius: "100%", top: "540px", left: "40px"}}></Box>


   </Box>
    </>
  )
}


















































// const drawerWidth = 240;

// export default function ResponsiveDrawer(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div>
//       <Toolbar />
//       <Divider />
//       <List>
//         {['Home', 'Chart', 'Playlists', 'Artists', 'Genres'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//           ml: { sm: `${drawerWidth}px` },
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Responsive drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Box
//         component="nav"
//         sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//         aria-label="mailbox folders"
//       >
//         {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//         <Drawer
//           variant="permanent"
//           sx={{
//             display: { xs: 'none', sm: 'block' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//           open
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box
//         component="main"
//         sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
//       >
//         <Toolbar />
//         <Typography paragraph>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//           tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
//           enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
//           imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
//           Convallis convallis tellus id interdum velit laoreet id donec ultrices.
//           Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
//           adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
//           nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
//           leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
//           feugiat vivamus at augue. At augue eget arcu dictum varius duis at
//           consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
//           sapien faucibus et molestie ac.
//         </Typography>
//         <Typography paragraph>
//           Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
//           eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
//           neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
//           tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
//           sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
//           tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
//           gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
//           et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
//           tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
//           eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
//           posuere sollicitudin aliquam ultrices sagittis orci a.
//         </Typography>
//         <BarChartIcon />
//         <FontAwesomeIcon icon={faCoffee} />

//       </Box>
      
//     </Box>
//   );
// }

// 