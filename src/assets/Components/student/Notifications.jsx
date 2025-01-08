import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const NotificationContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.default,
  minHeight: 'calc(100vh - 64px)', // Adjust height for header
}));

const Notifications = () => {
  // Dummy notification data
  const notifications = [
    { id: 1, message: 'Your post has been approved!', timestamp: '2025-01-08 10:30 AM' },
    { id: 2, message: 'New comment on your post.', timestamp: '2025-01-07 8:15 PM' },
    { id: 3, message: 'You have a new follower.', timestamp: '2025-01-06 3:45 PM' },
  ];

  return (
    <NotificationContainer>
      <Typography variant="h5" gutterBottom>
        Notifications
      </Typography>
      <List>
        {notifications.map((notification, index) => (
          <React.Fragment key={notification.id}>
            <ListItem>
              <ListItemText
                primary={notification.message}
                secondary={notification.timestamp}
              />
            </ListItem>
            {index < notifications.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </NotificationContainer>
  );
};

export default Notifications;
