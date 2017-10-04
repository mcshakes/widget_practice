var React = require("react");
var ReactDOM = require("react-dom");

import FEATURES from "../source/camp_features.js"
import FeatureList from "./feature_list.js"

class Features extends React.Component {

  render() {
    const divStyle = {
      padding: "50px"
    };

    const headerStyle = {
      textAlign: "center",
      fontFamily:'Space Mono'
    };

    const camp_features = FEATURES
    return (
      <div className="inner-div">
        <h2 style={headerStyle}>Campsite Features and Amenities</h2>

        <FeatureList features={camp_features} />
      </div>
    )
  }
}

export default Features;
