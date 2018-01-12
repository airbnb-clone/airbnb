
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import Modal from 'react-responsive-modal';


export default class BookingWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: this.props.price,
      open: false,
      listingId: this.props.listingId,
      userId: 1, // only one user for demo - hardcoded
      // rating: Array(parseInt(this.props.rating)).fill("*"), - plan to implement later, need to update schema
      rating: Array(3).fill('*'),
      startDate: undefined,
      endDate: undefined,
      maxGuests: Array(parseInt(this.props.maxGuests)).fill('1'),
      totalPrice: undefined,
      resultMessage: undefined
    };
    this.setStartDate = this.setStartDate.bind(this);
    this.setEndDate = this.setEndDate.bind(this);
    this.checkDates = this.checkDates.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  checkDates(dates) {
    var app = this;
    axios.post('/bookings-james', {
      data: dates,
      listing: app.state.listingId,
      user: app.state.userId
    }).then(function(response) {
      console.log(response);
      if (response.data === 'failure') {
        app.state.resultMessage = 'Sorry, this property is not available at that time.';
        app.setState({
          open: true
        });
      }
      if (response.data === 'success') {
        app.state.resultMessage = `Your reservation is booked! \n ${app.state.startDate} through ${app.state.endDate}`; // bring in moment to make these human readable
        app.setState({
          open: true
        });
      }
    }).catch(function(error) {
      console.log('failed due to ' + error);
    });
  }

  setStartDate(event) {
    this.setState({
      startDate: event.target.value
    });
  }

  setEndDate(event) {
    this.setState({
      endDate: event.target.value
    });
  }
  
  onOpenModal() {
    this.setState({
      open: true
    });
  }

  onCloseModal() {
    this.setState({
      open: false
    });
  }

  render() {
    const {open} = this.state;
    return (
    
      <div>
        <div className="containerBooking">
          <h1> ${this.props.price} / night</h1>
          <h2> Star Rating: {this.state.rating.map(r => r)}</h2>
          <hr/>
          <div className="bookingDatesBox">
            <h2> Check-in: 
              <input type="date" id="startDate" onChange={this.setStartDate}/>
            </h2>
            <h2> Check-out: 
              <input type="date" id="endDate" onChange={this.setEndDate}/>
            </h2>
            <h2> Number of guests:  
              <select>
                {this.state.maxGuests.map((entry, index) =>
                  <option> {index + 1} </option>
                )}
              </select>
            </h2>
          </div>
          <div>
            {this.state.totalPrice ? <h2> Total price: ${this.state.totalPrice}</h2> : null}
          </div>
          <button className="dateSelectionSubmit" onClick={()=>{
            var totalPrice;
            var dates = [];
            var dayStart = parseInt(this.state.startDate.toString().split('-')[2]);
            var dayEnd = parseInt(this.state.endDate.toString().split('-')[2]);
            var month = this.state.startDate.toString().split('-')[1];
  
            for (var i = dayStart; i <= dayEnd; i++) { 
              i < 10 ? i = `0${i}` : i = i.toString();
              var formattedDate = `2017-${month}-${i} 00:00:00`;
              dates.push(formattedDate);
              var totalPrice = ((Math.abs(dayEnd - dayStart)) * this.state.price);
              this.setState({totalPrice: totalPrice});
            }
            this.checkDates(dates);
          }}> Book it! </button>
        </div>
        <Modal open={open} onClose={this.onCloseModal} little>
          <p> {this.state.resultMessage} </p>
        </Modal>
      </div>
    );
  }
}


