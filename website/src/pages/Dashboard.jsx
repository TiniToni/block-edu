import React from 'react';
import Helmet from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import dashboardLogo from '../assets/dashboard.png';
import prologueText from "../assets/prologue.png";
import './Dashboard.css'

function Dashboard() {
    const navigate = useNavigate();
        const handleButtonClick = () => {
            navigate('/prologue');
        };
    return ( 
        <>
        <Helmet>
            <style>
              {`
                body {
                  background-color: #f3f0f5;
                }
              `}
            </style>
          </Helmet>
          <div
                style={{
                    width: '100%',
                    height: '120px',
                    backgroundColor: '#19535f',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    zIndex: 1,
                  }}
            ></div>
            <div
                style={{
                    width: '150px',
                    height: '826px',
                    backgroundColor: '#0B7A75',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    zIndex: 0,
                  }}
            ></div>
            <div
                style={{
                    width: '20px',
                    height: '826px',
                    backgroundColor: '#0B7A75',
                    position: 'absolute',
                    top: '0',
                    left: '175px',
                    zIndex: 0,
                  }}
            ></div>
            <div
                style={{
                    width: '20px',
                    height: '826px',
                    backgroundColor: '#0B7A75',
                    position: 'absolute',
                    top: '0',
                    left: '175px',
                    zIndex: 0,
                  }}
            ></div>
            <div
                style={{
                    width: '75px',
                    height: '75px',
                    backgroundColor: '#B6D2C4',
                    position: 'absolute',
                    top: '215px',
                    left: '250px',
                    borderRadius: '50%',
                    zIndex: 0,
                  }}
            ></div>
            <div>
                <button
                    style={{
                    position: 'absolute',
                    top: '220px',
                    left: '350px',
                    backgroundColor: '#D7C9AA',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '10px 20px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}
                    onClick={handleButtonClick}
                >
                    <img
                    src={prologueText}
                    alt="Prologue"
                    style={{
                        width: '250px',
                    }}
                    />
                </button>
            </div>
        <img
                src={dashboardLogo}
                alt="Dashboard Logo"
                style={{
                    position: 'absolute',
                    top: '34px',
                    left: '38px',
                    width: '300px',
                    zIndex: 1, 
                }}
            />
        </>
    );
  }
  
  export default Dashboard;