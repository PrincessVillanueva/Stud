import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { 
  Box, 
  IconButton, 
  Avatar, 
  Typography, 
  useTheme, 
  Modal, 
  TextField, 
  Button 
} from '@mui/material';
import { FaUser, FaEdit } from 'react-icons/fa';
import ColorModeIconDropdown from '../shared-theme/ColorModeIconDropDown';

const Header = () => {
  const theme = useTheme();

  // Initial sample user data
  const initialUserData = {
    username: 'JohnDoe',
    firstName: 'John',
    middleName: 'A',
    lastName: 'Doe',
    password: 'password123',
    studentId: '123456',
    avatar: '', 
  };

  const [userData, setUserData] = useState(initialUserData);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUserData({ ...userData, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    console.log('Updated User Data:', userData);
    handleClose();
  };

  return (
    <>
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
          Welcome, {userData.firstName}!
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton sx={{ marginLeft: 1 }} onClick={handleOpen}>
            <Avatar
              sx={{ bgcolor: 'secondary.main' }}
              src={userData.avatar || ''}
            >
              {!userData.avatar && <FaUser />}
            </Avatar>
          </IconButton>
          <Typography sx={{ marginLeft: 1, color: theme.palette.text.primary }}>
            {userData.username}
          </Typography>
          <ColorModeIconDropdown sx={{ marginLeft: 2 }} />
        </Box>
      </Box>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            borderRadius: '8px',
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: 2, textAlign: 'center' }}>
            Edit User Information
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <Box sx={{ textAlign: 'center', position: 'relative' }}>
              <IconButton component="label">
                <Avatar
                  sx={{ width: 80, height: 80, bgcolor: 'secondary.main' }}
                  src={userData.avatar || ''}
                >
                  {!userData.avatar && <FaUser />}
                </Avatar>
                {open && (
                  <FaEdit
                    style={{
                      position: 'absolute',
                      bottom: 5,
                      right: 5,
                      backgroundColor: 'white',
                      borderRadius: '50%',
                      padding: 4,
                      fontSize: 16,
                      color: theme.palette.text.primary,
                    }}
                  />
                )}
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleAvatarChange}
                />
              </IconButton>
            </Box>
            <TextField
              label="Username"
              name="username"
              value={userData.username}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="First Name"
              name="firstName"
              value={userData.firstName}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Middle Name"
              name="middleName"
              value={userData.middleName}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={userData.lastName}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={userData.password}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Student ID"
              name="studentId"
              value={userData.studentId}
              onChange={handleChange}
              fullWidth
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="contained" color="primary" onClick={handleSave}>
                Save
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

Header.propTypes = {
  userData: PropTypes.shape({
    username: PropTypes.string,
    firstName: PropTypes.string,
    middleName: PropTypes.string,
    lastName: PropTypes.string,
    password: PropTypes.string,
    studentId: PropTypes.string,
    avatar: PropTypes.string,
  }),
};

export default Header;
