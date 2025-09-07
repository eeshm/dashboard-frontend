'use client';
import React from 'react';
import { Card, Typography, Box } from '@mui/material';
import Image from 'next/image';

export default function SalesMapping() {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column',padding:2 }}>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
        Sales Mapping by Country
      </Typography>

      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          minHeight: 300,
        }}
      >
        {/* World Map Image */}
        <Box
          sx={{
            width: '100%',
            height: '100%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'grey.50',
            borderRadius: 2,
          }}
        >
          <Image
            src="/world.png"  // Path to your image in the public folder
            alt="Sales Mapping by Country"
            layout="fill"  // Ensures the image takes the full width/height of the container
            objectFit="contain"  // Adjust the fit of the image
          />
        </Box>
      </Box>
    </Card>
  );
}
