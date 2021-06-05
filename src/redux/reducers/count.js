import { COUNT } from '../constants/count';

const initData = { count: 0 };

function counter(state = initData, action) {
  const count = state.count
  switch (action.type) {
    case COUNT.INCREASE:
      return { count: count + 1 }
    case COUNT.ASYNC_TEST: {
      console.log(action.payload);
      return state;
    }
    default:
      return state
  }
}

export { counter };
