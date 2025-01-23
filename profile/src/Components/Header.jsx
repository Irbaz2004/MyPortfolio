

import React from 'react';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Insights } from '@mui/icons-material';
import { LinkedIn, Instagram, GitHub, Twitter } from '@mui/icons-material';
import '../Style/Header.css';
import '../Style/Theme.css'

const DarkModeSwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(5px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        backgroundColor: '#8796A5',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#070707',
    width: 32,
    height: 32,
    '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139z"/></svg>')`,
      },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 20 / 2,
  },
}));

export default function Header() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }, [isDarkMode]);

  const handleChange = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <Box>
      <div className="header">
        <div className="Brand">
          <Insights className="brand-icon"/>
          <h2>iRuz</h2>
        </div>

        <div className="social-icon">
      <a
        href="https://www.linkedin.com/in/irbaz-ahmed-s-a6bba4332/"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-icon headericons"
      >
        <LinkedIn />
      </a>
      <a
        href="https://www.instagram.com/irbazahmed2025/"
        target="_blank"
        rel="noopener noreferrer"
        className="instagram-icon headericons"
      >
        <Instagram />
      </a>
      <a
        href="https://github.com/Irbaz2004"
        target="_blank"
        rel="noopener noreferrer"
        className="github-icon headericons"
      >
        <GitHub />
      </a>
      <a
        href="https://x.com/irbaz_ahme52909"
        target="_blank"
        rel="noopener noreferrer"
        className="telegram-icon headericons"
      >
        <Twitter />
      </a>
    </div>

        <div className="theme">
          <FormControlLabel
            control={<DarkModeSwitch checked={isDarkMode} onChange={handleChange} />}
            label={isDarkMode ? 'Dark Mode' : 'Light Mode'}
          />
        </div>
      </div>
    </Box>
  );
}
