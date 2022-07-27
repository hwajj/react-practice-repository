import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';

function Navigation(props) {
  const currentRoute = useLocation().pathname;
  console.log(useLocation());
  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Nav className='me-auto'>
            <Link
              className={
                currentRoute.endsWith('/')
                  ? 'nav-link navbar-brand'
                  : 'nav-link'
              }
              to='/'
            >
              홈
            </Link>
            {/* <Link className='nav-link' to='/detail'>
              상세페이지
            </Link> */}
            <Link
              className={
                currentRoute.includes('login')
                  ? 'nav-link navbar-brand'
                  : 'nav-link'
              }
              to='/login'
            >
              로그인
            </Link>
            <Link
              className={
                currentRoute.includes('about')
                  ? 'nav-link navbar-brand'
                  : 'nav-link'
              }
              to='/about'
            >
              회사
            </Link>
            {/* <Nav.Link
              onClick={() => {
                props.navigate(-1);
              }}
            >
              뒤로가기
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                props.navigate('./detail');
              }}
            >
              상세페이지(Navigate사용)
            </Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
