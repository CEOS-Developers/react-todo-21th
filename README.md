# 2주차 미션: React-Todo

# 서론

안녕하세요. 21기 프론트엔드 **김영서**입니다😊.  
저번 주에 만들었던 투두리스트를 리액트로 구현했습니다😆.

# 미션

## 🔗

- [1주차 VanillaJS todo](https://vanilla-todo-21th-xi.vercel.app/)
- [2주차 React todo](https://react-todo-21th-smoky.vercel.app/)
- [figma](https://www.figma.com/design/oUJT679EyBJYQmCJgNdgvJ/CEOS-Frontend-21-%EA%B9%80%EC%98%81%EC%84%9C?node-id=0-1&p=f&t=xkmcJ7COhkHPcN02-0)

## 미션 목표

- VSCode, Prettier를 이용하여 개발환경을 관리합니다.

  ```
  {
  "semi": false, // 세미콜론X
  "singleQuote": true, // 문자열에 (') 사용
  "jsxSingleQuote": false, // JSX 문자열에 (") 사용
  "trailingComma": "es5", // 객체, 배열 등의 마지막 항목에 후행 콤마 추가 (ES5에서 지원되는 위치)
  "arrowParens": "always", // 화살표 함수에서 괄호 사용
  "tabWidth": 2, // 들여쓰기 2칸
  "printWidth": 80, // 한 줄 코드 길이 80자
  "endOfLine": "lf", // 라인 끝을 LF(Line Feed)로 설정
  "bracketSameLine": true, // JSX 태그의 종료 괄호를 같은 라인에 배치
  "bracketSpacing": true // 객체 리터럴의 중괄호 안에 공백을 추가
  }

  ```

- React의 기초를 이해합니다.
- React를 통한 어플리케이션 상태 관리 방법을 이해합니다.
- React Hooks에 대한 기초를 이해합니다.

  - useState, useContext, useReducer, useEffect 등 사용

- Vite를 통한 React 프로젝트 개발환경 구축을 익힙니다.

  1. `npm create vite@latest`
  2. `React+Javascript` 프로젝트 선택

- Styled-Components를 통한 CSS-in-JS 및 CSS Preprocessor의 사용법을 익힙니다.
  1. `/src/styles`: 특별한 기능과 로직이 없는, 스타일을 위한 컴포넌트들을 위치시켰습니다.
  2. `/src/components`: 기능이 있는 컴포넌트로 `/src/styles` 하위 styled-component를 사용하는 컴포넌트들을 위치시켰습니다.

## 필수 요구사항

⭕️ 1주차 미션의 결과물을 그대로 React로 구현합니다. (‼️ todo / done 개수 잊지 마세요 ‼️)  
⭕️ Styled-Component를 사용합니다.  
[참고\_Sunny Yoon](https://joong-sunny.github.io/javascript/styled-components/)  
[참고\_DaleSeo](https://www.daleseo.com/react-styled-components/)  
⭕️ React Hooks만을 사용해 상태를 관리합니다.(전역 상태관리 라이브러리 사용 XX)  
⭕️ Vite를 활용하여 React 프로젝트 환경 구축을 진행합니다

## 선택 요건

⭕️ 기존 Todo-list에 여러분들이 추가하고 싶은 기능과 디자인을 자유롭게 추가해보세요.  
❌ TypeScript를 활용하여 프로젝트를 진행해보세요.

## 로컬 실행방법

---

`npm install`  
`npm run dev`

# 링크 및 참고자료

---

- [create react app (CRA)](https://create-react-app.dev/docs/getting-started/)
- [리액트 docs 주요 개념 1-12](https://react.dev/learn)
- [리액트 docs Hook 1-3](https://react.dev/reference/react)
- [리액트 useEffect 완벽 가이드](https://overreacted.io/ko/a-complete-guide-to-useeffect/)
- [컴포넌트 네이밍을 위한 자바스크립트 네이밍 컨벤션](https://velog.io/@cada/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%ED%83%80%EC%9D%BC-%EA%B0%80%EC%9D%B4%EB%93%9C-%EB%84%A4%EC%9D%B4%EB%B0%8D-%EC%BB%A8%EB%B2%A4%EC%85%98-%ED%8E%B8)
- [useState, useEffect hooks](https://velog.io/@velopert/react-hooks#1-usestate)
- [styled-component](https://styled-components.com/docs/basics#getting-started)
