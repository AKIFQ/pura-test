import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { theme } from '../../styles/theme'

const HeroContainer = styled.section`
  padding: 0px 20px 40px;
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.6) 100%),
    linear-gradient(to bottom, transparent 0%, transparent 85%, rgba(255, 255, 255, 0.85) 95%, rgba(255, 255, 255, 1) 100%),
    url('/Watercolor Turquoise Painting.jpg');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: -100px;
  margin-bottom: 0;
  padding-top: 180px; /* Increased to push content down */
  padding-bottom: 100px;

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 0px 32px 120px;
    padding-top: 200px;
    margin-top: -120px;
    margin-bottom: 0;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: 0px 40px 140px;
    padding-top: 220px;
    margin-top: -140px;
    margin-bottom: 0;
  }
`

const HeroContent = styled.div`
  max-width: 700px;
  margin: 0;
  text-align: left;
  position: relative;
  z-index: 2;
  padding: 0 24px;

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 0 32px;
    max-width: 750px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: 0 40px;
    max-width: 800px;
  }
`

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 28px;
  line-height: 34px;
  font-weight: 400;
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: ${theme.colors.text.primary};
  text-shadow: 0 3px 6px rgba(255, 255, 255, 0.9);
  letter-spacing: -0.02em;

  @media (min-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 24px;
    font-size: 36px;
    line-height: 42px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    margin-bottom: 28px;
    font-size: 42px;
    line-height: 48px;
  }

  span {
    background: linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 600;
  }
`

const Description = styled.p`
  color: ${theme.colors.text.primary};
  opacity: 0.85;
  margin-bottom: 28px;
  font-size: 14px;
  line-height: 22px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  max-width: 500px;
  margin-left: 0;
  margin-right: auto;
  text-shadow: 0 2px 4px rgba(255, 255, 255, 0.9);

  @media (min-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 32px;
    font-size: 16px;
    line-height: 24px;
    max-width: 550px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    margin-bottom: 36px;
    font-size: 17px;
    line-height: 26px;
    max-width: 600px;
  }
`

const SubscribeButton = styled.a`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(139, 92, 246, 0.25);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
    background: linear-gradient(135deg, ${theme.colors.primaryDark} 0%, ${theme.colors.primary} 100%);
    
    &::before {
      left: 100%;
    }
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 14px 28px;
    font-size: 15px;
    margin-top: 8px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: 16px 32px;
    font-size: 16px;
    margin-top: 12px;
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