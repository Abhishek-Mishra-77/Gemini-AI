import { Fragment } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <Fragment>
      <Sidebar />
      <Main />
    </Fragment>
  );
};

export default App;
