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
  DiscountPer,
  OrinalPrice,
  TotalPrice,
} from "./styles";

export const Cards = ({
  category,
  title,
  content,
  isfree,
  price,
  image,
  discountRate,
}) => {
  const imageUrl = image === null ? "images/contentImgNull.png" : image;
  const discountPrice =
    price === "0" ? "무료" : `${price * (1 - discountRate)} 원`;

  return (
    <CardWrapper>
      <ContentImg src={imageUrl}></ContentImg>
      <Category>{category}</Category>
      <Title>{title}</Title>
      <Content>
        <ContentText>{content}</ContentText>
      </Content>
      <Price>
        <TotalPrice isfree={isfree}>{discountPrice}</TotalPrice>
        {price === "0" ? (
          <></>
        ) : (
          <>
            <OrinalPrice>{price} 원</OrinalPrice>
            <DiscountPer>{discountRate * 100}%</DiscountPer>
          </>
        )}
      </Price>
    </CardWrapper>
  );
};

export default Cards;
