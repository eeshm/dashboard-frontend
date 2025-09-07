'use client';
import React from 'react';
import {
  Card,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  LinearProgress,
} from '@mui/material';
import { ProductData } from '@/store/dashboardStore';

interface TopProductsProps {
  data: ProductData[];
}

const getProgressColor = (value: number) => {
  if (value >= 40) return '#3B82F6';
  if (value >= 25) return '#10B981';
  if (value >= 20) return '#8B5CF6';
  return '#F59E0B';
};

export default function TopProducts({ data }: TopProductsProps) {
  return (
    <Card sx={{ height: '100%' }}>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
        Top Products
      </Typography>
      
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ border: 'none', color: 'text.secondary', fontWeight: 500 }}>
                #
              </TableCell>
              <TableCell sx={{ border: 'none', color: 'text.secondary', fontWeight: 500 }}>
                Name
              </TableCell>
              <TableCell sx={{ border: 'none', color: 'text.secondary', fontWeight: 500 }}>
                Popularity
              </TableCell>
              <TableCell sx={{ border: 'none', color: 'text.secondary', fontWeight: 500 }}>
                Sales
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((product) => (
              <TableRow key={product.id}>
                <TableCell sx={{ border: 'none', py: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {String(product.id).padStart(2, '0')}
                  </Typography>
                </TableCell>
                <TableCell sx={{ border: 'none', py: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {product.name}
                  </Typography>
                </TableCell>
                <TableCell sx={{ border: 'none', py: 2, minWidth: 120 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LinearProgress
                      variant="determinate"
                      value={product.popularity}
                      sx={{
                        flexGrow: 1,
                        height: 6,
                        borderRadius: 3,
                        bgcolor: 'grey.200',
                        '& .MuiLinearProgress-bar': {
                          bgcolor: getProgressColor(product.popularity),
                          borderRadius: 3,
                        },
                      }}
                    />
                  </Box>
                </TableCell>
                <TableCell sx={{ border: 'none', py: 2 }}>
                  <Box
                    sx={{
                      px: 2,
                      py: 0.5,
                      borderRadius: 6,
                      bgcolor: `${getProgressColor(product.popularity)}20`,
                      color: getProgressColor(product.popularity),
                      fontWeight: 600,
                      fontSize: '0.75rem',
                      display: 'inline-block',
                    }}
                  >
                    {product.sales}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}