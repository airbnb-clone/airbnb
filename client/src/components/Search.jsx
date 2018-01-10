import React from 'react';
import ReactDOM from 'react-dom';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleKeyUp(event) {
    if (event.keyCode === 13) {
      this.props.search(this.state.value);
      this.setState({value: ''});
    }
  }

  render() {
    return (
      <form onKeyUp={this.handleKeyUp}>
        <label>
          <input type="submit" 
                 value={this.state.value} 
                 onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}


