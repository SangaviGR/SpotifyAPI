//nocodeapi
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
    try {
      let dataTracks = await fetch(`https://v1.nocodeapi.com/sangavigr/spotify/QzyQKtErDKBrohBb/search?type=track&q=${searchQuery}`);
      let convertedDataTracks = await dataTracks.json();
      
      // Log the convertedDataTracks object to inspect its structure
      console.log(convertedDataTracks);
      
      if (convertedDataTracks.tracks && convertedDataTracks.tracks.items) {
        // Set tracks if the expected properties are present in the response
        setTracks(convertedDataTracks.tracks.items);
      } else {
        console.error("Unexpected response format: tracks or tracks.items not found.");
      }
    } catch (error) {
      console.error("Error fetching tracks:", error);
    }
  }
  

  return (
    <div style={{ backgroundColor: '#5768', height: '100vh', overflowY: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <NavBar onSearch={getTracks} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' ,marginLeft:'20px'}}>
        {tracks.map((track) => (
          <Card key={track.id} style={{
            maxWidth: '300px',
            minWidth: '200px',
            width: '100%', // Make the card take full width initially
            marginBottom: '20px', // Add some margin at the bottom for spacing
            display: 'flex',
            flexDirection: 'column', // Align content in a column
            justifyContent: 'space-between', // Space evenly
          }}>
            <div>
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
            </div>
            {track.preview_url && (
              <div style={{ padding: '8px' }}>
                <audio controls style={{ width: '100%' }}>
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


