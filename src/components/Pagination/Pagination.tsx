import React from "react";
import { useState, useEffect } from "react";
import { Container, PageButton, PageMoveButton } from "./styles";

interface CommunityPaginationProps {
  currentPage: number;
  goToPrevPage: () => void;
  goToNextPage: () => void;
  totalPages: number;
  goToPage: (targetPage: number) => void;
}

const CommunityPagination: React.FC<CommunityPaginationProps> = ({
  currentPage,
  goToPrevPage,
  goToNextPage,
  totalPages,
  goToPage,
}) => {
  const [pages, setPages] = useState<number[]>([]);

  const visiblePages: number = 5; // 한 번에 표시되는 페이지 수
  const halfVisible: number = Math.floor(visiblePages / 2);

  // 빈 배열 만들어서 5개의 페이지 동적으로 set 해줌
  let startPage: number = Math.max(currentPage - halfVisible, 1);
  let endPage: number = Math.min(startPage + visiblePages - 1, totalPages);

  if (endPage - startPage + 1 < visiblePages) {
    startPage = Math.max(endPage - visiblePages + 1, 1);
  }

  useEffect(() => {
    let newPages: number[] = [];
    for (let i = startPage; i <= endPage; i++) {
      newPages.push(i);
    }
    setPages(newPages);
  }, [endPage, startPage]);

  return (
    <Container>
      <PageMoveButton
        onClick={goToPrevPage}
        disabled={currentPage === 1}
        active={currentPage === startPage}
      >
        {"<"}
      </PageMoveButton>

      {pages.map((targetPage) => (
        <PageButton
          key={targetPage}
          onClick={() => goToPage(targetPage)}
          active={currentPage === targetPage}
        >
          {targetPage}
        </PageButton>
      ))}
      <PageMoveButton
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
        active={currentPage === endPage}
      >
        {">"}
      </PageMoveButton>
    </Container>
  );
};

export default CommunityPagination;
