import React from 'react';
import {Link} from 'react-router-dom';
import 'tachyons';
import './button.css';

const Button = () =>{
    return(
        <div>
        	<Link to="/register">
	            <button type="buton" className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-near-black ma2 border-button">Sign Up</button>
        	</Link>
        	<Link to="/signin">
	            <button type="buton" className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-near-black ma2 border-button">Login</button>
        	</Link>
        </div>
    );
}

export default Button;
