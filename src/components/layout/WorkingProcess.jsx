import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { CheckIcon } from '../common/Icons';

const ProcessSection = styled.section`
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

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`;

const ProcessCard = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.xl};
  padding: 32px;
  box-shadow: ${theme.shadows.md};
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StepNumber = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  ${theme.typography.h3};
  color: ${theme.colors.text.primary};
`;

const ProcessTitle = styled.h3`
  ${theme.typography.h3};
  color: ${theme.colors.text.primary};
`;

const ProcessDescription = styled.p`
  ${theme.typography.body};
  color: ${theme.colors.text.secondary};
`;

const ProcessList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ProcessListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  ${theme.typography.body};
  color: ${theme.colors.text.primary};

  svg {
    color: ${theme.colors.primary};
  }
`;

const processes = [
  {
    step: '1',
    title: 'Research & Analysis',
    description: 'We conduct thorough market research and analyze your business needs.',
    items: [
      'Market research',
      'Competitor analysis',
      'User behavior study'
    ]
  },
  {
    step: '2',
    title: 'Strategy Development',
    description: 'We create a customized digital marketing strategy for your business.',
    items: [
      'Goal setting',
      'Channel selection',
      'Content planning'
    ]
  },
  {
    step: '3',
    title: 'Implementation',
    description: 'We execute the strategy and continuously monitor performance.',
    items: [
      'Campaign launch',
      'Performance tracking',
      'Regular optimization'
    ]
  }
];

const WorkingProcess = () => {
  return (
    <ProcessSection>
      <Content>
        <SectionTitle>Our Working Process</SectionTitle>
        <ProcessGrid>
          {processes.map((process, index) => (
            <ProcessCard key={index}>
              <StepNumber>{process.step}</StepNumber>
              <ProcessTitle>{process.title}</ProcessTitle>
              <ProcessDescription>{process.description}</ProcessDescription>
              <ProcessList>
                {process.items.map((item, itemIndex) => (
                  <ProcessListItem key={itemIndex}>
                    <CheckIcon size="20px" />
                    {item}
                  </ProcessListItem>
                ))}
              </ProcessList>
            </ProcessCard>
          ))}
        </ProcessGrid>
      </Content>
    </ProcessSection>
  );
};

export default WorkingProcess;