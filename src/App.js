import './App.css';
import MyComponent from './MyComponent';

function App() {
	const name = '리액트';
	return <MyComponent name={name}>앱으로 리턴되라 얍 !</MyComponent>;
}

export default App;
