'use client';
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Card, Typography, Box } from '@mui/material';
import { ChartData } from '@/store/dashboardStore';

interface VolumeVsServiceProps {
  data: ChartData[];
}

export default function VolumeVsService({ data }: VolumeVsServiceProps) {
  return (
    <Card sx={{ height: '100%' }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
          Volume vs Service Level
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#3B82F6' }} />
            <Typography variant="body2" color="text.secondary">
              Volume
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              1,135
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#10B981' }} />
            <Typography variant="body2" color="text.secondary">
              Services
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              635
            </Typography>
          </Box>
        </Box>
      </Box>
      
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} barCategoryGap="20%">
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6B7280' }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6B7280' }}
          />
          <Tooltip />
          <Bar
            dataKey="volume"
            fill="#3B82F6"
            name="Volume"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="services"
            fill="#10B981"
            name="Services"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}