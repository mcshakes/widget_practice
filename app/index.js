var React = require("react");
var ReactDOM = require("react-dom");

import Features from "./features.js"
import "./style.scss"

class App extends React.Component {
  render() {
    const style = {
      padding: "30px",
    };

    return (
      <div style={style}>
        <Features />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
