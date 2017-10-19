var React = require("react");
var ReactDOM = require("react-dom");

class ChildNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = { childVisible: false }
    this.handleChildClick = this.handleChildClick.bind(this);
  };

  handleChildClick() {
    this.setState({childVisible: true})
  }

  childNodes() {
    const components = [];
    this.props.children.map((feature, index) => {
      components.push(
        <ChildNode
        node={feature}
        show={this.state.childVisible}
        children={feature.subfeatures}
        key={`nested-${index}`}
      />
    )
    })
    return components;
  }
  render() {
    const {childVisible} = this.state;

    if (!this.props.show) {
      return null;
    }
    let childNodes = null;

    // if (this.props.children.length > 0) {
      // childNodes = this.props.children.map(getSubfeatureNode, this);
      // console.log("TRUE")
    // }

    // childNodes = this.props.children.map((childnode) => {
    //   return (
    //     <ChildNode node={childnode} children={childnode.subfeatures} onClick={this.handleChildClick.bind(this)}/>
    //   );
    // })

    return (
      <div>
          <span>
            {this.props.node.title}
          </span>
          <button onClick={this.handleChildClick}>Show Child</button>
          <ul>
            { this.childNodes() }
          </ul>
      </div>
    )
  }
}

export default ChildNode;
