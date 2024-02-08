import React, { useState } from "react";
import {
  Container,
  Price,
  Options,
  OptionItem,
  FilterBarWrapper,
} from "./styles";

export const FilterBar = ({ filter, handleOptionClick }) => {
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
