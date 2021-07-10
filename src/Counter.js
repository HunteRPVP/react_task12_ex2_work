import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { combineReducers } from "redux";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + payload };
    case DECREMENT:
      return { ...state, count: state.count - payload };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  counter: counterReducer,
});

const incCount = (payload) => ({
  type: "INCREMENT",
  payload,
});

const decCount = (payload) => ({
  type: "DECREMENT",
  payload,
});

const selectCount = (state) => state.counter.count;

export const Counter = () => {
  const count = useSelector(selectCount);

  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(decCount(1))}>-</button>
      &nbsp;{count}&nbsp;
      <button onClick={() => dispatch(incCount(1))}>+</button>
    </>
  );
};
