import React from 'react';
import { ColorConsumer } from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'blue', 'indigo', 'violet'];

const SelectColors = (props) => {
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <ColorConsumer>
        {({ state, actions }) => {
          return (
            <div style={{ display: 'flex' }}>
              {colors.map((color) => (
                <div
                  key={color}
                  style={{
                    background: color,
                    width: '24px',
                    height: '24px',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    actions.setColor(color);
                  }}
                  onContextMenu={(e) => {
                    e.preventDefault();
                    actions.setSubcolor(color);
                  }}
                />
              ))}
            </div>
          );
        }}
      </ColorConsumer>
      <hr />
    </div>
  );
};

export default SelectColors;
