import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Price,
  Options,
  OptionItem,
  FilterBarWrapper,
} from "./styles";

interface FilterBarProps {
  filter: string[];
  handleOptionClick: (option: string) => void;
  search: string;
}

const FilterBar: React.FC<FilterBarProps> = ({
  filter,
  handleOptionClick,
  search,
}) => {
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
