import React, { useRef } from "react";
// import './scss/main.min.css';
import { TimelineMax, Power3 } from "gsap";
import Portfolio from "./layout/Portfolio";

function App() {
  let testItem = useRef(null);

  return (
    <Portfolio/>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" ref={el => { testItem: el }} />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
