import styled from '@emotion/styled'
import { theme } from '../../styles/theme'
import { useState } from 'react'

const SubscribeContainer = styled.section`
  padding: 80px 20px;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
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
  max-width: 1200px;
  margin: 0 auto;
`

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 60px;
`

const HeaderTitle = styled.h2`
  font-size: 42px;
  line-height: 1.1;
  font-weight: 500;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: ${theme.colors.text.primary};
  margin: 0 0 16px 0;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 48px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size: 56px;
  }
`

const HeaderSubtitle = styled.p`
  font-size: 18px;
  line-height: 1.6;
  font-weight: 500;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  color: ${theme.colors.text.secondary};
  margin: 0 0 24px 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 20px;
  }
`

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 48px;
  margin-top: 32px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 24px;
  }
`

const StatItem = styled.div`
  text-align: center;
`

const StatNumber = styled.div`
  font-size: 32px;
  font-weight: 500;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  color: ${theme.colors.primary};
  line-height: 1;
`

const StatLabel = styled.div`
  font-size: 14px;
  font-weight: 500;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  color: ${theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 4px;
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

const MainGrid = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr;

  @media (min-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    gap: 60px;
  }
`

const NewsletterPreview = styled.div`
  background: ${theme.colors.white};
  border-radius: 16px;
  padding: 32px;
  box-shadow: ${theme.shadows.lg};
  border: 1px solid rgba(0, 0, 0, 0.06);
`

const PreviewTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  color: ${theme.colors.text.primary};
  margin: 0 0 20px 0;
`

const NewsletterGrid = styled.div`
  display: grid;
  gap: 16px;
  margin-bottom: 24px;
`

const NewsletterCard = styled.div`
  border: 2px solid ${props => props.isActive ? theme.colors.primary : theme.colors.gray[200]};
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${props => props.isActive ? `${theme.colors.primary}08` : theme.colors.white};

  &:hover {
    border-color: ${theme.colors.primary};
    transform: translateY(-2px);
  }
`

const NewsletterName = styled.div`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  color: ${theme.colors.text.primary};
  margin-bottom: 8px;
`

const NewsletterDescription = styled.div`
  font-size: 14px;
  font-weight: 500;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  color: ${theme.colors.text.secondary};
  line-height: 1.5;
`

const SampleHeadlines = styled.div`
  margin-top: 20px;
`

const SampleTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  color: ${theme.colors.text.primary};
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

const HeadlineList = styled.div`
  display: grid;
  gap: 8px;
`

const HeadlineItem = styled.div`
  font-size: 13px;
  font-weight: 500;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  color: ${theme.colors.text.secondary};
  line-height: 1.4;
  padding-left: 16px;
  position: relative;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${theme.colors.primary};
  }
`

const FormSection = styled.div`
  background: ${theme.colors.white};
  border-radius: 16px;
  padding: 32px;
  box-shadow: ${theme.shadows.lg};
  border: 1px solid rgba(0, 0, 0, 0.06);
`

const Left = styled.div``
const Right = styled.div``

const Title = styled.h2`
  font-size: 28px;
  line-height: 1.2;
  font-weight: 400;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  color: ${theme.colors.text.primary};
  margin: 0 0 8px 0;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 32px;
  }
`

const Subtitle = styled.p`
  ${theme.typography.body};
  color: ${theme.colors.text.secondary};
  margin: 0;
`

const Form = styled.form`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto auto;
  }
`

const FormTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  color: ${theme.colors.text.primary};
  margin: 0 0 24px 0;
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
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 500;
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

const CheckboxGroup = styled.div`
  display: grid;
  gap: 12px;
  margin-bottom: 8px;

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-column: 1 / -1;
  }
`

const CheckboxItem = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  padding: 12px;
  border: 1px solid ${props => props.isChecked ? theme.colors.primary : theme.colors.gray[200]};
  border-radius: 8px;
  background: ${props => props.isChecked ? `${theme.colors.primary}08` : theme.colors.white};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${theme.colors.primary};
  }
`

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  accent-color: ${theme.colors.primary};
`

const CheckboxLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  color: ${theme.colors.text.primary};
`

const CheckboxDescription = styled.span`
  font-size: 12px;
  font-weight: 500;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  color: ${theme.colors.text.secondary};
  margin-left: 28px;
  display: block;
  margin-top: 4px;
`

const NameInput = styled(Input)``

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
  white-space: nowrap;
  position: relative;
  border-radius: 8px;

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-column: 1 / -1;
  }

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

const PrivacyNote = styled.div`
  font-size: 12px;
  font-weight: 500;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  color: ${theme.colors.text.secondary};
  text-align: center;
  margin-top: 16px;
  line-height: 1.4;

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-column: 1 / -1;
  }
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
    state: '',
    newsletters: {
      thc: false,
      cbd: false,
      globalInvestor: false,
      medical: false
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedNewsletter, setSelectedNewsletter] = useState('thc');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNewsletterChange = (newsletterType) => {
    setFormData({
      ...formData,
      newsletters: {
        ...formData.newsletters,
        [newsletterType]: !formData.newsletters[newsletterType]
      }
    });
  };

  const handleNewsletterSelect = (newsletterType) => {
    setSelectedNewsletter(newsletterType);
  };

  const getSampleHeadlines = (newsletterType) => {
    const headlines = {
      thc: [
        "🌴 Hawaii Reforms Cannabis Laws",
        "⚖️ NY Court Strikes Equity Program",
        "🧠 MJ Users Show Sharper Brains",
        "⚠️ Florida Bans 7-OH Kratom"
      ],
      cbd: [
        "🍷 Americans Rethink Drinking Habits",
        "🐔 Hemp Feed for Hens Approved",
        "💉 New Opioid Alternative Research",
        "🧘 CBD for Anxiety Treatment"
      ],
      globalInvestor: [
        "🔫 26 Cartel Figures Come to USA",
        "🗽 NY Court Strikes Equity Program",
        "💰 Cannabis Investment Trends",
        "📊 Market Analysis Q4 2024"
      ],
      medical: [
        "🩺 Senate OKs VA Docs Recommending Cannabis",
        "🧬 New Cannabis Research Studies",
        "💊 Medical Cannabis Access Expansion",
        "🏥 Hospital Cannabis Integration Programs"
      ]
    };
    return headlines[newsletterType] || [];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ 
        email: '', 
        firstName: '', 
        state: '',
        newsletters: {
          thc: false,
          cbd: false,
          globalInvestor: false,
          medical: false
        }
      });
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
        <HeaderSection>
          <HeaderTitle>Weekly News Roundup</HeaderTitle>
          <HeaderSubtitle>
            Subscribe to receive free weekly cannabis, hemp and global investor news roundups! 
            Join thousands of professionals who trust Purablis for reliable, timely insights.
          </HeaderSubtitle>
          
          <StatsContainer>
            <StatItem>
              <StatNumber>50K+</StatNumber>
              <StatLabel>Active Subscribers</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>4</StatNumber>
              <StatLabel>Newsletter Categories</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>Weekly</StatNumber>
              <StatLabel>Delivery Schedule</StatLabel>
            </StatItem>
          </StatsContainer>
        </HeaderSection>

        <MainGrid>
          <NewsletterPreview>
            <PreviewTitle>Choose Your Newsletters</PreviewTitle>
            <NewsletterGrid>
              <NewsletterCard 
                isActive={selectedNewsletter === 'thc'}
                onClick={() => handleNewsletterSelect('thc')}
              >
                <NewsletterName>THC</NewsletterName>
                <NewsletterDescription>
                  Cannabis industry news, policy updates, and market developments
                </NewsletterDescription>
              </NewsletterCard>

              <NewsletterCard 
                isActive={selectedNewsletter === 'cbd'}
                onClick={() => handleNewsletterSelect('cbd')}
              >
                <NewsletterName>CBD</NewsletterName>
                <NewsletterDescription>
                  Hemp industry insights, wellness trends, and therapeutic applications
                </NewsletterDescription>
              </NewsletterCard>

              <NewsletterCard 
                isActive={selectedNewsletter === 'globalInvestor'}
                onClick={() => handleNewsletterSelect('globalInvestor')}
              >
                <NewsletterName>Global Investor</NewsletterName>
                <NewsletterDescription>
                  Investment opportunities, market analysis, and financial trends
                </NewsletterDescription>
              </NewsletterCard>

              <NewsletterCard 
                isActive={selectedNewsletter === 'medical'}
                onClick={() => handleNewsletterSelect('medical')}
              >
                <NewsletterName>Medical</NewsletterName>
                <NewsletterDescription>
                  Medical cannabis research, therapeutic applications, and healthcare developments
                </NewsletterDescription>
              </NewsletterCard>
            </NewsletterGrid>

            <SampleHeadlines>
              <SampleTitle>Sample Headlines from {selectedNewsletter.toUpperCase()}</SampleTitle>
              <HeadlineList>
                {getSampleHeadlines(selectedNewsletter).map((headline, index) => (
                  <HeadlineItem key={index}>{headline}</HeadlineItem>
                ))}
              </HeadlineList>
            </SampleHeadlines>
          </NewsletterPreview>

          <FormSection>
            <FormTitle>Subscribe Now</FormTitle>
            <Form onSubmit={handleSubmit}>
              <Input
                type="email"
                name="email"
                placeholder="Email address"
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

              <CheckboxGroup>
                <CheckboxItem isChecked={formData.newsletters.thc}>
                  <Checkbox
                    type="checkbox"
                    checked={formData.newsletters.thc}
                    onChange={() => handleNewsletterChange('thc')}
                  />
                  <div>
                    <CheckboxLabel>THC Newsletter</CheckboxLabel>
                    <CheckboxDescription>Cannabis industry updates and policy news</CheckboxDescription>
                  </div>
                </CheckboxItem>

                <CheckboxItem isChecked={formData.newsletters.cbd}>
                  <Checkbox
                    type="checkbox"
                    checked={formData.newsletters.cbd}
                    onChange={() => handleNewsletterChange('cbd')}
                  />
                  <div>
                    <CheckboxLabel>CBD Newsletter</CheckboxLabel>
                    <CheckboxDescription>Hemp industry and wellness insights</CheckboxDescription>
                  </div>
                </CheckboxItem>

                <CheckboxItem isChecked={formData.newsletters.globalInvestor}>
                  <Checkbox
                    type="checkbox"
                    checked={formData.newsletters.globalInvestor}
                    onChange={() => handleNewsletterChange('globalInvestor')}
                  />
                  <div>
                    <CheckboxLabel>Global Investor Newsletter</CheckboxLabel>
                    <CheckboxDescription>Investment opportunities and market analysis</CheckboxDescription>
                  </div>
                </CheckboxItem>

                <CheckboxItem isChecked={formData.newsletters.medical}>
                  <Checkbox
                    type="checkbox"
                    checked={formData.newsletters.medical}
                    onChange={() => handleNewsletterChange('medical')}
                  />
                  <div>
                    <CheckboxLabel>Medical Newsletter</CheckboxLabel>
                    <CheckboxDescription>Medical research and healthcare developments</CheckboxDescription>
                  </div>
                </CheckboxItem>
              </CheckboxGroup>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'SUBSCRIBING...' : 'SUBSCRIBE TO NEWSLETTERS'}
              </SubmitButton>

              <PrivacyNote>
                By subscribing, you agree to receive weekly newsletters. You can unsubscribe at any time. 
                We respect your privacy and never share your information with third parties.
              </PrivacyNote>

              {showSuccess && (
                <SuccessMessage>
                  Thank you for subscribing! You'll receive our next newsletter soon.
                </SuccessMessage>
              )}
            </Form>
          </FormSection>
        </MainGrid>
      </SubscribeContent>
    </SubscribeContainer>
  );
}
