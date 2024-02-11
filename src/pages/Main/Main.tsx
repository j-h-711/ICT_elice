import { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterBar from "../../components/FilterBar/FilterBar";
import Pagination from "../../components/Pagination/Pagination";
import CardList from "../../components/CardList/CardList";
import { MainWrapper, Container, NoPages } from "./styles";

interface FilterConditions {
  $and: [
    { title: string },
    {
      $or: [
        {
          enroll_type: number;
          is_free: boolean;
        }
      ];
    }
  ];
}

const Main = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const [cards, setCards] = useState<any[]>([]);
  const [courseCount, setCourseCount] = useState<number>(0);

  const page: number =
    Number(new URLSearchParams(location.search).get("page")) || 1;
  const keyword: string =
    new URLSearchParams(location.search).get("keyword") || "";

  // 무료,유료,전체 필터링 state
  const [filter, setFilter] = useState<string[]>([]);

  // 옵션 아이템 클릭 함수
  const handleOptionClick = (option: string) => {
    if (filter.includes(option)) {
      setFilter(filter.filter((item) => item !== option));
    } else {
      setFilter([...filter, option]);
    }
  };
  useEffect(() => {
    navigate(`?price=${filter.join(",")}&keyword=${keyword}&page=${1}`);
  }, [filter, keyword]);

  // 이전 페이지로 이동하는 함수
  const goToPrevPage = () => {
    const prevPage: number = page - 1;
    navigate(`?price=${filter.join(",")}&keyword=${keyword}&page=${prevPage}`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // 다음 페이지로 이동하는 함수
  const goToNextPage = () => {
    const nextPage: number = page + 1;
    navigate(`?price=${filter.join(",")}&keyword=${keyword}&page=${nextPage}`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // 해당 페이지로 설정 함수
  const goToPage = (targetPage: number) => {
    navigate(
      `?price=${filter.join(",")}&keyword=${keyword}&page=${targetPage}`
    );
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // 전체 강의 클릭시 실행 함수
  const handleAllClick = () => {
    setFilter([]);
    navigate(`?price=${undefined}&keyword=${""}&page=${1}`);
  };

  useEffect(() => {
    const fetchCards = async () => {
      try {
        let filterConditions = {};
        let titleCondition = { title: keyword !== "" ? `%${keyword}%` : "%%" };
        let freeCondition =
          filter[0] === "isfree" && filter.length === 1
            ? { $or: [{ enroll_type: 0, is_free: true }] }
            : filter[0] === "paid" && filter.length === 1
            ? { $or: [{ enroll_type: 0, is_free: false }] }
            : {
                $or: [
                  { enroll_type: 0, is_free: true },
                  { enroll_type: 0, is_free: false },
                ],
              };

        filterConditions = {
          $and: [titleCondition, freeCondition],
        };

        // offset으로 페이지 단위 설정
        // offset = 0 이 1페이지
        const offset: number = page - 1;
        const count: number = 20;

        const baseUrl = "https://api-rest.elice.io/org/academy/course/list/";
        const queryParams = new URLSearchParams({
          filter_conditions: JSON.stringify(filterConditions),
          offset: offset.toString(),
          count: count.toString(),
        });

        // Params가 붙여진 get 요청 url
        const url = `${baseUrl}?${queryParams.toString()}`;
        const response = await axios.get(url);
        const data = response.data;
        setCards(data.courses);
        setCourseCount(data.course_count);
      } catch (error) {
        console.error("API 요청 에러:", error);
      }
    };
    fetchCards();
  }, [page, filter, keyword]);

  return (
    <MainWrapper>
      <Header handleAllClick={handleAllClick} />
      <Container>
        <SearchBar filter={filter} page={page} />
        <FilterBar
          filter={filter}
          handleOptionClick={handleOptionClick}
          search={keyword}
        />
        <CardList cards={cards} courseCount={courseCount} />
        {courseCount > 20 ? (
          <Pagination
            totalPages={Math.floor(courseCount / 20) + 1}
            currentPage={page}
            goToPrevPage={goToPrevPage}
            goToNextPage={goToNextPage}
            goToPage={goToPage}
          />
        ) : (
          <NoPages />
        )}
      </Container>
      <Footer />
    </MainWrapper>
  );
};

export default Main;
