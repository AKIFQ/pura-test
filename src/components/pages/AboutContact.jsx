import styled from '@emotion/styled'
import { theme } from '../../styles/theme'
import { useState } from 'react'

const AboutContactContainer = styled.section`
  padding: 100px 20px;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  min-height: 100vh;

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 120px 40px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: 140px 60px;
  }
`

const AboutContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 80px;
`

const HeaderTitle = styled.h1`
  font-size: 48px;
  line-height: 1.1;
  font-weight: 500;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: ${theme.colors.text.primary};
  margin: 0 0 24px 0;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 56px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size: 64px;
  }
`

const HeaderSubtitle = styled.p`
  font-size: 20px;
  line-height: 1.6;
  font-weight: 500;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  color: ${theme.colors.text.secondary};
  margin: 0 0 32px 0;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`

const MainGrid = styled.div`
  display: grid;
  gap: 60px;
  grid-template-columns: 1fr;

  @media (min-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    gap: 80px;
  }
`

const AboutSection = styled.div`
  background: ${theme.colors.white};
  border-radius: 20px;
  padding: 40px;
  box-shadow: ${theme.shadows.lg};
  border: 1px solid rgba(0, 0, 0, 0.06);
`

const ContactSection = styled.div`
  background: ${theme.colors.white};
  border-radius: 20px;
  padding: 40px;
  box-shadow: ${theme.shadows.lg};
  border: 1px solid rgba(0, 0, 0, 0.06);
`

const SectionTitle = styled.h2`
  font-size: 32px;
  line-height: 1.2;
  font-weight: 500;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  color: ${theme.colors.text.primary};
  margin: 0 0 24px 0;
`

const AboutText = styled.p`
  font-size: 18px;
  line-height: 1.7;
  font-weight: 500;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  color: ${theme.colors.text.primary};
  margin: 0 0 24px 0;
`

const AboutTextSecondary = styled.p`
  font-size: 16px;
  line-height: 1.6;
  font-weight: 500;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  color: ${theme.colors.text.secondary};
  margin: 0 0 32px 0;
`

const TeamSignature = styled.div`
  font-size: 18px;
  font-weight: 500;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  color: ${theme.colors.primary};
  font-style: italic;
  text-align: right;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 2px solid ${theme.colors.gray[200]};
`

const Form = styled.form`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
`

const Input = styled.input`
  padding: 16px 20px;
  border: 1px solid ${theme.colors.gray[300]};
  background: ${theme.colors.white};
  color: ${theme.colors.text.primary};
  border-radius: 12px;
  font-size: 16px;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 500;
  outline: none;
  transition: border-color 0.2s ease, background 0.2s ease;

  &::placeholder { 
    color: ${theme.colors.text.secondary}; 
    opacity: 0.7; 
  }

  &:focus {
    border-color: ${theme.colors.primary};
    background: ${theme.colors.white};
  }
`

const TextArea = styled.textarea`
  padding: 16px 20px;
  border: 1px solid ${theme.colors.gray[300]};
  background: ${theme.colors.white};
  color: ${theme.colors.text.primary};
  border-radius: 12px;
  font-size: 16px;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 500;
  outline: none;
  transition: border-color 0.2s ease, background 0.2s ease;
  min-height: 120px;
  resize: vertical;

  &::placeholder { 
    color: ${theme.colors.text.secondary}; 
    opacity: 0.7; 
  }

  &:focus {
    border-color: ${theme.colors.primary};
    background: ${theme.colors.white};
  }
`

const Select = styled.select`
  padding: 16px 20px;
  border: 1px solid ${theme.colors.gray[300]};
  background: ${theme.colors.white};
  color: ${theme.colors.text.primary};
  border-radius: 12px;
  font-size: 16px;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 500;
  outline: none;
  appearance: none;
  transition: border-color 0.2s ease, background 0.2s ease;

  &:focus {
    border-color: ${theme.colors.primary};
    background: ${theme.colors.white};
  }
`

const SubmitButton = styled.button`
  background: ${theme.colors.dark};
  color: ${theme.colors.white};
  border: none;
  padding: 20px 32px;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 12px;

  &:hover { 
    background: ${theme.colors.primary};
    transform: translateY(-2px);
  }
  &:active { 
    transform: translateY(0); 
  }
  &:disabled { 
    opacity: 0.7; 
    cursor: not-allowed; 
  }
`

const SuccessMessage = styled.div`
  background-color: #10B981;
  color: white;
  padding: 16px 20px;
  border-radius: 12px;
  margin-top: 20px;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 500;
  text-align: center;
`

const ContactInfo = styled.div`
  margin-top: 32px;
  padding-top: 32px;
  border-top: 2px solid ${theme.colors.gray[200]};
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`

const ContactLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  color: ${theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  min-width: 80px;
`

const ContactValue = styled.span`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  color: ${theme.colors.text.primary};
`

const AboutContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1000);
  };

  return (
    <AboutContactContainer>
      <AboutContactContent>
        <HeaderSection>
          <HeaderTitle>About & Contact</HeaderTitle>
          <HeaderSubtitle>
            Learn more about Purablis and get in touch with our team. We're here to help you stay informed about the latest developments in medicinal alternatives.
          </HeaderSubtitle>
        </HeaderSection>

        <MainGrid>
          <AboutSection>
            <SectionTitle>About Purablis</SectionTitle>
            <AboutText>
              We care about informing people of the medical benefits of cannabis and CBD. 
              We believe that the more people that are informed of the power of these medicinal plants, 
              the better it will be for society as a whole.
            </AboutText>
            <AboutTextSecondary>
              Our mission is to provide reliable, timely, and comprehensive news coverage across 
              the cannabis, hemp, and global investment sectors. Through our weekly newsletters, 
              we connect thousands of professionals with the insights they need to make informed decisions.
            </AboutTextSecondary>
            <TeamSignature>
              Thanks!<br />
              The Purablis Team
            </TeamSignature>
          </AboutSection>

          <ContactSection>
            <SectionTitle>Get In Touch</SectionTitle>
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <Select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select Subject</option>
                <option value="general">General Inquiry</option>
                <option value="newsletter">Newsletter Questions</option>
                <option value="partnership">Partnership Opportunities</option>
                <option value="media">Media & Press</option>
                <option value="other">Other</option>
              </Select>

              <TextArea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </SubmitButton>

              {showSuccess && (
                <SuccessMessage>
                  Thank you for your message! We'll get back to you soon.
                </SuccessMessage>
              )}
            </Form>

            <ContactInfo>
              <ContactItem>
                <ContactLabel>Email</ContactLabel>
                <ContactValue>hello@purablis.com</ContactValue>
              </ContactItem>
              <ContactItem>
                <ContactLabel>Response</ContactLabel>
                <ContactValue>Within 24 hours</ContactValue>
              </ContactItem>
              <ContactItem>
                <ContactLabel>Founded</ContactLabel>
                <ContactValue>2024</ContactValue>
              </ContactItem>
            </ContactInfo>
          </ContactSection>
        </MainGrid>
      </AboutContactContent>
    </AboutContactContainer>
  );
};

export default AboutContact;
