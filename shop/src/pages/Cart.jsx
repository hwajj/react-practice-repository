import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { changeName, increaseAge } from './../store/userSlice';
import { addCount } from './../store.js';

function Cart() {
  let state = useSelector((state) => {
    //return state.user;
    return state;
  });

  let dispatch = useDispatch();
  console.log(state);

  return (
    <div>
      <h6> {state.userInfo.name}의 장바구니 </h6>
      <h6> {state.userInfo.age}세 </h6>
      <button
        onClick={() => {
          dispatch(increaseAge(10));
        }}
      >
        나이변경
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((e, i) => (
            <tr key={i}>
              <td>{state.cart[i].id}</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(addCount(state.cart[i].id));
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
