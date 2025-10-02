import styled from '@emotion/styled'
import { theme } from '../../styles/theme'
import { useState } from 'react'

const ContactContainer = styled.div`
  padding: 80px 20px;
  background-color: ${theme.colors.white};
  scroll-margin-top: 100px; /* Account for floating header */

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 100px 40px;
    scroll-margin-top: 120px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: 120px 60px;
    scroll-margin-top: 140px;
  }
`

const ContactContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`

const Card = styled.div`
  background: ${theme.colors.white};
  border-radius: 20px;
  padding: 28px;
  box-shadow: ${theme.shadows.lg};
  border: 1px solid rgba(0, 0, 0, 0.06);

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 36px;
  }
`

const Split = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1.2fr;
    align-items: start;
    gap: 40px;
  }
`

const Left = styled.div``
const Right = styled.div``

const Title = styled.h2`
  ${theme.typography.h2};
  color: ${theme.colors.text.primary};
  margin: 0 0 8px 0;
`

const Subtitle = styled.p`
  ${theme.typography.body};
  color: ${theme.colors.text.secondary};
  margin: 0;
`

const ContactForm = styled.form`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto auto auto;
  }
`

const Input = styled.input`
  padding: 14px 16px;
  border: 1px solid ${theme.colors.gray[300]};
  background: ${theme.colors.white};
  color: ${theme.colors.text.primary};
  border-radius: 12px;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
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
  padding: 14px 16px;
  border: 1px solid ${theme.colors.gray[300]};
  background: ${theme.colors.white};
  color: ${theme.colors.text.primary};
  border-radius: 12px;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  outline: none;
  appearance: none;
  transition: border-color 0.2s ease, background 0.2s ease;
  resize: vertical;
  min-height: 120px;

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-column: 1 / -1;
  }

  &:focus {
    border-color: ${theme.colors.primary};
    background: ${theme.colors.white};
  }
`

const Select = styled.select`
  padding: 14px 16px;
  border: 1px solid ${theme.colors.gray[300]};
  background: ${theme.colors.white};
  color: ${theme.colors.text.primary};
  border-radius: 12px;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  outline: none;
  appearance: none;
  transition: border-color 0.2s ease, background 0.2s ease;

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-column: 1 / -1;
  }

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
  font-weight: 700;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  position: relative;
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

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-column: 1 / -1;
  }

  &:hover { 
    background: ${theme.colors.primaryDark};
  }
  &:active { 
    transform: scale(0.98); 
  }
  &:disabled { 
    opacity: 0.7; 
    cursor: not-allowed; 
  }
`

const SuccessMessage = styled.div`
  background-color: #10B981;
  color: white;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 24px;
`

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1000);
  };

  return (
    <ContactContainer id="contact">
      <ContactContent>
        <Card>
          <Split>
            <Left>
              <Title>Contact Us</Title>
              <Subtitle>
                Have questions about our newsletter or medicinal alternatives? We'd love to hear from you.
              </Subtitle>
              {showSuccess && (
                <SuccessMessage>
                  Thank you for your message! We'll get back to you soon.
                </SuccessMessage>
              )}
            </Left>

            <Right>
              <ContactForm onSubmit={handleSubmit}>
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />

                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />

                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
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
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="newsletter">Newsletter Question</option>
                  <option value="medical">Medical Information</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="feedback">Feedback</option>
                </Select>

                <TextArea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  required
                />

                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'SENDING MESSAGE...' : 'SEND MESSAGE'}
                </SubmitButton>
              </ContactForm>
            </Right>
          </Split>
        </Card>
      </ContactContent>
    </ContactContainer>
  );
};
