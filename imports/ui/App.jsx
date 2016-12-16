import React, { Component } from 'react';

import Route from './Route.jsx';

export default class App extends Component {
  getRoutes() {
    return [
      { _id: 1, name: 'Purple Aces' },
      { _id: 2, name: 'Blue Light Special' },
      { _id: 3, name: 'West Face Variation Direct'},
    ];
  }

  renderRoutes() {
    return this.getRoutes().map((route) => (
      <Route key={route._id} route={route} />
    ));
  }

  render() {
    return (
      <div className='container'>
        <header>
          <h1>Routes</h1>
        </header>

        <ul>
          {this.renderRoutes()}
        </ul>
      </div>
    );
  }
}
