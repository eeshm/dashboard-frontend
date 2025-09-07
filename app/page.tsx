'use client';
import React, { useEffect } from 'react';
import {
  Box,
  Grid,
  Button,
  Typography,
  CircularProgress,
  Alert,
  useTheme,
  useMediaQuery,
  Drawer,
  AppBar,
  Toolbar,
  Card
} from '@mui/material';
import { FileDownload } from '@mui/icons-material';
import { useDashboardStore } from '@/store/dashboardStore';

// Components
import Sidebar from '@/components/Layout/Sidebar';
import Header from '@/components/Layout/Header';
import KPICard from '@/components/Dashboard/KpiCards';
import VisitorInsights from '@/components/Dashboard/Charts/VisitorsInsights';
import TotalRevenue from '@/components/Dashboard/Charts/TotalRevenue';
import CustomerSatisfaction from '@/components/Dashboard/Charts/CustomerSatisfaction';
import TargetVsReality from '@/components/Dashboard/Charts/TargetVsReality';
import VolumeVsService from '@/components/Dashboard/Charts/VolumeVsService';
import TopProducts from '@/components/Dashboard/TopProducts';
import SalesMapping from '@/components/Dashboard/SalesMapping';

const drawerWidth = 280;

export default function Dashboard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const {
    kpiData,
    visitorInsights,
    totalRevenue,
    customerSatisfaction,
    targetVsReality,
    volumeVsService,
    topProducts,
    isLoading,
    error,
    sidebarOpen,
    fetchDashboardData,
  } = useDashboardStore();

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginLeft: { xs: 0, md: `${drawerWidth}px` },
           width: { xs: '100%', md: `calc(100% - ${drawerWidth}px)` },
          bgcolor: 'background.default',
        }}
      >
        <Header />

        <Box sx={{ p: 3 }}>
          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}
          <Grid container spacing={3}>

            {/* Top Row - Today's Sales and KPI Cards */}
             <Card>
            <Grid size={{md:12, xs:12 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 3,
                  }}
                >
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                      Today's Sales
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Sales Summary
                    </Typography>
                  </Box>

                  <Button
                    variant="outlined"
                    startIcon={<FileDownload />}
                    sx={{
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      fontWeight: 500,
                    }}
                  >
                    Export
                  </Button>
                </Box>

                <Grid container spacing={3}>
                  {kpiData.map((kpi) => (
                    <Grid size={{xs:12,sm:3}} key={kpi.id}>
                      <KPICard data={kpi} />
                    </Grid>
                  ))}
                </Grid>
            </Grid>
            </Card>

            {/* Charts Section */}


            {/* Visitor Insights */}
            <Grid size={{md:4, xs:12,sm:6 }}>
              <VisitorInsights data={visitorInsights} />
            </Grid>


            {/* Total Revenue */}
            <Grid size={{md:6, xs:12 ,sm:6}} >
              <TotalRevenue data={totalRevenue} />
            </Grid>

            {/* Customer Satisfaction */}
            <Grid size={{md:3, xs:12,sm:6 }}>
              <CustomerSatisfaction data={customerSatisfaction} />
            </Grid>
            {/* Target vs Reality */}
            <Grid size={{md:3, xs:12 ,sm:6}}>
              <TargetVsReality data={targetVsReality} />
            </Grid>





            {/* Bottom Row */}
            <Grid size={{md:6, xs:12 ,sm:6}}>
              <TopProducts data={topProducts} />
            </Grid>

            <Grid size={{md:3, xs:12 ,sm:6}}>
              <SalesMapping />
            </Grid>

            <Grid size={{md:3, xs:12,sm:6 }}>
              <VolumeVsService data={volumeVsService} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}