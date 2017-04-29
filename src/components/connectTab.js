import React, {Component} from 'react';

export default class Connect extends Component {
  render() {
    return (
      <div>
        <p>Be sure to like and follow!</p>
        <ul>
          <li><a href='https://www.youtube.com/channel/UC4e2VE5E5f7HSoZ1DrZ68cA'>
            <div className='YouTubeLogo logo'></div>
            <div>Youtube</div>
          </a></li>
          <li><a href='https://www.twitter.com/apricitynewyork'>Twitter</a></li>
          <li><a href='https://www.instagram.com/apricity_music/'>Instagram</a></li>
          <li><a href='https://www.facebook.com/ApricityMusic/'>Facebook</a></li>
        </ul>
      </div>
    )
  }
}
