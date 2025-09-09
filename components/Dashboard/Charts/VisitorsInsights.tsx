'use client';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Card, Typography, Box } from '@mui/material';
import { ChartData } from '@/store/dashboardStore';

interface VisitorInsightsProps {
  data: ChartData[];
}

export default function VisitorInsights({ data }: VisitorInsightsProps) {
  return (
    <Card sx={{ height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Visitor Insights
        </Typography>
      </Box>
      
      <Box sx={{ mb: 0 ,ml:-5, mr:0  }}>  
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
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
          <Legend />
          <Line
            type="monotone"
            dataKey="loyalCustomers"
            stroke="#A700FF"
            strokeWidth={3}
            dot={false}
            name="Loyal Customers"
          />
          <Line
            type="monotone"
            dataKey="newCustomers"
            stroke="#EF4444"
            strokeWidth={3}
            dot={false}
            name="New Customers"
            />
          <Line
            type="monotone"
            dataKey="uniqueCustomers"
            stroke="#3CD856"
            strokeWidth={3}
            dot={false}
            name="Unique Customers"
          />
        </LineChart>
      </ResponsiveContainer>
      </Box>
    </Card>
  );
}