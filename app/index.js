var React = require("react");
var ReactDOM = require("react-dom");

import Features from "./features.js"
import "./style.scss"

class App extends React.Component {
  render() {
    return (
      <div>
        <Features />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
