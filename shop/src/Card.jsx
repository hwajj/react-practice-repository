import React from 'react';
import './App.css';

function Card(props) {
  const { id, title, content, src } = props.item;
  return (
    <div className='col-md-4' key={id}>
      <img
        src={`${process.env.PUBLIC_URL}/assets/${src}`}
        width='80%'
        alt={content}
      />
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
}

export default Card;
