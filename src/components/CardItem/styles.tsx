import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 22%;
  margin: 1rem 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  height: 22rem;

  margin-right: 3.75%; /* 각 카드 오른쪽 여백 */

  &:nth-child(4n) {
    margin-right: 0 !important;
  }
`;

export const ContentImg = styled.img`
  height: 50%;
  width: 100%;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`;

export const Category = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  height: 2.5%;
  padding: 0 1rem;
  color: #524fa1;
  font-size: 0.8rem;
`;

export const Title = styled.h3`
  font-size: 0.8rem;
  height: 15%;
  padding: 0 1rem;
  margin: 0 !important;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

export const Content = styled.div`
  font-size: 0.8rem;
  height: 40%;
  padding: 1rem;
  padding-top: 0.1rem;
`;

export const ContentText = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  white-space: normal;
`;

export const Price = styled.div`
  border-top: 1px solid #ccc;
  height: 5%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
`;

export const TotalPrice = styled.p<{ price: number }>`
  margin-top: auto;
  margin-bottom: auto;
  color: ${({ price }) => (price === 0 ? "green" : "black")};
  font-size: 0.9rem;
  font-size: 0.9rem;
  font-weight: bold;
`;

export const OrinalPrice = styled.p`
  text-decoration: line-through;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
  padding-left: 0.5rem;
  color: lightgrey;
  font-weight: lighter;
  font-size: 0.7rem;
`;

export const DiscountPer = styled.p`
  color: red;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
  padding-left: 0.5rem;
  font-size: 0.7rem;
  font-weight: bold;
`;
