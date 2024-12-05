import React from "react";
import { Provider } from "react-redux";
import store from "./redux/Store";
import HomeScreen from "./screens/HomeScreen";

const App = () => (
  <Provider store={store}>
    <HomeScreen />
  </Provider>
);

export default App;
