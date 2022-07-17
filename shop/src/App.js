import React, { useState } from 'react';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Features</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/shoes1.jpeg`}
              width='80%'
              alt='신발1'
            />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className='col-md-4'>
            <img src={`/assets/shoes2.jpeg`} width='80%' alt='신발1' />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className='col-md-4'>
            <img src={`assets/shoes3.jpeg`} width='80%' alt='신발1' />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
