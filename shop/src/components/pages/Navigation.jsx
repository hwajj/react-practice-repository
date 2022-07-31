import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import styles from './Navigation.module.css';
import CartButton from '../Cart/CartButton';
function Navigation(props) {
  const currentRoute = useLocation().pathname;

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

              <CartButton onShowCart={props.onShowCart} />
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
