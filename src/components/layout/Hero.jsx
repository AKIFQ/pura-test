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
  background: transparent;
  color: ${theme.colors.white};
  border: 2px solid ${theme.colors.white};
  padding: 18px 48px;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

  &::after {
    content: '→';
    font-size: 20px;
    transition: transform 0.3s ease;
    position: relative;
  }

  &:hover {
    background: ${theme.colors.white};
    color: ${theme.colors.dark};
    border-color: ${theme.colors.white};
    transform: translateY(-2px);
    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.4);
    
    &::after {
      transform: translateX(6px);
    }
  }
  
  &:active {
    transform: translateY(0);
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 16px;
    padding: 20px 52px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size: 17px;
    padding: 22px 56px;
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