## 리액트에서 부트스트랩 사용하기
1. npm install react-bootstrap bootstrap 부트스트랩설치
2. index.html <head> 내에 부트스트랩 링크 넣어주기
3. jsx파일 상단에 import {Buttom} from 'react-bootstrap'       
          


## 이미지 넣기    

### public에서 불러오기
-  이미지같은 정적파일은 public 폴더에 보관해도 된다.
  public 폴더에 있는 이미지 사용할 때는 PUBLIC URL사용을 권장하나
  단순히 /이미지경로, 이미지경로 지정해도 이미지가 잘 불러와진다.
- 
  ```
  <img src={`${process.env.PUBLIC_URL}/assets/shoes1.jpeg`}/>
  <img src={`/assets/shoes2.jpeg`} />
  <img src={`assets/shoes3.jpeg`}/>
  ```
  ```
  .main-bg {
  height: 300px;
  background-image: url('../public/assets/any.jpeg'); 
  }
  ```

### src폴더에서 불러오기
- src폴더에서 불러오면 import하여 사용할 수도 있다. 간편하게 이미지경로로도 사용가능하다. 
- 
  ```
  import mainImage from './assets/any.jpeg';
  function App() {
    return (
      <img src={mainImage} />
      <img src={'./assets/any.jpeg'}></img>
  
    );
  }
  ```
  ```
  .main-bg {
    background-image: url('./assets/any.jpeg');
    }  
  ```

### 외부 이미지 불러오기
- 절대경로 그대로 주소에 써주면 된다 
-
   ```
  <img src='https://images.pexels.com/photos/12066797/pexels-photo-12066797.jpeg' />
  ```       
    

## 리액트 라우터 사용하기
### 세팅
1. 터미널에
 `npm install react-router-dom@6 ` 입력

2. index.js 코드 추가
- 
  ```
  //브라우저라우터로 앱을 감싸줌
  import { BrowserRouter } from "react-router-dom";

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </React.StrictMode>
  ); 
  ```         

### Routes
- 
  ``` 
  function App(){
    return (
      <Navbar/>
      <Routes>
        <Route path="/main" element={<Main/>} />
        <Route path="/detail" element={ <Detail/> } />
        <Route path="*" element={ <div> 없는 페이지 입니다. </div> } />
        <Route>
      </Routes>
    )
  }
  export default App;
  export default App;
  ``` 
- <Navbar/> 컴포넌트는 페이지 주소에 상관없이 보이고, 
  /main 접속시에는 <Main/> 페이지만, /detail  접속시에는 <Detail/> 페이지만 보임
- path="*" 으로 하면 404 페이지 보여준다.(정해진 url 외 경로에 대한 페이지)
  
### Link
- html의 a 태그 역할
- 부트스트랩의 클래스명 사용하면 Link 태그 꾸밀 수 있다
  ``` 
  function App(){
    return (
      <Link className='nav-link navbar-brand' to='/'>
        홈
      /Link>
      {/*중략*/}
      <Link className='nav-link' to='/detail'>
        상세페이지
      </Link>    
    )
  }
  export default App;
  ``` 

### useNavigate
- 페이지 이동 도와와주는 hook(함수)
- a
  ``` 
  let navigate = useNavigate();
  <Nav.Link onClick={() => {navigate('./detail');}}>
    상세페이지로 이동
  </Nav.Link>
  <Nav.Link onClick={() => {navigate(-1);}}>
    뒤로가기
  </Nav.Link>
  ``` 

### nested Routes
- 
  ```
  <Route path="/about" element={ <About/> } >  
    <Route path="member" element={ <div>멤버</div> } />
    <Route path="location" element={ <div>위치정보</div> } />
  </Route>
  ```
  ```
  function About() {
    return (
      <div>
        <h4>About 페이지</h4>
        <Outlet/>
      </div>

    )

  }
  ```  
- About 컴포넌트의 <Outlet/> 의 위치에 nesting된 페이지가 보여진다. 
- /about/member 로 들어가면 <About/> 컴포넌트 안에 <div>멤버</div> 들어가있다. 


### Route parameter와 useParams
- App.jsx
  ```
    <Route path='/detail/:id/:brand' element={<Detail shoes={shoes} />} />
  ```
- Detail.jsx
  ``` 
    import { useParams, Link } from 'react-router-dom';

    function Detail(props) {
      let { id, brand } = useParams();
      return (
        <>
          <div>props.shoes[id].title</div>
        </>
      )
    }
  ```
- useParam 이라는 훅을 사용해서 url 파라미터 정보에 부합하는 데이터를 보여줄 수 있다.
- 파라미터는 여러 개 사용할 수 있다.