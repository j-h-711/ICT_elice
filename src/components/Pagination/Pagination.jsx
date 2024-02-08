import React from "react";
import { useState, useEffect } from "react";
import { Container, PageButton } from "./styles";

const CommunityPagination = ({
  currentPage,
  goToPrevPage,
  goToNextPage,
  totalPages,
  goToPage,
}) => {
  const [pages, setPages] = useState([]);

  const visiblePages = 5; // 한 번에 표시되는 페이지 수
  const halfVisible = Math.floor(visiblePages / 2);

  // 빈 배열 만들어서 5개의 페이지 동적으로 set 해줌
  let startPage = Math.max(currentPage - halfVisible, 1);
  let endPage = Math.min(startPage + visiblePages - 1, totalPages);

  if (endPage - startPage + 1 < visiblePages) {
    startPage = Math.max(endPage - visiblePages + 1, 1);
  }

  useEffect(() => {
    let newPages = [];
    for (let i = startPage; i <= endPage; i++) {
      newPages.push(i);
    }
    setPages(newPages);
  }, [endPage, startPage]);

  return (
    <Container>
      <PageButton onClick={goToPrevPage} disabled={currentPage === 1}>
        {"<"}
      </PageButton>

      {pages.map((targetPage) => (
        <PageButton
          key={targetPage}
          onClick={() => goToPage(targetPage)}
          active={currentPage === targetPage ? "true" : undefined}
        >
          {targetPage}
        </PageButton>
      ))}
      <PageButton onClick={goToNextPage} disabled={currentPage === totalPages}>
        {">"}
      </PageButton>
    </Container>
  );
};

export default CommunityPagination;
