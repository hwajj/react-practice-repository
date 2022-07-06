import './App.css';
import MyComponent from './MyComponent';
import MyClassComponent from './MyClassComponent';
function App() {
	const name = '리액트';
	return (
		<>
			<MyComponent name="컴포넌트">앱으로 리턴되라 얍 !</MyComponent>
			<MyClassComponent name="클래스컴포넌트">
				이건 클래스컴포넌트 사이에 들어간 글자고, props에 children으로 전달된다.
			</MyClassComponent>
		</>
	);
}

export default App;
