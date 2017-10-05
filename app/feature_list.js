var React = require("react");
var ReactDOM = require("react-dom");
import SubFeatureList from "./subfeature_list.js"
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

    let nodes = allFeatures.map((feature) => {
      return (
        <ChildNode node={feature} children={feature.subfeatures} />
      );
    });

    return (
      <div className="row" >
        <div className="all-features" style={divStyle}>
          <ul style={listStyle}>
            {nodes}
          </ul>
        </div>
      </div>
    )
  }
}



export default FeatureList;
