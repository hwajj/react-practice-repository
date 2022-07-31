import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

let StyledBox = styled.div`
  margin: 20px;
  color: white;
  font-size: 30px;
  box-shadow: 2px 2px 2px black;
  text-align: center;
  padding-top: 23px;
  background: lightsteelblue;
  width: 30%;
  height: 100px;
  position: absolute;
  right: 16rem;
  top: 20rem;
`;

const DiscountBox = (props) => {
  let [hide, setHide] = useState(false);
  let [count, setCount] = useState(3);
  useEffect(() => {
    console.log(count);

    setTimeout(() => {
      setHide(true);
      clearTimeout(countDown);
    }, 3000);

    let countDown = setInterval(() => {
      setCount((prevState) => {
        let prev = prevState;
        prev--;
        return prev;
      });
    }, 1000);

    return () => {
      clearTimeout(countDown);
    };
  }, []);

  return hide == false ? (
    <StyledBox className='discountBox block'>
      {count}초 이내 사라집니다
    </StyledBox>
  ) : null;
};

export default DiscountBox;
