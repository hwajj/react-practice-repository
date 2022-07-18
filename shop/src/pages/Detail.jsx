import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

let StyledBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => props.color};
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.color};
  width: 100px;
`;
function Detail(props) {
  let { id } = useParams();
  console.log(id);
  let shoesList = props.shoes;
  console.log(shoesList);
  const shoes = shoesList.filter((shoes) => shoes.id == id)[0];
  console.log(shoes);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <img
            src={`${process.env.PUBLIC_URL}/assets/shoes${id}.jpeg`}
            alt=''
          />
        </div>
        <div className='col-md-6 mt-4s'>
          <h4 className='pt-5'>{shoes.title}</h4>
          <p>{shoes.detail}</p>
          <p>{shoes.price}원</p>
          <StyledBtn bg='white' color='blue'>
            장바구니
          </StyledBtn>
          <StyledBtn bg='blue' color='white'>
            바로 주문
          </StyledBtn>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Detail;
