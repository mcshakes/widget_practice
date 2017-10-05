var React = require("react");
var ReactDOM = require("react-dom");

class ChildNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = { childVisible: false }
  }

  handleCollapse() {
    console.log("Open/Close: " + this.props.children.title);
    this.setState({childVisible: !this.state.childVisible});
    return false;
  }

  handleFilter() {
    console.log("Filter ID:" + this.props.children)
  }

  render() {
    let childnodes;

    if(this.props.children) {
      childnodes = this.props.children.map((childnode) => {
        return (
          <ChildNode node={childnode} children={childnode.subfeatures} />
        );
      })
    }
    // console.log(this.props)
    return (
      <li>
        <span>{this.props.node.title}</span>
        { childnodes ?
          <ul>{childnodes}</ul>
        : null }
      </li>
    )
  }
}

export default ChildNode;
