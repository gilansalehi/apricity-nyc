import React, { Component } from 'react';
import logo from './logo.svg';
import Tab from './components/tab';
import Home from './components/homeTab';
import News from './components/newsTab';
import Photos from './components/photosTab';
import Listen from './components/listenTab';
import Connect from './components/connectTab';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 'home',
    };
  }

  setTab = tab => {
    this.setState({ active: tab });
  }

  content = tab => {
    switch (tab.toLowerCase()) {
      case 'home': return (<Home />);
      case 'news': return (<News />);
      case 'photos': return (<Photos />);
      case 'listen': return (<Listen />);
      case 'connect': return (<Connect />)
    };
  }

  render() {
    const { active } = this.state;

    const tabs = ['Home', 'News', 'Photos', 'Listen', 'Connect'].map((t, i) => {
      return (
        <li key={i} className='nav-li hover-hands' onClick={e => this.setTab(t)}>
          { t }
        </li>
      )
    });

    const activeContent = <Tab>{ this.content(active) }</Tab>;

    return (
      <div className="App">
        <div className="header">.</div>
        <div className="nav-bar">
          <ul className="nav-ul">
            { tabs }
          </ul>
        </div>
        <div className="content">
          { activeContent }
        </div>
      </div>
    );
  }
}

export default App;

const styles = {
  li: {
    display: 'inline-block',
  },
};
