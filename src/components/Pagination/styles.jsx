import styled from "styled-components";

export const Container = styled.div`
  padding-top: 1rem;
  padding-bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgrey;
`;

export const PageButton = styled.button`
  font-size: 1rem;
  border-radius: 8px;
  width: 30px;
  height: 30px;
  margin: 0 0.2rem;
  background-color: white;
  color: ${(props) => (props.active ? "white" : "#999999")};

  border: none;

  background-color: ${(props) => (props.active ? "#524fa1" : "lightgray")};

  &:hover {
    color: #524fa1;
  }
`;
