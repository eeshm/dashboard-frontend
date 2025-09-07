'use client';
import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Card,
  Button,
  Avatar,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Dashboard,
  Leaderboard,
  ShoppingCart,
  Inventory,
  Assessment,
  Message,
  Settings,
  Logout,
  AttachMoney,
} from '@mui/icons-material';
import Image from 'next/image';
import { useDashboardStore } from '@/store/dashboardStore';

const drawerWidth = 280;

const menuItems = [
  { text: 'Dashboard', icon: Dashboard, active: true },
  { text: 'Leaderboard', icon: Leaderboard, active: false },
  { text: 'Order', icon: ShoppingCart, active: false },
  { text: 'Products', icon: Inventory, active: false },
  { text: 'Sales Report', icon: Assessment, active: false },
  { text: 'Messages', icon: Message, active: false },
  { text: 'Settings', icon: Settings, active: false },
  { text: 'Sign Out', icon: Logout, active: false },
];

interface SidebarProps {
  window?: () => Window;
}

export default function Sidebar({ window }: SidebarProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { sidebarOpen, setSidebarOpen } = useDashboardStore();

  const handleDrawerToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Logo */}
      <Box sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>

        <Image src="/logo.png" alt="Logo" width={30} height={30} />
        <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>
          Dabang
        </Typography>
      </Box>

      {/* Navigation Menu */}
      <List sx={{ px: 2, flexGrow: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              sx={{
                borderRadius: 0.4,
                bgcolor: item.active ? 'primary.main' : 'transparent',
                color: item.active ? 'white' : 'text.secondary',
                '&:hover': {
                  bgcolor: item.active ? 'primary.dark' : 'grey.100',
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: item.active ? 'white' : 'text.secondary',
                  minWidth: 40,
                }}
              >
                <item.icon />
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: '0.875rem',
                  fontWeight: item.active ? 600 : 400,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Pro Card */}
      <Box sx={{ p: 2 }}>
        <Card
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            p: 3,
            textAlign: 'center',
          }}
        >
          <Image src="/whitelogo.png" alt="Logo" width={30} height={30} />
          <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
            Dabang Pro
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, opacity: 0.8 }}>
            Get access to all features on terburus
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              '&:hover': { bgcolor: 'grey.100' },
              fontWeight: 600,
            }}
            fullWidth
          >
            Get Pro
          </Button>
        </Card>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Drawer
        container={container}
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? sidebarOpen : true}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            borderRight: '1px solid',
            borderColor: 'divider',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}