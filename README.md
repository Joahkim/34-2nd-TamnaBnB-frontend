## 데모 영상

👉 [영상 보러가기](https://www.youtube.com/)

- 영상 넣기

## 프로젝트 소개

- [에어비앤비](https://www.airbnb.co.kr/) 사이트를 모티브로 한 프로젝트
  <br/>
- 사이트 선정이유 : 사용자 관점에서 사용하기 편한 사이트라 생각해서 그 기능들을 직접 구현해보기 위해
  <br/>
- 개발은 초기 세팅부터 전부 직접 구현했으며, 실제 서버와 api를 연결해서 사용할 수 있습니다.

### 프로젝트 목표

- Frontend/Backend 통신에 필요한 데이터 구조 및 컴포넌트 구조에 대해서 상의해보기
  <br/>
- Git의 기본적인 Flow에 따른 방식 + squash, git rebase를 적용하여 commit 내역을 깔끔하게 관리해보기
  <br/>
- 내가 할 수 있는 것과 없는 것, 현재 우선순위가 높은 것과 그렇지 않은 것을 잘 구별하고 팀에게 전달하여 기획과 일정을 조율해보기
  <br/>
- 전체의 과정을 생각하며 프로젝트를 기획하고 프론트와 백이 맞춰보는 일정까지 고려하여 발표 전까지 팀원들과 최대한의 결과물을 만들어내보기
  <br/>
- Trello에 정리한 티켓 내용을 토대로 매일 아침 정해진 시간에 팀원들과 standup meeting을 진행해보기

### 개발 인원 및 기간

- 개발기간 : 2022/07/04 ~ 2022/07/15
  <br/>
- 개발 인원

  - 프론트엔드(4명) : 김은경, 김은정 , 이현범 , 전지현
  - 백엔드(1명) : 김상웅
    <br/>

- 담당파트
  - 김은경 : 로그인 / 소셜 로그인 , 검색 기능 (지역, 날짜, 인원) , 프로필 모달창
  - 김은정 : 상세페이지 하단 ( 후기 모달창, 후기 작성 - 후기modal과 후기component 연동 , 카카오맵 )
  - 이현범 : 상세페이지 상단 ( 결제과 달력과 연동 , 예약 및 결제 기능 , 달력과 예약창 연동)
  - 전지현 : 홈화면(캐러셀, 무한스크롤) , 지도리스트 페이지(카카오맵, 페이지네이션)
    <br/>
- [백엔드 github 링크](https://github.com/wecode-bootcamp-korea/34-2nd-TamnaBnB-backend)

## 협업 Tool

#### 1. Git / Github

- 브랜치 이름 : 페이지 단위로 나눔
- 라벨 활용 : 이슈 , 진행상황 등을 구분하기 위해서 라벨 사용
- 코드 리뷰 : review를 통한 코드 리뷰와 리팩토링

#### 2. Trello

![trello](/public/images/trello.gif)

1, 2주차의 Sprint 목표와 업무 진행을 파악하기 위한 Tool로 Trello를 사용했습니다.

backlog 프로젝트 미팅을 하며 전체 업무를 기능별로 세분화하여 전체 티켓을 발행했습니다.

Sprint Goal 일주일을 기준으로 진행해야 할 업무 티켓을 가리킵니다.

In progress 현재 개발 중인 업무 티켓을 가리킵니다.

In review Github에 PR을 올리고 리뷰와 merge 대기를 하는 작업을 가리킵니다.

Done merge가 완료되고 정상적으로 작동하는 기능을 가리킵니다.

Blocker 개발의 속도가 더디거나, 해결해야하는 문제들을 가리킵니다.

#### 3. Notion

![standup](/public//images/notion-modify.png)

- 아침 standup meeting 상의한 내용을 모두 회의록에 기록해놓았다.

- 공유해야 하는 얘기는 구두가 아니라 notion을 통해 정확히 전달되도록 하였다.

#### 4. Slack

- 간단한 요청사항이나 일정조율을 위한 소통을위해 사용하였다.

## 적용 기술

- Front-End : HTML, Styled-Component , React , React Router

## 개인 구현 기능


<br />

## :: 구현 목표
- [7/4] 초기세팅 및 팀원들과 페이지 분배
- [7/5] NavBar 레이아웃 및 로그인 모달창 구현 완료
- [7/6] 카카오 로그인 문서 정독 후 인가코드 받아오기 완료(서버기다리는 중) 
- [7/7-7/8] 로그인 모달창 라이브러리 삭제하고 직접 구현, 카카오 로그인 서버와 통신, 리뷰 수정 완료, 로그아웃 
- [7/9] NavBar Search 영역 모달창 구현 중
- [7/10] 네브바 지역, 인원수 데이터 state값 모두 부모에 작성하고 자식에서 업데이트 데이터 값 추출 완료.(지도 제외), 2차 리뷰 수정 완료(fetch함수 제외)  ==> 이 부분 아직 pr 작성 안함
- [7/11-12] 달력 에러 및 모달창 레이아웃 수정, 인원 버튼 만들기, 기업협업 때문에 진도 느려짐, react-datepicker 사용 법 정리
- [7/13] 달력 에러 수정 완료 후 데이터 수집 완료.  first merge 하기-> 달력 에러 수정한 과정 라이브러리 공식문서를 읽자
- [7/14] git rebase와 conflict 수정하는 방법, 달력을 다시 modal에 넣은 이유, 

<br />

## :: 구현 사항 설명 (작업한 내용을 상세하게 기록합니다.)
### 1. react-icon 라이브러리 사용하기
React에서 react-icon라이브러리를 설치하여 다양한 아이콘을 사용할 수 있다. Font Awesome을 사용하다가 해당 라이브러리를 설치한 이유는 react-icon 웹 페이지에 Font Awesome을 포함한 다양한 아이콘들을 사용할 수 있으며 활용성이 편리했기 때문이다.

> 사용방법
- 사용할 icon 코드를 웹 사이트에서 복사한 다음 import 한다.
```js
//슬래쉬 이후 vsc, fa, gr은 해당 아이콘을 제공하는 사이트의 고유 식별 코드이다.
import { VscGlobe } from 'react-icons/vsc';
```
- styled components를 이용해 import한 아이콘에 style을 적용할 수 있다.
```js
const Globe = styled(VscGlobe)`
  font-size: 20px;
`;
```
- 스타일을 적용한 아이콘을 return문 안에서 사용하면 완료
```js
const LogIn = () => {
  return (
    <div>
      <LogInArea>
        <ProfileBox>
          <BeAHost>호스트 되기</BeAHost>
          <Globe />
          <LogInModal />
        </ProfileBox>
      </LogInArea>
    </div>
  );
};
```
![image](https://user-images.githubusercontent.com/50426259/177572727-86c8cb37-ed85-43bf-8bd2-8eeaa36039b2.png)

---

<br />

### 2. 모달창 구현(react-modal)
소셜 로그인으로만 로그인을 구현하는 이번 프로젝트에서 회원가입은 필요하지 않다. 따라서 우측 상단의 버튼을 클릭하면 바로 소셜 로그인을 시작할 수 있는 모달창이 구현된다.

>구현 상세 설명
- `npm install react-modal`로 라이브러리를 설치한다.
- 사용할 컴포넌트에서 `import Modal from 'react-modal'`을 작성한다.
- 버튼을 클릭하면 모달창이 열리고 닫히기 위해 2개의 버튼을 생성한다.(한 개도 가능)
- `<Modal>` 컴포넌트를 `return` 안에 작성한다.
📢주의사항📢
<small>추후 모달창 이외의 요소를 클릭하면 모달창이 닫힐 수 있게 `onRequestClose` 속성을 사용하는데 만약 모달창이 열리는 버튼의 자식으로 `<Modal>`컴포넌트가 존재하면 `onRequestClose` 속성이 적용되지 않게 된다.</small>


```js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

const LogInModal = () => {

  const [modalCondition, setModalCondition] = useState(false);
  Modal.setAppElement('#root');

  return (
    <LoginBox>
     //클릭하면 모달창이 띄어질 버튼
      <LoginButton onClick={() => setModalCondition(true)}>
        <ButtonWrapper>
          <HamburgerBtn />
          <ProfileIcon />
        </ButtonWrapper>
      </LoginButton>
   //모달창
      <Modal
        isOpen={modalCondition}
        onRequestClose={() => setModalCondition(false)}
      >
        <ModalHeader>
          <CancelBtn onClick={() => setModalCondition(false)} />
          <Welcome>소셜 로그인</Welcome>
        </ModalHeader>
        <ModalContext>
          <h1>에어비엔비에 오신것을 환영합니다</h1>
          <p>modal body</p>
        </ModalContext>
      </Modal>
    </LoginBox>
  );
};
```
📢주의사항📢
<small>모달창이 웹 사이트의 요소임을 지정하기 위해 처음에 모달을 렌더링할때 기준이 되는 엘리먼트를 지정해줘야 한다. `Modal.setAppElement('#root')</small>

- 모달창에 스타일을 구현하려면 공식 문서에 따라 인라인 스타일링을 부여한다.
```js
  <Modal
    isOpen={modalCondition}
    onRequestClose={() => setModalCondition(false)}
    style={{
      overlay: {
        background: 'rgba(0, 0, 0, 0.6)',
      },
      content: {
        padding: `0px`,
        width: `400px`,
        height: `500px`,
        color: 'green',
        position: 'fixed',
        left: '38%',
        top: '13%',
      },
    }}
  >
     <ModalHeader>
      <CancelBtn onClick={() => setModalCondition(false)} />
      <Welcome>소셜 로그인</Welcome>
    </ModalHeader>
    <ModalContext>
      <h1>에어비엔비에 오신것을 환영합니다</h1>
      <p>modal body</p>
    </ModalContext>
  </Modal>
```
- `overlay`는 모달창 제외한 부분을 말한다. 모달창의 뒷 배경이 어두운 색으로 바뀌는 스타일을 적용하고 (검은색) 투명도를 부여한다.
- `content`는 화면에 보여질 모달창이며 크기와 위치 등을 부여한다. 
- 모달 안에 클릭하면 모달창이 닫힐 수 있게 버튼을 생성한다.

>속성 설명

▶️ `isOpen={setModalCondition(false)}`

`isOpen`은 필수로 작성하는 속성이며 모달창이 보일지 안보일지 지정한다.
먼저 `useState`를 활용하여 모달창이 보이면 `true`이고 보이지 않게 하려면 `false`를 지정하여 `setModalCondition`으로 `modalCondition`의 상태를 업데이트 시킨다. `modalCondition`의 초깃값을 `false`로 부여하여 처음에는 보이지 않게 설정한다.

▶️ `<LoginButton onClick={() => setModalCondition(true)}>`

`<LoginButton>`버튼이 `onClick`되면 `modalCondition`의 값을 `true`로 업데이트 한다. 따라서 로그인 버튼을 클릭하면 로그인 모달창 UI가 그려진다.

▶️ `onRequestClose={() => setModalCondition(false)}`

`onRequestClose`는 모달창 이외의 영역을 클릭하거나 esc 버튼으로 모달창을 닫을 수 있는 속성이다. 마찬가지로 `ModalCondition`의 상태를 `false`로 업데이트한다.

---

<br />

### 3. 카카오 로그인 인가 코드 받기(서버 주소 받기 전 7/6일 기준)
회원가입 없이 소셜 로그인을 구현하기 위해서 카카오톡의 로그인 API를 활용한다.
- 공식 문서의 가이드에 따라 "내 어플리케이션"을 생성하면 "앱 키"를 받게된다.
- "플랫폼" 에서 Web에 사이트 도메인을 지정한다. (현재 서버가 없는 관계로 우선 로컬3000을 작성한다.)
- Redirect URI를 등록한다. 마찬가지로 로컬3000에 Redirecting 될 동안의 화면의 주소를 작성한다. ex) http://localhost:3000/waiting
- 활성화 설정을 on으로 설정하고 다른 요소는 백엔드와 상의 하에 결정한다.

> vs code에서의 작업

- 사용자의 `id`값과 `redirect-uri` 주소를 입력하기 위한 새로운 컴포넌트를 생성한다.
- 각각의 데이터를 `export`하여 모달창을 구현하는 **LogInModal.js**에 `import`한다
```js
//OAuth.js
export const CLIENT_ID = '123123123123123';
export const REDIRECT_URI = 'http://localhost:3000/kakao';
```
- **LogInModal.js**에서 공식 문서의 가이드에 작성된 **Request URL**을 입력한다.
```js
 import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { CLIENT_ID, REDIRECT_URI } from './OAuth';

const LogInModal = () => {
  const [modalCondition, setModalCondition] = useState(false);
  Modal.setAppElement('#root');

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleLogIn = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  let code = new URL(window.location.href).searchParams.get('code');

  fetch(`https://serverAddress/?code=${code}`);
```
- 카카오에서 제공하는 "카카오로 로그인 하기" 버튼을 다운받아 해당 버튼에 `onClick`속성을 부여하여 버튼을 클릭했을 때 URL 창에 `KAKAO_AUTH_URL`이 작성되도록 한다. 주소를 이동한다는 것
- 카카오에서 인증 코드를 URL창을 통해 보내준다. 해당 주소를 받아 `code`라는 변수에 저장한다.(해당 데이터가 요청할 때마다 바뀌어 `let`으로 선언했지만 `const`로 한 다른 팀원의 코드에서도 정상적으로 작동한다. 보안을 위해서 `const`로 추후 수정할 예정)
- `fetch`함수를 통해 서버에 해당 주소를 보내준다.(백엔드와 상의하여 POST인지 GET인지 QueryString으로 보낼 것인지 등에 대해 결정한다. 또한 `key`의 이름도 정해야 한다.)
(7/6일기준)

![image](https://user-images.githubusercontent.com/50426259/177663856-a7784b25-1455-4e7f-8ee2-e0ad29c0ee08.png)
지정한 [Redirect URI] 페이지에서 주소 뒤에 인가 코드를 붙여서 요청에 응답해주는 카카오

---


<br />

### 4. 로그인 모달창 라이브러리 삭제하고 직접 구현

> 모달창 라이브러리를 사용하지 않는 이유

구현하는 내비게이션 영역에는 다수의 모달창이 구현된다. 처음 로그인 모달창을 구현했을 때, 사용성이 편리하고 속성을 통해 손쉽게 기능을 추가할 수 있었다. 하지만 라이브러리에서 만든 컴포넌트 자체에 어떤 코드가 담겨있는지 속속히 알 수 없었다. 첫 사용시 강점으로 생각했던 재사용성에 문제가 생긴 것이다. 또한 다른 컴포넌트에서 모달창을 구현하고자 `<Modal>`을 선언하는 순간 에러가 발생한다. 다수의 모달창을 사용하려면 각 모달창마다 상태를 변경하는 `useState`를 각각 부여해야 하며 해당 `State`들을 관리하는 파일을 따로 만들어 props로 내려주고 또 내려주며 depth와 복잡성이 발생한다. 여러 번 재사용하며 각각의 State들을 관리하며 정확히 어떤 로직으로 구현되는지 모르는 라이브러리를 사용하는 대신 모든 요소를 수정할 수 있게 직접 구현하기로 했다.

> 모달창 구현 방법

#### 컴포넌트 구성
- **Login.js** ▶️ 내비게이션 바의 로그인 버튼 영역
- **LogInModal.js** ▶️ 로그인 모달창 레이아웃
- **KakaoModal.js** ▶️ 로그인 모달창 내용 
- **LoggedModal.js** ▶️ 로그인 완료 후 '나의 여행', '도움말', '로그아웃'  등  '마이페이지'  모달창 레이아웃 
- **OpenMyPage.js** ▶️ '마이페이지' 모달창 내용

**Login.js 👉 LogInModal.js 👉KakaoModal.js
Login.js👉 LoggedModal.js 👉 OpenMyPage.js**

<br />

#### LogIn.js에서 모달창 여는 버튼 만들기
```js
const LogIn = () => {

//모달창의 상태를 state로 관리하기
  const [modalCondition, setModalCondition] = useState(false);

  return (
    <div>
      <LogInArea>
        <ProfileBox>
          <BeAHost>호스트 되기</BeAHost>
          <Globe />
          <LoginBox>
// onClick 속성으로 버튼이 클릭되면 모달창의 state를 업데이트 하기
            <LoginButton onClick={() => setModalCondition(!modalCondition)}>
              <ButtonWrapper>
                <HamburgerBtn />
              </ButtonWrapper>
            </LoginButton>
          </LoginBox>
//버튼 영역 다음에 조건 작성
          {!localStorage.getItem('token')
            ? modalCondition && (
                <LogInModal
                  closeModal={() => setModalCondition(!modalCondition)}
                />
              )
            : modalCondition && (
                <LoggedModal
                  closeModal={() => setModalCondition(!modalCondition)}
                />
              )}
        </ProfileBox>
      </LogInArea>
    </div>
  );
};
```
- 모달창의 상태를 업데이트 하기 위해 `UseState`를 사용하는 것은 react-modal 라이브러리와 개념이 동일하다.
- 초기 화면에서는 사용자가 로그인을 하지 않은 상태이기 때문에 `<LogInModal />` 의 모달창이 나타나야 한다.
- 로그인 전과 후에 대한 판단은 local storage에 토큰이 담겨 있는 상태인지 아닌지를 기준으로 정한다.
- 따라서, 삼항 연산자를 사용하여 `!localStorage.getItem('token')` 로컬 스토리지에 토큰이 없다면 로그인 모달창을 띄우고, 토큰이 있다면 로그인 후 동일한 버튼을 클릭했을 때 '마이페이지' 모달창을 띄우는 로직이다. 
- `modalCondition &&`을 작성한 이유는 modalCondition이 true 일 때 즉, 버튼을 클릭하여 `state`의 값이 `true`가 되었을 때 모달창을 띄우는 로직이다.
- 각각의 모달창 컴포넌트에 `closeModal`함수를 작성하여 넘겨준다. 이는 모달창을 닫는 함수이며 로그인 또는 마이페이지 버튼이 클릭되면 `modalCondition`은 `true`가 되며 `closeModal`함수는 `!`를 붙여 `modalCondition`을 다시 `false`로 변경하게 된다.
- 
<br />

#### LogInModal.js, LoggedModal.js에서 모달창의 레이아웃 구성하기

```js
//LogInModal.js

const LogInModal = ({ closeModal }) => {
  return (
    <ModalOutside onClick={closeModal}>
      <ModalItself onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <CancelBtn onClick={closeModal} />
          <Welcome>소셜 로그인</Welcome>
        </ModalHeader>
        <KakaoModal />
      </ModalItself>
    </ModalOutside>
  );
};
```
- 우선 인자로 **LogIn.js**에서 넘겨준 모달창 닫기 함수를 받아온다.
- 모달창 이외의 영역을 클릭하면 모달창이 닫히게 `onClick` 속성으로 `<ModalOutside/>`에  `closeModal` 함수를 부여한다.
- 모달창 자체인 `<ModalItself>`에는 부모에게 해당하는 함수를 막아주는 `stopPropagation`함수를 부여한다. 따라서 `e`는 클릭이라는 이벤트 자체가 되는 것이다.
- 결과적으로 모달창을 클릭하면 모달창의 부모 영역인 모달창 이외의 영역에 부여된 '모달창 닫기' 기능이 block된다.
- 로그인 모달창 내부에 창 닫기 버튼을 따로 구현하여 해당 버튼을 클릭하거나 모달창 이외의 영역을 클릭하면 모달창이 닫히게 설정한다.
- 모달창 안의 내용을 `<KakaoModal/>` 컴포넌트로 화면을 구성한다.

<br />

```js
//LoggedModal.js

const LoggedModal = ({ closeModal }) => {
  return (
    <ModalOutside onClick={closeModal}>
      <ModalItself onClick={e => e.stopPropagation()}>
        <OpenMyPage />
      </ModalItself>
    </ModalOutside>
  );
};
```
- 함수의 원리는 위의 **LogInModal**과 동일하며 로그인 후에 버튼을 누르면 '마이페이지'에 관련된 모달창이 나타나기 위해 `<OpenMyPage/>`컴포넌트를 부여한다.

<br />

#### KakaoModal.js, OpenMyPage.js에서 모달창의 내용 구성하기

```js
//KakaoModal.js

const KakaoModal = () => {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize? 
  client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleLogIn = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <ModalContext>
      <ModalLogoBox>
        <ModalLogoImage src="/images/Logo.png" />
      </ModalLogoBox>
      <ModalText>환영합니다!</ModalText>
      <ModalText>간편한 로그인을 위해</ModalText>
      <ModalText>소셜 로그인을 이용해 주세요.</ModalText>
      <KaKaoBtn onClick={handleLogIn}>
        <KaKaoImage src="/images/kakao_login_medium_wide.png" />
      </KaKaoBtn>
    </ModalContext>
  );
};
```
- 위의 함수는 [소셜 로그인 구현] 에서 다룰 것이다.
- 로그인 모달창의 내용 중 가장 중요한 카카오 로그인창으로 넘어가기 위해 버튼을 구성한다.
![image](https://user-images.githubusercontent.com/50426259/178032205-2b3fbfe5-b4fd-43a6-a770-2c694048dd13.png)


<br />

```js
//OpenMyPage.js

const OpenMyPage = () => {
  const clickToLogOut = () => {
    localStorage.removeItem('token');
    window.open('http://localhost:3000', '_self');
  };

  return (
    <>
      <CheckReservation>나의 여행</CheckReservation>
      <CheckPayHistory>도움말</CheckPayHistory>
      <LogOut onClick={clickToLogOut}>로그아웃</LogOut>
    </>
  );
};
```
- 위의 함수는 [소셜 로그인 구현] 에서 다룰 것이다.
- '마이페이지' 모달창에는 세 가지 버튼이 존재한다. '나의 여행'에서는 예약 내역을 확인할 수 있다. 추후 `<Link/>`를 사용할 예정이다.

![image](https://user-images.githubusercontent.com/50426259/178032296-f56ecc41-7115-43be-85f6-403b76e748ec.png)


---

<br />


### 5. 카카오 로그인 서버와 통신
백엔드에서 서버 구축을 완료하여 통신을 시도했다. 
카카오 로그인을 구현하는 과정은 아래와 같다.
**[FE]카카오 서버에 인가코드 요청하기 → [FE]받은 인가코드를 서버에 넘겨주기 → [BE] 인가코드로 카카오 서버에 토큰 요청하기 → [BE] 받아온 토큰을 클라이언트에 전달하기 → [FE] 토큰 받아와 로컬 스토리지에 저장하기**

#### 사용자의 흐름으로 설명하기

> 카카오 서버에 인가코드를 요청하고 받기

로그인을 하기 위해서 
1. 로그인 모달창을 클릭한다.
2. 모달창 내부에 카카오 소셜 로그인 버튼을 클릭한다.
```js
const KakaoModal = () => {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleLogIn = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <ModalContext>
      <ModalLogoBox>
        <ModalLogoImage src="/images/Logo.png" />
      </ModalLogoBox>
      <ModalText>환영합니다!</ModalText>
      <ModalText>간편한 로그인을 위해</ModalText>
      <ModalText>소셜 로그인을 이용해 주세요.</ModalText>
      <KaKaoBtn onClick={handleLogIn}>
        <KaKaoImage src="/images/kakao_login_medium_wide.png" />
      </KaKaoBtn>
    </ModalContext>
  );
};
```
- 앞서 7/6일에 진행했던 카카오 소셜 로그인애에 대한 전반적인 설명을 마쳤다.  CLIENT_ID와 REDIRECT_URI가 무엇인지, KAKAO_AUTH_URL은 무엇인지 아래의 "성장 포인트" 를 참고하자.
- 여기서 달라진 부분은 보안을 위해 CLIENT_ID를 `.env`파일에 넣어둔 것. 이것에 대해서는 아래의 "새롭게 알게 된 점"에서 다룰 것이다.
- `handleLogIn` 함수를 통해서 "카카오로 시작하기" 버튼을 클릭하면 웹 브라우저 주소창에 `KAKAO_AUTH_URL`에 담긴 주소로 이동한다. 
- 그럼 주소창에 인가코드가 담긴 채로 REDIRECT 페이지가 그려진다. `window.location.href`는 할당받은 주소로 리다이렉트 하는 기능이다.
- `KAKAO_AUTH_URL`은 카카오 developer에서 명시한 주소이며  CLIENT_ID와 REDIRECT_URI에 따라 리다이렉팅 되는 페이지와 인가 코드가 달라진다. 나는  REDIRECT_URI를 `http://localhost:3000/users/kakao-signin`로 지정하기로 백엔드와 상의를 마쳤다.<small>(이전 과는 다른 URL 백엔드와 먼저 상의를 했었어야 하는 부분 -> kakao developer 내 애플리케이션에도 수정해야 함)</small>
![image](https://user-images.githubusercontent.com/50426259/178091764-b7ace3d8-6339-4fea-8e95-9faf3683c6c2.png)
![image](https://user-images.githubusercontent.com/50426259/178091833-e8bcea91-d9d9-445c-b91f-446e193402e0.png)

<br />


> 주소창에 적힌 인가코드 저장하여 서버에 전달 

위에 사진에서 볼 수 있듯 로그인 버튼을 누르고 카카오 서버에 인가 코드를 요청했더니 리다이렉팅 페이지의 주소에 인가코드가 작성되어 있다. 해당 인가 코드만 추출하여 백엔드 서버에 넘겨주자.

```js
//Kakao.js

const Kakao = () => {
//console.log(location.search하기) -> 어떤 정보가 있는지 확인하기!
  const location = useLocation();

//인가 코드만 추출하여 변수에 담기
  const code = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  }).code;

  useEffect(() => {
    fetch(`http://서버주소:8000/users/kakao-signin?code=${code}`)
      .then(res => res.json())
      .then(data => {
        if (data.access_token) {
          localStorage.setItem('token', data.access_token);
          window.open('http://localhost:3000', '_self');
        } else {
          alert('로그인 실패');
        }
      });
  }, []);

  return (
    <Block>
      <InnerText>Let's go to Jeju✈️</InnerText>
    </Block>
  );
};
```
- `useLocation`을 사용하면 현재 주소창의 정보를 얻어올 수 있다. 
- `location`에 `useLocation`을 할당하고 `location.search`라는 객체에 접근하면 인가코드가 퀴리 스트링 형태로 추출되는 것을 볼 수 있다.
![image](https://user-images.githubusercontent.com/50426259/178092001-9a7d4f56-0716-4889-85e0-5b457a239e1d.png)

- 인가코드를 받고 어디에 저장되어 있는지도 알았으니 백엔드가 인가코드만 받을 수 있게 정보를 추출하자
- 현재 `location.search`에 담긴 값은 위의 이미지에서 볼 수 있 듯 `?code=` 쿼리 스트링의 시작문과 함께 저장되어 있다.
![image](https://user-images.githubusercontent.com/50426259/178092076-0085b506-446f-444b-90bb-773aebb947c1.png)
- 현재 백엔드에 넘겨줄 인가 코드는  `?code=`의 이후의 문자이기 때문에 qs 라이브러리를 사용하여 인가 코드만 보내준다.
- `qs.parse`는 문자열로 되어 있는 인가코드를 객체 형태로 변환하는 메소드이다. 
<small>참고  https://react.vlpt.us/react-router/02-params-and-query.html</small>
- `ignoreQueryPrefix: true` 는  `?code=` 즉, 쿼리스트링의 기본으로 fix 되어 있는 데이터를 무시, ignore해주는 속성이다.
- 콘솔에 결과값을 확인하기 위해 찍어보면 
![image](https://user-images.githubusercontent.com/50426259/178092248-d9d87631-c696-489b-a541-2ad7e46ac681.png)
- 객체의 형태로 잘 나오는 것을 확인할 수 있다.
- `code`라는 `key`의 `value`만 보내주기 위해서 객체에 접근하기 위한 방법으로 'Dot Notation'을 사용한다.

<br />

> 토큰을 받아와 로컬스토리지에 저장

위의 과정에서 카카오 서버에서 보내주는 인가코드를 백엔드에서 사용하기 쉽게 코드만 추출하여 `code`라는 변수에 저장했다.
그럼 해당 코드를 백엔드에 보내는 과정을 살펴보자.
보내주는 과정 또한 백엔드와 상의를 거쳐야 한다. 어떤 형태로 어떤 메소드를 사용하여 전달할 것인지.
팀의 백엔드 개발자는 쿼리스트링으로 보내달라고 요청했다.
찾아보니 쿼리스트링을 보낼 때는 `method: 'GET'`을 사용한다. 클라이언트 측에서 서버에 데이터를 보내는 부분에서 'POST'라고 생각했었는데 새롭게 배웠다.

```js
  useEffect(() => {
    fetch(`http://서버주소:8000/users/kakao-signin?code=${code}`)
      .then(res => res.json())
      .then(data => {
        if (data.access_token) {
          localStorage.setItem('token', data.access_token);
          window.open('http://localhost:3000', '_self');
        } else {
          alert('로그인 실패');
        }
      });
  }, []);

```
-`useEffect` 훅을 사용하여 서버에 요청하고 토큰을 받아오는 과정이 오래걸리더라도 무시하고 계속 렌더링을 진행하여 사용자의 화면에 UI 측면에서 보이게끔 하고 `useEffect`안의 함수를 실행하도록 하는 것이다. 
- `fetch`함수로 서버 주소를 입력하고 추출한 `code` 를 보내준다.
- 그 다음 과정으로 백엔드가 인가코드를 카카오 서버에 보내고 카카오 서버는 그에 맞는 토큰을 발행한다.
- 그럼 백엔드는 그 토큰을 클라이언트에 전달한다.
- 전달된 데이터를 JSON화 시키고 `data`라는 이름으로 받는다. 
**여기서 분기처리**
- if문을 작성하여 만약 받아온 data에 access_token이라는 `key`가 있다면 로컬 스토리지에 token 이라는 이름으로 해당 access_token을 저장하라.
- 그리고 명시된 페이지로 이동해라
- 그렇지 않다면 `alert`창을 띄어 로그인에 실패하였다고 알려라. 
**window.open('로그인 성공 시 이동할 페이지', '_self');**
를 왜 굳이 사용했는지? navigate를 사용하면 되지 않을까? 이 부분에 대해서는 "성장 포인트"에서 설명할 것이다. state값의 업데이트, 리렌더링, 새로고침 등의 다양한 이유가 있다.

<br />


> 토큰 여부에 따른 로그인 완료 페이지(메인)로 / 로그인 실패 초기 페이지 이동

앞서 모달창 구현하며 설명한 부분과 localStorage에 토큰을 저장하여 로그인을 판단하는 과정이 퍼즐 조각처럼 맞춰진다.
다시 돌아와서 살펴보면,
```js
//Login.js

      <LoginBox>
        <LoginButton onClick={() => setModalCondition(!modalCondition)}>
          <ButtonWrapper>
            <HamburgerBtn />
            {!localStorage.getItem('token') ? (
              <ProfileIcon />
            ) : (
              <UserPicture />
              //추후 서버에서 얻어올 데이터
            )}
          </ButtonWrapper>
        </LoginButton>
      </LoginBox>
      {!localStorage.getItem('token')
        ? modalCondition && (
            <LogInModal
              closeModal={() => setModalCondition(!modalCondition)}
            />
          )
        : modalCondition && (
            <LoggedModal
              closeModal={() => setModalCondition(!modalCondition)}
            />
          )}
```
- `{!localStorage.getItem('token')? <LogInModal /> : <LoggedModal />` 즉, 로컬스토리지에 토큰이 저장되었다는 말은 카카오 로그인 버튼을 클릭한 사용자의 인가코드를 서버에 넘겨주고 코드를 받은 서버가 카카오 서버에 토큰을 요청하여 해당 토큰을 프런트단에 넘겨주고 그 토큰을 로컬스토리지에 `token`이라는 이름으로 저장이 되는 과정을 담고 있다. 
- `token`이라는 `key`가 있다면  true 없다면 false를 반환하지만 위의 코드에서 느낌표를 앞에 붙여 없다면  -> 로그인 초기창, 있다면 -> 로그인 완료 후 페이지가 그려진다.

---




<br />
<br />
<br />
<br />

## :: 성장 포인트 (해당 기능을 구현하며 고민했던 사항이나 새로 알게된 부분, 어려웠던 점 등을 작성합니다.)
### 라이브러리
리액트에서 제공하는 라이브러리 또는 외부 라이브러리를 설치하여 적용할 수 있다. 어떤 기능이 있는지 해당 라이브러리의 공식문서에서 확인할 수 있다. 

**[어려웠던 점]**
모달창 라이브러리를 사용하면서 모달창을 제어하는 버튼과 모달창의 코드 위치에 따라 기능이 작동할 때가 있고 아닐 때가 있었다. 

**[해결]**
버튼과 모달 컴포넌트의 관계를 형제로 부여한다. 

<br />

### 카카오 소셜 로그인
카카오 developers 공식 문서를 통해 진행할 수 있는 소셜 로그인. 로그인을 외부 API로 간단하게 구현할 수 있다.
함께 프로젝트를 진행하는 백엔드 서버가 아닌 다른 서버에 처음으로 요청을 했다. 

**[어려웠던 점]**
전반적으로 소셜 로그인 과정을 이해하는데 시간이 걸렸다. 
>소셜 로그인 과정

우선 프런트에서 카카오에 인가 코드를 요청하고 받아온다. 받은 인가 코드를 백엔드에 넘겨주면 백엔드는 카카오 서버에 사용자 토큰을 요청한다. 받은 토큰을 다시 사이트에 맞게 수정한 후 프런트에 넘겨준다. 프런트는 해당 토큰을 `localStorage`에 저장하여 사용자가 웹 사이트를 이용하기 편리하도록 구현다. 

> Redirect URI

위의 소셜 로그인 과정은 빠른 속도 내에 이루어 진다. "소셜 로그인 하기" 버튼을 클릭하고 로그인이 완료되고 다음 페이지가 화면에 나타나는 동안 처리된다. 하지만 인터넷 속도가 느린 환경을 가진 사용자가 소셜 로그인을 시도하고 다음 페이지가 구현될 동안 빈 화면을 보게 될 수 있다. 이때 사용자에게 로그인 중이라는 사실을 알리기 위해 Redirect URI에 "로그인 중입니다" 등의 글이 나타나는 화면을 Router와 Redirect URI에 작성한다. 
```js
export const REDIRECT_URI = 'http://localhost:3000/kakao';
```

사용자가 로그인 버튼을 클릭하면 카카오에서 인가 코드를 보낸다. `kakao?code=인가코드` (code= 다음부터 추출)
해당 인가코드를 가져와서 변수에 담고 코드를 다시 백엔드에 전송한다.

위의 과정이 처음에는 어려운 개념으로 다가왔지만 요청, 응답, 저장의 연속이었다. 

<br />

### 로그인 후 아이콘 변경

**[만났던 에러]**
로컬 스토리지의 토큰 여부에 따라 로그인 전 아이콘과 로그인 완료 후의 아이콘이 달라야 한다. 
![image](https://user-images.githubusercontent.com/50426259/178093241-fe8c0d01-10ea-4745-8b2f-3deef893c3c9.png)
![image](https://user-images.githubusercontent.com/50426259/178093231-fc91ace8-40eb-42a6-91ce-31ed49ec2f6f.png)

하지만 Redirect_URL에서 로그인 완료 후의 페이지로 넘어와도 아이콘이 변하지 않았다. 대신 버튼을 한 번 클릭하거나 새로고침을 하면 그때서야 아이콘이 변경되었다.
해당 문제를 내비게이션 바 및 로그인을 담당하는 4명이 겪고 있었다. 

> 토큰이 있어도 아이콘이 변경되지 않았던 이유?

리액트에서 화면 UI를 변경하기 위해서는 즉, 렌더링을 하기 위해서는 `state`값에 변화가 있어야 한다. 하지만 초반에 작성했던 "로그인 후 메인페이지로 가시오" 함수에서 `useNavigate` 훅을 사용했기 때문에 새로고침 없이 router 내부에 있는 페이지로 이동할 뿐이다. 
```js
 if (data.access_token) {
          localStorage.setItem('token', data.access_token);
          navigate('/')
        } else {
          alert('로그인 실패');
        }
```

> 클릭했을 때 아이콘이 변경되었던 이유?

클릭 버튼인 `<LogInButton />`에는 `onClick={() => setModalCondition(!modalCondition)}` 으로 클릭 시 `state` 값이 업데이트 되기 때문이다. 
또한 **Router.js**에서 `<Nav/>`와 `<Footer/>`는 `<Routes>` 바깥에 있는 영역이기 때문에 페이지의 변화에 영향을 받지 않는 것 같았다. (추측)

**[해결]**
결국은 강제 새로고침을 진행했다. 즉, 로컬 스토리지에 토큰이 담기고 로그인 성공 페이지인 메인 페이지로 넘어갈 때 `useNavigate`를 사용하는 것 대신에 `window.open('이동할 주소', '_self');를 입력한다.
위의 코드는 새로운 창을 열지만 "self" 즉, 지금의 창에서 열라는 명령이다. 결국은 새로고침이다. 하지만 컴퓨터 사양에 따라 다르지만 토큰이 담김과 동시에 새로고침이 되기 때문에 유저의 정보로 로그인 완성 페이지에서 보여지게 해야 할 때 잠깐의 딜레이가 있을 수 있다. 아직 경험하지는 못했지만 혹시 모를 상황을 대비해서 Redux를 배우자.

<br />

### .env 파일

**[새롭게 배운 점]**
`CLIENT_ID`는 소중한 나의 개인 정보이다. 그것을 생각 없이 모든 개발자의 공유 공간인 GitHub에 push하여 노출되었다. 
이를 방지하기 위해서 `.env` 파일에 민감한 정보를 작성하고 `gitignore`파일에 작성하여 해당 정보를 push하지 않는다.
`.env` 파일에서 데이터를 가지고 올 때, 사용할 때는 따로 `import`를 할 필요없이 `process.env.`를 앞에 붙여준다.
`.env` 파일에서 데이터를 작성할 때는 반드시 `REACT_APP_`을 작성해야 한다.

**[구현 코드]**
```js
//.env

REACT_APP_CLIENT_ID = 123412341234123412341234
REACT_APP_REDIRECT_URI = http://localhost:3000/users/kakao-signin
```

```js
//.env를 사용할 .js

  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
```

<br />

### Mixin 사용
**[새롭게 배운 점]**
이번 프로젝트부터 새롭게 styled component를 사용하여 scss나 css없이 컴포넌트 자체가 이미 스타일링이 되어진 상태로 사용한다. 다른 동기들은 도대체 왜 쓰는 것인지 모르겠다고 하는데 나 혼자 만족하고 있다. 코드가 훨씬 깔끔하지 않나....너무나도 정리정돈 된 모습 때문에 오히려 styled component를 선호하고 있다. 그리고 mixin을 사용하여 스타일을 변수화 하여 작성하는 것도 css보다 훨씬 간단하고 편하게 구현할 수 있다.
**[구현 코드]**
- 우선 variables.js에 자주 쓰이는 스타일링을 정의한다.
```js
//variables.js

import { css } from 'styled-components';

const variables = {
  flex: (direction = 'row', justify = 'center', align = 'center') => `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `,
  btnTransparent: css`
    background-color: transparent;
    border-color: transparent;
  `,
}
export default variables;
```
- `flex`는 요소를 정렬할 때 가장 많이 쓰이는 스타일이다. 버튼의 기본 배경색은 회색이고 기본 테두리는 검은색이다. 버튼이 많은 페이지에서 자유롭게 버튼에 스타일링을 지정할 때는 기본 배경색과 테두리를 투명으로 설정한다.

```js
//mixin을 사용할 컴포넌트

import variables from '../../../styles/variables';

return(
)
}
const ModalContext = styled.div`
  ${variables.flex('column', '', 'center')}
  height: 100%;
  z-index: 100;
`;
const KaKaoBtn = styled.button`
  margin-top: 90px;
  width: 300px;
  height: 50px;
  ${variables.btnTransparent}
`;
```
- 우선 import를 하고 사용 형태는 ${파일이름.정의한mixin}
- 기본적으로 `flex-direction: row`, `justify-content: center`, `align-items: center`인데 이를 상황에 따라 수정도 가능하다.
- 위의 `<ModalContext/>`에서 사용된 `flex mixin`은  `flex-direction: column`, `justify-content: center`, `align-items: center` 인 셈이다. 


<br />

### git Rebase 충돌
**[만났던 에러]**
git add, commit 후 rebase를 진행하는데 conflict가 났다. 팀원이 새롭게 올려준 mixin 파일과 원래 있었던 파일이 충돌했다.
현재 값으로 변경 후 다시 진행을 하려고 하는데 자꾸 에러가 나타난다.

**[해결]**
1. conflict가 났다.
2. 해당 파일을 수정하여 conflict를 해결한다.
3. git add 수정한 파일의 경로.js
4. git rebase --continue
5. git push origin 브랜치 -f

git rebase에는 -abort가 있기 때문에 너무 겁먹지 말자!
<br />

## :: 기타 질문 및 특이 사항
- ~~인가 코드를 백엔드에 넘겨줄 때, `let`을 사용하려는 이유는 코드가 매번 바뀌기 때문입니다. 하지만 보안을 위해서 `const`를 사용해야 하나요? user마다 코드가 다른 것이 아니라 로그인을 시도하려 할때마다 바뀌기 때문에 크게 위험하다고 생각은 들지 않지만 어떤 방법이 지향되는지 궁금합니다.~~
- 마지마지 심슨 마지 요청마지 마지데 마지!!!! 부탁드립니다.
