import React from 'react';
import "./Matches.css";
import Match from "./Match"

function Matches() {
    return (
        <div className="matches">
            <Match
                name="Introduction to Machine Learning"
                image=""
                org="Coursera"
                instructor="Andrew Ng"
                url="https://www.coursera.org/learn/machine-learning"
                info=""
                timestamp="2 hours ago"
            />
            <Match
                name="Learning how to Learn"
                image=""
                org="Coursera"
                instructor="Barbara Oakley"
                url="https://www.coursera.org/learn/learning-how-to-learn"
                info=""
                timestamp="5 minutes ago"
            />
        </div>
    )
}

export default Matches
