import React, { useState, useEffect } from "react";
import axios from "axios";
import CardItem from "../CardItem/CardItem";
import {
  CardWrapper,
  Container,
  CardCount,
  ClassCardsContainer,
} from "./styles";

export const Cards = () => {
  // API로 받아온 해당 필터의 강의 수로 대체
  // const cards = [
  //   {
  //     id: 1,
  //     image_file_url: "images/contentImg.png",
  //     category: "웹",
  //     title: "PM/PO를 위한 서비스 기획",
  //     content:
  //       "서비스의 성공을 높이는 PM의 역량! 가장 필수적인 방법론 이해부터 기획안 작성까지.....",
  //     isfree: false,
  //     price: "108,420",
  //   },
  //   {
  //     id: 2,
  //     image_file_url: null,
  //     category: "인공지능",
  //     title: "프롬프트 엔지니어링을 위한 기초 지식",
  //     content:
  //       "프롬프트 엔지니어링을 통해 생성AI가 원하는대로 결과를 출력할 수 있도록 프롬프트를......",
  //     isfree: false,
  //     price: "100,620",
  //   },
  //   {
  //     id: 3,
  //     image_file_url: "images/contentImg.png",
  //     category: "미설정",
  //     title: "엘카데미 후기 게시판",
  //     content: "강의 결제 전, 후기 슬쩍 보기",
  //     isfree: true,
  //     price: "0",
  //   },
  //   {
  //     id: 4,
  //     image_file_url: null,
  //     category: "웹",
  //     title: "PM/PO를 위한 서비스 기획",
  //     content:
  //       "서비스의 성공을 높이는 PM의 역량! 가장 필수적인 방법론 이해부터 기획안 작성까지.....",
  //     isfree: false,
  //     price: "108,420",
  //   },
  //   {
  //     id: 5,
  //     image_file_url: null,
  //     category: "인공지능",
  //     title: "프롬프트 엔지니어링을 위한 기초 지식",
  //     content:
  //       "프롬프트 엔지니어링을 통해 생성AI가 원하는대로 결과를 출력할 수 있도록 프롬프트를......",
  //     isfree: false,
  //     price: "100,620",
  //   },
  //   {
  //     id: 6,
  //     image_file_url: null,
  //     category: "미설정",
  //     title: "엘카데미 후기 게시판",
  //     content: "강의 결제 전, 후기 슬쩍 보기",
  //     isfree: true,
  //     price: "0",
  //   },
  //   {
  //     id: 7,
  //     image_file_url: "images/contentImg.png",
  //     category: "웹",
  //     title: "PM/PO를 위한 서비스 기획",
  //     content:
  //       "서비스의 성공을 높이는 PM의 역량! 가장 필수적인 방법론 이해부터 기획안 작성까지.....",
  //     isfree: false,
  //     price: "108,420",
  //   },
  //   {
  //     id: 8,
  //     image_file_url: null,
  //     category: "인공지능",
  //     title: "프롬프트 엔지니어링을 위한 기초 지식",
  //     content:
  //       "프롬프트 엔지니어링을 통해 생성AI가 원하는대로 결과를 출력할 수 있도록 프롬프트를......",
  //     isfree: false,
  //     price: "100,620",
  //   },
  //   {
  //     id: 9,
  //     image_file_url: "images/contentImg.png",
  //     category: "미설정",
  //     title: "엘카데미 후기 게시판",
  //     content: "강의 결제 전, 후기 슬쩍 보기",
  //     isfree: true,
  //     price: "0",
  //   },
  // ];

  const [cards, setCards] = useState([]);
  const [courseCount, setCourseCount] = useState(0);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const filterConditions = {
          $and: [
            { title: "%%" },
            {
              $or: [
                { enroll_type: 0, is_free: true },
                { enroll_type: 0, is_free: true },
              ],
            },
          ],
        };

        // offset으로 페이지 단위 설정
        // offset = 0 이 1페이지
        const offset = 0;
        const count = 20;

        const baseUrl = "https://api-rest.elice.io/org/academy/course/list/";
        const queryParams = new URLSearchParams({
          filter_conditions: JSON.stringify(filterConditions),
          offset: offset,
          count: count,
        });
        const url = `${baseUrl}?${queryParams.toString()}`;

        const response = await axios.get(url);
        const data = response.data;

        setCards(data.courses);
        setCourseCount(data.course_count);
        console.log(data);
      } catch (error) {
        console.error("API 요청 에러:", error);
      }
    };

    fetchCards();
  }, []);

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
            />
          ))}
        </ClassCardsContainer>
      </Container>
    </CardWrapper>
  );
};

export default Cards;
