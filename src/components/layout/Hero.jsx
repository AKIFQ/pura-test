import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { theme } from '../../styles/theme'

const HeroContainer = styled.section`
  padding: 120px 20px 120px;
  background: 
    linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
    url('/botanical-purple-bg.jpg') center center;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  overflow: visible;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 140px 40px 140px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: 160px 60px 160px;
  }
`

const HeroContent = styled.div`
  max-width: 900px;
  margin: 0;
  text-align: left;
  position: relative;
  z-index: 2;

  @media (min-width: ${theme.breakpoints.tablet}) {
    max-width: 1000px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    max-width: 1100px;
  }
`

const Title = styled.h1`
  margin-bottom: 24px;
  font-size: 32px;
  line-height: 1.2;
  font-weight: 400;
  color: ${theme.colors.white};
  text-transform: uppercase;
  letter-spacing: -0.02em;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 42px;
    margin-bottom: 28px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size: 52px;
    margin-bottom: 32px;
  }

  span {
    color: #FFD700;
    font-weight: 800;
    display: block;
    margin-top: 8px;
  }
`

const Description = styled.p`
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 32px;
  font-size: 16px;
  line-height: 1.6;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 400;
  max-width: 600px;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

  @media (min-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 40px;
    font-size: 17px;
    max-width: 650px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    margin-bottom: 48px;
    font-size: 18px;
    max-width: 700px;
  }
`

const SubscribeButton = styled.a`
  position: relative;
  background: ${theme.colors.dark};
  color: ${theme.colors.white};
  border: none;
  padding: 24px 60px;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  overflow: hidden;
  clip-path: polygon(
    0% 15%, 2% 8%, 5% 3%, 10% 0%, 15% 2%, 20% 0%, 25% 3%, 30% 1%, 
    35% 0%, 40% 2%, 45% 0%, 50% 1%, 55% 0%, 60% 2%, 65% 0%, 70% 1%, 
    75% 0%, 80% 3%, 85% 0%, 90% 2%, 95% 3%, 98% 8%, 100% 15%,
    100% 85%, 98% 92%, 95% 97%, 90% 100%, 85% 98%, 80% 100%, 75% 97%, 
    70% 100%, 65% 99%, 60% 100%, 55% 98%, 50% 100%, 45% 99%, 40% 100%, 
    35% 98%, 30% 100%, 25% 97%, 20% 100%, 15% 98%, 10% 100%, 5% 97%, 
    2% 92%, 0% 85%
  );
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${theme.colors.white};
    transition: left 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    z-index: 0;
  }

  &::after {
    content: '→';
    font-size: 24px;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
    opacity: 0;
    transform: translateX(-10px);
  }

  &:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
    color: ${theme.colors.dark};
    letter-spacing: 0.12em;
    padding-right: 70px;
    
    &::before {
      left: 0;
    }
    
    &::after {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  &:active {
    transform: translateY(-2px) scale(1.02);
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 17px;
    padding: 26px 64px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size: 18px;
    padding: 28px 68px;
  }
`


export const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <Title>
          PURABLIS IS A WEEKLY SERIES OF <span>INFORMATIVE NEWS ROUNDUPS</span>
        </Title>
        <Description>
          Stay informed about the latest developments in medicinal alternatives, cannabis, CBD, and global investment opportunities. Join thousands of subscribers who trust us for reliable, weekly news roundups.
        </Description>
        <SubscribeButton href="#subscribe">Subscribe to Newsletter</SubscribeButton>
      </HeroContent>
    </HeroContainer>
  )
}