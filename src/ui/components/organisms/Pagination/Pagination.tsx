import React from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const PaginationContainer = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 24px;
  align-self: center;
  padding: 5px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
`;

const PageButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  width: 39.52px;
  height: 30px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 14px;
  transition: 300ms ease-out;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.04);

  &:hover {
    background-color: #0056b3;
  }
`;

const StyledCurrentPageButton = styled(PageButton)`
  background-color: #ffffff;
  border: 1px solid #007bff;
  color: black;
  margin-right: 5px;
  cursor: auto;

  &:hover {
    background-color: #ffffff;
  }
`;

interface StyledPageSkipProps {
  direction: 'left' | 'right';
}

const StyledPageSkip = styled.div<StyledPageSkipProps>`
  display: flex;
  gap: ${(props) => (props.direction === 'left' ? '0' : '5px')};
  margin-right: ${(props) => (props.direction === 'left' ? '5px' : '0')};
`;

const StyledDots = styled.div`
  display: flex;
  align-self: flex-end;
`;

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const renderPaginationButtons = () => {
    const buttons = [];

    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 4);

    if (endPage - startPage < 4) {
      endPage = Math.min(totalPages, currentPage + 2);
      startPage = Math.max(1, endPage - 4);
    }

    for (let i = startPage; i <= endPage; i++) {
      const isActive = currentPage === i;

      buttons.push(
        <div key={uuid()}>
          {isActive ? (
            <StyledCurrentPageButton onClick={() => onPageChange(i)}>{i}</StyledCurrentPageButton>
          ) : (
            <PageButton onClick={() => onPageChange(i)}>{i}</PageButton>
          )}
        </div>
      );
    }

    if (startPage > 1) {
      buttons.unshift(
        <StyledPageSkip direction='left' key={uuid()}>
          <PageButton key='first' onClick={() => onPageChange(1)}>
            1
          </PageButton>
          <StyledDots>...</StyledDots>
        </StyledPageSkip>
      );
    }

    if (endPage < totalPages) {
      buttons.push(
        <StyledPageSkip direction='right' key={uuid()}>
          <StyledDots>...</StyledDots>
          <PageButton key='last' onClick={() => onPageChange(totalPages)}>
            {totalPages}
          </PageButton>
        </StyledPageSkip>
      );
    }

    return buttons;
  };

  return (
    <PaginationContainer>
      <StyledButtonContainer>{renderPaginationButtons()}</StyledButtonContainer>
    </PaginationContainer>
  );
};

export default Pagination;
