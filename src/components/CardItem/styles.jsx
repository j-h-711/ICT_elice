import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 23%;
  margin: 1rem 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  height: auto;
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
  height: 20%;
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
  height: 35%;
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

export const Price = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  border-top: 1px solid #ccc;
  height: 5%;
  padding: 1rem;
  display: flex;
  display: flex;
  flex-direction: row;
  margin-top: auto;
  margin-bottom: auto;
  color: ${({ isfree }) => (isfree === true ? "green" : "#524fA1")};
`;
