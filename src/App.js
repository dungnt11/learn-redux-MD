import { connect } from 'react-redux';
import { increaseAction, asyncAction } from './redux/actions/count';
import { fetchCounterService } from './redux/services/counter';

function App({ counter, onIncreaseClick, onAsyncTest }) {
  const { count } = counter;
  return (
    <div className="App">
      <span>{count}</span>
      <button onClick={onIncreaseClick}>Increase</button>
      <button onClick={onAsyncTest}>Async action</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction()),
    onAsyncTest: async () => {
      try {
        await fetchCounterService();
        dispatch(asyncAction({ valueTest: '123' }));
      } catch (error) {
        console.log(error);
      }
    },
  }
}

const WithApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default WithApp;
