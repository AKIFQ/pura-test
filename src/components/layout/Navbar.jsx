import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import styled from '@emotion/styled'
import { FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { theme } from '../../styles/theme'
import Logo from '../common/Logo'

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 18px 20px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 2px solid ${theme.colors.dark};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, 
      ${theme.colors.primaryDark} 0%, 
      ${theme.colors.primaryDark} 30%, 
      transparent 30%, 
      transparent 100%
    );
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 20px 32px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: 22px 48px;
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
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${theme.colors.dark};
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  text-decoration: none;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    width: 0;
    height: 3px;
    background: ${theme.colors.primaryDark};
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    transform: translateX(-50%);
  }

  &:hover {
    color: ${theme.colors.primaryDark};
    letter-spacing: 0.18em;
    transform: translateY(-2px);
    
    &::after {
      width: 100%;
    }
  }

  &:active {
    transform: translateY(0);
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

const SubscribeLink = styled.a`
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${theme.colors.white};
  background: ${theme.colors.dark};
  text-decoration: none;
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;
  padding: 12px 24px;
  border-radius: 0;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${theme.colors.primaryDark};
    transition: left 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    z-index: -1;
  }

  &::after {
    content: '→';
    position: absolute;
    right: 12px;
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 8px 24px rgba(91, 58, 115, 0.4);
    letter-spacing: 0.15em;
    padding-right: 32px;
    
    &::before {
      left: 0;
    }
    
    &::after {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
  }
`

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: ${theme.colors.dark};
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  text-decoration: none;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${theme.colors.primaryDark};
    border-radius: 50%;
    opacity: 0;
    transform: scale(0);
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    z-index: -1;
  }

  &:hover {
    color: ${theme.colors.white};
    transform: scale(1.2) rotate(5deg);
    
    &::before {
      opacity: 1;
      transform: scale(1);
    }
  }

  &:active {
    transform: scale(1.1) rotate(0deg);
  }

  svg {
    width: 20px;
    height: 20px;
    position: relative;
    z-index: 1;
  }
`

const YouTubeIcon = styled(SocialIcon)``

const TwitterIcon = styled(SocialIcon)``

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
  const navigate = useNavigate()
  const location = useLocation()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSubscribeClick = (e) => {
    e.preventDefault()
    if (location.pathname === '/') {
      // Already on home page, just scroll
      scrollToSection('subscribe')
    } else {
      // Navigate to home page and then scroll
      navigate('/')
      setTimeout(() => scrollToSection('subscribe'), 100)
    }
  }

  const handleContactClick = (e) => {
    e.preventDefault()
    if (location.pathname === '/') {
      // Already on home page, just scroll
      scrollToSection('contact')
    } else {
      // Navigate to home page and then scroll
      navigate('/')
      setTimeout(() => scrollToSection('contact'), 100)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const thresholdDown = 80  // Threshold when scrolling down
      const thresholdUp = 20    // Lower threshold when scrolling up (closer to top)
      
      setIsScrolled(prevScrolled => {
        if (scrollY <= thresholdUp) {
          return false  // Always return to normal when near top
        } else if (scrollY > thresholdDown) {
          return true   // Always shrink when scrolled down
        }
        return prevScrolled  // Keep current state in between thresholds
      })
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
      <Logo />
      
      <RightLinks isScrolled={isScrolled}>
        <NavLink to="/news" isScrolled={isScrolled}>News</NavLink>
        <NavLink to="/contact" isScrolled={isScrolled}>Contact</NavLink>
        <SubscribeLink 
          href="#subscribe" 
          isScrolled={isScrolled}
          title="Subscribe to Newsletter"
          onClick={handleSubscribeClick}
        >
          Subscribe
        </SubscribeLink>
        
        <SocialIcons isScrolled={isScrolled}>
          <YouTubeIcon 
            href="https://www.youtube.com/@Purablis" 
            target="_blank"
            rel="noopener noreferrer"
            isScrolled={isScrolled}
            title="YouTube"
          >
            <FaYoutube />
          </YouTubeIcon>
          
          <TwitterIcon 
            href="https://x.com/Purablis" 
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