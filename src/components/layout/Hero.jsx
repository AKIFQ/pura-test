import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { theme } from '../../styles/theme'

const HeroContainer = styled.section`
  padding: 40px 20px 80px 20px;
  background: ${theme.colors.white};
  position: relative;
  overflow: visible;
  min-height: 90vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 12%;
  
  /* Vertical rule for visual tension */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 20%;
    width: 1px;
    height: 100%;
    background: ${theme.colors.dark};
    opacity: 0.15;
    z-index: 1;
  }
  
  /* Large purple paint stroke behind text */
  &::after {
    content: '';
    position: absolute;
    top: 15%;
    right: -5%;
    width: 800px;
    height: 600px;
    background: url('/brush-button.png') no-repeat center center;
    background-size: contain;
    opacity: 0.12;
    transform: rotate(-8deg);
    z-index: 0;
    filter: hue-rotate(270deg);
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 60px 40px 100px;
    padding-top: 12%;
    
    &::after {
      width: 1000px;
      height: 700px;
      top: 10%;
      right: -8%;
    }
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: 80px 60px 120px;
    padding-top: 12%;
    
    &::after {
      width: 1200px;
      height: 800px;
      top: 8%;
      right: -10%;
    }
  }
`

const HeroContent = styled.div`
  max-width: 900px;
  margin: 0;
  margin-left: 15%;
  text-align: left;
  position: relative;
  z-index: 2;

  @media (min-width: ${theme.breakpoints.tablet}) {
    max-width: 1000px;
    margin-left: 15%;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    max-width: 1100px;
    margin-left: 15%;
  }
`

const Title = styled.h1`
  margin-bottom: 40px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 800;
  color: ${theme.colors.dark};
  text-transform: uppercase;
  letter-spacing: -0.03em;
  font-family: 'Helvetica Neue', 'Arial Black', sans-serif;
  text-shadow: none;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 64px;
    margin-bottom: 50px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size: 80px;
    margin-bottom: 60px;
  }

  span {
    color: ${theme.colors.primaryDark};
    font-weight: 800;
    display: block;
    margin-top: 12px;
  }
`

const Description = styled.p`
  color: ${theme.colors.text.secondary};
  margin-bottom: 50px;
  font-size: 18px;
  line-height: 1.6;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-weight: 400;
  max-width: 600px;

  @media (min-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 60px;
    font-size: 20px;
    max-width: 650px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    margin-bottom: 70px;
    font-size: 22px;
    max-width: 700px;
  }
`

const SubscribeButton = styled.a`
  position: relative;
  background: url('/brush-button.png') no-repeat center center;
  background-size: 100% 100%;
  color: ${theme.colors.white};
  border: none;
  padding: 24px 60px;
  font-size: 16px;
  font-weight: 700;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: none;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  box-shadow: none;

  &::after {
    content: '→';
    font-size: 24px;
    transition: none;
    position: relative;
    z-index: 1;
  }

  &:hover {
    transform: rotate(5deg) translateX(3px);
    font-style: italic;
  }
  
  &:hover::after {
    transform: translateX(4px);
  }
  
  &:active {
    transform: translateY(8px);
    filter: invert(1);
    color: ${theme.colors.primaryDark};
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