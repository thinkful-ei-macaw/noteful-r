import React from 'react';
import './app.css';
// import store from './components/store';


class Notes extends React.Component {
  state = {
    store: []
  };


  render() {

    return (
      <div>
        <ul>
          <li><h2>Note </h2></li>
          <p>Date modified </p>
        </ul>
        <button type="button">Delete</button>
      </div>
    )

  }
}

export default Notes;