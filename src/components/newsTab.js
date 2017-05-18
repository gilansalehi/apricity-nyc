import React, {Component} from 'react';

export default class News extends Component {
  render() {
    return (
      <div>
        <h2 style={{fontFamily:'"Cinzel Decorative", cursive', textDecoration: 'underline'}}>
          News
        </h2>
        <div style={{border:'1px solid #ccc', padding: '10px 20px'}}>
          <p style={{color:'lightgray', textAlign:'right'}}>Saturday, April 29, 2017</p>
          <p>Hey Friends!</p>
          <p>
            Apricity is performing at Smash Studios at 9pm on Saturday, May 13th.
          </p
          ><p>Pick up tickets on &nbsp;
            <a href='https://www.eventbrite.com/e/a-night-with-apricity-music-drinks-and-mingling-tickets-34154659506'>EventBrite</a>!
          </p>
        </div>
      </div>
    );
  }
}
