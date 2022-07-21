import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';

let StyledBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => props.color};
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.color};
  width: 100px;
`;

let DiscountBox = styled.div`
  margin: 20px;
  color: white;
  font-size: 30px;
  box-shadow: 2px 2px 2px black;
  text-align: center;
  padding-top: 23px;
  background: lightsteelblue;
  width: 30%;
  height: 100px;
`;
function Detail(props) {
  let [hide, setHide] = useState(false);
  let [count, setCount] = useState(2);
  let [tabNum, setTabNum] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setHide(true);
    }, 2000);
  });

  setTimeout(() => {
    setCount(1);
  }, 1000);

  let { id } = useParams();
  let shoesList = props.shoes;
  const shoes = shoesList.filter((shoes) => shoes.id == id)[0];
  return (
    <div className='container'>
      {hide == false ? (
        <DiscountBox className='discountBox block'>
          {count} 초 이내 구입 시 할인
        </DiscountBox>
      ) : null}
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

          <StyledBtn
            bg='white'
            color='blue'
            onClick={() => {
              console.log('재렌더링');
              setCount(count + 1);
            }}
          >
            장바구니
          </StyledBtn>
          <StyledBtn bg='blue' color='white'>
            바로 주문
          </StyledBtn>
        </div>
      </div>
      <Nav variant='tabs' defaultActiveKey='link0'>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTabNum(0);
            }}
            eventKey='link0'
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTabNum(1);
            }}
            eventKey='link1'
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTabNum(2);
            }}
            eventKey='link2'
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabComponent num={tabNum} />
    </div>
  );
}

export default Detail;

function TabComponent({ num }) {
  let [classNm, setClassNm] = useState('');
  // if (num === 0) return <div>내용0</div>;
  // if (num === 1) return <div>내용1</div>;
  // if (num === 2) return <div>내용2</div>;
  useEffect(() => {
    let a = setTimeout(() => {
      setClassNm('end');
    }, 10);
    return () => {
      clearTimeout(a);
      setClassNm('');
    };
  }, [num]);

  return (
    <>
      <div className={`start ${classNm}`}>
        {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][num]};
      </div>
    </>
  );
}
