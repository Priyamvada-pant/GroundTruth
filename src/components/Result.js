import React from 'react';

function Result(props) {
    return (
        <div>
            <span>Your score is  <strong>{props.quizResult}</strong>!</span>
        </div>
    );
}

export default Result;