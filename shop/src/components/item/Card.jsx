import React from 'react';
import styles from './Card.module.css';

function Card(props) {
  const { id, title, content } = props.item;

  return (
    <div style={{ height: '300px', margin: '10px' }}>
      <img
        className={styles.image}
        src={`${process.env.PUBLIC_URL}/assets/shoes${id}.jpeg`}
        width='80%'
        alt={content}
      />
      <h4 className={styles.yellow_black}>{title}</h4>
      <p>{content}</p>
    </div>
  );
}

export default Card;
