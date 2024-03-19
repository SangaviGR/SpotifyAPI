// search & show cards of albums------------------------------------------------------------------------------------

// import { useEffect, useState } from "react";
// import { Card, CardContent, Typography, TextField, Grid } from "@mui/material";
// import "./App.css";

// const getMusic = async (searchQuery, setMusic) => {
//   const url = `https://spotify23.p.rapidapi.com/search/?q=${searchQuery}&type=multi&offset=0&limit=10&numberOfTopResults=5`;
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "cd18f869b4mshbbaefaa5af025a7p11ee6bjsn77e0fdf77670",
//       "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     setMusic(result);
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// };

// function App() {
//   const [music, setMusic] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     getMusic(searchQuery, setMusic);
//   }, [searchQuery]);

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   return (
//     <div>
//       <TextField
//         label="Search Song"
//         variant="outlined"
//         value={searchQuery}
//         onChange={handleSearch}
//       />
//       <Grid container spacing={2}>
//         {music?.albums?.items?.map((musicData, index) => (
//           <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h6">{musicData?.data?.name}</Typography>
//                 <Typography variant="body2">{musicData?.data?.description}</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// }

// export default App;



// FOR artist card search and display -------------------------------------------------------------
// import { useEffect, useState } from "react";
// import { Card, CardContent, CardMedia, Typography, TextField, Grid } from "@mui/material";
// import "./App.css";

// const getMusic = async (searchQuery, setMusic) => {
//   const url = `https://spotify23.p.rapidapi.com/search/?q=${searchQuery}&type=artist&offset=0&limit=10&numberOfTopResults=5`;
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "cd18f869b4mshbbaefaa5af025a7p11ee6bjsn77e0fdf77670",
//       "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     setMusic(result);
//   } catch (error) {
//     console.error(error);
//   }
// };

// function App() {
//   const [music, setMusic] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     getMusic(searchQuery, setMusic);
//   }, [searchQuery]);

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   return (
//     <div>
//       <TextField
//         label="Search Artist"
//         variant="outlined"
//         value={searchQuery}
//         onChange={handleSearch}
//       />
//       <Grid container spacing={2}>
//         {music?.artists?.items?.map((artistData, index) => (
//           <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//             <Card sx={{ height: "100%" }}>
//               {artistData?.data?.visuals?.avatarImage?.sources && artistData.data.visuals.avatarImage.sources.length > 0 && (
//                 <CardMedia
//                   component="img"
//                   image={artistData.data.visuals.avatarImage.sources[0].url}
//                   alt={artistData.data.profile.name}
//                   sx={{ height: 200 }}
//                 />
//               )}
//               <CardContent>
//                 <Typography variant="h6" component="div">
//                   {artistData?.data?.profile?.name}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// }

// export default App;


// cards search all album artist podcast ----------------------------------------------------------------------------
// import React, { useEffect, useState } from "react";
// import { Card, CardContent, CardMedia, Typography, TextField, Grid } from "@mui/material";
// import "./App.css";

// const getMusic = async (searchQuery, setMusic) => {
//   const url = `https://spotify23.p.rapidapi.com/search/?q=${searchQuery}&type=multi&offset=0&limit=10&numberOfTopResults=5`;
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "cd18f869b4mshbbaefaa5af025a7p11ee6bjsn77e0fdf77670",
//       "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     setMusic(result);
//   } catch (error) {
//     console.error(error);
//   }
// };

// function App() {
//   const [music, setMusic] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     getMusic(searchQuery, setMusic);
//   }, [searchQuery]);

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   return (
//     <div>
//       <TextField
//         label="Search"
//         variant="outlined"
//         value={searchQuery}
//         onChange={handleSearch}
//       />
//       <Grid container spacing={2}>
//         {music?.albums?.items?.map((albumData, index) => (
//           <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//             <Card sx={{ height: "100%" }}>
//               <CardMedia
//                 component="img"
//                 image={albumData?.data?.coverArt?.sources?.[0]?.url || 'https://via.placeholder.com/300'}
//                 alt={albumData?.data?.name}
//                 sx={{ height: 200 }}
//               />
//               <CardContent>
//                 <Typography variant="h6" component="div">
//                   {albumData?.data?.name}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Album
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//         {music?.artists?.items?.map((artistData, index) => (
//           <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//             <Card sx={{ height: "100%" }}>
//               <CardMedia
//                 component="img"
//                 image={artistData?.data?.visuals?.avatarImage?.sources?.[0]?.url || 'https://via.placeholder.com/300'}
//                 alt={artistData?.data?.profile?.name}
//                 sx={{ height: 200 }}
//               />
//               <CardContent>
//                 <Typography variant="h6" component="div">
//                   {artistData?.data?.profile?.name}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Artist
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//         {music?.podcasts?.items?.map((podcastData, index) => (
//           <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//             <Card sx={{ height: "100%" }}>
//               <CardContent>
//                 <Typography variant="h6" component="div">
//                   {podcastData?.data?.name}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Podcast
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// }

// export default App;



// spotify data ------------------------------------------------------------------------------------------
// import React, { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const url = 'https://spotify23.p.rapidapi.com/browse_all/';
//       const options = {
//         method: 'GET',
//         headers: {
//           'X-RapidAPI-Key': 'cd18f869b4mshbbaefaa5af025a7p11ee6bjsn77e0fdf77670',
//           'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
//         }
//       };

//       try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Spotify Data</h1>
//       {data && (
//         <pre>{JSON.stringify(data, null, 2)}</pre>
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import NavBar from './components/NavBAr';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';

const primary = grey['A400'];

export default function App() {
  const [tracks, setTracks] = useState([]);

  const getTracks = async (searchQuery) => {
    let dataTracks = await fetch(`https://v1.nocodeapi.com/sangavigr/spotify/QzyQKtErDKBrohBb/search?type=track&q=${searchQuery}`);
    let convertedDataTracks = await dataTracks.json();
    console.log(convertedDataTracks.tracks.items);
    setTracks(convertedDataTracks.tracks.items);
  }

  return (
    <div style={{ backgroundColor: '#5768', height: '100vh', overflowY: 'scroll' }}>
      <NavBar onSearch={getTracks} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' ,marginLeft:'20px'}}>
        {tracks.map((track) => (
          <Card key={track.id} style={{
            maxWidth: '300px',
            minWidth: '200px',
            width: '100%', // Make the card take full width initially
            marginBottom: '20px', // Add some margin at the bottom for spacing
            
          }}>
          <CardMedia
              component="img"
              height="auto"
              image={track.album.images[0].url}
              alt={track.name}
            />
            <CardContent style={{ flexGrow: 1 }}>
              <Typography variant="h6" component="div">
                {track.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {track.artists.map((artist) => artist.name).join(', ')}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {track.album.release_date}
              </Typography>
            </CardContent>
            {track.preview_url && (
              <div style={{ width: '100%',  padding: '8px' }}>
                <audio controls style={{ width: '278px' }}>
                  <source src={track.preview_url} type="audio/mp3" />
                  Your browser does not support the audio tag.
                </audio>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
