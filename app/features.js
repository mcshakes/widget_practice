var React = require("react");
var ReactDOM = require("react-dom");

import FEATURES from "../source/camp_features.js"
import FeatureList from "./feature_list.js"

class Features extends React.Component {

  render() {
    const camp_features = FEATURES
    console.log(camp_features)
    return (
      <div>
        <h2>Hey! Our Features:</h2>

        <FeatureList features={camp_features} />
      </div>
    )
  }
}

export default Features;
