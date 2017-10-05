var React = require("react");
var ReactDOM = require("react-dom");
import SubFeatureCommentList from "./subfeature_comment_list.js"


class SubFeatureList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childVisible: false
    }
  }

  onClick() {
    this.setState({childVisible: !this.state.childVisible});
  }

  render() {
    // console.log(this.props.subfeatures[2].subfeatures)
    return (
      <div>
        {this.props.subfeatures.map((subfeat,index) => {
          if (subfeat.presence === false) {
            return <li key={index}> {subfeat.title} : Not Available </li>
          }

          // if (subfeat.subfeatures.length > 0) {
          //   console.log(this.props)
          //   return (
          //     <div>
          //       <li key={index}>{subfeature.title}</li><button onClick={this.onClick.bind(this)}></button>
          //       <SubFeatureCommentList subfeature_comments={subfeat.subfeatures}/>
          //     </div>
          //   )
          // }
          return <li key={index}>{subfeat.title } </li>
        })}
      </div>
    )
  }
}

export default SubFeatureList;
