import React from 'react';
import homeLogo from '../assets/img/chakram-icon.svg'; // replace with the correct path to your image
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Home = () => {
    return (
      <Box
        component="section"
        sx={{
          position: 'relative',
        //   backgroundImage: "url('../src/assets/img/banner-1.webp')",
          backgroundImage: "url('../assets/img/banner-1.webp')",
          backgroundColor: '#3C4A5D',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          height: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-image 0.5s ease',
        }}
        id="chakramBanner"
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '663px',
            paddingBottom: '40px',
          }}
          className="banner-box"
        >
          <div className="banner-icon text-center">
            <img src={homeLogo} alt="chakram-icon" />
          </div>
          <Typography
            variant="h2"
            sx={{
              fontSize: '40px',
              fontWeight: 700,
              lineHeight: '48px',
              letterSpacing: '0em',
              textAlign: 'center',
            }}
            className="banner-heading"
          >
            Your everyday AI companion for{' '}
            <span
              className="banner-heading-span"
              sx={{
                color: '#86BA41',
                borderBottom: '1px solid #86BA41',
              }}
            >
              automotive
            </span>{' '}
            industry
          </Typography>
          <Typography
            variant="body1"
            sx={{
              letterSpacing: '0.2px',
              lineHeight: '19px',
              textAlign: 'center',
              maxWidth: '457px',
            }}
            className="banner-content"
          >
            Generative AI For Automotive and Manufacturing Industries.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              fontSize: '14px',
              fontWeight: 510,
              lineHeight: '17px',
              letterSpacing: '0.6px',
              textAlign: 'center',
              backgroundColor: '#3B9CD9',
              padding: '8px 24px',
              borderRadius: '100px',
              marginTop: '16px',
              transition: 'background-color 0.3s, box-shadow 0.3s',
              '&:hover': {
                backgroundColor: '#357dbd',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
              },
            }}
            className="banner-button"
          >
            Try Now
          </Button>
        </Box>
        <Typography
          variant="body1"
          sx={{
            position: 'absolute',
            bottom: '2%',
          }}
          className="scroll-down"
        >
          Scroll to learn more
        </Typography>
      </Box>
    );
  };

export default Home
