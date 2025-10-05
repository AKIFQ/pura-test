import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { theme } from '../../styles/theme'

const HeroContainer = styled.section`
  padding: 80px 20px 80px;
  background: ${theme.colors.white};
  position: relative;
  overflow: visible;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  &::before {
    content: '';
    position: absolute;
    top: -5%;
    right: 5%;
    width: 400px;
    height: 400px;
    background: ${theme.colors.primaryDark};
    opacity: 0.08;
    clip-path: polygon(
      5% 10%, 10% 5%, 20% 8%, 30% 3%, 40% 7%, 50% 2%,
      60% 6%, 70% 4%, 80% 8%, 90% 5%, 95% 10%,
      98% 20%, 95% 30%, 97% 40%, 93% 50%, 96% 60%,
      94% 70%, 97% 80%, 92% 90%, 88% 95%,
      80% 92%, 70% 96%, 60% 94%, 50% 98%, 40% 93%,
      30% 97%, 20% 92%, 10% 95%, 5% 88%,
      2% 80%, 5% 70%, 3% 60%, 7% 50%, 4% 40%,
      6% 30%, 3% 20%, 8% 10%
    );
    z-index: 0;
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 100px 40px 100px;
    
    &::before {
      width: 500px;
      height: 500px;
      top: -8%;
      right: 8%;
    }
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: 120px 60px 120px;
    
    &::before {
      width: 600px;
      height: 600px;
      top: -10%;
      right: 10%;
    }
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
  font-weight: 800;
  color: ${theme.colors.dark};
  text-transform: uppercase;
  letter-spacing: -0.02em;
  font-family: 'Helvetica Neue', 'Arial Black', sans-serif;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 42px;
    margin-bottom: 28px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size: 52px;
    margin-bottom: 32px;
  }

  span {
    color: ${theme.colors.primaryDark};
    font-weight: 800;
    display: block;
    margin-top: 8px;
  }
`

const Description = styled.p`
  color: ${theme.colors.text.secondary};
  margin-bottom: 32px;
  font-size: 16px;
  line-height: 1.6;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-weight: 400;
  max-width: 600px;

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
  transition: all 0.2s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  box-shadow: none;

  &::after {
    content: '→';
    font-size: 24px;
    transition: transform 0.2s ease;
    position: relative;
    z-index: 1;
  }

  &:hover {
    filter: brightness(1.1);
  }
  
  &:hover::after {
    transform: translateX(4px);
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