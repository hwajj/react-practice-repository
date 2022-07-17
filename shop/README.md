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
   
           