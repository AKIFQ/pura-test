import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { ArrowRightIcon } from '../common/Icons';

const ServicesSection = styled.section`
  padding: 80px 60px;
  background-color: ${theme.colors.background};
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  ${theme.typography.h2};
  color: ${theme.colors.text.primary};
  margin-bottom: 48px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`;

const ServiceCard = styled.div`
  background-color: ${props => props.inverted ? theme.colors.dark : theme.colors.white};
  padding: 40px;
  border-radius: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 340px;
`;

const ServiceTitle = styled.h3`
  ${theme.typography.h3};
  color: ${props => props.inverted ? theme.colors.white : theme.colors.text.primary};
  margin-bottom: 24px;
`;

const ServiceDescription = styled.p`
  ${theme.typography.body};
  color: ${props => props.inverted ? theme.colors.white : theme.colors.text.secondary};
  margin-bottom: 32px;
`;

const LearnMore = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: ${props => props.inverted ? theme.colors.white : theme.colors.text.primary};
  ${theme.typography.button};
  cursor: pointer;
  padding: 0;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const services = [
  {
    title: 'Search Engine Optimization',
    description: 'Improve your website visibility and drive organic traffic with our data-driven SEO strategies.',
    inverted: false,
  },
  {
    title: 'Pay-per-Click Advertising',
    description: 'Drive targeted traffic and maximize ROI with our expertly managed PPC campaigns.',
    inverted: true,
  },
  {
    title: 'Social Media Marketing',
    description: 'Build brand awareness and engage with your audience through strategic social media management.',
    inverted: true,
  },
  {
    title: 'Content Marketing',
    description: 'Create valuable content that resonates with your audience and drives conversions.',
    inverted: false,
  },
];

const Services = () => {
  return (
    <ServicesSection>
      <Content>
        <SectionTitle>Services we offer</SectionTitle>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index} inverted={service.inverted}>
              <div>
                <ServiceTitle inverted={service.inverted}>{service.title}</ServiceTitle>
                <ServiceDescription inverted={service.inverted}>
                  {service.description}
                </ServiceDescription>
              </div>
              <LearnMore inverted={service.inverted}>
                Learn more <ArrowRightIcon />
              </LearnMore>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Content>
    </ServicesSection>
  );
};

export default Services;