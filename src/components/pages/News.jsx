import styled from '@emotion/styled'
import { theme } from '../../styles/theme'
import { useState } from 'react'

const NewsContainer = styled.div`
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

const NewsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const NewsHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
`

const Title = styled.h1`
  ${theme.typography.h1};
  color: ${theme.colors.text.primary};
  margin-bottom: 16px;
`

const Subtitle = styled.p`
  ${theme.typography.body};
  color: ${theme.colors.text.secondary};
  margin-bottom: 32px;
`

const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`

const FilterButton = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid ${theme.colors.primary};
  
  ${props => props.active 
    ? `
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    `
    : `
      background-color: transparent;
      color: ${theme.colors.primary};
      
      &:hover {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
      }
    `
  }
`

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`

const SearchInput = styled.input`
  padding: 12px 16px;
  border: 2px solid ${theme.colors.gray[300]};
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`

const DateSection = styled.div`
  margin-bottom: 48px;
`

const DateHeader = styled.h3`
  ${theme.typography.h3};
  color: ${theme.colors.text.primary};
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid ${theme.colors.gray[200]};
`

const ColumnHeaders = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 8px;
`

const ColumnHeader = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  padding: 8px;
  border-radius: 6px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &.thc {
    background-color: ${theme.colors.primary};
  }
  
  &.cbd {
    background-color: #10B981;
  }
  
  &.global-investor {
    background-color: #F59E0B;
  }
`

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 24px;
`

const NewsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const NewsItem = styled.div`
  padding: 24px;
  border-radius: 12px;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray[200]};
  transition: all 0.3s ease;
  border-left: 4px solid ${props => {
    switch(props.category) {
      case 'thc': return theme.colors.primary;
      case 'cbd': return '#10B981';
      case 'global-investor': return '#F59E0B';
      default: return theme.colors.gray[300];
    }
  }};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
  }
`

const NewsTitle = styled.h3`
  ${theme.typography.h3};
  color: ${theme.colors.text.primary};
  margin-bottom: 12px;
  font-size: 20px;
`

const NewsDescription = styled.p`
  ${theme.typography.body};
  color: ${theme.colors.text.secondary};
  margin-bottom: 16px;
`

const NewsDate = styled.span`
  font-size: 14px;
  color: ${theme.colors.text.secondary};
  font-weight: 500;
`

const CategoryBadge = styled.span`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 12px;
  
  ${props => {
    switch(props.category) {
      case 'thc':
        return `background-color: ${theme.colors.primary}; color: white;`;
      case 'cbd':
        return `background-color: #10B981; color: white;`;
      case 'global-investor':
        return `background-color: #F59E0B; color: white;`;
      default:
        return `background-color: ${theme.colors.gray[200]}; color: ${theme.colors.text.primary};`;
    }
  }}
`

// Newsletter data organized by date and category
const newsData = {
  "2025-08-18": {
    thc: ["🌴 Hawaii Reforms Cannabis", "⚠️ Florida Bans 7-OH Kratom", "🍷 Americans Rethink Drinking"],
    cbd: ["⚖️ NY Court Strikes Equity", "🍷 Americans Rethink Drinking", "🔫 26 Cartel Figures Come to USA"],
    "global-investor": ["🧠 MJ Users Show Sharper Brains", "🐔 Hemp Feed for Hens", "🗽 NY Court Strikes Equity"]
  },
  "2025-08-11": {
    thc: ["🧠 Cannabis Keeps Brains Young", "🥗 Psychedelics Aid Eating Disorders", "🕊️ Trump's $50M Bounty on President"],
    cbd: ["🤝 Pot Firms Court Trump", "🥤 Energy Drink Scare", "🤝 Pot Firms Court Trump"],
    "global-investor": ["🫘 Kidneys Stay Strong", "💉 New Opioid Fix", "🤔 Trump Eyes Reschedule"]
  },
  "2025-08-04": {
    thc: ["✈️ Scientist Stuck at SFO", "📊 80% of Texans Back Hemp", "🇩🇪 Germany Allows Psilocybin"],
    cbd: ["⚖️ Testing Labs Sue Equipment Maker", "⚠️ FDA Wants Gas Station Opioid Banned", "🏫 NY to Help Pot Shops Near Schools"],
    "global-investor": ["🩺 Senate OKs VA Docs Recommending Cannabis", "✂️ Senate Drops Hemp Ban", "🤫 Trump Quietly Promised MJ Rescheduling"]
  },
  "2025-07-28": {
    thc: ["⚖️ DEA Shuffle", "✝️ Nuns Fight Hemp Ban", "🍹 Big Alcohol vs. Cannabis Drinks"],
    cbd: ["🔌 Power Meters Turn Spy", "🛌 Inflammation Changes Cannabis Sleep Effects", "🚪 Cresco Exits California Market"],
    "global-investor": ["💰 Trump's DOGE Cuts Cannabis Contracts", "🧠 Cannabis Extracts Aid Tourette's", "🌈 Will Psychedelics Ever Deliver?"]
  }
};

export const News = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter news data based on search term
  const filteredData = Object.entries(newsData).reduce((acc, [date, categories]) => {
    if (searchTerm) {
      const filteredCategories = {};
      Object.entries(categories).forEach(([category, articles]) => {
        const filteredArticles = articles.filter(article =>
          article.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (filteredArticles.length > 0) {
          filteredCategories[category] = filteredArticles;
        }
      });
      if (Object.keys(filteredCategories).length > 0) {
        acc[date] = filteredCategories;
      }
    } else {
      acc[date] = categories;
    }
    return acc;
  }, {});

  return (
    <NewsContainer>
      <NewsContent>
        <NewsHeader>
          <Title>Weekly News Roundup</Title>
          <Subtitle>
            Subscribe to receive free weekly cannabis, hemp and global investor news roundups!
          </Subtitle>
        </NewsHeader>

        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>

        {Object.entries(filteredData)
          .sort(([a], [b]) => new Date(b) - new Date(a))
          .map(([date, categories]) => (
          <DateSection key={date}>
            <DateHeader>{date}</DateHeader>
            
            <ColumnHeaders>
              <ColumnHeader className="thc">THC</ColumnHeader>
              <ColumnHeader className="cbd">CBD</ColumnHeader>
              <ColumnHeader className="global-investor">Global Investor</ColumnHeader>
            </ColumnHeaders>
            
            <NewsGrid>
              <NewsColumn>
                {categories.thc?.map((article, index) => (
                  <NewsItem key={`thc-${index}`} category="thc">
                    <NewsTitle>{article}</NewsTitle>
                  </NewsItem>
                )) || []}
              </NewsColumn>
              
              <NewsColumn>
                {categories.cbd?.map((article, index) => (
                  <NewsItem key={`cbd-${index}`} category="cbd">
                    <NewsTitle>{article}</NewsTitle>
                  </NewsItem>
                )) || []}
              </NewsColumn>
              
              <NewsColumn>
                {categories["global-investor"]?.map((article, index) => (
                  <NewsItem key={`global-investor-${index}`} category="global-investor">
                    <NewsTitle>{article}</NewsTitle>
                  </NewsItem>
                )) || []}
              </NewsColumn>
            </NewsGrid>
          </DateSection>
        ))}
      </NewsContent>
    </NewsContainer>
  );
};
