import { Fragment} from "react";
import "./App.css";
import React from "react";

function App() {
  return (
    <>
      <h1>Lorem, ipsum.</h1>
      <p>Lorem ipsum dolor sit amet consectetur.</p>

      <Fragment>
        <h2>Lorem, ipsum.</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
      </Fragment>

      <React.Fragment>
        <h2>Lorem, ipsum.</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
          ipsum!
        </p>
      </React.Fragment>
    </>
  );
}

export default App;
