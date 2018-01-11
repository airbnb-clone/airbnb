import React from 'react';
import ReactDOM from 'react-dom';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleClick() {
    event.preventDefault();
    console.log('ive been searched')
    this.props.search(this.state.value);
    this.setState({value: ''});
  }

  render() {
    return (
      <form>
        <label>
          <input type="text" placeholder="Anywhere" onChange={this.handleChange} />
        </label>
        <input type="button" value="Submit" onClick={this.handleClick}/>
      </form>
    );
  }
}


