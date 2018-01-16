
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import Modal from 'react-responsive-modal';
import {emojify} from 'react-emojione';
import moment from 'moment';



export default class BookingWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: this.props.price,
      modalOpen: false,
      listingId: this.props.listingId,
      userId: 1, // only one user for demo - hardcoded
      rating: Array(this.props.rating).fill('*'),
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
      if (response.data === 'failure') {
        app.notifyUnavailable();
      }
      if (response.data === 'success') {
        app.notifySuccess();
      }
    }).catch(function(error) {
      console.log('failed due to ' + error);
    });
  }

  getDates() { 
    var startDateParts = this.state.startDate.toString().split('-');
    var endDateParts = this.state.endDate.toString().split('-');

    var [year, dayStart, startMonth] = [startDateParts[0], parseInt(startDateParts[2]), parseInt(startDateParts[1])];
    var [dayEnd, endMonth] = [parseInt(endDateParts[2]), parseInt(endDateParts[1])];
    var month = parseInt(startMonth);

    var dates = [];
    var shortMonths = [4, 6, 9, 11];
    
    
    var i = dayStart;
    var max;
    if (dayStart > dayEnd) {
      shortMonths.includes(startMonth) ? max = 30 : max = 31;
      startMonth === 2 ? max = 28 : max = max;
    } else {
      max = dayEnd;
    }
    
    while (month <= parseInt(endMonth)) {
      while (i <= max) {
        i < 10 ? i = `0${i}` : i = i;
        var formattedDate = `${year}-${month}-${i} 00:00:00`;
        dates.push(formattedDate);
        var totalPrice = dates.length * this.state.price;
        this.setState({totalPrice: totalPrice});
        i++;
      }
      i = 1;
      max = dayEnd;
      month++;
    }
    return dates;
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
      modalOpen: true
    });
  }

  onCloseModal() {
    this.setState({
      modalOpen: false
    });
  }

  isValidDateChoice(endDateUnix) {
    return (this.state.startDate === undefined || endDateUnix < Date.parse(this.state.startDate)) ? false : true;
  }

  notifyOfBadDateSelection() {
    this.state.resultMessage = 'Please select a check-in date that\'s earlier than check-out date.';
    this.setState({
      modalOpen: true
    });
  }

  notifyUnavailable() {
    this.state.resultMessage = 'Sorry, this property is not available at that time.';
    this.setState({
      modalOpen: true
    });
  }

  notifySuccess() {
    this.state.resultMessage = `Your reservation is booked! ${moment(this.state.startDate).format('dddd, MMMM Do YYYY')} - ${moment(this.state.endDate).format('dddd, MMMM Do YYYY')}`; // bring in moment to make these human readable
    this.setState({
      modalOpen: true
    });
  }

  handleClick() {
    if (this.state.startDate && this.state.endDate && this.isValidDateChoice(Date.parse(this.state.endDate))) {
      var dates = this.getDates();
      this.checkDates(dates);
    } else {
      this.notifyOfBadDateSelection();
    }
  }

  render() {
    const {modalOpen} = this.state;
    return (
    
      <div>
        <div className="containerBooking">
          <h1> ${this.props.price} <span style={{'font-size': 'medium', 'font-weight': '200'}}> per night </span></h1>
          <h2> Rating: {this.state.rating.map( r =>emojify(':star:'))}</h2>
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
                  <option key={index}> {index + 1} </option>
                )}
              </select>
            </h2>
          </div>
          <div>
            {this.state.totalPrice ? <h2> Total price: ${this.state.totalPrice}</h2> : null}
          </div>
          <button className="dateSelectionSubmit" onClick={()=>{
            this.handleClick();
          }}> Book it! </button>
        </div>

        <Modal open={modalOpen} onClose={this.onCloseModal} little>
          <p> {this.state.resultMessage} </p>
        </Modal>
      </div>
    );
  }
}
