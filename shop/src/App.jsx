import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import Card from './Card';
import Detail from './pages/Detail';
import About from './pages/About';
import shoes_data from './data.js';

function App() {
  let [shoes, setSheos] = useState(shoes_data);
  let [titleArrange, setTitleArrange] = useState(false);
  let navigate = useNavigate();

  return (
    <div className='App'>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Nav className='me-auto'>
            <Link className='nav-link navbar-brand' to='/'>
              홈
            </Link>
            <Link className='nav-link' to='/detail'>
              상세페이지
            </Link>
            <Nav.Link
              onClick={() => {
                navigate(-1);
              }}
            >
              뒤로가기
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                navigate('./detail');
              }}
            >
              상세페이지(Navigate사용)
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path='/'
          element={
            <>
              <div className='main-bg position-relative'>
                <Button
                  className='position-absolute bottom-0 end-0 my-2 mx-5'
                  onClick={() => setTitleArrange(true)}
                >
                  가나다 정렬
                </Button>
              </div>
              <div className='container'>
                <div className='row'>
                  {titleArrange
                    ? shoes
                        .sort((a, b) =>
                          a.title > b.title ? 1 : b.title > a.title ? -1 : 0
                        )
                        .map((e, i) => {
                          return <Card item={e} key={i} />;
                        })
                    : shoes.map((e, i) => {
                        return <Card item={e} key={i} />;
                      })}
                </div>
              </div>
            </>
          }
        />

        <Route path='/detail/:id' element={<Detail shoes={shoes} />} />
        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>멤버</div>} />
          <Route path='location' element={<div>회사위치</div>} />
        </Route>
        <Route path='*' element={<div>없는 페이지 입니다</div>} />
      </Routes>
    </div>
  );
}

export default App;
