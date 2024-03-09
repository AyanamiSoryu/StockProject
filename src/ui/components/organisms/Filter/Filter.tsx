import React, { useState } from 'react';
import styled from 'styled-components';

interface FilterProps {
  onFilterChange: (filters: { [key: string]: string | number }) => void;
}

const StyledSearch = styled.h2`
  color: #bbb;
  max-width: 724px;
  font-family: Inter, serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px; /* 121.429% */
  letter-spacing: -0.59px;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border-radius: 24px;
  background: #fff;
  padding: 24px;
  align-items: center;
  justify-content: center;
`;

const FilterForm = styled.form<{ $isFiltersOn?: boolean }>`
  display: flex;
  flex-direction: column;
  max-width: 300px;

  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    gap: 10px;
  }

  input {
    display: flex;
    //width: 170px;
    width: ${(props) => (props.$isFiltersOn ? '170px' : '40vw')};
    padding: 5.7px 13px;
    flex: 1 0 0;
    border-radius: 100px;
    border: 1px solid #ebebeb;
    background: #fff;
    color: #202020;
    font-family: Inter, serif;
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -0.13px;
    -webkit-appearance: none;
    margin: 0;
    -moz-appearance: textfield;
  }

  button {
    display: flex;
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 7px 114px;
    cursor: pointer;
    border-radius: 24px;
    justify-content: center;
    align-self: center;
    font-size: 20px;
    transition: 300ms ease-out;
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.04);

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const StyledFilterLabels = styled.div<{ $isFiltersOn: boolean }>`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 2vw;
  margin-bottom: 20px;
  @media (max-width: 915px) {
    flex-wrap: wrap;
    justify-content: ${(props) => (props.$isFiltersOn ? 'flex-end' : 'center')};
    margin-right: ${(props) => (props.$isFiltersOn ? '20px' : '0')};
  }
`;

const StyledClearButton = styled.div<{ $isFiltersOn?: boolean }>`
  background-color: #e6e6e6;
  color: #fff;
  border: none;
  padding: 4px 6.8px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 10px;
  position: ${(props) => (props.$isFiltersOn === true ? 'absolute' : 'relative')};
  margin-left: ${(props) => (props.$isFiltersOn === true ? '224px' : '0')};

  &:hover {
    background-color: #cc0000;
  }
`;

const OptionsButton = styled.div`
  display: flex;
  border-radius: 20px;
  padding: 10px;
  background-color: #fff;
  align-self: center;
  margin-bottom: 20px;
  cursor: pointer;
  transition: 300ms ease-out;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.04);

  &:hover {
    background-color: #e6e6e6;
  }

  &:active {
    color: #fff;
    background-color: #202020;
  }
`;

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<{ [key: string]: string | number }>({});
  const [isFiltersOn, setFiltersOn] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'price') {
      setFilters((prevFilters) => ({ ...prevFilters, [name]: +value }));
    } else {
      setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    }
  };

  const handleClear = (name: string) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: '' }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onFilterChange(filters);
  };

  return (
    <FilterContainer>
      <StyledSearch>Search</StyledSearch>
      <FilterForm onSubmit={handleSubmit} $isFiltersOn={isFiltersOn}>
        <StyledFilterLabels $isFiltersOn={isFiltersOn}>
          <label>
            Name
            <input type='text' name='product' value={filters.product} onChange={handleChange} />
            {filters.product && (
              <StyledClearButton $isFiltersOn={isFiltersOn} onClick={() => handleClear('product')}>
                ✕
              </StyledClearButton>
            )}
          </label>
          {isFiltersOn && (
            <>
              <label>
                Price
                <input type='number' name='price' value={filters.price} onChange={handleChange} />
                {typeof filters.price !== 'undefined' && typeof filters.price !== 'string' && (
                  <StyledClearButton
                    $isFiltersOn={isFiltersOn}
                    style={{ marginLeft: '218px' }}
                    onClick={() => handleClear('price')}>
                    ✕
                  </StyledClearButton>
                )}
              </label>
              <label>
                Brand
                <input type='text' name='brand' value={filters.brand} onChange={handleChange} />
                {filters.brand && (
                  <StyledClearButton $isFiltersOn={isFiltersOn} onClick={() => handleClear('brand')}>
                    ✕
                  </StyledClearButton>
                )}
              </label>
            </>
          )}
        </StyledFilterLabels>
        <OptionsButton onClick={() => setFiltersOn(!isFiltersOn)}>{isFiltersOn ? 'Less' : 'More'}</OptionsButton>
        <button type='submit'>Apply</button>
      </FilterForm>
    </FilterContainer>
  );
};

export default Filter;
