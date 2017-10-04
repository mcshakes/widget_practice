var React = require("react");
var ReactDOM = require("react-dom");

class SubFeatureList extends React.Component {
  render() {
    console.log(this.props.subfeatures)
    return (
      <div>
        {this.props.subfeatures.map((subfeat,index) => {
          if (subfeat.presence === false) {
            return <li key={index}> Sorry, but {subfeat.title} is not available </li>
          }


          return <li key={index}>{subfeat.title } </li>
        })}
      </div>
    )
  }
}

export default SubFeatureList;
