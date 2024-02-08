import React, { useState } from "react";
import CardItem from "../CardItem/CardItem";
import {
  CardWrapper,
  Title,
  Content,
  Price,
  Category,
  ContentImg,
  ContentText,
  TitleText,
} from "./styles";

export const Cards = ({ category, title, content, isfree, price, image }) => {
  const imageUrl = image === null ? "images/contentImgNull.png" : image;
  return (
    <CardWrapper>
      <ContentImg src={imageUrl}></ContentImg>
      <Category>{category}</Category>
      <Title>{title}</Title>
      <Content>
        <ContentText>{content}</ContentText>
      </Content>
      <Price isfree={isfree}>{price === "0" ? "무료" : `${price}원`}</Price>
    </CardWrapper>
  );
};

export default Cards;
