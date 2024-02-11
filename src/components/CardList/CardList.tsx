import React from "react";
import axios from "axios";
import CardItem from "../CardItem/CardItem";
import {
  CardWrapper,
  Container,
  CardCount,
  ClassCardsContainer,
} from "./styles";

interface Cards {
  id: number;
  category: string;
  title: string;
  short_description: string;
  isfree: boolean;
  price: string;
  image_file_url: string | null;
  discount_rate: string;
  index: number;
}

interface CardsProps {
  cards: Cards[];
  courseCount: number;
}

const CardList: React.FC<CardsProps> = ({ cards, courseCount }) => {
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
              index={card.index}
            />
          ))}
        </ClassCardsContainer>
      </Container>
    </CardWrapper>
  );
};

export default CardList;
