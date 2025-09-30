import styled from '@emotion/styled'
import { theme } from '../../styles/theme'
import { useState } from 'react'

const SubscribeContainer = styled.section`
  padding: 60px 20px;
  background-color: ${theme.colors.gray[100]};

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 80px 40px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: 100px 60px;
  }
`

const SubscribeContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`

const Title = styled.h2`
  ${theme.typography.h2};
  color: ${theme.colors.text.primary};
  margin-bottom: 16px;
`

const Subtitle = styled.p`
  ${theme.typography.body};
  color: ${theme.colors.text.secondary};
  margin-bottom: 40px;
`

const Form = styled.form`
  display: grid;
  gap: 20px;
  max-width: 500px;
  margin: 0 auto;

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
      "email email"
      "name state"
      "button button";
  }
`

const Input = styled.input`
  padding: 14px 16px;
  border: 2px solid ${theme.colors.gray[300]};
  border-radius: 8px;
  font-size: 16px;
  font-family: 'Space Grotesk', sans-serif;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }

  &:first-of-type {
    @media (min-width: ${theme.breakpoints.tablet}) {
      grid-area: email;
    }
  }
`

const Select = styled.select`
  padding: 14px 16px;
  border: 2px solid ${theme.colors.gray[300]};
  border-radius: 8px;
  font-size: 16px;
  font-family: 'Space Grotesk', sans-serif;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-area: state;
  }
`

const NameInput = styled(Input)`
  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-area: name;
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
  font-family: 'Space Grotesk', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${theme.colors.primaryDark};
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-area: button;
  }
`

const SuccessMessage = styled.div`
  background-color: #10B981;
  color: white;
  padding: 16px;
  border-radius: 8px;
  margin-top: 20px;
`

export const SubscribeForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    state: ''
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
      setFormData({ email: '', firstName: '', state: '' });
      
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1000);
  };

  const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  return (
    <SubscribeContainer>
      <SubscribeContent>
        <Title>Weekly News Roundup</Title>
        <Subtitle>
          Subscribe to receive free weekly cannabis, hemp and global investor news roundups!
        </Subtitle>

        {showSuccess && (
          <SuccessMessage>
            Thank you for subscribing! You'll receive our next newsletter soon.
          </SuccessMessage>
        )}

        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <NameInput
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          
          <Select
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="">Choose State</option>
            {states.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </Select>
          
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
          </SubmitButton>
        </Form>
      </SubscribeContent>
    </SubscribeContainer>
  );
};
