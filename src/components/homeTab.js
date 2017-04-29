import React, {Component} from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>About Apricity</h1><br />
        <ul>
          <li>Gilan Salehi (vocals, guitar)</li>
          <li>Michael Clemente (lead guitar, vocals)</li>
          <li>Kathie Chang (keys, vocals)</li>
          <li>Pablo Ortega (drums)</li>
          <li>Ting Guo (bass, vocals)</li>
        </ul>
        <p>
          We have been a band for nearly 10 minutes, having released 0 criticially acclaimed
          chart-topping albums.  Follow us on Twitter, Instagram, and Facebook.
        </p>
      </div>
    );
  }
}

const imgsrc = './../../public/apricityPhotos/bandPhoto.jpg';
