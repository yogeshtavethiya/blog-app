import React from "react";
import { Link } from "react-router-dom";
import homeImg from '../../Assets/home.jpg';
import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <img src={homeImg} alt="Home" className="home-image" />
            <p className="home-p">this is test</p>
            <Link to="/blogs" className="start-journey-button">Start your journey</Link>
        </div>
    );
}

export default Home;
