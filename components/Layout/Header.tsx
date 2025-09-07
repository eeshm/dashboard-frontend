'use client';
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Avatar,
  Badge,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import Image from 'next/image';
import {
  Search,
  Notifications,
  Menu as MenuIcon,
  KeyboardArrowDown,
} from '@mui/icons-material';
import { useDashboardStore } from '@/store/dashboardStore';

export default function Header() {
  const theme = useTheme();
  // useMediaQuery is perfect for this. `md` is a good breakpoint for a header.
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { setSidebarOpen } = useDashboardStore();

  const handleDrawerToggle = () => {
    setSidebarOpen(true);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
        color: 'text.primary',
      }}
    >
      {/* Adjust gap and padding for mobile */}
      <Toolbar sx={{ gap: { xs: 1, md: 2 }, py: 1 }}>
        {/* This part is already correctly implemented for mobile */}
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Make Typography smaller on mobile */}
        <Typography variant={isMobile ? 'h6' : 'h4'} sx={{ fontWeight: 700,fontSize:24}}>
          Dashboard
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        {/* --- RESPONSIVE CHANGES START HERE --- */}

        {/* Conditionally render Search Bar or Search Icon */}
        {isMobile ? (
          <IconButton color="inherit">
            <Search />
          </IconButton>
        ) : (
          <TextField
            placeholder="Search here..."
            variant="outlined"
            size="small"
            sx={{
              width: 300, // Fixed width is fine for desktop
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,
                bgcolor: 'grey.50',
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search color="action" />
                </InputAdornment>
              ),
            }}
          />
        )}

        {/* Hide Language Selector on mobile */}
        {!isMobile && (
          <FormControl size="medium">
            <Select
              value="en"
              displayEmpty
              sx={{
                minWidth: 120,
                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
              }}
              startAdornment={
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 1, gap: 1 }}>
                  <Image src="/image.png" alt="US Flag" width={20} height={15} />
                  <Typography variant="body2">Eng (US)</Typography>
                </Box>
              }
              IconComponent={KeyboardArrowDown}
            >
              <MenuItem value="en">English (US)</MenuItem>
            </Select>
          </FormControl>
        )}

        {/* Notifications Icon - This is usually important enough to keep */}
        <IconButton color="inherit">
          <Badge badgeContent={'1'} color="error">
            <Notifications />
          </Badge>
        </IconButton>

        {/* Profile Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Image src="/avatar.jpg" width={40} height={40} style={{ borderRadius: '20%', overflow: 'hidden' }}  alt='Profile' />
          
          {/* Hide Name and Role on mobile (this was already done well) */}
          {!isMobile && (
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Musfiq
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Admin
              </Typography>
            </Box>
          )}

          {/* Hide dropdown arrow on mobile to save space */}
          {!isMobile && <KeyboardArrowDown />}
        </Box>
      </Toolbar>
    </AppBar>
  );
}