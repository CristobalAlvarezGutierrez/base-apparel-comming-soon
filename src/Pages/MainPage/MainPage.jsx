import { useState } from 'react';
import Header from "../../Components/Header/Header"
import InputForm from '../../Components/InputForm/InputForm';
import imgMobile from '../../Assest/img/hero-mobile.jpg'
import imgDesk from '../../Assest/img/hero-desktop.jpg'
import { emailValidation } from '../../Helpers/validations.js';
import './mainPage.css';

const MainPage = () => {

	const [stateInputText, setStateInputText] = useState("");
	const [stateValidForm, setStateValidForm] = useState({
		state: true,
		msg: ""
	});

	const handleSubmitForm = (e) =>{
		stateInputText !== ""
		?
		setStateValidForm(!!stateInputText.match({
			state : emailValidation,
			msg : "Please provide a valid email."
		}))
		:
		setStateValidForm({
			state : false,
			msg : "The email field is required."
		})
	}

	return (
		<div className='grid'>
			<div className='covered-seccion'>
				<div className="container">
					<Header />
					<div className='mblImg'>
						<img src={imgMobile} alt="base apparel hero" />
					</div>
					<div className="container-info">
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
							customClassName={stateValidForm.state === false ? "input-group invalid-info" : "input-group"}
						/>
						<span className={`invalid-info-msg ${stateValidForm.state === false ? 'd-initial' : 'd-none'}`}>{stateValidForm.msg}</span>
					</div>
				</div>
			</div>
			<div className='desktop-hero-img'>
				<img src={imgDesk} alt="base apparel hero"/>
			</div>
		</div>
	)
}

export default MainPage