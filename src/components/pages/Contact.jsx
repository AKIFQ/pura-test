import styled from '@emotion/styled'
import { theme } from '../../styles/theme'
import { useState } from 'react'

const ContactContainer = styled.div`
  padding: 100px 20px 40px 20px;
  min-height: 100vh;
  background-color: ${theme.colors.white};

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 120px 32px 60px 32px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: 140px 40px 80px 40px;
  }
`

const ContactContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const Title = styled.h1`
  ${theme.typography.h1};
  color: ${theme.colors.text.primary};
  margin-bottom: 16px;
  text-align: center;
`

const Subtitle = styled.p`
  ${theme.typography.body};
  color: ${theme.colors.text.secondary};
  margin-bottom: 40px;
  text-align: center;
  font-size: 18px;
`

const ContactForm = styled.form`
  display: grid;
  gap: 24px;
  background-color: ${theme.colors.gray[100]};
  padding: 40px;
  border-radius: 12px;
`

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  &.full-width {
    grid-template-columns: 1fr;
  }
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-weight: 600;
  color: ${theme.colors.text.primary};
  margin-bottom: 8px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const Input = styled.input`
  padding: 12px 16px;
  border: 2px solid ${theme.colors.gray[300]};
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`

const TextArea = styled.textarea`
  padding: 12px 16px;
  border: 2px solid ${theme.colors.gray[300]};
  border-radius: 8px;
  font-size: 16px;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`

const Select = styled.select`
  padding: 12px 16px;
  border: 2px solid ${theme.colors.gray[300]};
  border-radius: 8px;
  font-size: 16px;
  background-color: white;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`

const SubmitButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  justify-self: start;
  
  &:hover {
    background-color: ${theme.colors.primaryDark};
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
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
    <ContactContainer>
      <ContactContent>
        <Title>Contact Us</Title>
        <Subtitle>
          Have questions about our newsletter or medicinal alternatives? We'd love to hear from you.
        </Subtitle>

        {showSuccess && (
          <SuccessMessage>
            Thank you for your message! We'll get back to you soon.
          </SuccessMessage>
        )}

        <ContactForm onSubmit={handleSubmit}>
          <FormRow>
            <FormGroup>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </FormRow>

          <FormRow className="full-width">
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </FormRow>

          <FormRow className="full-width">
            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Select
                id="subject"
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
            </FormGroup>
          </FormRow>

          <FormRow className="full-width">
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your inquiry..."
                required
              />
            </FormGroup>
          </FormRow>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>
        </ContactForm>
      </ContactContent>
    </ContactContainer>
  );
};
