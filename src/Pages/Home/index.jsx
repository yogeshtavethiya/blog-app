import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './styles.css'
import dummyImg from '../../Assets/dummy.jpg'

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const fetchBlogs = async () => {
        const response = await fetch('https://dummyapi.online/api/blogposts');
        const data = await response.json();
        setBlogs(data);
        console.log(data)
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div className="home">
            <div className="blogs">
                {blogs?.map((item, idx) => (
                    <div className="blog-container" key={idx}>
                        <img className="blog-image" src={item?.image || dummyImg} alt={item?.title} />
                        <h4 className="blog-title">{item?.title}</h4>
                        <p className="blog-content">{item?.content?.substring(0, 50)}...</p>
                        <p className="blog-author">{item?.author}</p>
                        <p className="blog-datepublished">{item?.date_published}</p>
                    </div>
                ))}
            </div>
            <Link to="/settings">Settings</Link>
        </div>
    );
};

export default Home;
