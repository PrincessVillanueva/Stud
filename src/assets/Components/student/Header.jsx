import React from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, Avatar, Typography, useTheme } from '@mui/material';
import { FaUser } from 'react-icons/fa';
import ColorModeIconDropdown from '../shared-theme/ColorModeIconDropDown';

const Header = ({ studentName }) => {
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
        borderRadius: '8px',
      }}
    >
      <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
        
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton sx={{ marginLeft: 1 }}>
          <Avatar sx={{ bgcolor: 'secondary.main' }}>
            <FaUser />
          </Avatar>
        </IconButton>
        <Typography sx={{ marginLeft: 1, color: theme.palette.text.primary }}>
          {studentName || 'Guest'}
        </Typography>
        <ColorModeIconDropdown sx={{ marginLeft: 2 }} />
      </Box>
    </Box>
  );
};

Header.propTypes = {
  studentName: PropTypes.string,
};

export default Header;
