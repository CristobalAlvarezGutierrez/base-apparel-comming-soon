import { useState } from 'react';
import buttonIcon from '../../Assest/img/icon-arrow.svg'
import './inputForm.css';

const InputForm = ({ setState, currentState, onSubmitFunc, customClassName }) => {
	return (
		<div className={`${customClassName} `}>
			<input
				type="text"
				placeholder='Email Address'
				value={currentState}
				onChange={(e) => setState(e.target.value)}
			/>
			<button type='button' onClick={(e) => onSubmitFunc(e)}>
				<img src={buttonIcon} alt="button icon" />
			</button>
		</div>
	)
}

export default InputForm