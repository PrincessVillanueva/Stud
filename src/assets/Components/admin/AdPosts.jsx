import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Avatar,
  TextField,
  Button,
} from '@mui/material';

const AdPosts = () => {
  // State for posts
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'First Post',
      content: 'This is the content of the first post.',
      image: 'https://www.w3schools.com/w3images/fjords.jpg', // Real sample image URL
      replies: ['Admin reply to the first post.'],
    },
    {
      id: 2,
      title: 'Second Post',
      content: 'This is the content of the second post.',
      image: null, // No image for this post
      replies: [],
    },
    {
      id: 3,
      title: 'Third Post',
      content: 'This is the content of the third post.',
      image: 'https://www.w3schools.com/w3images/fjords.jpg', // Real sample image URL
      replies: ['Admin reply to the third post.'],
    },
  ]);

  // State for reply text input
  const [newReply, setNewReply] = useState('');

  // Function to handle reply submission
  const handleReplySubmit = (postId) => {
    if (newReply.trim()) {
      // Update the post with new reply
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId
            ? {
                ...post,
                replies: [...post.replies, newReply], // Add the new reply
              }
            : post
        )
      );
      setNewReply(''); // Clear the input after submitting
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        User Posts
      </Typography>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3, marginBottom: 2 }}>
              {/* Post Header with Avatar (User Icon) */}
              <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ width: 40, height: 40, marginRight: 2 }} />
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  {post.title}
                </Typography>
              </CardContent>

              {/* Conditionally render image with smaller size */}
              {post.image && (
                <CardMedia
                  component="img"
                  image={post.image}
                  alt="Post Image"
                  sx={{
                    objectFit: 'cover', // Keeps the image's aspect ratio
                    width: '60%', // Makes the image smaller, occupying 60% of the card width
                    margin: '0 auto', // Centers the image horizontally
                    height: 150, // Fixed height to make the image smaller
                    borderRadius: 1,
                  }}
                />
              )}

              {/* User Post Content */}
              <CardContent>
                <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
                  {post.content}
                </Typography>
              </CardContent>

              {/* Divider between Content and Admin's Reply */}
              <Divider />

              {/* Admin's Reply Section */}
              <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                  Admin's Reply:
                </Typography>
                {post.replies.length === 0 ? (
                  <Typography variant="body2" color="textSecondary">
                    No replies yet. (Admin can reply here later)
                  </Typography>
                ) : (
                  post.replies.map((reply, index) => (
                    <Box key={index} sx={{ marginBottom: 1 }}>
                      <Typography variant="body2" sx={{ paddingLeft: 2 }}>
                        {reply}
                      </Typography>
                    </Box>
                  ))
                )}
              </CardContent>

              {/* Reply Input and Button */}
              <CardContent>
                <TextField
                  fullWidth
                  label="Write a reply..."
                  variant="outlined"
                  value={newReply}
                  onChange={(e) => setNewReply(e.target.value)}
                  sx={{ marginBottom: 2 }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleReplySubmit(post.id)}
                >
                  Reply
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};


export default AdPosts;
