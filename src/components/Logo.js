

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// react icons
import { flexCenter } from 'themes/commonStyles';
import logo from "../img/logo2.png"

const Logo = () => {
  return (
    <Box sx={flexCenter}>
      <img src={logo} width="30px" />
      <Typography
        sx={{
          ml: 1,
          color: (theme) => theme.palette.secondary.main,
          fontSize: '20px',
          fontWeight: 'bold',
          textTransform: 'lowercase'
        }}
        component="h3"
      >
        CjveBnB
      </Typography>
    </Box>
  );
};

export default Logo;