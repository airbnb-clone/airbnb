import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


export default class BookingWindow extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			price: this.props.pice,
			rating: Array(parseInt(this.props.rating)).fill("*"),
			startDate: undefined,
			endDate: undefined,
			maxGuests: Array(parseInt(this.props.maxGuests)).fill('1')
		}
		this.onChange = this.onChange.bind(this);
	}

	onChange(date) {
		this.setState({
			startDate: date
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
						var startDate = $('#startDate').val();
						var endDate = $('#endDate').val();
						console.log(startDate, endDate) // this will query the DB with the start + end dates and listing + user IDs
					}}> Book it! </button>
				</div>
			</div>
		)
	}
}
