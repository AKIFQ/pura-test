import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

const LogoWrapper = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'isScrolled',
})`
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
  }
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
  object-fit: contain;
  transition: all 0.2s ease;
`;

const LogoText = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: ${theme.colors.dark};
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  transition: all 0.2s ease;
`;

const Logo = () => {
  return (
    <LogoWrapper to="/">
      <LogoImage
        src="/RingCentral P-Websites Work v110.png"
        alt="Purablis Logo"
      />
      <LogoText>Purablis</LogoText>
    </LogoWrapper>
  );
};

export default Logo;