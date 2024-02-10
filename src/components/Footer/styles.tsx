import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  padding: 20px;
  position: relative;
  bottom: 0;
  width: 100%;
`;

export const FooterWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
`;

export const FooterContent = styled.div`
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
`;

export const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 22px;
  justify-content: space-between;
`;

export const FooterNav = styled.div`
  display: flex;
`;

export const FooterNavItem = styled.a`
  margin: 0 10px;
  text-decoration: none;
  font-size: 0.75rem;
  color: black;
  display: flex;
  align-items: center;
`;

export const FooterNavButtons = styled.div`
  display: flex;
  margin-right: 40px;
`;

export const FooterNavButtonItem = styled.img`
  display: flex;
  align-items: center;
  width: 48px;
  padding: 0px 12px;
  cursor: pointer;
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
  font-size: 0.75rem;
  color: #a8a9ab;
`;

export const ServiceState = styled.p`
  margin-right: 6px;
  font-size: 6px;
`;
