import React, { useState, useEffect } from 'react'
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import axios from './axios';
//import database from "./firebase.js";


function TinderCards() {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/lyceum/cards');
            
            setCourses(req.data)
        }

        fetchData();
    }, []); 

    console.log(courses);

    //Normal - Not React Way of pushing items to array.
    //  const classes = [];
    //  classes.push('cs50','intro_to_ml');

    //React (Push to an array) 
    //  setClasses([...classes,'cs50','intro_to_ml']);

    const swiped = (direction, courseToDelete) => {
        console.log("removing: " + courseToDelete);
        // setLastDirection(direction);
    };

    const outOfFrame = (course) => {
        console.log(course + " left the screen.");
    };

    return (
        <div>
            <div className="tinderCards__cardContainer">
                {courses.map(course => (
                    <TinderCard
                        className="swipe"
                        key={course.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, course.name)}
                        onCardLeftScreen={() => outOfFrame(course.name)}
                    >
                        <div 
                        style={{backgroundColor: "#577fc0", backgroundImage: `url(${course.imgUrl})`, 
                        backgroundSize: "650px", backgroundRepeat: "no-repeat"}}
                        className="card"
                        >
                            <h2>{course.name}</h2>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;
