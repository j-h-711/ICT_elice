import React, { useState } from "react";
import {
  Container,
  FooterContent,
  FooterNav,
  FooterNavItem,
  FooterInfo,
  FooterTop,
  FooterNavButtons,
  ServiceState,
  FooterNavButtonItem,
  FooterWrapper,
} from "./styles";

export const Footer = () => {
  return (
    <Container>
      <FooterWrapper>
        <FooterContent>
          <FooterTop>
            <FooterNav>
              <FooterNavItem href="https://elice.io/ko" target="_blank">
                회사 소개
              </FooterNavItem>
              <FooterNavItem
                href="https://legal.elice.io/policies/terms/2023-05-01"
                target="_blank"
              >
                서비스 이용약관
              </FooterNavItem>
              <FooterNavItem href="#" style={{ fontWeight: "bold" }}>
                개인정보처리방침
              </FooterNavItem>
              <FooterNavItem
                href="https://elice.notion.site/644e6af17741452db3263f72dd5876a2"
                target="_blank"
              >
                업데이트 소식
              </FooterNavItem>
              <FooterNavItem href="#">
                <ServiceState>🟢</ServiceState>
                서비스 상태
              </FooterNavItem>
              <FooterNavItem href="#" style={{ fontWeight: "bold" }}>
                고객문의
              </FooterNavItem>
            </FooterNav>
            <FooterNavButtons>
              <FooterNavButtonItem
                src="/images/blog.png"
                alt="blog"
                onClick={() =>
                  window.open("https://blog.naver.com/eliceacademy", "_blank")
                }
              ></FooterNavButtonItem>
              <FooterNavButtonItem
                src="/images/facebook.png"
                alt="facebook"
                onClick={() =>
                  window.open("https://www.facebook.com/elice.track", "_blank")
                }
              ></FooterNavButtonItem>
              <FooterNavButtonItem
                src="/images/insta.png"
                alt="insta"
                onClick={() =>
                  window.open("https://www.instagram.com/elice.track", "_blank")
                }
              ></FooterNavButtonItem>
              <FooterNavButtonItem
                src="/images/youtube.png"
                alt="youtube"
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/channel/UCTok20p3EzAjTJWV8SJM9Gw",
                    "_blank"
                  )
                }
              ></FooterNavButtonItem>
            </FooterNavButtons>
          </FooterTop>
          <FooterInfo>
            <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
              엘리스 원격평생교육원
            </div>
            <div>
              (주) 엘리스그룹 | 대표 : 김재원 | 사업자등록번호 : 581-88-00303 |
              통신판매업 신고번호 : 제2022-서울강남-04515호 | 직업정보제공사업
              신고번호 : J1200020220004
            </div>
            <div style={{ marginBottom: "8px" }}>
              개인정보보호책임자 : 김창현 | 원격 평생교육원 시설신고 :
              서울특별시 강남서초교육지원청 (제 원-729호)
            </div>
            <div style={{ marginBottom: "8px" }}>
              주소 : 서울특별시 강남구 선릉로 433, 신관 6층 | 전화 :
              070-4633-2015 | 이메일 : contact@elice.io
            </div>
            <div>Copyright ⓒ 2016 - 2024 Elice Inc. All Rights Reserved.</div>
          </FooterInfo>
        </FooterContent>
      </FooterWrapper>
    </Container>
  );
};

export default Footer;
