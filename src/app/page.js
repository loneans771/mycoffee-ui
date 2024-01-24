'use client'
import React from 'react';
import Image from 'next/image'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Typography, Container, Grid, CardContent, Card } from '@mui/material';
import AppBar from '../components/appbar';
import Toolbar from '../components/toolbar';
import CircleIcon from '@mui/icons-material/Circle';
import withRoot from '../components/withroot';
import dynamic from 'next/dynamic';
const Map = dynamic(() => import('../components/map'), { ssr: false });
const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};


function Index() {
  const containerStyle = {
    backgroundImage: 'url("logo/chain.svg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '8rem', // Adjust as needed
  };

  return (
     <div>
       <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Grid container alignItems="center">
          <Grid item xs={6}>
            {/* Left side content */}
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              sx={{ fontSize: 24 }}
            >
              <img className='size-16' src="logo/newapplogo.png" alt="Logo" />
            </Link>
          </Grid>
          <Grid item xs={6} container justifyContent="flex-end">
            {/* Right side content */}
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              sx={{ fontSize: 24 }}
            >
              <img className='size-32' src="logo/chain.svg" alt="Logo" />
            </Link>
            {/* Additional right side content */}
            
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
       <div className='size-16'>
     
      {/* Your other content here */}
    </div>
      <Map data={Map.data}/>
    </div>
    
  )
}
export default withRoot(Index);
