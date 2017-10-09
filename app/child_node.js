var React = require("react");
var ReactDOM = require("react-dom");

class ChildNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = { childVisible: false }
  };

  handleClick() {
    this.props.titleClick(this.props.node)
  }
  // so you can click on this node and open up the children
  render() {
    console.log(this.props.node)
    let childnodes = null;

    if (this.props.children && this.props.children.length > 0) {
      this.props.children
    }

    // NOTE: Bottom returns the children
    // childnodes = this.props.children.map((childnode) => {
    //   return (
    //     <ChildNode node={childnode} children={childnode.subfeatures} />
    //   );
    // })
    // if (this.state.childVisible) {
    //   childnodes = (<ChildNode node={childnode} children={childnode.subfeatures} />)
    // }
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
