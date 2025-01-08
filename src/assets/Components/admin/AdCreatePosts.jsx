import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, TextField, Button, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const CreatePostContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  maxWidth: '600px',
  margin: 'auto',
  marginTop: theme.spacing(4),
  boxShadow: theme.shadows[3],
}));

const AdCreatePosts = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0])); // Preview the selected image
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content, image };
    console.log(newPost); // Simulate posting data

    setTitle('');
    setContent('');
    URL.revokeObjectURL(image); // Free up memory
    setImage(null);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CreatePostContainer>
        <Typography variant="h5" gutterBottom>
          Create New Post
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Post Title"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Post Content"
                variant="outlined"
                multiline
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
                id="image-upload"
              />
              <label htmlFor="image-upload">
                <Button variant="contained" component="span">
                  Upload Image
                </Button>
              </label>
              {image && (
                <Box mt={2}>
                  <img
                    src={image}
                    alt="Uploaded preview"
                    style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
                  />
                </Box>
              )}
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit" fullWidth>
                Publish Post
              </Button>
            </Grid>
          </Grid>
        </form>
      </CreatePostContainer>
    </Box>
  );
};

// Fix: Rename CreatePost.propTypes to AdCreatePosts.propTypes
AdCreatePosts.propTypes = {
  onSubmit: PropTypes.func,
};

export default AdCreatePosts;
