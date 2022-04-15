// ** Redux, Thunk & Root Reducer Imports
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";
import { createStore, applyMiddleware, compose } from "redux";

// ** Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// ** Create store
const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(thunk))
);

export { store };
