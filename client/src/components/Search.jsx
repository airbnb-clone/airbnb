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

/*

var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" id="search" onKeyPress={(event) => {
      if (event.key === 'Enter') {
        props.onKeyPress($('#search').val()); 
      }
    }}/>
    <button className="btn hidden-sm-down" onClick={() => props.onClick($('#search').val())}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);


*/

