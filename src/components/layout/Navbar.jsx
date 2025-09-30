import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { theme } from '../../styles/theme'
import Logo from '../common/Logo'

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: ${props => props.isScrolled ? '16px' : '0'};
  z-index: 1000;
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  /* Smooth size and appearance changes only */
  padding: ${props => props.isScrolled ? '12px 20px' : '16px 20px'};
  margin: ${props => props.isScrolled ? '16px 20px 0 20px' : '0'};
  background: ${props => props.isScrolled 
    ? 'rgba(255, 255, 255, 0.95)' 
    : 'transparent'};
  backdrop-filter: ${props => props.isScrolled ? 'blur(25px)' : 'none'};
  border-bottom: ${props => props.isScrolled 
    ? '1px solid rgba(0, 0, 0, 0.08)' 
    : 'none'};
  box-shadow: ${props => props.isScrolled 
    ? '0 8px 25px rgba(0, 0, 0, 0.15)' 
    : 'none'};
  border-radius: ${props => props.isScrolled ? '16px' : '0'};
  
  /* Keep width consistent, just add margins for floating effect */
  width: 100%;
  max-width: ${props => props.isScrolled ? 'calc(100% - 40px)' : '100%'};

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: ${props => props.isScrolled ? '14px 24px' : '20px 32px'};
    margin: ${props => props.isScrolled ? '20px 32px 0 32px' : '0'};
    max-width: ${props => props.isScrolled ? 'calc(100% - 64px)' : '100%'};
    gap: ${props => props.isScrolled ? '20px' : '32px'};
    top: ${props => props.isScrolled ? '20px' : '0'};
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: ${props => props.isScrolled ? '16px 32px' : '24px 40px'};
    margin: ${props => props.isScrolled ? '24px 40px 0 40px' : '0'};
    max-width: ${props => props.isScrolled ? 'calc(100% - 80px)' : '100%'};
    gap: ${props => props.isScrolled ? '24px' : '40px'};
    top: ${props => props.isScrolled ? '24px' : '0'};
  }
`

const NavLinks = styled.div`
  display: none;

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${props => props.isScrolled ? '16px' : '24px'};
    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    gap: ${props => props.isScrolled ? '20px' : '32px'};
  }
`

const NavLink = styled(Link)`
  ${theme.typography.nav};
  font-weight: 600;
  font-size: ${props => props.isScrolled ? '15px' : '16px'};
  color: ${theme.colors.text.primary};
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    color: ${theme.colors.primary};
    transform: translateY(-1px);
  }
`

const RightLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.isScrolled ? '20px' : '32px'};
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    gap: ${props => props.isScrolled ? '24px' : '40px'};
  }
`

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.isScrolled ? '12px' : '16px'};
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`

const SubscribeLink = styled(Link)`
  font-family: 'Inter', sans-serif;
  font-size: ${props => props.isScrolled ? '15px' : '17px'};
  font-weight: 700;
  color: ${theme.colors.primary};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: ${theme.colors.primaryDark};
    transform: translateY(-1px);
  }
`

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.isScrolled ? '32px' : '36px'};
  height: ${props => props.isScrolled ? '32px' : '36px'};
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.05);
  color: ${theme.colors.text.primary};
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    background: rgba(0, 0, 0, 0.1);
  }

  svg {
    width: ${props => props.isScrolled ? '16px' : '18px'};
    height: ${props => props.isScrolled ? '16px' : '18px'};
  }
`

const YouTubeIcon = styled(SocialIcon)`
  &:hover {
    background: #ff0000;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 0, 0, 0.3);
  }
`

const TwitterIcon = styled(SocialIcon)`
  &:hover {
    background: #000000;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
`

const RequestButton = styled.button`
  padding: 10px 24px;
  border: 1px solid ${theme.colors.dark};
  border-radius: 14px;
  ${theme.typography.nav};
  color: ${theme.colors.text.primary};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
  }
`

const MobileMenuButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 20px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  }

  span {
    width: 100%;
    height: 2px;
    background-color: ${theme.colors.text.primary};
    transition: transform 0.3s ease;

    &:nth-of-type(1) {
      transform: ${props => props.isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'};
    }

    &:nth-of-type(2) {
      opacity: ${props => props.isOpen ? 0 : 1};
    }

    &:nth-of-type(3) {
      transform: ${props => props.isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'};
    }
  }
`

const MobileMenu = styled.div`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  position: fixed;
  top: 72px;
  left: 0;
  right: 0;
  background-color: ${theme.colors.white};
  padding: 24px;
  flex-direction: column;
  gap: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const thresholdDown = 80  // Threshold when scrolling down
      const thresholdUp = 60    // Threshold when scrolling up (hysteresis)
      
      if (scrollY > thresholdDown && !isScrolled) {
        setIsScrolled(true)
      } else if (scrollY < thresholdUp && isScrolled) {
        setIsScrolled(false)
      }
    }

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Check initial scroll position
    handleScroll()

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <NavbarContainer isScrolled={isScrolled}>
      <Logo isScrolled={isScrolled} />
      
      <RightLinks isScrolled={isScrolled}>
        <NavLink to="/news" isScrolled={isScrolled}>News</NavLink>
        <NavLink to="/contact" isScrolled={isScrolled}>Contact</NavLink>
        <SubscribeLink 
          to="/#subscribe" 
          isScrolled={isScrolled}
          title="Subscribe to Newsletter"
        >
          Subscribe
        </SubscribeLink>
        
        <SocialIcons isScrolled={isScrolled}>
          <YouTubeIcon 
            href="https://youtube.com" 
            target="_blank"
            rel="noopener noreferrer"
            isScrolled={isScrolled}
            title="YouTube"
          >
            <FaYoutube />
          </YouTubeIcon>
          
          <TwitterIcon 
            href="https://x.com" 
            target="_blank"
            rel="noopener noreferrer"
            isScrolled={isScrolled}
            title="X (Twitter)"
          >
            <FaXTwitter />
          </TwitterIcon>
        </SocialIcons>
      </RightLinks>

      <MobileMenuButton onClick={toggleMobileMenu} isOpen={isMobileMenuOpen}>
        <span />
        <span />
        <span />
      </MobileMenuButton>
      
      <MobileMenu isOpen={isMobileMenuOpen}>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </MobileMenu>
    </NavbarContainer>
  )
}