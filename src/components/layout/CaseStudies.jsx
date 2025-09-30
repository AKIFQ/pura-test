import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { ArrowRightIcon } from '../common/Icons';

const CaseStudiesSection = styled.section`
  padding: 80px 60px;
  background-color: ${theme.colors.dark};
  color: ${theme.colors.text.light};
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  ${theme.typography.h2};
  color: ${theme.colors.text.light};
`;

const ViewAllButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${theme.colors.text.light};
  ${theme.typography.button};

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const CaseStudiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`;

const CaseStudyCard = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
`;

const CaseStudyImage = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${theme.colors.gray[200]};
`;

const CaseStudyContent = styled.div`
  padding: 32px;
`;

const CaseStudyTitle = styled.h3`
  ${theme.typography.h3};
  color: ${theme.colors.text.primary};
  margin-bottom: 16px;
`;

const CaseStudyDescription = styled.p`
  ${theme.typography.body};
  color: ${theme.colors.text.secondary};
  margin-bottom: 24px;
`;

const ReadMoreButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${theme.colors.text.primary};
  ${theme.typography.button};

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const caseStudies = [
  {
    title: 'SEO Optimization for E-commerce Platform',
    description: 'Increased organic traffic by 200% and improved conversion rates through strategic SEO optimization.',
  },
  {
    title: 'Social Media Campaign for Retail Brand',
    description: 'Boosted engagement by 150% and generated 2x more leads through targeted social media marketing.',
  },
];

const CaseStudies = () => {
  return (
    <CaseStudiesSection>
      <Content>
        <SectionHeader>
          <SectionTitle>Case Studies</SectionTitle>
          <ViewAllButton>
            View all cases <ArrowRightIcon />
          </ViewAllButton>
        </SectionHeader>
        <CaseStudiesGrid>
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index}>
              <CaseStudyImage />
              <CaseStudyContent>
                <CaseStudyTitle>{study.title}</CaseStudyTitle>
                <CaseStudyDescription>{study.description}</CaseStudyDescription>
                <ReadMoreButton>
                  Read more <ArrowRightIcon />
                </ReadMoreButton>
              </CaseStudyContent>
            </CaseStudyCard>
          ))}
        </CaseStudiesGrid>
      </Content>
    </CaseStudiesSection>
  );
};

export default CaseStudies;