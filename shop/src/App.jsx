import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import Login from './components/login/Login';
import Items from './components/item/Items';
import Detail from './components/item/Detail';
import About from './components/pages/About';
import shoes_data from './data.js';
import axios from 'axios';
import Cart from './pages/Cart';
import Card from './components/item/Card';

function App() {
  let [titleArrange, setTitleArrange] = useState(false);
  let navigate = useNavigate();
  let [shoes, setShoes] = useState(shoes_data);
  //  let [titleArrange, setTitleArrange] = useState(false);
  function shoesHandler() {
    axios
      .get('https://codingapple1.github.io/shop/data2.json')
      .then((result) => {
        let tmpShoes = [...shoes];
        let idList = tmpShoes.map((e) => e.id);
        let newShoes = result.data.filter((e) => idList.indexOf(e.id) < 0);
        setShoes([...tmpShoes, ...newShoes]);
      })
      .catch(() => {
        console.log(shoes);
      });
  }

  return (
    <div className='App'>
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
                          return (
                            <>
                              <Link to={`/detail/${e.id}`} className='col-md-4'>
                                <Card item={e} key={i} />
                              </Link>
                            </>
                          );
                        })
                    : shoes.map((e, i) => {
                        return (
                          <>
                            <Link to={`/detail/${e.id}`} className='col-md-4'>
                              <Card item={e} key={i} />
                            </Link>
                          </>
                        );
                      })}
                </div>
                <Button
                  className='my-2 mx-4'
                  onClick={() => {
                    axios
                      .get('https://codingapple1.github.io/shop/data2.json')
                      .then((result) => {
                        let tmpSheos = [...shoes];
                        let idList = tmpSheos.map((e) => e.id);
                        let newShoes = result.data.filter(
                          (e) => idList.indexOf(e.id) < 0
                        );
                        setShoes([...tmpSheos, ...newShoes]);
                      })
                      .catch(() => {
                        console.log(shoes);
                      });
                  }}
                >
                  더보기
                </Button>
              </div>
            </>
          }
        />

        <Route path='/detail/:id' element={<Detail shoes={shoes} />} />
        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>멤버</div>} />
          <Route path='location' element={<div>회사위치</div>} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<div>없는 페이지 입니다</div>} />
      </Routes>
    </div>
  );
}

export default App;
