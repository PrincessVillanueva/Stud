import React, { useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { colorSchemes, typography, shadows, shape } from '../shared-theme/themePrimitive';

export default function AppTheme(props) {
  const { children, disableCustomTheme, themeComponents } = props;

  const theme = useMemo(() => {
    return disableCustomTheme
      ? {}
      : createTheme({
          cssVariables: {
            colorSchemeSelector: 'data-mui-color-scheme',
            cssVarPrefix: 'template',
          },
          colorSchemes,
          typography,
          shadows,
          shape,
         
        });
  }, [disableCustomTheme, themeComponents]);

  if (disableCustomTheme) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
