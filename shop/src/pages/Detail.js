import React from 'react';

function Detail(props) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <img src={`${process.env.PUBLIC_URL}/assets/shoes1.jpeg`} alt='' />
        </div>
        <div className='col-md-6 mt-4'>
          <h4 className='pt5'></h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className='btn btn-danger'>주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
