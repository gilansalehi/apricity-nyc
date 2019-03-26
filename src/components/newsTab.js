import React, {Component} from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export default class News extends Component {
  render() {
    return (
      <div className="embedded-content">
        <h2 style={{fontFamily:'"Cinzel Decorative", cursive', textDecoration: 'underline'}}>
          News
        </h2>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="apricitynyc"
          options={{height: 400, maxWidth: '100%'}}
        />
      </div>
    );
  }
}
