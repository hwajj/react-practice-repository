import React from 'react';
import { useParams } from 'react-router-dom';

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
        <div className='col-md-6 mt-4'>
          <h4 className='pt5'>{shoes.title}</h4>
          <p>{shoes.detail}</p>
          <p>{shoes.price}원</p>
          <button className='btn btn-danger'>주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
