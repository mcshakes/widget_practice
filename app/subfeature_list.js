// var React = require("react");
// var ReactDOM = require("react-dom");
//
//
// class SubFeatureList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       childVisible: false
//     }
//   }
//
//   onClick() {
//     this.setState({childVisible: !this.state.childVisible});
//   }
//
//   render() {
//     // console.log(this.props.subfeatures[2].subfeatures)
//     return (
//       <div>
//         {this.props.subfeatures.map((subfeat,index) => {
//           if (subfeat.presence === false) {
//             return <li key={index}> {subfeat.title} : Not Available </li>
//           }
//
//           return <li key={index}>{subfeat.title } </li>
//         })}
//       </div>
//     )
//   }
// }
//
// export default SubFeatureList;
