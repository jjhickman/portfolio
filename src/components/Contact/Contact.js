import React from 'react';
import axios from "axios";
class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			subject: "",
			email: "",
			message: ""
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.onKeyPress = this.onKeyPress.bind(this);

	}

	validEmail(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	validMessage(message) {
		if (message.split(' ').length < 5) return false;
		return true
	}

	handleSubmit = event => {
		event.preventDefault();
		if (this.state.name.length === 0 || this.state.subject.length === 0 || this.state.email.length === 0 || this.state.message.length === 0) {
			alert("Invalid form! Please fill in all fields with valid data (including email).");
			return;
		}
		if (!this.validEmail(this.state.email)) {
			alert("Invalid email! Please try again with a proper email address.");
			return;
		}

		if (!this.validMessage(this.state.message)) {
			alert("Invalid message! Follow grammar rules or don't message at all. Random form content will be flagged. If you don't want me to contact you, don't contact me.");
			return;
		}

		let data = {
			name: this.state.name,
			email: this.state.email,
			subject: this.state.subject,
			message: this.state.message
		}

		axios.post('https://z7n4960gyl.execute-api.us-east-1.amazonaws.com/contact/email', data, {
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"
			}
		})
			.then((response) => {
				this.setState({ name: "", email: "", subject: "", message: "" });
				alert('Thank you! I have received your message and will get back to you when possible.');
			})
			.catch(function (error) {
				alert(error + "\n\nIf the problem perists, contact me @ jjhickman@protonmail.com");
			});

		this.setState({ name: "", email: "", subject: "", message: "" });
	};

	onKeyPress(event) {
		if (event.which === 13) {
			event.preventDefault();
		}
	}

	handleChange = event => {
		event.preventDefault();
		this.setState({ [event.target.name]: event.target.value });
	}

	render() {
		return (
			<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLongTitle">Contact</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<form>
								<div className="form-group">
									<small id="nameHelp" className="form-text text-muted">*I'll never share your data with anyone else.</small>
									<br />
									<label htmlFor="exampleInputName1">Name</label>
									<input type="text" className="form-control" id="exampleName1" name="name" aria-describedby="nameHelp" value={this.state.name} onChange={this.handleChange} onKeyPress={this.onKeyPress} />
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputEmail1">Email</label>
									<input type="text" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.handleChange} onKeyPress={this.onKeyPress} />
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputSubject1">Subject</label>
									<input type="text" className="form-control" id="exampleSubject1" name="subject" aria-describedby="nameHelp" value={this.state.subject} onChange={this.handleChange} onKeyPress={this.onKeyPress} />
								</div>
								<div className="form-group">
									<label htmlFor="exampleFormControlTextarea1">Message</label>
									<textarea className="form-control" id="exampleFormControlTextarea1" rows="5" name="message" value={this.state.message} onChange={this.handleChange}></textarea>
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button type="submit" className="btn btn-dark" data-dismiss="modal" onClick={this.handleSubmit}>Submit</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}


export default Contact;
