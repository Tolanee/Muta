import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  language: null,
  type: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_TOKEN":
      return { ...state, token: action.payload };
    case "SAVE_LANGUAGE":
      return { ...state, language: action.payload };
    case "SAVE_USER_TYPE":
      return { ...state, type: action.payload };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};

const store = configureStore({ reducer });

export default store;