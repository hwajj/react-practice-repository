import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
import TabComponent from './TabComponent';
import TabMenu from './TabMenu';
import CartContext from '../../store/cart-context';
import DiscountBox from './DiscountBox';

let StyledBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => props.color};
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.color};
  width: 100px;
`;

let InputBox = styled.input`
  display: flex;
  alignitems: center;
  marginbottom: 0.5rem;
  width: 3rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font: inherit;
  padding-left: 0.5rem;
`;

function Detail(props) {
  const cartCtx = useContext(CartContext);

  let { id } = useParams();
  let shoesList = props.shoes;
  const shoes = shoesList.filter((shoes) => shoes.id == id)[0];
  return (
    <div className='container'>
      <DiscountBox />
      <div className='row'>
        <div className='col-md-6'>
          <img
            style={{ width: '100%' }}
            src={`${process.env.PUBLIC_URL}/assets/shoes${id}.jpeg`}
            alt=''
          />
        </div>
        <div className='col-md-6 mt-4s'>
          <div>
            <h4 className='pt-5'>{shoes.title}</h4>
            <p>{shoes.content}</p>
            <p>{shoes.price}원</p>
            <InputBox type='number' min='1' defaultValue='1' />
          </div>
          <div>
            <StyledBtn bg='white' color='blue'>
              장바구니
            </StyledBtn>
            <StyledBtn bg='blue' color='white'>
              바로 주문
            </StyledBtn>
          </div>
        </div>
      </div>
      <TabMenu />
    </div>
  );
}

export default Detail;
