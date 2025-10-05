import styled from '@emotion/styled'
import { theme } from '../../styles/theme'
import { useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

const NewsContainer = styled.div`
  padding: 120px 20px 80px 20px;
  min-height: 100vh;
  background: ${theme.colors.white};
  position: relative;

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 140px 32px 100px 32px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: 160px 40px 120px 40px;
  }
`

const NewsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const NewsHeader = styled.div`
  text-align: left;
  margin-bottom: 40px;
  position: relative;
  padding-left: 0;
`

const Title = styled.h1`
  font-size: 36px;
  line-height: 1.2;
  font-weight: 400;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  color: ${theme.colors.dark};
  text-transform: uppercase;
  margin-bottom: 16px;
  letter-spacing: -0.02em;

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 48px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size: 56px;
  }
`

const Subtitle = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${theme.colors.text.secondary};
  margin-bottom: 40px;
  max-width: 700px;
  font-weight: 400;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 16px;
  }
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
  justify-content: flex-start;
  margin-bottom: 32px;
  position: relative;
  z-index: 10;
`

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
  }
`

const SearchInputWrapper = styled.div`
  position: relative;
  flex: 1;
`

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  background: ${theme.colors.gray[50]};
  border: 2px solid ${theme.colors.gray[300]};
  border-radius: 12px;
  padding: 12px 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  flex-shrink: 0;
  flex-wrap: wrap;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`

const FilterTitle = styled.div`
  font-size: 12px;
  font-weight: 500;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  color: ${theme.colors.text.primary};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-right: 8px;
  white-space: nowrap;
`

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }
`

const CheckboxItem = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  padding: 4px 8px;
  font-size: 13px;
  font-weight: 500;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  color: ${theme.colors.text.primary};
  transition: all 0.2s ease;
  border-radius: 6px;
  white-space: nowrap;

  &:hover {
    color: ${theme.colors.primary};
    background: rgba(139, 92, 246, 0.1);
  }
`

const Checkbox = styled.input`
  width: 14px;
  height: 14px;
  accent-color: ${theme.colors.primary};
  cursor: pointer;
`

const CheckboxLabel = styled.span`
  font-size: 13px;
  font-weight: 500;
`

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid ${theme.colors.gray[200]};
`

const PaginationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  padding: 0 8px;
  border: 1px solid ${theme.colors.gray[300]};
  border-radius: 4px;
  background: ${props => props.active ? theme.colors.primary : theme.colors.white};
  color: ${props => props.active ? theme.colors.white : theme.colors.text.primary};
  font-size: 14px;
  font-weight: 500;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: ${props => props.active ? theme.colors.primaryDark : theme.colors.gray[50]};
    border-color: ${theme.colors.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const PaginationDots = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  color: ${theme.colors.text.secondary};
  font-size: 14px;
  font-weight: 500;
`

const SearchInput = styled.input`
  padding: 14px 20px 14px 48px;
  border: 2px solid ${theme.colors.gray[300]};
  border-radius: 12px;
  width: 100%;
  font-size: 15px;
  background: ${theme.colors.gray[50]};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    background: white;
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.25);
    transform: translateY(-1px);
  }

  &::placeholder {
    color: ${theme.colors.text.secondary};
    opacity: 0.8;
  }
`

const SearchIcon = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${theme.colors.primary};
  font-size: 16px;
  opacity: 0.8;
  pointer-events: none;
`

const DateSection = styled.div`
  margin-bottom: 32px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 10;
  padding-bottom: 24px;
  border-bottom: 1px solid ${theme.colors.gray[200]};
  
  &:last-child {
    border-bottom: none;
  }
`

const DateHeader = styled.h3`
  font-size: 20px;
  font-weight: 500;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  color: ${theme.colors.text.primary};
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid ${theme.colors.gray[300]};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

const ColumnHeaders = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-bottom: 12px;
  margin-left: 0;
  margin-right: 0;
`

const ColumnHeader = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 12px;
  padding: 12px 8px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-family: 'Chillax', 'Helvetica Neue', Arial, sans-serif;
  position: relative;
  border-radius: 6px;
  
  &.thc,
  &.global-investor {
    background: linear-gradient(135deg, ${theme.colors.primaryDark} 0%, ${theme.colors.primary} 100%);
  }
  
  &.cbd,
  &.medical {
    background: linear-gradient(135deg, ${theme.colors.dark} 0%, #374151 100%);
  }
`

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 32px;
  align-items: start;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`

const NewsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const NewsItem = styled.div`
  padding: 12px 14px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid ${theme.colors.gray[300]};
  transition: all 0.2s ease;
  cursor: pointer;
  box-shadow: none;
  min-height: 60px;
  display: flex;
  align-items: center;
  border-left: 3px solid ${props => {
    switch(props.category) {
      case 'thc': return theme.colors.primary;
      case 'cbd': return '#64748b';
      case 'global-investor': return '#6b7280';
      case 'medical': return theme.colors.primaryDark;
      default: return theme.colors.gray[300];
    }
  }};
  
  &:hover {
    border-color: ${props => {
      switch(props.category) {
        case 'thc': return theme.colors.primaryDark;
        case 'cbd': return '#475569';
        case 'global-investor': return '#475569';
        case 'medical': return theme.colors.primary;
        default: return theme.colors.gray[400];
      }
    }};
    
    h4 {
      text-decoration: underline;
      text-decoration-color: ${props => {
        switch(props.category) {
          case 'thc': return theme.colors.primary;
          case 'cbd': return '#64748b';
          case 'global-investor': return '#6b7280';
          case 'medical': return theme.colors.primaryDark;
          default: return theme.colors.gray[400];
        }
      }};
    }
  }
`

const NewsTitle = styled.h4`
  font-size: 12px;
  line-height: 1.4;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  color: ${theme.colors.text.primary};
  margin: 0;
  text-align: left;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
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
        return `background-color: ${theme.colors.primaryDark}; color: white;`;
      case 'cbd':
        return `background-color: #64748b; color: white;`;
      case 'global-investor':
        return `background-color: #6b7280; color: white;`;
      case 'med':
        return `background-color: ${theme.colors.primary}; color: white;`;
      default:
        return `background-color: ${theme.colors.gray[200]}; color: ${theme.colors.text.primary};`;
    }
  }}
`

// Newsletter data organized by date and category
const newsData = {
  "2025-09-29": {
    thc: ["🧠 MJ Users Show Sharper Brains"],
    cbd: ["⚖️ NY Court Strikes Equity"],
    "global-investor": ["🫘 GSK will pay up to $2.2B to settle about 80,000 Zantac cancer claims"],
    medical: ["💊 Pharma Creating Cancer 🎓 Universities like Psilocybin 🌿 Hemp Unchanged"]
  },
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

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState({
    thc: true,
    cbd: true,
    'global-investor': true,
    medical: true
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Show 3 dates per page

  // Handle category checkbox changes
  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
    setCurrentPage(1); // Reset to first page when filters change
  };

  // Handle search term changes
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when search changes
  };

  // Filter news data based on search term and selected categories
  const filteredData = Object.entries(newsData).reduce((acc, [date, categories]) => {
    const filteredCategories = {};
    
    Object.entries(categories).forEach(([category, articles]) => {
      // Apply category filter - only show selected categories
      if (!selectedCategories[category]) {
        return;
      }
      
      // Apply search term filter
      const filteredArticles = searchTerm 
        ? articles.filter(article =>
            article.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : articles;
      
      if (filteredArticles.length > 0) {
        filteredCategories[category] = filteredArticles;
      }
    });
    
    if (Object.keys(filteredCategories).length > 0) {
      acc[date] = filteredCategories;
    }
    
    return acc;
  }, {});

  // Pagination logic
  const totalItems = Object.keys(filteredData).length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = Object.entries(filteredData)
    .sort(([a], [b]) => new Date(b) - new Date(a))
    .slice(startIndex, endIndex);

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <NewsContainer>
      <NewsContent>
        <NewsHeader>
          <Title>Weekly News Roundup</Title>
          <Subtitle>
            A clean, reliable archive of our weekly CBD, hemp and investor headlines.
            Built for partners and advertisers to review our editorial quality and depth.
          </Subtitle>
        </NewsHeader>

        <SearchContainer>
          <SearchWrapper>
            <SearchInputWrapper>
              <SearchIcon>
                <HiOutlineSearch />
              </SearchIcon>
              <SearchInput
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </SearchInputWrapper>
            <FilterContainer>
              <FilterTitle>Filter Categories</FilterTitle>
              <CheckboxGroup>
                <CheckboxItem>
                  <Checkbox
                    type="checkbox"
                    checked={selectedCategories.thc}
                    onChange={() => handleCategoryChange('thc')}
                  />
                  <CheckboxLabel>THC</CheckboxLabel>
                </CheckboxItem>
                <CheckboxItem>
                  <Checkbox
                    type="checkbox"
                    checked={selectedCategories.cbd}
                    onChange={() => handleCategoryChange('cbd')}
                  />
                  <CheckboxLabel>CBD</CheckboxLabel>
                </CheckboxItem>
                <CheckboxItem>
                  <Checkbox
                    type="checkbox"
                    checked={selectedCategories['global-investor']}
                    onChange={() => handleCategoryChange('global-investor')}
                  />
                  <CheckboxLabel>Global Investor</CheckboxLabel>
                </CheckboxItem>
                <CheckboxItem>
                  <Checkbox
                    type="checkbox"
                    checked={selectedCategories.medical}
                    onChange={() => handleCategoryChange('medical')}
                  />
                  <CheckboxLabel>Medical</CheckboxLabel>
                </CheckboxItem>
              </CheckboxGroup>
            </FilterContainer>
          </SearchWrapper>
        </SearchContainer>

        {currentPageData.map(([date, categories]) => (
          <DateSection key={date}>
            <DateHeader>{date}</DateHeader>
            
            <ColumnHeaders>
              <ColumnHeader className="thc">THC</ColumnHeader>
              <ColumnHeader className="cbd">CBD</ColumnHeader>
              <ColumnHeader className="global-investor">GLOBAL INVESTOR</ColumnHeader>
              <ColumnHeader className="medical">MEDICAL</ColumnHeader>
            </ColumnHeaders>
            
            <NewsGrid>
              <NewsColumn>
                {categories.thc ? (
                  <NewsItem category="thc">
                    <NewsTitle>{categories.thc[0]}</NewsTitle>
                  </NewsItem>
                ) : null}
              </NewsColumn>
              <NewsColumn>
                {categories.cbd ? (
                  <NewsItem category="cbd">
                    <NewsTitle>{categories.cbd[0]}</NewsTitle>
                  </NewsItem>
                ) : null}
              </NewsColumn>
              <NewsColumn>
                {categories["global-investor"] ? (
                  <NewsItem category="global-investor">
                    <NewsTitle>{categories["global-investor"][0]}</NewsTitle>
                  </NewsItem>
                ) : null}
              </NewsColumn>
              <NewsColumn>
                {categories.medical ? (
                  <NewsItem category="medical">
                    <NewsTitle>{categories.medical[0]}</NewsTitle>
                  </NewsItem>
                ) : null}
              </NewsColumn>
            </NewsGrid>
          </DateSection>
        ))}

        {totalPages > 1 && (
          <PaginationContainer>
            <PaginationButton
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              ←
            </PaginationButton>
            
            {getPageNumbers().map((page, index) => (
              page === '...' ? (
                <PaginationDots key={`dots-${index}`}>...</PaginationDots>
              ) : (
                <PaginationButton
                  key={page}
                  active={currentPage === page}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </PaginationButton>
              )
            ))}
            
            <PaginationButton
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
            >
              →
            </PaginationButton>
          </PaginationContainer>
        )}
      </NewsContent>
    </NewsContainer>
  );
};

export default News;
