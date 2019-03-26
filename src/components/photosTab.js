import React, {Component} from 'react';
import InstagramEmbed from 'react-instagram-embed';

export default class Photos extends Component {

  constructor(props) {
    super(props);

    this.state = {
      index: 1000,
      urls: [
        "BUbjBpfjSiz/",
        "BUExwHWj0du/",
        "BUFDfzRjVDd/",
        "BThbt6jDCgA/",
        "BSEjUrzD1Cy/",
        "BUFY7PLjrMF/",
        "BPtpO4yh00s/",
        "BTbcHwuj8gj/",
        "BPtunuuhbh4/",
        "BPl2FD4BGxl/",
        "BvedM5PnGru/",
        "BuY_U76HJ4m/",
        "BuVTySWHUw-/",
        "BuVSU7_ny57/",
        "BuQHo6CnRMk/",
        "BuUUCDCHgzm/",
        "BuPuzsZn6GJ/",
        "BuPqiOlHV6M/",
      ],
    };

  }

  increment = () => {
    this.setState({ index: this.state.index + 1 })
  }
  decrement = () => {
    this.setState({ index: this.state.index - 1 })
  }

  render() {
    const { urls, index } = this.state;
    const photoHash = urls[index % urls.length];
    const url = 'https://www.instagram.com/p/' + photoHash;
    return (
      <div className="embedded-content">
        <div className="turn-page">
          <span onClick={this.decrement}>⇐ Prev</span>
          <span onClick={this.increment}>Next ⇒</span>
        </div>
        <div className='scrapbook'>
          <span className='photo-frame'>
            <InstagramEmbed url={ url } />
          </span>
        </div>
      </div>
    );
  }
}
