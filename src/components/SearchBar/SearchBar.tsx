import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, SearchInput, SearchBtn, SearchBarWrapper } from "./styles";

interface SearchBarProps {
  filter: string[];
  page: number;
}

const SearchBar: React.FC<SearchBarProps> = ({ filter, page }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");
  const [focused, setFocused] = useState<boolean>(false);

  // 검색창에 포커스
  const handleFocus = () => {
    setFocused(true);
  };

  // 검색창에서 포커스 아웃
  const handleBlur = () => {
    setFocused(false);
  };

  // handleEnter에서 사용할 url 페이지 이동 함수
  const handleKeyword = (search: string) => {
    navigate(`?price=${filter[0]}&keyword=${search}&page=${1}`);
  };

  // 검색어 onChange
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // 검색 Enter
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleKeyword(search);
      setSearch("");
    }
  };

  return (
    <SearchBarWrapper>
      <Container focused={focused}>
        <SearchBtn src="/images/searchBtn.png" alt="searchBtn"></SearchBtn>
        <SearchInput
          placeholder="배우고 싶은 언어, 기술을 검색해보세요"
          value={search}
          onKeyDown={handleEnter}
          onChange={handleSearchChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        ></SearchInput>
      </Container>
    </SearchBarWrapper>
  );
};

export default SearchBar;
