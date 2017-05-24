import React, {Component} from 'react';

export default class News extends Component {
  render() {
    return (
      <div>
        <h2 style={{fontFamily:'"Cinzel Decorative", cursive', textDecoration: 'underline'}}>
          News
        </h2>

        <div style={{border:'1px solid #ccc', padding: '10px 20px', margin: '10px'}}>
          <p style={{color:'lightgray', textAlign:'right'}}>Thursday, May 18, 2017</p>
          <p>Hey Friends!</p>
          <p>
            Apricity has a show coming up at 11pm this Sunday, May 21st,
            at <a href='http://silvana-nyc.com/index.php'>Silvana</a> Bar & Cafe.
            We hope to see you there!
          </p>
        </div>

        <div style={{border:'1px solid #ccc', padding: '10px 20px', margin: '10px'}}>
          <p style={{color:'lightgray', textAlign:'right'}}>Thursday, May 18, 2017</p>
          <p>Hey Friends!</p>
          <p>
            Thanks so much for coming out and supporting us at the show last Saturday!
            If you missed it, you can checkout the full show on <a href="https://www.youtube.com/watch?v=G-Ygr39tE9o">YouTube</a>.
          </p>
        </div>

        <div style={{border:'1px solid #ccc', padding: '10px 20px', margin: '10px'}}>
          <p style={{color:'lightgray', textAlign:'right'}}>Saturday, April 29, 2017</p>
          <p>Hey Friends!</p>
          <p>
            Apricity is performing at Smash Studios at 9pm on Saturday, May 13th.
          </p>
          <p>
            Pick up tickets on <a href='https://www.eventbrite.com/e/a-night-with-apricity-music-drinks-and-mingling-tickets-34154659506'>EventBrite</a>!
          </p>
        </div>
      </div>
    );
  }
}
