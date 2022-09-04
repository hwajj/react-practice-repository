import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });

// const mapDispatchToProps = (dispatch) => ({
//   increase: () => dispatch(increase()),

//   decrease: () => {
//     dispatch(decrease());
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

//축약
// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   (dispatch) => ({
//     increase: () => {
//       dispatch(increase());
//     },
//     decrease: () => dispatch(decrease()),
//   })
// )(CounterContainer);

//bindActionCreators사용
// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   (dispatch) => bindActionCreators({ increase, decrease }, dispatch)
// )(CounterContainer);

//mapDispatchToProps생략 -> 내부적으로 bindActionCreators동작
export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  { increase, decrease }
)(CounterContainer);
