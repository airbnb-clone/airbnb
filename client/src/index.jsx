import React from 'react';
import ReactDOM from 'react-dom';

 export default class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
      <p> React is workingsdfs</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));