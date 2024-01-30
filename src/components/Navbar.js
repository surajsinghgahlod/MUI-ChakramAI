// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div>
//         <nav>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/about">About Us</Link></li>
//                 <li><Link to="/accordion">Accordion</Link></li>
//             </ul>
//         </nav>

        
//     </div>
//   )
// }

// export default Navbar



import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
// import { chakramLogo } from '../assets/img/chakram-logo.svg'

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* <img
              src={chakramLogo} 
              alt="chakram-logo"
              style={{ maxWidth: '100px' }} 
            /> */}
            Chakram Ai
          </Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/">Problems</Button>
            <Button color="inherit" component={Link} to="/">Solutions</Button>
            <Button color="inherit" component={Link} to="/">Features</Button>
            <Button color="inherit" component={Link} to="/about"> About </Button>
          
          <div style={{ flexGrow: 1 }}></div>
          <IconButton
            color="inherit"
            aria-label="toggle navigation"
            sx={{ display: { sm: 'none' } }}
          >
            <img
              id="iconNav"
              src="./assets/img/icon-nav.png" 
              alt="icon-nav"
            />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="toggle navigation"
            sx={{ display: { sm: 'none' } }}
          >
            <img
              id="iconClose"
              src="./assets/img/icon-close.png"
              alt="icon-nav"
              className="d-none"
            />
          </IconButton>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              ml: 2,
            }}
          >
            <Box sx={{ display: { md: 'block', d: 'none' } }}>
              <Typography
                variant="body1"
                sx={{ cursor: 'pointer' }}
                className="navbar-text side-link"
              >
                Partner with Us
              </Typography>
            </Box>
            <Box
              sx={{
                display: { md: 'block', d: 'none' },
                borderLeft: '1px solid var(--text-color)',
                height: '24px',
                opacity: '40%',
                ml: 2,
              }}
              className="verticle-border"
            ></Box>
            <Box sx={{ display: { md: 'block', d: 'none' } }}>
              <Typography
                variant="body1"
                sx={{ cursor: 'pointer' }}
                className="navbar-text side-link"
              >
                Try Now
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
