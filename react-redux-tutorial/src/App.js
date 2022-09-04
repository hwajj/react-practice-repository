import './App.css';
import Todos from './components/Todos';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

function App() {
  return (
    <div>
      <CounterContainer number={0} />
      <hr />
      <TodosContainer />
    </div>
  );
}
export default App;
