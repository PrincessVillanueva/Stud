import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import AppTheme from './shared-theme/AppTheme';
import { GoogleIcon, FacebookIcon } from './sine-in-side/CustomIcons';
import ColorModeSelect from './shared-theme/ColorModeSelect';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  boxShadow: 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow: 'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  minHeight: '100vh',
  padding: theme.spacing(1),
  overflowY: 'auto',
  backgroundImage: 'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  ...theme.applyStyles('dark', {
    backgroundImage: 'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
  }),
}));

export default function SignUp(props) {
  const [usernameError, setUsernameError] = useState(false);
  const [usernameErrorMessage, setUsernameErrorMessage] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [firstNameError, setFirstNameError] = useState(false);
  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState('');
  const [lastNameError, setLastNameError] = useState(false);
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState('');
  const [middleNameError, setMiddleNameError] = useState(false);
  const [middleNameErrorMessage, setMiddleNameErrorMessage] = useState('');
  const [studentIDError, setStudentIDError] = useState(false);
  const [studentIDErrorMessage, setStudentIDErrorMessage] = useState('');
  
  const navigate = useNavigate(); // Hook for navigation

  const validateInputs = () => {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const firstName = document.getElementById('firstName');
    const middleName = document.getElementById('middleName');
    const lastName = document.getElementById('lastName');
    const studentID = document.getElementById('studentID');

    let isValid = true;

    if (!username.value || username.value.length < 3) {
      setUsernameError(true);
      setUsernameErrorMessage('Username must be at least 3 characters long.');
      isValid = false;
    } else {
      setUsernameError(false);
      setUsernameErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    if (!firstName.value) {
      setFirstNameError(true);
      setFirstNameErrorMessage('First name is required.');
      isValid = false;
    } else {
      setFirstNameError(false);
      setFirstNameErrorMessage('');
    }

    if (!lastName.value) {
      setLastNameError(true);
      setLastNameErrorMessage('Last name is required.');
      isValid = false;
    } else {
      setLastNameError(false);
      setLastNameErrorMessage('');
    }

    if (!middleName.value) {
      setMiddleNameError(true);
      setMiddleNameErrorMessage('Middle name is required.');
      isValid = false;
    } else {
      setMiddleNameError(false);
      setMiddleNameErrorMessage('');
    }

    if (!studentID.value) {
      setStudentIDError(true);
      setStudentIDErrorMessage('Student ID is required.');
      isValid = false;
    } else {
      setStudentIDError(false);
      setStudentIDErrorMessage('');
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (usernameError || passwordError || firstNameError || lastNameError || middleNameError || studentIDError) {
      return;
    }

    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get('username'),
      firstName: data.get('firstName'),
      middleName: data.get('middleName'),
      lastName: data.get('lastName'),
      password: data.get('password'),
      studentID: data.get('studentID'),
    });

    // After successful sign-up, redirect to the dashboard
    navigate('/dashboard'); // Replace with your actual dashboard route
  };

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
      <SignUpContainer direction="column" justifyContent="flex-start">
        <Card variant="outlined">
          <Typography component="h1" variant="h4" sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}>
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexGrow: 1 }}>
            <FormControl>
              <FormLabel htmlFor="username">Username</FormLabel>
              <TextField
                autoComplete="username"
                name="username"
                required
                fullWidth
                id="username"
                placeholder="your_username"
                error={usernameError}
                helperText={usernameErrorMessage}
                color={usernameError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                placeholder="Jon"
                error={firstNameError}
                helperText={firstNameErrorMessage}
                color={firstNameError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="middleName">Middle Name</FormLabel>
              <TextField
                autoComplete="additional-name"
                name="middleName"
                required
                fullWidth
                id="middleName"
                placeholder="A"
                error={middleNameError}
                helperText={middleNameErrorMessage}
                color={middleNameError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <TextField
                autoComplete="family-name"
                name="lastName"
                required
                fullWidth
                id="lastName"
                placeholder="Snow"
                error={lastNameError}
                helperText={lastNameErrorMessage}
                color={lastNameError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                required
                fullWidth
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="new-password"
                variant="outlined"
                error={passwordError}
                helperText={passwordErrorMessage}
                color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="studentID">Student ID</FormLabel>
              <TextField
                autoComplete="student-id"
                name="studentID"
                required
                fullWidth
                id="studentID"
                placeholder="123456"
                error={studentIDError}
                helperText={studentIDErrorMessage}
                color={studentIDError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive updates via email."
            />
            <Button type="submit" fullWidth variant="contained" onClick={validateInputs}>
              Sign up
            </Button>
          </Box>
          <Divider>
            <Typography sx={{ color: 'text.secondary' }}>or</Typography>
          </Divider>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button fullWidth variant="outlined" onClick={() => alert('Sign up with Google')} startIcon={<GoogleIcon />}>
              Sign up with Google
            </Button>
            <Button fullWidth variant="outlined" onClick={() => alert('Sign up with Facebook')} startIcon={<FacebookIcon />}>
              Sign up with Facebook
            </Button>
            <Typography sx={{ textAlign: 'center' }}>
              Already have an account?{' '}
              <Link href="/material-ui/getting-started/templates/sign-in/" variant="body2" sx={{ alignSelf: 'center' }}>
                Sign in
              </Link>
            </Typography>
          </Box>
        </Card>
      </SignUpContainer>
    </AppTheme>
  );
}
