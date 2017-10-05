var React = require("react");
var ReactDOM = require("react-dom");

class ChildNode extends React.Component {
  render() {
    let childnodes = null;

    if(this.props.children) {
      childnodes = this.props.children.map((childnode) => {
        return (
          <ChildNode node={childnode} children={childnode.subfeatures} />
        );
      })
    }
    console.log(this.props)
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
