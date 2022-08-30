import React, { useContext } from 'react';
//import { ColorConsumer } from '../contexts/color';
import ColorContext from '../contexts/color';

const ColorBox = () => {
  const value = useContext(ColorContext);

  return (
    <>
      {/*  <ColorConsumer>
      {(value) => ( <>*/}

      <div
        style={{
          width: '64px',
          height: '64px',
          background: value.state.color,
        }}
      />
      <div
        style={{
          width: '32px',
          height: '32px',
          background: value.state.subcolor,
        }}
      />

      {/*  </>  )}
    </ColorConsumer> */}
    </>
  );
};

export default ColorBox;
