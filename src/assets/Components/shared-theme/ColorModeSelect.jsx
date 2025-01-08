import React from 'react';
import { useColorScheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function ColorModeSelect(props) {
  const { mode, setMode } = useColorScheme();

  const handleChange = (event) => {
    const selectedMode = event.target.value;
    const currentHour = new Date().getHours();
    const isDaytime = currentHour >= 6 && currentHour < 18; // Assuming daytime is from 6 AM to 6 PM

    if (selectedMode === 'system') {
      setMode(isDaytime ? 'light' : 'dark');
    } else {
      setMode(selectedMode);
    }
  };

  if (!mode) {
    return null;
  }

  return (
    <Select
      value={mode}
      onChange={handleChange}
      SelectDisplayProps={{
        'data-screenshot': 'toggle-mode',
      }}
      {...props}
    >
      <MenuItem value="system">System</MenuItem>
      <MenuItem value="light">Light</MenuItem>
      <MenuItem value="dark">Dark</MenuItem>
    </Select>
  );
}
