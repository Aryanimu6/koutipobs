import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import HomePage from './component/Home';
import AboutPage from './component/AboutPage';
import Students from './component/Students';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home'
    };
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { currentPage } = this.state;
    return (
      <div className='app'>
        <Navbar handlePageChange={this.handlePageChange} />
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'student' && <Students />}
      </div>
    );
  }
}

export default App;


