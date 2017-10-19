var React = require("react");
var ReactDOM = require("react-dom");

class ChildNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = { childVisible: false }
  };

  handleChildClick() {
    this.setState({childVisible: true})
  }

  render() {
    // console.log(this.props.children)
    const {childVisible} = this.state;

    if (childVisible) {
      return null;
    }
    let childNodes = null;

    // if (this.props.children.length > 0) {
      // childNodes = this.props.children.map(getSubfeatureNode, this);
      // console.log("TRUE")
    // }

    childNodes = this.props.children.map((childnode) => {
      return (
        <ChildNode node={childnode} children={childnode.subfeatures} onClick={this.handleChildClick.bind(this)}/>
      );
    })

    return (
      <div>
        <li>
          <span>
            {this.props.node.title}
          </span>
          { childNodes ?
            <ul>{childNodes}</ul>
            : null }
          </li>
      </div>
    )
  }
}

export default ChildNode;
