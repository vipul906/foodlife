import React from "react";
import { BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";

import Routes from "./Routes";
import Store from "./Store";

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter basename="foodlife">
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
