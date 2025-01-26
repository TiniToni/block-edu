import React from 'react';
import Helmet from 'react-helmet';
import { HashLink } from 'react-router-hash-link';
import './Home.css';
import dashboardLogo from '../assets/dashboard.png';
import blockeduLogo from '../assets/blockedu_logo.png';
import { useNavigate } from 'react-router-dom';

function HomePage(){
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/dashboard');
  };
  
    return (
        <>
          <Helmet>
            <style>
              {`
                body {
                  background-color: #19535f;
                }
              `}
            </style>
          </Helmet>
          <div>
            <img src={blockeduLogo} alt="Logo" 
            style={{
              position: 'absolute',
              top: '20%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '500px',
            }} />
          </div>
          <div>
            <button
              style={{
                position: 'absolute',
                top: '450px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#0b7a75',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onClick={handleButtonClick}
            >
              <img
                src={dashboardLogo}
                alt="Dashboard Logo"
                style={{
                  width: '300px',
                }}
              />
            </button>
          </div>
        </>
      );
}

export default HomePage; 
