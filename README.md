# ICT elice 이지형

## 기술스택

- React / TypeScript / JavaScript / styled-components

### 폴더구조

![폴더구조](https://github.com/j-h-711/ICT_elice/assets/106228604/b8a1111a-6df0-4645-9718-3fde3908de56)

### 화면

![홈](https://github.com/j-h-711/ICT_elice/assets/106228604/9fb83af4-dd43-48dc-a4a9-f053f455862a)
![페이지네이션, 푸터](https://github.com/j-h-711/ICT_elice/assets/106228604/19a58be8-bfea-4c43-b33c-8c4b6caf46d3)

### 기능 별 상세 화면

- 페이지네이션
  ![페이지 이동](https://github.com/j-h-711/ICT_elice/assets/106228604/c5c74a6a-9d82-4421-91d2-a30b2fd2cd68)
  ![첫 페이지](https://github.com/j-h-711/ICT_elice/assets/106228604/c34eaaed-3501-4195-8672-b1aaf2d23150)
  ![마지막 페이지](https://github.com/j-h-711/ICT_elice/assets/106228604/41e322fe-ff6c-4669-8f8a-6c21f5049fa4)

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

### 주요 코드

- api 서버 통신
  AXIOS 라이브러리 활용 async/await 비동기 통신
  ![api 통신](https://github.com/j-h-711/ICT_elice/assets/106228604/09412a61-b830-4ed0-b21e-85b3015b5717) <br/>
  GET 요청 endpoint에 Params로 filter_conditions를 담아 요청<br/>
  응답으로 받은 데이터로 전체 강의와 전체 강의 수를 상태 변수로 관리<br/>
  try/catch로 에러처리 console 출력

- Main 페이지 컴포넌트
  ![Main 페이지 컴포넌트](https://github.com/j-h-711/ICT_elice/assets/106228604/f32ca5f7-bcef-4c73-aa07-65426506f41a)
  Header / SearchBar / FilterBar / CardList / Pagination / Footer<br/>
  재사용 가능한 단위로 구성된 컴포넌트들로 메인페이지 컴포넌트 구성<br/>
  필터링, 페이지네이션, GET요청 주요함수 위치

- Pagination 컴포넌트

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

- 페이지, 키워드 필터, 무료/유료 필터 적용

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

- styled-components 사용
  ![styled-components 사용](https://github.com/j-h-711/ICT_elice/assets/106228604/0154bfca-864a-4425-b68a-ade50357119e)
  styled-components를 사용한 컴포넌트 기반 스타일링
