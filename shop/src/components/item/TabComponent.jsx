import React, { useState, useEffect } from 'react';
import TempComponentDetail from './TabComponentDetail';

function TabComponent({ num }) {
  let [classNm, setClassNm] = useState('');

  useEffect(() => {
    let a = setTimeout(() => {
      setClassNm('end');
    }, 10);
    return () => {
      clearTimeout(a);
      setClassNm('');
    };
  }, [num]);

  return (
    <>
      <div className={`start ${classNm}`}>{TempComponentDetail[num]}</div>
    </>
  );
}

export default TabComponent;
