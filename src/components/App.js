import React from 'react';
import { connect } from 'react-redux';
import Title from './Title';
import Board1 from './Board1';
import './App.css';
import MediaQuery from 'react-responsive';

const App = ({ cardsCount,state,total,discount,typeDiscount }) => (
    <div>
    {state.map((quan) => 
    	{
	  	total=total+(quan.price * quan.quantity),
	  	discount=discount+((quan.discount/100)*(quan.price * quan.quantity))
	  	if(quan.type == "fiction") typeDiscount=typeDiscount+((15/100)*(quan.price * quan.quantity))
	  	}
	 )}
        <Title />
        <MediaQuery query='(min-device-width: 600px)'>
        	<div className={`tableFlex`}>
	        <table className={`tableWidth`}>
		        <thead>
		  			<tr>
					    <th>Items({cardsCount})</th>
					    <th>Qty</th> 
					    <th>Price</th>
		  			</tr>
		  		</thead>
		  		{(state.length) ? <Board1 /> : <tr><a href='http://localhost:8080'>Go back to initial state </a></tr>}
	  		</table>
	  		<table>
	  			<thead><tr><th>Total</th></tr></thead>
	  			<tbody>
	  				<tr>
	  					<td>Items({cardsCount})</td>
	  					<td>:</td>
	  					<td>Rs . {total}</td>
	  				</tr>
	  				<tr>
	  					<td>Discount</td>
	  					<td>:</td>
	  					<td>Rs . {discount}</td>
	  				</tr>
	  				<tr>
	  					<td>Type discount</td>
	  					<td>:</td>
	  					<td>Rs . {typeDiscount}</td>
	  				</tr>
	  			</tbody>
	  			<tfoot>
	  					<td>Order Total</td>
	  					<td>:</td>
	  					<td>Rs . {total-discount-typeDiscount}</td>
	  			</tfoot>
	  		</table>
	  		</div>
	  	</MediaQuery>
	  	<MediaQuery query='(max-device-width: 599px)'>
        	<div className={`tableFlex1`}>
	        <table className={`tableWidth1`}>
		        <thead>
		  			<tr>
					    <th>Items({cardsCount})</th>
					    <th>Qty</th> 
					    <th>Price</th>
		  			</tr>
		  		</thead>
		  		{(state.length) ? <Board1 /> : <tr><a href='http://localhost:8080'>Go back to initial state </a></tr>}
	  		</table>
	  		<table className={`tableWidth1`}>
	  			<thead><tr><th>Total</th></tr></thead>
	  			<tbody>
	  				<tr>
	  					<td>Items({cardsCount})</td>
	  					<td>:</td>
	  					<td>Rs . {total}</td>
	  				</tr>
	  				<tr>
	  					<td>Discount</td>
	  					<td>:</td>
	  					<td>Rs . {discount}</td>
	  				</tr>
	  				<tr>
	  					<td>Type discount</td>
	  					<td>:</td>
	  					<td>Rs . {typeDiscount}</td>
	  				</tr>
	  			</tbody>
	  			<tfoot>
	  				<tr>
	  					<td>Order Total</td>
	  					<td>:</td>
	  					<td>Rs . {total-discount-typeDiscount}</td>
	  				</tr>
	  			</tfoot>
	  		</table>
	  		</div>
	  	</MediaQuery>
    </div>
);

const mapStateToProps = (state) => {
    return { 
    	total:0,
    	discount:0,
    	typeDiscount:0,
        cardsCount: state.length,
        state: state
    };
};

export default connect(mapStateToProps)(App);