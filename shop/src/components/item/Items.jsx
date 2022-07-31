import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';

import Card from './Card';

function Items(props) {
  let { addShoes, shoes } = props;
  let [titleArrange, setTitleArrange] = useState(false);

  return (
    <>
      <div className='main-bg position-relative'>
        <Button
          className='position-absolute bottom-0 end-0 my-2 mx-5'
          onClick={() => {
            titleArrange == true
              ? setTitleArrange(false)
              : setTitleArrange(true);
          }}
          style={{ backgroundColor: titleArrange ? 'grey' : null }}
        >
          가나다 정렬
        </Button>
      </div>
      <div className='container'>
        <div className='row'>
          {titleArrange
            ? shoes
                .sort((a, b) =>
                  a.title > b.title ? 1 : b.title > a.title ? -1 : 0
                )
                .map((e, i) => {
                  return (
                    <>
                      <Link to={`/detail/${e.id}`} className='col-md-4'>
                        <Card item={e} key={i} />
                      </Link>
                    </>
                  );
                })
            : shoes
                .sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0))
                .map((e, i) => {
                  return (
                    <>
                      <Link to={`/detail/${e.id}`} className='col-md-4'>
                        <Card item={e} key={i} />
                      </Link>
                    </>
                  );
                })}
        </div>
        <Button className='my-2 mx-4' onClick={addShoes}>
          더보기
        </Button>
      </div>
    </>
  );
}

export default Items;
