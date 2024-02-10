import { useNavigate } from "react-router-dom";
import {
  Container,
  Navbar,
  Logo,
  NavItem,
  DashboardButton,
  NavItemContainer,
  Bell,
  Profile,
  DashImg,
} from "./styles";

export const Header = ({ setFilter }) => {
  const navigate = useNavigate();

  const handleAllClick = () => {
    setFilter([]);
    navigate(`?price=${undefined}&keyword=${""}&page=${1}`);
  };

  return (
    <Container>
      <Navbar>
        <Logo src="/images/logo.png" alt="Logo" />
        <NavItemContainer>
          <NavItem href="#">홈</NavItem>
          <NavItem href="#" onClick={() => handleAllClick()}>
            전체강의
          </NavItem>
          <NavItem href="#">💰 선환급챌린지</NavItem>
          <NavItem href="#">🌎 플루럴사이트</NavItem>
          <NavItem href="#">클라우드</NavItem>
          <NavItem href="#">내일배움카드</NavItem>
          <NavItem href="#">기업교육문의</NavItem>
          <NavItem href="#">학습순위</NavItem>
        </NavItemContainer>
      </Navbar>
      <DashboardButton>
        <DashImg src="/images/dash.png" alt="dash" />내 대시보드
      </DashboardButton>
      <Bell>🔔</Bell>
      <Profile>지형</Profile>
    </Container>
  );
};

export default Header;
