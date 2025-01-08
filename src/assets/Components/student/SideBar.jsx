// Sidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, List, ListItem, ListItemText, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PostAdd, Create, Notifications, ExitToApp } from '@mui/icons-material';

const SideBarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '250px',
  backgroundColor: theme.palette.background.paper,
  height: '100vh', // Full viewport height
  padding: theme.spacing(2),
  boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
  position: 'sticky',
  top: 0, // Make sure it stays fixed at the top
}));

const SideBarLink = styled(Link)(({ theme, active }) => ({
  textDecoration: 'none',
  color: active ? theme.palette.primary.main : theme.palette.text.primary,
  fontWeight: active ? 'bold' : 'normal',
  backgroundColor: active ? theme.palette.action.selected : 'transparent',
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const SideBar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <SideBarContainer>
      <List>
        <SideBarLink to="/student/post" active={isActive('/student/post') ? 1 : 0}>
          <ListItem button>
            <PostAdd sx={{ marginRight: 2 }} />
            <ListItemText primary="Post" />
          </ListItem>
        </SideBarLink>
        <SideBarLink to="/student/create-post" active={isActive('/student/create-post') ? 1 : 0}>
          <ListItem button>
            <Create sx={{ marginRight: 2 }} />
            <ListItemText primary="Create Post" />
          </ListItem>
        </SideBarLink>
        <SideBarLink to="/student/notifications" active={isActive('/student/notifications') ? 1 : 0}>
          <ListItem button>
            <Notifications sx={{ marginRight: 2 }} />
            <ListItemText primary="Notifications" />
          </ListItem>
        </SideBarLink>
        <SideBarLink to="/logout" active={isActive('/logout') ? 1 : 0}>
          <ListItem button>
            <ExitToApp sx={{ transform: 'rotate(180deg)', marginRight: 2 }} />
            <ListItemText primary="Logout" />
          </ListItem>
        </SideBarLink>
      </List>
      <Divider />
    </SideBarContainer>
  );
};

export default SideBar;
