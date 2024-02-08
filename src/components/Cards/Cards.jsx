import React, { useState, useEffect } from "react";
import axios from "axios";
import CardItem from "../CardItem/CardItem";
import {
  CardWrapper,
  Container,
  CardCount,
  ClassCardsContainer,
} from "./styles";

export const Cards = ({ cards, courseCount }) => {
  return (
    <CardWrapper>
      <Container>
        <CardCount>전체 {courseCount}개</CardCount>
        <ClassCardsContainer>
          {cards.map((card) => (
            <CardItem
              key={card.id}
              category={card.category}
              title={card.title}
              content={card.short_description}
              isfree={card.isfree}
              price={card.price}
              image={card.image_file_url}
              discountRate={card.discount_rate}
            />
          ))}
        </ClassCardsContainer>
      </Container>
    </CardWrapper>
  );
};

export default Cards;
