import React, { useState } from 'react';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import Card from './Card';
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
          {item_arr.map((e) => {
            return <Card item={e} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
