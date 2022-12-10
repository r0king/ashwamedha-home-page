import React, { Component } from 'react'

import { useParams } from "react-router-dom";
function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

export class Install extends Component {
  render() {
    return (
      <div className='bg-netral'>Install {this.props.params.name}</div>
    )
  }
}

export default withParams(Install);
