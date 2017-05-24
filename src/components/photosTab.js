import React, {Component} from 'react';
import InstagramEmbed from 'react-instagram-embed';

export default class Photos extends Component {

  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      urls: [
        "https://www.instagram.com/p/BUbjBpfjSiz/?taken-by=apricity_music",
        "https://www.instagram.com/p/BUExwHWj0du/?taken-by=apricity_music",
        "https://www.instagram.com/p/BUFDfzRjVDd/?taken-by=apricity_music",
        "https://www.instagram.com/p/BThbt6jDCgA/?taken-by=apricity_music",
        "https://www.instagram.com/p/BSEjUrzD1Cy/?taken-by=apricity_music",
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
    const url = urls[index % urls.length];
    return (
      <div>
        <div className='scrapbook'>
          <span className='photo-frame'>
            <span className='photo-nav previous-photo hover-hands' onClick={ this.decrement }>
              <div className='photo-nav-arrow'>⇐</div>
            </span>
            <span className='photo-nav next-photo hover-hands' onClick={ this.increment }>
              <div className='photo-nav-arrow'>⇒</div>
            </span>
            <InstagramEmbed url={ url } />
          </span>
        </div>
      </div>
    );
  }
}
