import React from 'react';

const Card=({name, email, id})=>{
	return(
		<div className='bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='users' src={`https://robohash.org/${id}`}/>
			<div className=''>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		);
	}

export default Card;