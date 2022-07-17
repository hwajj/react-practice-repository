import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import Card from './Card';
import Detail from './pages/Detail';
function App() {
  let item_arr = [
    {
      id: 0,
      title: 'White and Black',
      content: 'Born in France',
      price: 120000,
      src: 'shoes1.jpeg',
    },

    {
      id: 1,
      title: 'Red Knit',
      content: 'Born in Seoul',
      price: 110000,
      src: 'shoes2.jpeg',
    },

    {
      id: 2,
      title: 'Grey Yordan',
      content: 'Born in the States',
      price: 130000,
      src: 'shoes3.jpeg',
    },
  ];
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
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path='/'
          element={
            <>
              <div className='main-bg'></div>
              <div className='container'>
                <div className='row'>
                  {item_arr.map((e) => {
                    return <Card item={e} />;
                  })}
                </div>
              </div>
            </>
          }
        />
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
