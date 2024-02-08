import { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterBar from "../../components/FilterBar/FilterBar";
import Pagination from "../../components/Pagination/Pagination";
import Cards from "../../components/Cards/Cards";
import { MainWrapper, Container } from "./styles";

const Main = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const [cards, setCards] = useState([]);
  const [courseCount, setCourseCount] = useState(0);

  const page = Number(new URLSearchParams(location.search).get("page")) || 1;
  const price = Number(new URLSearchParams(location.search).get("price")) || 0;
  const keyword = new URLSearchParams(location.search).get("keyword") || "";

  const [currentPage, setCurrentPage] = useState(1);

  const [filter, setFilter] = useState([]);

  // 옵션 아이템 클릭 이벤트 핸들러
  const handleOptionClick = (option) => {
    if (filter.includes(option)) {
      setFilter(filter.filter((item) => item !== option));
      navigate(`?price=${filter[0]}&keyword=${keyword}&page=${page}`);
    } else {
      setFilter([...filter, option]);
      navigate(`?price=${filter[0]}&keyword=${keyword}&page=${page}`);
    }
  };

  // 이전 페이지로 이동하는 함수
  const goToPrevPage = () => {
    const prevPage = page - 1;
    navigate(`?price=${filter[0]}&keyword=${keyword}&page=${prevPage}`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // 다음 페이지로 이동하는 함수
  const goToNextPage = () => {
    const nextPage = page + 1;
    navigate(`?price=${filter[0]}&keyword=${keyword}&page=${nextPage}`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // 해당 페이지로 설정 함수
  const goToPage = (targetPage) => {
    // if (searchTerm) {
    //   refetch();
    // }
    navigate(`?price=${filter[0]}&keyword=${keyword}&page=${targetPage}`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchCards = async () => {
      try {
        let filterConditions = {};
        if (filter[0] === "isfree" && filter.length === 1) {
          filterConditions = {
            $and: [
              { title: keyword !== "" ? `%${keyword}%` : "%%" },
              {
                $or: [{ enroll_type: 0, is_free: true }],
              },
            ],
          };
        } else if (filter[0] === "paid" && filter.length === 1) {
          filterConditions = {
            $and: [
              { title: keyword !== "" ? `%${keyword}%` : "%%" },
              {
                $or: [{ enroll_type: 0, is_free: false }],
              },
            ],
          };
        } else {
          filterConditions = {
            $and: [
              { title: keyword !== "" ? `%${keyword}%` : "%%" },
              {
                $or: [
                  { enroll_type: 0, is_free: true },
                  { enroll_type: 0, is_free: false },
                ],
              },
            ],
          };
        }

        // offset으로 페이지 단위 설정
        // offset = 0 이 1페이지
        const offset = page - 1;
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
  }, [page, filter, keyword, price]);

  return (
    <MainWrapper>
      <Header />
      <Container>
        <SearchBar filter={filter} page={page} />
        <FilterBar
          filter={filter}
          handleOptionClick={handleOptionClick}
          search={keyword}
        />
        <Cards cards={cards} courseCount={courseCount} />
        {courseCount > 20 && (
          <Pagination
            totalPages={Math.floor(courseCount / 20) + 1}
            currentPage={page}
            goToPrevPage={goToPrevPage}
            goToNextPage={goToNextPage}
            goToPage={goToPage}
          />
        )}
      </Container>
      <Footer />
    </MainWrapper>
  );
};

export default Main;
