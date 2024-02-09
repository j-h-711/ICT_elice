import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, SearchInput, SearchBtn, SearchBarWrapper } from "./styles";

export const SearchBar = ({ filter, page }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleKeyword = (search) => {
    navigate(`?price=${filter[0]}&keyword=${search}&page=${1}`);
  };

  // 검색어 onChange
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // 검색 Enter
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setSearch(e.target.value);
      handleKeyword(search);
      e.target.value = "";
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
