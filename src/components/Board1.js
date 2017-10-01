import React from 'react';
import { connect } from 'react-redux';
import {  removeTask,removeCart,addCart } from '../actions';
import Card from './Card';
import Card2 from './Card2';
import ToastrContainer, {Toast} from 'react-toastr-basic'

const Board1 = ({state,remove,removeCart,addCart,showToast}) => (
	<tbody>
    <ToastrContainer />
   		{state.map((element) => 
			<tr>
	            <td>
	            	<Card 
	                key={element.id}
	                {...element}
	                onRemoveClick={remove}
                    onshowToast={showToast}
            	/>
	            </td>
	            <td>
	            	<Card2 
	            		key={element.id}
	                	{...element}
	                	onRemoveCart={removeCart}
	                	onAddCart={addCart}
	            	/>
	            </td>
	            <td>Rs . {element.price * element.quantity}</td>
            </tr>
        )}
    </tbody>
);

const mapStateToProps = (state, ownProps) => {
    return { 
        state: state,
        showToast : (id) =>{
            {   
                state.map((element) => {
                if(element.id == id) Toast(element.name + ' has been deleted.');
                }
            )}
        }
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        remove: (id) => {
            dispatch(removeTask(id));
        },
        removeCart: (id) => {
            dispatch(removeCart(id));
        },
        addCart: (id) => {
            dispatch(addCart(id));
        },
    };
};

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Board1);