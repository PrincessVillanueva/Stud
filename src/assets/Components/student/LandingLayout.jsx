import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const LandingLayout = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar for navigation */}
      <Sidebar />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
       {/* Header with student info */}
       <Header studentName="John Doe" />

{/* Main content dynamically rendered */}
<Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
  <Outlet />
</Box>
</Box>
</Box>
);
};

export default LandingLayout;
