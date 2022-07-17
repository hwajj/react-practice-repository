import React from 'react';
import './App.css';

function Card(props) {
  const { id, title, content } = props.item;
  console.log(id);
  return (
    <div className='col-md-4'>
      <img
        src={`${process.env.PUBLIC_URL}/assets/shoes${id}.jpeg`}
        width='80%'
        alt={content}
      />
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
}

export default Card;
