import React, { Component } from 'react';
import HomeBanner from '../components/homeBanner';
import BreadList from '../components/breadList';

class Page extends Component {
  render() {

    return (
      <div className="page">
        <HomeBanner />
        <BreadList />
      </div>
    )
  }
}

export default Page;