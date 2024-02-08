import styled from "styled-components";

export const FilterBarWrapper = styled.div`
  background-color: lightgrey;
`;

export const Container = styled.div`
  margin-top: 12px;
  display: flex;
  border: 1px solid rgb(201, 202, 204);
  border-radius: 0.25rem;
  width: 100%;
  height: 40px;
  align-items: center;
  background-color: white;
`;

export const Price = styled.div`
  padding-right: 7%;
  height: 100%;
  border-right: 1px solid rgb(201, 202, 204);
  font-size: 12px;
  display: flex;
  align-items: center;
  background-color: rgb(249, 250, 252);
  padding-left: 2%;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  font-weight: bold;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding-left: 2%;
`;

export const OptionItem = styled.button`
  border: none;
  font-size: 12px;
  background-color: ${({ selected }) => (selected ? "#5E4FA1" : "#F0F1F3")};
  color: ${({ selected }) => (selected ? "white" : "rgb(94, 95, 97)")};
  border-radius: 5rem;
  height: 70%;
  width: 40px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  cursor: pointer;
`;
