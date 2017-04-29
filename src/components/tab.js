import React, {Component} from 'react';

export default class Tab extends Component {
  render () {
    return (
      <div className="content-tab">
        { this.props.children }
      </div>
    )
  }
}
