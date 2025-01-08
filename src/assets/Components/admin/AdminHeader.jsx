import React from 'react';
import { Box, IconButton, Avatar, Typography, useTheme } from '@mui/material';
import { FaUser } from 'react-icons/fa';
import ColorModeIconDropdown from '../shared-theme/ColorModeIconDropDown';

const AdminHeader = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: theme.palette.background.paper,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginLeft: '250px', // Adjust based on the sidebar's width
        width: 'calc(100% - 250px)', // Ensures the header doesn't overlap with the sidebar
        position: 'fixed', // Ensures the header stays at the top
        top: 0,
        zIndex: 998, // Keeps it above other elements but below the sidebar
      }}
    >
      <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
        Admin Dashboard
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton sx={{ marginLeft: 1 }}>
          <Avatar sx={{ bgcolor: 'secondary.main' }}>
            <FaUser />
          </Avatar>
        </IconButton>
        <Typography sx={{ marginLeft: 1, color: theme.palette.text.primary }}>
          Admin
        </Typography>
        <ColorModeIconDropdown sx={{ marginLeft: 2 }} />
      </Box>
    </Box>
  );
};

export default AdminHeader;
