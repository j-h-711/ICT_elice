import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: lightgrey;
`;

export const Container = styled.div`
  width: 100%;
`;

export const CardCount = styled.p`
  font-size: 0.65rem;
  font-weight: bold;
  margin-top: 2%;
  color: #222222;
`;

export const ClassCardsContainer = styled.div`
  width: 100%;
  border-top: 2px solid rgb(201, 202, 204);
  background-color: lightgrey;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CardItemWrapper = styled.div`
  width: calc(25% - 20px);
  margin-bottom: 1rem;
  // margin-right: 20px; /* 각 카드 오른쪽 여백 */
  // &:nth-child(4n) {
  //   margin-right: 0; /* 4번째 카드의 오른쪽 여백 제거 */
  }
`;
