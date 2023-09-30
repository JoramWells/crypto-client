import {createContext, useState, useMemo} from 'react';
import {createTheme} from '@mui/material/styles';

// color shades
export const tokens = (mode) => ({
  ...(mode === 'dark' ?
    {
      primary: {
        100: '#d6ecff',
        200: '#aed8ff',
        300: '#85c5ff',
        400: '#5db1ff',
        500: '#349eff',
        600: '#2a7ecc',
        700: '#1f5f99',
        800: '#153f66',
        900: '#0a2033',
      },
      secondary: {
        100: '#efefef',
        200: '#dfdfdf',
        300: '#d0d0d0',
        400: '#c0c0c0',
        500: '#b0b0b0',
        600: '#8d8d8d',
        700: '#6a6a6a',
        800: '#464646',
        900: '#232323',
      },
    } :
    {
      primary: {
        100: '#d6ecff',
        200: '#aed8ff',
        300: '#85c5ff',
        400: '#5db1ff',
        500: '#349eff',
        600: '#2a7ecc',
        700: '#1f5f99',
        800: '#153f66',
        900: '#0a2033',
      },
      secondary: {
        100: '#efefef',
        200: '#dfdfdf',
        300: '#d0d0d0',
        400: '#c0c0c0',
        500: '#b0b0b0',
        600: '#8d8d8d',
        700: '#6a6a6a',
        800: '#464646',
        900: '#232323',
      },
    }

  ),

});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    pallete: {
      mode: mode,
      ...(mode === 'dark' ?
        {
          primary: {
            main: colors.primary,
          },
          secondary: {
            main: colors.primary[500],
          },
        } :
        {
          primary: {
            main: colors.primary,
          },
          secondary: {
            main: colors.primary[500],
          },
        }),
    },
    typography: {
      h1: {
        fontSize: 40,
      },
      h2: {
        fontSize: 32,
      },
      h3: {
        fontSize: 24,
      },
      h4: {
        fontSize: 20,
      },
      h5: {
        fontSize: 16,
      },
      h6: {
        fontSize: 14,
      },
    },
  };
};

// create react context for the color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => { },
});

export const useMode = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  const colorMode = useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
