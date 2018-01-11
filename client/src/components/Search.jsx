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
    this.props.search(this.state.value);
    this.setState({value: ''});
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleKeyUp}>
        <label>
          <input type="text" value={this.state.value} placeholder="Anywhere" onChange={this.handleChange} />
        </label>
        <input type="submit" />
      </form>
    );
  }
}


