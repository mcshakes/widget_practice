var React = require("react");
var ReactDOM = require("react-dom");

import ChildNode from "./child_node.js"
class FeatureList extends React.Component {

  render() {
    const allFeatures = this.props.features

    const divStyle = {
      background: "yellow",
      margin: '0.5em',
    };

    const listStyle = {
      fontSize: "20px",
      fontWeight: "200",
      fontFamily:'Space Mono',
      fontStyle: "italic"
    };

    let featureNodes = allFeatures.map((feature, index) => {
      return (
        <div>
          <li>
            <ChildNode node={feature}

              children={feature.subfeatures}

              key={index}

              titleClick={this.props.titleClick}
            />
          </li>
        </div>
      );
    });

    return (
      <div className="row" >
        <div className="all-features" style={divStyle}>
          <ul style={listStyle}>
            {featureNodes}
          </ul>
        </div>
      </div>
    )
  }
}



export default FeatureList;
