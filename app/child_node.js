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
    const buttonStyle = {
      fontSize: ".5em",
      lineHeight: "15px",
      padding: "10px 22px 11px 22px",
      boxSizing: "border-box",
      fontWeight: "700",
      border: "solid 3px blue",
      color: "blue",
      background: "transparent",
      borderRadius: "30px",
      transition: "all ease-out .2s",
      cursor: "pointer",
      outline: "none",
      marginRight: "5px"
    };

    const {childVisible} = this.state;

    if (!this.props.show) {
      return null;
    }
    let childNodes = null;


    return (
      <div>
          <span>
            {this.props.node.title}
          </span>
          <button style={buttonStyle} onClick={this.handleChildClick}>Show Child</button>
          <ul>
            { this.childNodes() }
          </ul>
      </div>
    )
  }
}

export default ChildNode;
