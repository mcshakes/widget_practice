var React = require("react");
var ReactDOM = require("react-dom");

class ChildNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = { childVisible: false }
  }

  render() {
    let childnodes = null;

    // if (this.props.children) {
    //   childnodes = this.props.children.map((childnode) => {
    //     return (
    //       <ChildNode node={childnode} children={childnode.subfeatures} />
    //     );
    //   })
    // }

    if (this.state.childVisible) {
      childnodes = (<ChildNode node={childnode} children={childnode.subfeatures} />)
    }
https://stackoverflow.com/questions/34867236/react-recursively-render-nested-elements
    return (
      <div>
        <li>
          <span>
            <a rel="{this.props.children.id}" onClick={this.handleCollapse.bind(this)}>{this.props.node.title}</a>
          </span>
          <input value="" type="checkbox" onClick={this.handleFilter.bind(this)} />
          { childnodes ?
            <ul>{childnodes}</ul>
            : null }
          </li>
      </div>
    )
  }
}

export default ChildNode;
