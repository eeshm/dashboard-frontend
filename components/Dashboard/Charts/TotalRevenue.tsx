'use client';
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Card, Typography, Box } from '@mui/material';
import { ChartData } from '@/store/dashboardStore';

interface TotalRevenueProps {
  data: ChartData[];
}

export default function TotalRevenue({ data }: TotalRevenueProps) {
  return (
    <Card sx={{ height: '100%' }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 600}}>
          Total Revenue
        </Typography>
      </Box>
      
      <Box sx={{ml:-3}}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barCategoryGap="20%">
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "0095FF"}}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '00E096' }}
          />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="online"
            fill="#0095FF"
            name="Online Sales"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="offline"
            fill="#00E096"
            name="Offline Sales"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
      </Box>
      
    </Card>
  );
}