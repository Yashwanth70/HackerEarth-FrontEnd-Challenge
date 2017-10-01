import React from 'react';

const Card = ({ 
    id, 
    name,
    img_url,
    onRemoveClick,
    onshowToast
}) => {
    return ( 
        <div className="project-card">
            <div className="project-card-inner">
                <img src={img_url}/>
                <p className="card-text">{name}</p> 
                <span className="card-remove" onClick={() => {
                    onRemoveClick(id);
                    onshowToast(id);
                }}>X</span>
            </div>
        </div>
    );
};

export default Card;