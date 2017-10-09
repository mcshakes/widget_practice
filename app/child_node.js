var React = require("react");
var ReactDOM = require("react-dom");

class ChildNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = { childVisible: false }
  }

  render() {
    let childnodes = null;

    if (this.props.children) {
      childnodes = this.props.children.map((childnode) => {
        return (
          <ChildNode node={childnode} children={childnode.subfeatures} />
        );
      })
    }

    if (this.state.childVisible) {
      childnodes = (<ChildNode node={childnode} children={childnode.subfeatures} />)
    }
    return (
      <div>
        <li>
          <span>
            {this.props.node.title}
          </span>
          { childnodes ?
            <ul>{childnodes}</ul>
            : null }
          </li>
      </div>
    )
  }
}

export default ChildNode;
