import React from 'react';

const Card2 = ({ id,quantity,onRemoveCart,onAddCart }) => {
    return ( 
        <div className="project-card-inner space-around">
            <span className="card-remove" onClick={() => onRemoveCart(id)}>-</span>
            <div className="project-card">{quantity}</div>
            <span className="card-remove" onClick={() => onAddCart(id)}>+</span>
        </div>
    );
};

export default Card2;