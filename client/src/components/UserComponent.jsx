import React from 'react';
import axios from 'axios';
import moment from 'moment';
import Modal from 'react-responsive-modal'

class UserComponent extends React.Component {
	constructor(props){
		super(props)
    this.state = {
      currentBookings: [[{name: 'Booking 1', description: 'A fake booking', cancellation_policy: 'Early Cancelation results in a 500$ fee', dateRented: ''}]],
      pastBookings: [[{name: 'Old Booking', description: 'An old booking', dateRented: ''}]],
      modalOpen: false,
      currentIndex: 0
    }
	}

  componentDidMount() {
    this.getCurrentBookings()
  }

  cancelHandler(index, boolean){
    var idArray = [];
    this.state.currentBookings[index].forEach(function(each){
      idArray.push(each.id)
    })
    axios.post('/usercomponent-v', {id: idArray}).then(function(data){
      var sortedData = this.sort(data)
      this.setState({
        currentBookings: sortedData[0],
        pastBookings: sortedData[1],
        currentIndex: 0
      })
    }.bind(this))
  }
  getCurrentBookings() {
    axios.get('/usercomponent-v').then(function(data){
      var sortedData = this.sort(data)
      this.setState({
        currentBookings: sortedData[0],
        pastBookings: sortedData[1]
      })
    }.bind(this)
  )}

  sort(data){
    var past = [];
      var current = [];
      data.data.forEach(function(each){
        if(each[each.length - 1] === 1){
           each.pop()
           current.push(each)
        } else {
          each.pop()
          past.push(each)
        }
      })
    return [current, past]
  }

  modalHandler(index){
    console.log(index)
    this.setState({
      modalOpen: !this.state.modalOpen,
      currentIndex: index
    })
  }

	render(){
		return(
            <div>
              <div>
                <h3>Current Bookings</h3>
                <div>
                  {this.state.currentBookings.length > 0 ? this.state.currentBookings.map(function(each, i){
                    var startDate = moment(each[0].dateRented).format('MMM Do YYYY')
                    var endDate = moment(each[each.length - 1].dateRented).format('MMM Do YYYY')
                  	return (
                  		<div key={i}>
                  		  <div>{each[0].name}</div>
                  		  <div>{each[0].description}</div>
                        <div>{startDate} - {endDate}</div>
                        <button onClick={() => this.modalHandler(i)}>Cancel</button>
                  		</div>
                  	  )
                  }.bind(this)) : "No upcoming bookings. To make a reservation got to the home page"}
                </div>
                <h3>Past Bookings</h3>
                <div>
                  {this.state.pastBookings.length > 0 ? this.state.pastBookings.map(function(each, i){
                    var startDate = moment(each[0].dateRented).format('MMM Do YYYY')
                    var endDate = moment(each[each.length - 1].dateRented).format('MMM Do YYYY')
                    return (
                      <div key={i}>
                        <div>{each[0].name}</div>
                        <div>{each[0].description}</div>
                        <div>{startDate} - {endDate}</div>
                      </div>
                      )
                  }) : ''}
                </div>
                <Modal open={this.state.modalOpen} onClose={() => this.modalHandler(0)}>
                  <div>
                    {<div>{ this.state.currentBookings.length > 0 ? this.state.currentBookings[this.state.currentIndex][0].cancellation_policy : ''} - Are you sure?</div>}
                  </div>
                  <button onClick={() => this.cancelHandler(this.state.currentIndex)}>Cancel Yes</button>
                  <button onClick={() => this.modalHandler(0)}>Cancel NO</button>
                </Modal>
              </div>
            </div>
			)
	}
}

export default UserComponent;

