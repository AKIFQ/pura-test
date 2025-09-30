import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${props => props.isScrolled ? '8px' : '10px'};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

const LogoImage = styled.img`
  height: ${props => props.isScrolled ? '24px' : '28px'};
  width: auto;
  object-fit: contain;
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

const LogoText = styled.div`
  font-size: ${props => props.isScrolled ? '18px' : '20px'};
  font-weight: 600;
  color: ${theme.colors.text.primary};
  font-family: 'Plus Jakarta Sans', sans-serif;
  letter-spacing: -0.01em;
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

const Logo = ({ isScrolled = false }) => {
  return (
    <LogoWrapper to="/" isScrolled={isScrolled}>
      <LogoImage
        src="/RingCentral P-Websites Work v110.png"
        alt="Purablis Logo"
        isScrolled={isScrolled}
      />
      <LogoText isScrolled={isScrolled}>Purablis</LogoText>
    </LogoWrapper>
  );
};

export default Logo;