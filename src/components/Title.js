import React from 'react';
import { connect } from 'react-redux';

const Title = ({ cardsCount }) => (
    <div className="project-info">
        <h1>Order Summary</h1>
        {/*<p>Items({cardsCount})</p>*/}
    </div>
);

const mapStateToProps = (state) => {
    return { 
        cardsCount: state.length
    };
};

export default connect(mapStateToProps)(Title);