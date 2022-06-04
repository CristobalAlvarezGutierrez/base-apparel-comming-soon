import { useState } from 'react';
import Header from "../../Components/Header/Header"
import InputForm from '../../Components/InputForm/InputForm';
import imgMobile from '../../Assest/img/hero-mobile.jpg'
import imgDesk from '../../Assest/img/hero-desktop.jpg'
import { emailValidation } from '../../Helpers/validations.js';
import './mainPage.css';

const MainPage = () => {

	const [stateInputText, setStateInputText] = useState("");
	const [stateValidForm, setStateValidForm] = useState(true);

	const handleSubmitForm = (e) =>{
		setStateValidForm(!!stateInputText.match(emailValidation));
	}

	return (
		<>
			<div className="header-mobile">
				<Header />
			</div>
			<img src={imgMobile} alt="apparel base hero" className="mobile-hero-img" />
			<div className="main-page-info-container">
				<img src={imgDesk} alt="apparel base hero" className="desk-hero-img" />
				<div className="container">
					<div className="header-desktop">
						<Header />
					</div>
					<h1>We're <br/> <span>coming<br/> soon</span></h1>
					<p>
						Hello fellow shoppers! We're currently building our new fashion store.
						Add your email below to stay up-to-date with announcements and our lauch
						deals.
					</p>
					<InputForm
						setState={setStateInputText}
						currentState={stateInputText}
						onSubmitFunc={handleSubmitForm}
						customClassName={stateValidForm === false ? "input-group invalid-info" : "input-group"}
					/>
					<span className={`invalid-info-msg ${stateValidForm === false ? 'd-initial' : 'd-none'}`}>Please provide a valid email.</span>
				</div>
			</div>
		</>
	)
}

export default MainPage