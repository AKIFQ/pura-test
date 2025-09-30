import styled from '@emotion/styled'
import { theme } from '../../styles/theme'

const HeroContainer = styled.section`
  padding: 0px 20px 40px;
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.6) 100%),
    url('/Watercolor Turquoise Painting.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
  min-height: 85vh;
  display: flex;
  align-items: center;
  margin-top: -48px; /* Smaller negative margin */
  padding-top: 120px; /* Reduced padding for header space */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.06) 0%, transparent 60%),
      radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.06) 0%, transparent 60%),
      radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.03) 0%, transparent 50%);
    backdrop-filter: blur(0.5px);
    z-index: 1;
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 0px 32px 60px;
    padding-top: 140px;
    margin-top: -60px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: 0px 40px 80px;
    padding-top: 160px;
    margin-top: -72px;
  }
`

const HeroContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
  backdrop-filter: blur(15px);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: 32px 24px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.08),
    0 0 0 1px rgba(255, 255, 255, 0.08) inset;

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 40px 32px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: 48px 40px;
  }
`

const Title = styled.h1`
  margin-bottom: 12px;
  font-size: 24px;
  line-height: 30px;
  font-weight: 700;
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: ${theme.colors.text.primary};

  @media (min-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 16px;
    font-size: 32px;
    line-height: 38px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    margin-bottom: 18px;
    font-size: 36px;
    line-height: 42px;
  }

  span {
    color: ${theme.colors.primary};
  }
`

const Description = styled.p`
  color: ${theme.colors.text.primary};
  opacity: 0.8;
  margin-bottom: 18px;
  font-size: 14px;
  line-height: 20px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;

  @media (min-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 22px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    margin-bottom: 24px;
    font-size: 17px;
    line-height: 24px;
  }
`

const SubscribeButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 8px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 
    0 12px 20px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;

  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 
      0 16px 25px rgba(0, 0, 0, 0.2),
      0 0 0 1px rgba(255, 255, 255, 0.2) inset;
    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 14px 32px;
    font-size: 16px;
    margin-top: 12px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: 16px 36px;
    font-size: 17px;
    margin-top: 16px;
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
        <SubscribeButton>Subscribe to Newsletter</SubscribeButton>
      </HeroContent>
    </HeroContainer>
  )
}