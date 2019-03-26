import React, {Component} from 'react';

export default class Listen extends Component {
  render() {
    return (
      <div className="embedded-content">
        <h2 style={{fontFamily:'"Cinzel Decorative", cursive', textDecoration: 'underline'}}>
          Music
        </h2>
        <iframe width="100%" height="520" scrolling="no" frameborder="no" src="https://www.reverbnation.com/widget_code/html_widget/artist_5644444?widget_id=55&pwc[included_songs]=1&context_type=page_object&pwc[branded]=1"></iframe>
      </div>
    );
  }
}
