// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignInSide from './assets/Components/sine-in-side/SignInSide';
import SignInCard from './assets/Components/sine-in-side/SignInCard';
import ForgotPassword from './assets/Components/sine-in-side/ForgotPassword';
import Content from './assets/Components/sine-in-side/Content';
import AppTheme from './assets/Components/shared-theme/AppTheme';
import ColorModeIconDropdown from './assets/Components/shared-theme/ColorModeIconDropDown';
import SignUp from './assets/Components/SignUp';
import CreatePost from './assets/Components/student/CreatePost';
import Post from './assets/Components/student/Post';
import Notifications from './assets/Components/student/Notifications';
import LandingLayout from './assets/Components/student/LandingLayout';

import AdminLayout from './assets/Components/admin/AdminLayout';
import AdminNotifications from './assets/Components/admin/AdminNotif';
import Students from './assets/Components/admin/Students';  
import AdPosts from './assets/Components/admin/AdPosts'; 
import AdCreatePosts from './assets/Components/admin/AdCreatePosts'; 

function App() {
  return (
    <AppTheme>
      {/* Color mode dropdown */}
      <div style={{ position: 'fixed', top: '1rem', right: '1rem' }}>
        <ColorModeIconDropdown />
      </div>

      <Router>
        <Routes>
          {/* Authentication routes */}
          <Route path="/signin-side" element={<SignInSide />} />
          <Route path="/signin-card" element={<SignInCard />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/content" element={<Content />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="students" />} />  
            <Route path="students" element={<Students />} /> 
            <Route path="posts" element={<AdPosts />} />  
            <Route path="create" element={<AdCreatePosts />} /> 
            <Route path="notifications" element={<AdminNotifications />} />  
          </Route>

          {/* Student Routes */}
          <Route path="/student" element={<LandingLayout />}>
            <Route index element={<Navigate to="post" />} />  {/* Default to the "post" page */}
            <Route path="post" element={<Post />} />
            <Route path="create-post" element={<CreatePost />} />
            <Route path="notifications" element={<Notifications />} />
          </Route>

          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/signin-side" replace />} />

          {/* Catch-all route for invalid URLs */}
          <Route path="*" element={<Navigate to="/signin-side" replace />} />
        </Routes>
      </Router>
    </AppTheme>
  );
}

export default App;
