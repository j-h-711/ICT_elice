import React, { useState } from "react";
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

interface CardItemProps {
  category: string;
  title: string;
  content: string;
  isfree: boolean;
  price: string;
  image: string | null;
  discountRate: string;
  index: number;
}

export const CardItem: React.FC<CardItemProps> = ({
  category,
  title,
  content,
  isfree,
  price,
  image,
  discountRate,
  index,
}) => {
  const ORIGIMAL_PRICE: number = parseInt(price);
  const DISCOUNT_RATE: number =
    discountRate === null ? 0 : parseFloat(discountRate);

  const imageUrl: string | null =
    image === null ? "images/contentImgNull.png" : image;
  const discountPrice = ORIGIMAL_PRICE * (1 - DISCOUNT_RATE);
  const formatedOriginalPrice = new Intl.NumberFormat("en-US").format(
    ORIGIMAL_PRICE
  );
  return (
    <CardWrapper>
      <ContentImg src={imageUrl}></ContentImg>
      <Category>{category}</Category>
      <Title>{title}</Title>
      <Content>
        <ContentText>{content}</ContentText>
      </Content>
      <Price>
        <TotalPrice price={ORIGIMAL_PRICE}>
          {ORIGIMAL_PRICE === 0
            ? "무료"
            : `${new Intl.NumberFormat("en-US").format(discountPrice)} 원`}
        </TotalPrice>
        {ORIGIMAL_PRICE === 0 ? (
          <></>
        ) : (
          <>
            <OrinalPrice>{formatedOriginalPrice} 원</OrinalPrice>
            <DiscountPer>{DISCOUNT_RATE * 100}%</DiscountPer>
          </>
        )}
      </Price>
    </CardWrapper>
  );
};

export default CardItem;
