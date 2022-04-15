import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import { Provider } from "react-redux";

import Loading from "./components/Loading";
import Home from "./components/Home";

import { store } from "./redux/storeConfig/store";
import TradePage from "components/Trade";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/trade" element={<TradePage />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
