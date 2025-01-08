import React from 'react';
import { Box } from '@mui/material';
import AdminSideBar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar for navigation */}
      <AdminSideBar />

      {/* Main container with header and content */}
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header for admin info */}
        <AdminHeader />

        {/* Main content dynamically rendered */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: 3,
            marginLeft: '250px', // Offsets the main content to align beside the sidebar
            marginTop: '50px', // Pulls the content up to align with the header
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;
