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
  index,
}) => {
  const imageUrl = image === null ? "images/contentImgNull.png" : image;
  const discountPrice = price * (1 - discountRate);
  const formatedOriginalPrice = new Intl.NumberFormat("en-US").format(price);

  return (
    <CardWrapper>
      <ContentImg src={imageUrl}></ContentImg>
      <Category>{category}</Category>
      <Title>{title}</Title>
      <Content>
        <ContentText>{content}</ContentText>
      </Content>
      <Price>
        <TotalPrice isfree={isfree}>
          {discountPrice === 0
            ? "무료"
            : `${new Intl.NumberFormat("en-US").format(discountPrice)} 원`}
        </TotalPrice>
        {price === "0" ? (
          <></>
        ) : (
          <>
            <OrinalPrice>{formatedOriginalPrice} 원</OrinalPrice>
            <DiscountPer>{discountRate * 100}%</DiscountPer>
          </>
        )}
      </Price>
    </CardWrapper>
  );
};

export default Cards;
