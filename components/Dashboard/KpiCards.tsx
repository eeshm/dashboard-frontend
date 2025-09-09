'use client';
import React from 'react';
import { Card, Typography, Box } from '@mui/material';
import { KPIData } from '@/store/dashboardStore';

interface KPICardProps {
  data: KPIData;
}

const colorMap = {
  pink: { bg: '#FFE2E5', main: '#FA5A7D' },
  orange: { bg: '#FFF4DE', main: '#FF947A' },
  green: { bg: '#DCFCE7', main: '#3CD856' },
  purple: { bg: '#F3E8FF', main: '#BF83FF' },
};

export default function KPICard({ data }: KPICardProps) {
  const colors = colorMap[data.color];

  return (
    <Card
      sx={{
        bgcolor: colors.bg,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: '100%',
            bgcolor: colors.main,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.25rem',
          }}
        >
          {data.icon}
        </Box>
      </Box>

      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          color: colors.main,
          mb: 1,
          fontSize: '2rem',
        }}
      >
        {data.value}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: 'text.secondary',
          mb: 1,
        }}
      >
        {data.title}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: colors.main,
          fontWeight: 500,
        }}
      >
        {data.subtitle}
      </Typography>
    </Card>
  );
}