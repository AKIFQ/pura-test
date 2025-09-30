import styled from '@emotion/styled'
import { theme } from '../../styles/theme'
import { useState } from 'react'

const SubscribeContainer = styled.section`
  padding: 80px 20px;
  background: ${theme.colors.white};
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

const SubscribeContent = styled.div`
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
    grid-template-columns: 1.1fr 1fr;
    align-items: center;
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

const Form = styled.form`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
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

  &::placeholder { color: ${theme.colors.text.secondary}; opacity: 0.7; }

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

const NameInput = styled(Input)``

const SubmitButton = styled.button`
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primaryDark});
  color: ${theme.colors.white};
  border: none;
  padding: 16px 24px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
  white-space: nowrap;

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-column: 1 / -1;
  }

  &:hover { filter: brightness(1.05); transform: translateY(-1px); }
  &:active { transform: translateY(0); }
  &:disabled { opacity: 0.7; cursor: not-allowed; }
`

const SuccessMessage = styled.div`
  background-color: #10B981;
  color: white;
  padding: 12px 16px;
  border-radius: 10px;
  margin-top: 14px;
  font-family: 'Inter', sans-serif;
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
    <SubscribeContainer id="subscribe">
      <SubscribeContent>
        <Card>
          <Split>
            <Left>
              <Title>Weekly News Roundup</Title>
              <Subtitle>Subscribe to receive free weekly cannabis, hemp and global investor news roundups!</Subtitle>
              {showSuccess && (
                <SuccessMessage>
                  Thank you for subscribing! You'll receive our next newsletter soon.
                </SuccessMessage>
              )}
            </Left>

            <Right>
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
            </Right>
          </Split>
        </Card>
      </SubscribeContent>
    </SubscribeContainer>
  );
}
