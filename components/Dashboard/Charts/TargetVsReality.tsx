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

interface TargetVsRealityProps {
  data: ChartData[];
}

export default function TargetVsReality({ data }: TargetVsRealityProps) {
  return (
    <Card sx={{ height: '100%' }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
          Target vs Reality
        </Typography>
        

      </Box>
            <Box sx={{ml:-3}}>
      
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
            dataKey="reality"
            fill="#10B981"
            name="Reality"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="target"
            fill="#F59E0B"
            name="Target"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
      </Box>
        <Box sx={{ display: 'flex' ,gap: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#10B981' }} />
            <Typography variant="body2" color="text.secondary">
              Reality Sales
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              8,823
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#F59E0B' }} />
            <Typography variant="body2" color="text.secondary">
              Target Sales
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              12,122
            </Typography>
          </Box>
        </Box>
    </Card>
  );
}