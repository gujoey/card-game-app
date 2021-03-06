import React from 'react';
export default class ContactComponent extends React.Component{
	
	constructor(props){
		super(props);
		this.handleContactTerm = this.handleContactTerm.bind(this);
	}
	
	handleContactTerm(){
		const app = this;
		
		let contactInput = {
			fName: app.refs.fName.value,
			lName: app.refs.lName.value,
			email: app.refs.email.value,
			phone: app.refs.phone.value,
			message: app.refs.message.value
		}
		
		
		app.props.validateContactTerm(contactInput);
	}
	
	render(){
		const app = this;
		
		return(
			<div className="[ contactComponent ]">
				<div className="[ contactComponent__container ]">
					<h1 className="[ contactComponent__header ]">Contact us</h1>
					<div className="[ contact ]">
						<form className="[ contact__form ]" ref="loginForm">
							<label className="contact__label" htmlFor="fName">First name <span className="[ contact__input--required ]">*</span></label><br/>
							<input className="[ contact__input ]" type="text" name="fName" ref="fName" placeholder="First name"/><br />
							<span className="[ contact__error ]">{this.props.fNameErr}</span><br />

							<label className="[ contact__label ]" htmlFor="lName">Last name <span className="[ contact__input--required ]">*</span></label><br/>
							<input className="[ contact__input ]" type="text" name="lName" ref="lName" placeholder="Last name"/><br />
							<span className="[ contact__error ]">{this.props.lNameErr}</span><br />

							<label className="[ contact__label ]" htmlFor="email">E-mail <span className="[ contact__input--required ]">*</span></label><br/>
							<input className="[ contact__input ]" type="email" name="email" ref="email" placeholder="E-mail"/><br />
							<span className="[ contact__error ]">{this.props.emailErr}</span><br />

							<label className="[ contact__label ]" htmlFor="phone">Phone number <span className="[ contact__input--required ]">*</span></label><br/>
							<input className="[ contact__input ]" type="tel" name="phone" ref="phone" placeholder="Phone number"/><br />
							<span className="[ contact__error ]">{this.props.phoneErr}</span><br />

							<label className="[ contact__label ]" htmlFor="message">Message</label><br/>
							<textarea className="[ contact__input contact__input--message ]" name = "message" placeholder="Message" ref="message"></textarea><br/>

							<span className="[ contact__error ]">{this.props.messageErr}</span><br />
							
							<p className="[ contact__paragraph ]"><span className="[ contact__input--required ]">*</span> <span>required fields</span></p>
							
							<button className="[ contact__button ]" type="button" onClick={app.handleContactTerm}>Send</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}