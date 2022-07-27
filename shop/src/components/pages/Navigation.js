import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import styles from './Navigation.module.css';

function Navigation(props) {
  const currentRoute = useLocation().pathname;
  console.log(useLocation());
  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Container style={{ display: 'block' }}>
          <Nav className={`me-auto ${styles.navbars}`}>
            <div className={`${styles.home}`}>
              <Link
                style={{ margin: '0px' }}
                className={`nav-link ${
                  currentRoute.endsWith('/') ? 'navbar-brand' : ''
                }`}
                to='/'
              >
                홈
              </Link>
            </div>
            <div className={`${styles.menu}`}>
              {/* <Link className='nav-link' to='/detail'>
              상세페이지
            </Link> */}
              <Link
                style={{ margin: '0px' }}
                className={`nav-link ${
                  currentRoute.includes('about') ? 'navbar-brand' : ''
                }`}
                to='/about'
              >
                About
              </Link>
              <Link
                style={{ margin: '0px' }}
                className={`nav-link ${
                  currentRoute.includes('login') ? 'navbar-brand' : ''
                }`}
                to='/login'
              >
                로그인
              </Link>
            </div>
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
