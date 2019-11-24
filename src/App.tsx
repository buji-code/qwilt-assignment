import React from "react";
import "./App.css";
import ConnectRedux from "./components/ConnectRedux";
import DetailsReducer from "./reducers";
import { createStore } from "redux";
import { Provider, useDispatch } from "react-redux";

const store = createStore(DetailsReducer);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app-div">
        <ConnectRedux dispatch={useDispatch} />
      </div>
    </Provider>
  );
};

export default App;
