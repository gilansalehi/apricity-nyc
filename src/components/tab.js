import React, {Component} from 'react';

export default class Tab extends Component {
  render () {
    return (
      <div className="content-tab">
        <div className="content-tab-inner">
          { this.props.children }
        </div>
      </div>
    )
  }
}
