'use client';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';
import { Card, Typography, Box } from '@mui/material';
import { ChartData } from '@/store/dashboardStore';

interface CustomerSatisfactionProps {
  data: ChartData[];
}

export default function CustomerSatisfaction({ data }: CustomerSatisfactionProps) {
  return (
    <Card sx={{ height: '100%' }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
          Customer Satisfaction
        </Typography>
        <Box sx={{ display: 'flex', gap: 4 }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#3B82F6' }}>
              $3,004
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Last Month
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#10B981' }}>
              $4,504
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This Month
            </Typography>
          </Box>
        </Box>
      </Box>
      
      <Box sx={{ width: '100%', ml:-5,mr:0,mt:0,mb:0,}}>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data}>
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
          <Area
            type="monotone"
            dataKey="lastMonth"
            stackId="1"
            stroke="#3B82F6"
            fill="#DBEAFE"
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="thisMonth"
            stackId="2"
            stroke="#10B981"
            fill="#D1FAE5"
            strokeWidth={2}
          />
        </AreaChart>   
      </ResponsiveContainer>
      </Box>
    </Card>
  );
}