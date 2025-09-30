import styled from '@emotion/styled'
import { theme } from '../../styles/theme'

const AboutContainer = styled.div`
  padding: 100px 20px 60px 20px;
  min-height: 100vh;
  background-color: ${theme.colors.white};

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 100px 40px 80px 40px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: 100px 60px 100px 60px;
  }
`

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`

const Title = styled.h1`
  ${theme.typography.h1};
  color: ${theme.colors.text.primary};
  margin-bottom: 32px;
`

const Description = styled.p`
  ${theme.typography.body};
  color: ${theme.colors.text.primary};
  margin-bottom: 32px;
  font-size: 20px;
  line-height: 1.6;
`

const Signature = styled.p`
  ${theme.typography.body};
  color: ${theme.colors.text.secondary};
  font-weight: 600;
  margin-top: 40px;
  font-style: italic;
`

const ValuesSection = styled.div`
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
`

const ValueCard = styled.div`
  padding: 32px;
  background-color: ${theme.colors.gray[100]};
  border-radius: 12px;
  text-align: center;
`

const ValueIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`

const ValueTitle = styled.h3`
  ${theme.typography.h3};
  color: ${theme.colors.text.primary};
  margin-bottom: 12px;
  font-size: 24px;
`

const ValueDescription = styled.p`
  ${theme.typography.body};
  color: ${theme.colors.text.secondary};
`

export const About = () => {
  return (
    <AboutContainer>
      <AboutContent>
        <Title>About Us</Title>
        <Description>
          We care about informing people of the medical benefits of cannabis and CBD. 
          We believe that the more people that are informed of the power of these medicinal plants, 
          the better it will be for society as a whole.
        </Description>
        
        <ValuesSection>
          <ValueCard>
            <ValueIcon>🌿</ValueIcon>
            <ValueTitle>Education</ValueTitle>
            <ValueDescription>
              Providing accurate, science-based information about medicinal alternatives
            </ValueDescription>
          </ValueCard>
          
          <ValueCard>
            <ValueIcon>🔬</ValueIcon>
            <ValueTitle>Research</ValueTitle>
            <ValueDescription>
              Staying current with the latest studies and developments in cannabis medicine
            </ValueDescription>
          </ValueCard>
          
          <ValueCard>
            <ValueIcon>🤝</ValueIcon>
            <ValueTitle>Community</ValueTitle>
            <ValueDescription>
              Building a community of informed individuals who benefit from medicinal alternatives
            </ValueDescription>
          </ValueCard>
        </ValuesSection>
        
        <Signature>
          Thanks!<br />
          The Purablis Team
        </Signature>
      </AboutContent>
    </AboutContainer>
  );
};
