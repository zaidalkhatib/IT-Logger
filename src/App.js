import React, {useEffect} from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/SearchBar";
import store from "./store";
import {Provider} from "react-redux";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/AddBtn";
import AddLogsModel from "./components/logs/AddLogsModel";
function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <Provider store={store}>
      <div>
        <SearchBar />
        <div className="container">
          <Logs />
          <AddLogsModel />
          <AddBtn />
        </div>
      </div>
    </Provider>
  );
}

export default App;
