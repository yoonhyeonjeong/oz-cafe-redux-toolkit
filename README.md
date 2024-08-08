# Redux & Redux Toolkit을 사용하여 OZ카페 코드 리팩토링하기

## 과제 정보

- 주제 : Redux & Redux Toolkit을 사용하여 OZ카페 코드 리팩토링하기

### 학습 목표

1. 이전 과제에서 작성한 코드를 Redux & Redux Toolkit를 사용하여 개선할 수 있다.
2. Redux & Redux Toolkit을 사용하는 방법에 대해 이해한다.
3. Redux & Redux Toolkit을 사용하는 경우의 각각 장단점에 대해 이해한다.
4. 기존에 작성한 상태관리 방식의 문제점에 대해 이해한다.

<br />

### 복습할 개념 체크 리스트

- [ ] **Redux & Redux Toolkit를 사용하는 방법에 대해 이해한다.**
      <br/>설명: Redux & Redux Toolkit를 사용하는 방법에 대해 복습하세요.
- [ ] **Redux & Redux Toolkit를 사용하는 경우의 장단점에 대해 이해한다.**
      <br/>설명: Redux & Redux Toolkit를 사용하는 경우의 장단점에 대해 복습하세요.
- [ ] **Redux & Redux Toolkit를 사용하는 경우, 이전 작성한 코드와 비교하여 개선된 점에 대해 이해한다.**
      <br/>설명: Redux & Redux Toolkit를 사용하는 경우, 어떠한 부분이 개선될 수 있는지에 대해 복습하세요.

<br />

### 기본 요구 사항

1. `App.jsx` 에서 관리하는 `cart`, `menu` 상태를 전역상태로 관리합니다.
   1. `src` 폴더 안에 `redux` 폴더를 생성합니다.
   2. `redux.js` 파일을 생성합니다.
   3. 해당하는 파일 내에서 Redux/Redux Toolkit을 사용하여 상태를 전역으로 관리합니다.
2. `cart`, `menu` 전역 상태를 필요한 컴포넌트로 불러와 사용할 수 있어야 합니다.
3. 부모컴포넌트(`App.jsx`)에서 자식 컴포넌트로 내려주던 상태와 props를 제거합니다.
4. css는 자유롭게 수정해도 좋습니다.

  <br />
