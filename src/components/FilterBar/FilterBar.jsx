import React, { useState } from "react";
import {
  Container,
  Price,
  Options,
  OptionItem,
  FilterBarWrapper,
} from "./styles";

export const FilterBar = () => {
  const [filter, setFilter] = useState([]);

  // 옵션 아이템 클릭 이벤트 핸들러
  const handleOptionClick = (option) => {
    if (filter.includes(option)) {
      setFilter(filter.filter((item) => item !== option));
    } else {
      setFilter([...filter, option]);
    }
  };

  return (
    <FilterBarWrapper>
      <Container>
        <Price>가격</Price>
        <Options>
          <OptionItem
            onClick={() => handleOptionClick("free")}
            selected={filter.includes("free")}
          >
            무료
          </OptionItem>
          <OptionItem
            onClick={() => handleOptionClick("pay")}
            selected={filter.includes("pay")}
          >
            유료
          </OptionItem>
        </Options>
      </Container>
    </FilterBarWrapper>
  );
};

export default FilterBar;
