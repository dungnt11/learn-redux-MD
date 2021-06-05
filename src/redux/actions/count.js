import { COUNT } from '../constants/count';

const increaseAction = () => ({ type: COUNT.INCREASE });

const asyncAction = ({ valueTest }) => ({ type: COUNT.ASYNC_TEST, payload: valueTest });

export { increaseAction, asyncAction };
