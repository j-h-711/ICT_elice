# ICT elice 이지형

## 기술스택

- React / TypeScript / JavaScript / styled-components

## 과제 해결 방법

과제의 기한 안에 개발을 완료하기 위해 필터 조건은 유료,무료/검색어 만을 두는 것으로 기획하고 개발을 시작했습니다.<br/>
Main 페이지 컴포넌트를 크게 헤더/푸터/검색/금액조건/강의목록/페이지네이션/푸터 로 나누어 컴포넌트 단위로 개발하였습니다.<br/>
서버 통신의 경우 다양한 요청들을 사용해야 한다면 별도의 훅 등으로 관리하면 좋겠지만 하나의 엔드포인트로 GET 요청을 하는 것이 전부라 Main 페이지 컴포넌트 내에서 처리했습니다. try/catch 로 에러 처리를 하였으며 async/await 으로 서버 통신 비동기처리를 하였습니다.<br/>
페이지네이션은 리액트의 라이브러리 등을 사용하지 않고 5개의 페이지 단위로 보여주며 현재 페이지를 받아 표시해줄 첫 페이지와 마지막 페이지를 계산해 구현하였습니다.<br/>
검색어 필터링은 filter_conditions의 title, 유료/무료는 filter_conditions의 isfee를 사용했습니다.<br/>
query string에 현재 페이지나 필터링 조건을 포함하여 새로고침시에도 현재 페이지가 유지할 수 있어 사용자 경험을 향상시킬 수 있도록 했습니다.<br/>
아직 큰 TypeScript 프로젝트를 진행해본 경험은 없어 React로 개발 후 TypeScript로 변환하는 과정을 거켜 적용하였습니다.<br/>
컴포넌트 단위로 개발하고 간결하고 가독성 좋은 코드를 위해 css파일 대신 styled-components 로 컴포넌트 기반의 스타일링을 하였습니다.<br/>
과거 VanillaJS 와 React.js 로 진행했던 개인, 팀 프로젝트의 경험이 큰 도움이 되어 큰 이슈 없이 개발을 완료할 수 있었습니다.<br/>
화면과 주요 소스 코드에 대한 설명은 아래 이미지와 함께 첨부합니다.<br/>
개발 시간은 6시간 보단 더 소요되어 완벽한 목표를 이루진 못했지만 혼자 진행하는 간단한 프로젝트임에도 저에게 단순히 과제 이상의 큰 경험이 되었습니다. 감사합니다.<br/>

## 폴더구조

![폴더구조](https://github.com/j-h-711/ICT_elice/assets/106228604/b8a1111a-6df0-4645-9718-3fde3908de56)

## 화면

![홈](https://github.com/j-h-711/ICT_elice/assets/106228604/9fb83af4-dd43-48dc-a4a9-f053f455862a)
![페이지네이션, 푸터](https://github.com/j-h-711/ICT_elice/assets/106228604/19a58be8-bfea-4c43-b33c-8c4b6caf46d3)
<br/>
헤더의 전체강의 클릭시 기본 페이지로 이동
<br/>
푸터의 회사소개, 서비스 이용약관, 업데이트 소식 및 SNS 버튼 클릭시 새 창에서 페이지 띄움
<br/>

## 기능 별 상세 화면

- 페이지네이션
  ![페이지 이동](https://github.com/j-h-711/ICT_elice/assets/106228604/c5c74a6a-9d82-4421-91d2-a30b2fd2cd68)
  ![첫 페이지](https://github.com/j-h-711/ICT_elice/assets/106228604/c34eaaed-3501-4195-8672-b1aaf2d23150)
  ![마지막 페이지](https://github.com/j-h-711/ICT_elice/assets/106228604/41e322fe-ff6c-4669-8f8a-6c21f5049fa4)

  <br/>
  <br/>

- 검색 / 유료,무료 필터링
  <br/>
  < '첫' 단어 검색 >
  !['첫' 검색어 필터링](https://github.com/j-h-711/ICT_elice/assets/106228604/27525f27-1eac-435c-af3a-ba0d4dc3aa8b)
  < 유료 + 무료 + '자바' >
  ![유료+무료 자바](https://github.com/j-h-711/ICT_elice/assets/106228604/f02dd290-85e0-4f99-8697-a6093dd1aa3b)
  < 유료 + '자바' >
  ![유료,자바](https://github.com/j-h-711/ICT_elice/assets/106228604/c9e4a73e-daac-4bd6-af04-01518c729e93)
  < 무료 + '자바' >
  ![무료, 자바](https://github.com/j-h-711/ICT_elice/assets/106228604/99fb65c6-b853-45c1-b59f-31d339b652f6)
  < 결과 없을 때 >
  ![검색어 '첫' + 유료 결과](https://github.com/j-h-711/ICT_elice/assets/106228604/0f482bc1-7164-44ea-ad83-c076ede652ca)

  <br/>
  <br/>

  - 검색창 포커싱

  ![검색창 포커싱](https://github.com/j-h-711/ICT_elice/assets/106228604/b0193efa-8554-4169-bd83-0cd2f9f0f5fc)

## 주요 코드

<br/>
- api 서버 통신
<br/>
  AXIOS 라이브러리 활용 async/await 비동기 통신
  
  ![api 통신](https://github.com/j-h-711/ICT_elice/assets/106228604/09412a61-b830-4ed0-b21e-85b3015b5717) <br/>
  GET 요청 endpoint에 Params로 filter_conditions를 담아 요청<br/>
  응답으로 받은 데이터로 전체 강의와 전체 강의 수를 상태 변수로 관리<br/>
  try/catch로 에러처리 console 출력
  <br/>

<br/>
<br/>
- Main 페이지 컴포넌트
<br/>

![Main 페이지 컴포넌트](https://github.com/j-h-711/ICT_elice/assets/106228604/f32ca5f7-bcef-4c73-aa07-65426506f41a)
Header / SearchBar / FilterBar / CardList / Pagination / Footer<br/>
재사용 가능한 단위로 구성된 컴포넌트들로 메인페이지 컴포넌트 구성<br/>
필터링, 페이지네이션, GET요청 주요함수 위치

<br/>
<br/>
- Pagination 컴포넌트
<br/>

1. 컴포넌트 구성
   <br/>
   ![페이지네이션](https://github.com/j-h-711/ICT_elice/assets/106228604/01c51687-4ba0-4848-92cb-3b143f1b3b09) <br/>
2. 사용 함수
   <br/>
   ![페이지네이션 사용 함수](https://github.com/j-h-711/ICT_elice/assets/106228604/adb8d029-7072-4cf6-8411-b8d7b6192da7) <br/>
   라이브러리 사용 없이 페이지네이션 처리<br/>
   현재 페이지, 총 페이지수, 다음페이지 이동 함수, 전 페이지 이동 함수, 해당 페이지로 이동 함수<br/>
   부모로부터 props로 받아와 사용<br/>
   첫 페이지와 끝 페이지를 찾고 그 페이지가 보여줘야할 페이지보다 적다면 조정<br/>

<br/>
<br/>
- 페이지, 키워드 필터, 무료/유료 필터 적용
<br/>

1. 페이지, 필터링
   <br/>
   ![페이지, 필터, 키워드 조작](https://github.com/j-h-711/ICT_elice/assets/106228604/89cd0d4f-1f69-45dc-84ec-91b546ac59b9)
   <br/>
   현재페이지와 키워드는 URL Params을 사용<br/>
   유료 / 무료 / 유료+무료 필터링은 조건이 변경될 때 문자열로 구성된 배열 형태로 관리<br/>
   검색어나 무료/유료 필터가 변경되면 결과의 1페이지로 이동

2. 검색어 필터링 조작
   <br/>
   ![검색어 필터링](https://github.com/j-h-711/ICT_elice/assets/106228604/3e640f42-ce8b-4e62-8824-4b1ba502ce7b)
   <br/>
   검색어를 입력받아 URL Params로 담아 이동

<br/>
<br/>
- styled-components 사용
<br/>

![styled-components 사용](https://github.com/j-h-711/ICT_elice/assets/106228604/0154bfca-864a-4425-b68a-ade50357119e)
styled-components를 사용한 컴포넌트 기반 스타일링
