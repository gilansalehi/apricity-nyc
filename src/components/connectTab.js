import React, {Component} from 'react';

export default class Connect extends Component {
  render() {
    return (
      <div>
        <h2 style={{fontFamily:'"Cinzel Decorative", cursive', textDecoration: 'underline'}}>
          Social/Media
        </h2>
        <p>Be sure to like and follow!</p>
        <ul style={{color:'white'}}>
          <li><a href='https://www.youtube.com/channel/UC4e2VE5E5f7HSoZ1DrZ68cA'>YouTube</a></li>
          <li><a href='https://www.twitter.com/apricitynyc'>Twitter</a></li>
          <li><a href='https://www.instagram.com/apricitynyc/'>Instagram</a></li>
          <li><a href='https://www.facebook.com/apricitynyc/'>Facebook</a></li>
        </ul>
      </div>
    )
  }
}
