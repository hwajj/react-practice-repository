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
import Navigation from './components/pages/Navigation';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartShow, setCartShow] = useState(false);
  let navigate = useNavigate();
  let [shoes, setSheos] = useState(shoes_data);
  //  let [titleArrange, setTitleArrange] = useState(false);
  function shoesHandler() {
    axios
      .get('https://codingapple1.github.io/shop/data2.json')
      .then((result) => {
        let tmpSheos = [...shoes];
        let idList = tmpSheos.map((e) => e.id);
        let newShoes = result.data.filter((e) => idList.indexOf(e.id) < 0);
        setSheos([...tmpSheos, ...newShoes]);
      })
      .catch(() => {
        console.log(shoes);
      });
  }

  const showCartHandler = () => {
    setCartShow(true);
  };

  const hideCartHandler = () => {
    setCartShow(false);
  };

  return (
    <CartProvider>
      <div className='App'>
        {cartShow && (
          <Cart onHideCart={hideCartHandler} onShowCart={showCartHandler} />
        )}
        <Navigation
          navigate={navigate}
          onShowCart={showCartHandler}
        ></Navigation>

        <Routes>
          <Route
            path='/'
            element={<Items shoes={shoes} addShoes={shoesHandler}></Items>}
          />

          <Route path='/login' element={<Login />} />
          <Route path='/detail/:id' element={<Detail shoes={shoes} />} />
          <Route path='/about' element={<About />}>
            <Route path='member' element={<div>멤버</div>} />
            <Route path='location' element={<div>회사위치</div>} />
          </Route>
          <Route path='*' element={<div>없는 페이지 입니다</div>} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
