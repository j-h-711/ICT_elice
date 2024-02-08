import { Container } from "./styles";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterBar from "../../components/FilterBar/FilterBar";
import Cards from "../../components/Cards/Cards";

export const Main = () => {
  return (
    <Container>
      <SearchBar></SearchBar>
      <FilterBar></FilterBar>
      <Cards></Cards>
    </Container>
  );
};

export default Main;
