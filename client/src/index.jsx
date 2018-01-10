import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx'

 export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: [],
      bookings: []
    }

    this.search = this.search.bind(this);
  }

  search() {

  }

  render() {
    return (
      <div>
        <Search search={this.search} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));