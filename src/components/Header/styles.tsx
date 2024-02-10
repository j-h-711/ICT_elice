import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  height: 64px;
  align-items: center;
  padding: 0 12px;
`;

export const NavItemContainer = styled.div`
  display: flex;
`;

export const Navbar = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const Logo = styled.img`
  margin-left: 0;
  margin-right: 20px;
  padding-top: 8px;
  height: 48px;
`;

export const DashImg = styled.img`
  width: 16px;
  padding-right: 4px;
`;

export const NavItem = styled.a`
  margin: 0 12px;
  text-decoration: none;
  color: #222222;
  font-size: 12px;
  font-weight: bold;
`;

export const DashboardButton = styled.button`
  background-color: #7353ea;
  color: white;
  font-weight: bold;
  border: none;
  padding: 10px 10px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Bell = styled.div`
  padding: 10px 20px;
  filter: grayscale(100%);
`;

export const Profile = styled.div`
  font-size: 12px;
  color: white;
  background-color: green;
  padding: 10px 10px;

  border-radius: 50%;
  margin-right: 12px;
`;
