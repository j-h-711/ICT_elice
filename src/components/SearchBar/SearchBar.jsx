import React, { useState } from "react";
import { Container, SearchInput, SearchBtn, SearchBarWrapper } from "./styles";

export const SearchBar = () => {
  const [search, setSearch] = useState("");

  // 검색어 onChange
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // 검색 Enter
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setSearch(e.target.value);
      e.target.value = "";
    }
  };

  return (
    <SearchBarWrapper>
      <Container>
        <SearchBtn src="/images/searchBtn.png" alt="searchBtn"></SearchBtn>
        <SearchInput
          placeholder="배우고 싶은 언어, 기술을 검색해보세요"
          value={search}
          onKeyDown={handleEnter}
          onChange={handleSearchChange}
        ></SearchInput>
      </Container>
    </SearchBarWrapper>
  );
};

export default SearchBar;
