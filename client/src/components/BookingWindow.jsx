
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';


export default class BookingWindow extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			price: this.props.price,
			listingId: this.props.listingId,
			userId: this.props.userId,
			rating: Array(parseInt(this.props.rating)).fill("*"),
			startDate: undefined,
			endDate: undefined,
			maxGuests: Array(parseInt(this.props.maxGuests)).fill('1')
		}
	
		this.checkDates = this.checkDates.bind(this);
	}

	checkDates(dates){
		var app = this;
		axios.post('/bookings-james', {
			data: dates,
			listing: app.state.listingId,
			user: app.state.userId
		}).then(function(response){
			console.log(response);
		}).catch(function(error){
			console.log('failed due to '+ error);
		})
	}

	render(){

		return (
		
			<div>
				<div className="containerBooking">
					<h1> ${this.props.price} / night</h1>
					<h2> Star Rating: {this.state.rating.map(r => r)}</h2>
					<hr/>
					<div className="bookingDatesBox">
					<h2> Check-in: 
						<input type="date" id="startDate"/>
					</h2>
					<h2> Check-out: 
						<input type="date" id="endDate"/>
					</h2>
					<h2> Number of guests:  
						<select>
						{this.state.maxGuests.map((entry, index) =>
							<option> {index + 1} </option>
							)}
						</select>
					</h2>
				</div>

					<button className="dateSelectionSubmit" onClick={()=>{
						var startDate = $('#startDate').val(); // find react way to do this
						var endDate = $('#endDate').val();
						var dates = [];
						var dayStart = parseInt(startDate.split('-')[2]);
						var dayEnd = parseInt(endDate.split('-')[2])
						var month = startDate.split('-')[1]
						for (var i = dayStart; i <= dayEnd; i++){ // remember to handle end < start
							i < 10 ? i = `0${i}` : i = i.toString();
							var formattedDate = `2017-${month}-${i} 00:00:00`
							dates.push(formattedDate)
						}
						this.checkDates(dates)
					}}> Book it! </button>
				</div>
			</div>
		)
	}
}


