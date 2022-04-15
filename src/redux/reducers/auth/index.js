import {
  FILTER,
  GET_DATA,
  ROW_EXPAND,
  ROW_EXPAND_DATA,
} from "redux/actions/types";

const initialState = {
  activeRow: null,
  selectedCoin: [],
  filter: {},
};

const authReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case GET_DATA:
      return {
        ...state,
        coins: data.filter((item) =>
          item.s.includes(state.filter.coinName.toLocaleUpperCase())
        ),
      };
    case ROW_EXPAND:
      return {
        ...state,
        activeRow: data,
      };
    case ROW_EXPAND_DATA:
      return {
        ...state,
        selectedCoin: data,
      };
    case FILTER:
      return {
        ...state,
        filter: data,
      };

    default:
      return state;
  }
};

export default authReducer;
