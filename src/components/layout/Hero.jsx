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
  font-size: 16px;
  line-height: 1.8;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-weight: 400;
  max-width: 600px;
  text-shadow: none;

  @media (min-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 60px;
    font-size: 18px;
    max-width: 650px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    margin-bottom: 70px;
    font-size: 20px;
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
  clip-path: polygon(
    0% 8%, 2% 3%, 5% 1%, 10% 0%, 15% 1%, 20% 2%, 
    25% 1%, 30% 0%, 35% 1%, 40% 0%, 45% 1%, 50% 0%,
    55% 1%, 60% 0%, 65% 2%, 70% 1%, 75% 2%, 80% 1%,
    85% 0%, 90% 2%, 95% 1%, 98% 3%, 100% 8%,
    100% 92%, 98% 97%, 95% 99%, 90% 100%, 85% 99%,
    80% 98%, 75% 99%, 70% 100%, 65% 99%, 60% 100%,
    55% 99%, 50% 100%, 45% 99%, 40% 100%, 35% 99%,
    30% 100%, 25% 99%, 20% 98%, 15% 99%, 10% 100%,
    5% 99%, 2% 97%, 0% 92%
  );
  box-shadow: none;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: 
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 2px,
        rgba(255,255,255,0.03) 2px,
        rgba(255,255,255,0.03) 4px
      ),
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(255,255,255,0.02) 2px,
        rgba(255,255,255,0.02) 4px
      );
    pointer-events: none;
  }

  &::after {
    content: '→';
    font-size: 24px;
    transition: transform 0.2s ease;
    position: relative;
    z-index: 1;
  }

  &:hover {
    background: ${theme.colors.primaryDark};
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