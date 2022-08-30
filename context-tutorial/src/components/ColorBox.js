import React from 'react';
import ColorContext from '../contexts/color';

const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      {
        //Render Props - 컴포넌트의 children이 있어야 할 자리에 함수 전달
        (value) => (
          <div
            style={{
              width: '64px',
              height: '64px',
              background: value.color,
            }}
          />
        )
      }
    </ColorContext.Consumer>
  );
};

export default ColorBox;
