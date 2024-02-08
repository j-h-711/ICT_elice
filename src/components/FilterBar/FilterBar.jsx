import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  Container,
  Price,
  Options,
  OptionItem,
  FilterBarWrapper,
} from "./styles";

export const FilterBar = ({ filter, handleOptionClick, search }) => {
  const navigate = useNavigate();

  const handleFilterClick = (search) => {
    navigate(`?price=${filter[0]}&keyword=${search}&page=${1}`);
  };

  return (
    <FilterBarWrapper>
      <Container>
        <Price>가격</Price>
        <Options>
          <OptionItem
            onClick={() => handleOptionClick("isfree")}
            selected={filter.includes("isfree")}
          >
            무료
          </OptionItem>
          <OptionItem
            onClick={() => handleOptionClick("paid")}
            selected={filter.includes("paid")}
          >
            유료
          </OptionItem>
        </Options>
      </Container>
    </FilterBarWrapper>
  );
};

export default FilterBar;
