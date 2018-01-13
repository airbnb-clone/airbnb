
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import Modal from 'react-responsive-modal';
import moment from 'moment';


export default class BookingWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: this.props.price,
      modalOpen: false,
      listingId: this.props.listingId,
      userId: 1, // only one user for demo - hardcoded
      rating: Array(this.props.rating || 3).fill('*'),
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
    var shortMonths = ['4', '6', '9', '11'];
    var totalPrice;
    var dates = [];
    var dayStart = parseInt(this.state.startDate.toString().split('-')[2]);
    var dayEnd = parseInt(this.state.endDate.toString().split('-')[2]);
    var startMonth = this.state.startDate.toString().split('-')[1];
    var endMonth = this.state.endDate.toString().split('-')[1];
    var month = parseInt(startMonth);
    
    var i = dayStart;
    var max;

    shortMonths.includes(startMonth) ? max = 30 : max = 31;
    startMonth === 2 ? max = 28 : max = max;

    

    while (month <= parseInt(endMonth)) {
      while (i <= max) {

        var j = i - 0;
        j < 10 ? j = `0${j}` : j = j.toString();
        var formattedDate = `2017-${month}-${j} 00:00:00`;

        dates.push(formattedDate);
        var totalPrice = dates.length * this.state.price;
        this.setState({totalPrice: totalPrice});
        i++;
      }
      i = 1;
      max = parseInt(dayEnd);
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