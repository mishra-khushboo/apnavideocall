import React from 'react';
import "../App.css";

export default function LandingPage() {
	return (
		<div className='landingPageContainer'>
			<nav>
				<div className='navHeader'>
					<h2>Apna Video Call</h2>
				</div>
				<div className='navList'>
					<p>Join as Guest</p>
					<p>Register</p>
					<button>Login</button>
				</div>
			</nav>
		</div>
	)
}
