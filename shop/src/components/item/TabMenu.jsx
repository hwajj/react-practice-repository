import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import TabComponent from './TabComponent';
const TabMenu = (props) => {
  let [tabNum, setTabNum] = useState(0);
  return (
    <>
      <Nav variant='tabs' defaultActiveKey='link0'>
        <Nav.Item>
          <Nav.Link onClick={() => setTabNum(0)} eventKey='link0'>
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTabNum(1)} eventKey='link1'>
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTabNum(2)} eventKey='link2'>
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabComponent num={tabNum} />
    </>
  );
};

export default TabMenu;
