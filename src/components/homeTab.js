import React, {Component} from 'react';

export default class Home extends Component {
  render() {
    const shuffle = () => .5 - Math.random();
    const list = [
      'Gilan Salehi (vocals, guitar)',
      'Michael Clemente (lead guitar, vocals)',
      'Kathie Chang (keys, vocals)',
      'Pablo Ortega (drums)',
      'Ting Guo (bass, vocals)',
    ].sort(shuffle).map((k, i) => <li key={i}>{ k }</li>);

    const adjective = ['salubrity', 'redolence', 'galimaufry', 'cromulence', 'precociousness'].sort(shuffle)[0];
    const bandAge = Math.floor((Date.now() - 1493407054585)/60000);

    return (
      <div>
        <h2 style={{fontFamily:'"Cinzel Decorative", cursive', textDecoration: 'underline'}}>
          About Apricity
        </h2>
        <p>In order of increasing {adjective}, we are:</p>
        <ul style={{fontWeight:'bold'}}>
          { list }
        </ul>
        <p>
          We have been a band for nearly {bandAge} minutes, having released 0 criticially acclaimed
          chart-topping albums.  Follow us on Twitter, Instagram, and Facebook.
        </p>
      </div>
    );
  }
}

const imgsrc = './../../public/apricityPhotos/bandPhoto.jpg';
