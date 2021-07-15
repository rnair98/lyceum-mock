import React from 'react';
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";


function Header({ backButton }) {
    const history = useHistory();
    return (
        //BEM
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon className="header__icon" fontSize="large" />
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon className="header__icon" fontSize="large" />
                </IconButton>
            )}
            <Link to="/">
                <img
                className = "header__logo"  
                src= "https://media-thumbs.golden.com/lASYJqb8AU-_ok75TsQ_2wwLbwg=/100x100/smart/golden-storage-production.s3.amazonaws.com%2Ftopic_images%2F6416186924eb477185aa38867be3aacb.png" 
                alt = "contrary logo"/>
            </Link>
            <Link to="/match">
                <IconButton>
                    <ForumIcon className="header__icon" fontSize="large"/>    
                </IconButton>
            </Link>
        </div>
    );
}
export default Header;