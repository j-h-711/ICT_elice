import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  background-color: lightgrey;
`;

export const Container = styled.div`
  margin-top: 52px;
  display: flex;
  flex-direction: row;
  border: 1px solid rgb(201, 202, 204);
  border-radius: 0.25rem;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background-color: white;
`;

export const SearchInput = styled.input`
  border: none;
  width: calc(100% - 60px);
  margin-top: 

  &:focus {
    outline: none;
  }
`;

export const SearchBtn = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
