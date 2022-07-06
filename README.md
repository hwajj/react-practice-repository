# 리액트를 다루는 기술 따라하기

## 3장 컴포넌트
### props 

- props 기본값 설정 : defaultProps
    - defaultProps가 설정되지 않았는데 isRequired사용된 필수 propTypes일때 console에 경고  
- 태그사이의 내용을 보여주는 children
- propTypes를 통한 props 검증

- class 컴포넌트의 constructor에서 super(props) 호출
    -> 리액트의 Component클래스가 지닌 생성자 함수를 호출함
    