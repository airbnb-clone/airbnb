import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({value: e.target.value});
  }

  onSubmit() {
    
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Anywhere" onChange={(e) => this.onChange(e)} />
      </div>
    );
  }
}