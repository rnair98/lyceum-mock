import React from 'react';
import './Match.css';
import Avatar from "@material-ui/core/Avatar";
import { Link } from 'react-router-dom';

function Match({ name, image, org, instructor, url, info, timestamp }) {
    return (
        <Link to={`/match/${name}`}>
            <div className="match">
                <Avatar className="match__image" alt={name} src={image} />
                <div className="match__details">
                    <h2>{name}</h2>
                    <p>{org}</p>
                </div>
                <p className="match__timestamp">{timestamp}</p>
            </div>
        </Link>

    )
}

export default Match
