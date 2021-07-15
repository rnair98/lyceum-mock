import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import "./MatchScreen.css";


function MatchScreen() {
    const [information] = useState([
        {
            name: "Introduction to Machine Learning",
            image: "https://neurohive.io/wp-content/uploads/2019/01/machine-learning-stanford-andrew-ng-course.png",
            org: "Coursera",
            instructor:"Andrew Ng",
            details: "Machine learning is the science of getting computers to act without being explicitly programmed. In the past decade, machine learning has given us self-driving cars, practical speech recognition, effective web search, and a vastly improved understanding of the human genome. Machine learning is so pervasive today that you probably use it dozens of times a day without knowing it. Many researchers also think it is the best way to make progress towards human-level AI. In this class, you will learn about the most effective machine learning techniques, and gain practice implementing them and getting them to work for yourself. More importantly, you'll learn about not only the theoretical underpinnings of learning, but also gain the practical know-how needed to quickly and powerfully apply these techniques to new problems. Finally, you'll learn about some of Silicon Valley's best practices in innovation as it pertains to machine learning and AI. This course provides a broad introduction to machine learning, datamining, and statistical pattern recognition. Topics include: (i) Supervised learning (parametric/non-parametric algorithms, support vector machines, kernels, neural networks). (ii) Unsupervised learning (clustering, dimensionality reduction, recommender systems, deep learning). (iii) Best practices in machine learning (bias/variance theory; innovation process in machine learning and AI). The course will also draw from numerous case studies and applications, so that you'll also learn how to apply learning algorithms to building smart robots (perception, control), text understanding (web search, anti-spam), computer vision, medical informatics, audio, database mining, and other areas."
        }
    ])

    return (
        <div className="matchScreen">
            <p className="matchScreen__timestamp"> {"YOU MATCHED WITH THIS COURSE ON {INSERT DATE HERE}"}  </p>
            {information.map(info => (
                <div className="matchScreen__info">
                    <img className="matchScreen__img"
                    src={info.image} 
                    alt={info.name}
                    />
                    <div className="matchScreen__text">
                        <h2>About this Course</h2>
                        <p>{info.details}</p>
                    </div>
                    <Button 
                    style={{backgroundColor: "#5c9df2", marginBottom: "40px", padding: "15px", color: "white"}}
                    >
                        <h3> Go to Course </h3>
                    </Button>
                </div>
            ))}
        </div>
    )
}

export default MatchScreen;
