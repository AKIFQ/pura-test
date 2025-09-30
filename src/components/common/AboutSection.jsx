import styled from '@emotion/styled'
import { theme } from '../../styles/theme'

const AboutContainer = styled.section`
  padding: 60px 20px;
  background-color: ${theme.colors.white};

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 80px 40px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: 100px 60px;
  }
`

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`

const Title = styled.h2`
  ${theme.typography.h2};
  color: ${theme.colors.text.primary};
  margin-bottom: 24px;
`

const Description = styled.p`
  ${theme.typography.body};
  color: ${theme.colors.text.primary};
  margin-bottom: 32px;
  font-size: 18px;
  line-height: 1.6;
`

const Signature = styled.p`
  ${theme.typography.body};
  color: ${theme.colors.text.secondary};
  font-weight: 600;
  font-style: italic;
`

export const AboutSection = () => {
  return (
    <AboutContainer>
      <AboutContent>
        <Title>About Us</Title>
        <Description>
          We care about informing people of the medical benefits of cannabis and CBD. 
          We believe that the more people that are informed of the power of these medicinal plants, 
          the better it will be for society as a whole.
        </Description>
        <Signature>
          Thanks!<br />
          The Purablis Team
        </Signature>
      </AboutContent>
    </AboutContainer>
  );
};
