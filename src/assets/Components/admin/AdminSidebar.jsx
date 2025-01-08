import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, List, ListItem, ListItemText, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { People, PostAdd, Notifications as NotificationsIcon, ExitToApp } from '@mui/icons-material';

const SideBarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '250px',
  backgroundColor: theme.palette.background.paper,
  height: '100vh', // Full viewport height to ensure it stays fixed
  padding: theme.spacing(2),
  boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
  position: 'fixed',  // Fix the sidebar on the left side
  top: 0, // Ensures the sidebar starts at the top
  zIndex: 999, // Ensure it stays under the header
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

const AdminSideBar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <SideBarContainer>
      <List>
        {/* Students Link */}
        <SideBarLink to="/admin/students" active={isActive('/admin/students') ? 1 : 0}>
          <ListItem button>
            <People sx={{ marginRight: 2 }} />
            <ListItemText primary="Students" />
          </ListItem>
        </SideBarLink>

        {/* Posts Link */}
        <SideBarLink to="/admin/posts" active={isActive('/admin/posts') ? 1 : 0}>
          <ListItem button>
            <PostAdd sx={{ marginRight: 2 }} />
            <ListItemText primary="Posts" />
          </ListItem>
        </SideBarLink>

        {/* Create Post Link */}
        <SideBarLink to="/admin/create" active={isActive('/admin/create') ? 1 : 0}>
          <ListItem button>
            <PostAdd sx={{ marginRight: 2 }} />
            <ListItemText primary="Create Post" />
          </ListItem>
        </SideBarLink>

        {/* Notifications Link */}
        <SideBarLink to="/admin/notifications" active={isActive('/admin/notifications') ? 1 : 0}>
          <ListItem button>
            <NotificationsIcon sx={{ marginRight: 2 }} />
            <ListItemText primary="Notifications" />
          </ListItem>
        </SideBarLink>

        {/* Logout Link */}
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

export default AdminSideBar;
