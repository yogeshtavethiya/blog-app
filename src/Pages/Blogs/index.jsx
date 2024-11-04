import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import './styles.css';
import dummyImg from '../../Assets/dummy.jpg';
import LoaderSpinner from '../../Components/Loader'; 

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [visibleBlogs, setVisibleBlogs] = useState(10);
    const [loading, setLoading] = useState(true); 

    const fetchBlogs = async () => {
        try {
            const response = await fetch('https://dummyapi.online/api/blogposts');
            const data = await response.json();
            setBlogs(data);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleScroll = useCallback(() => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 5) {
            setVisibleBlogs((prevVisibleBlogs) => Math.min(prevVisibleBlogs + 10, blogs.length));
        }
    }, [blogs.length]);

    useEffect(() => {
        fetchBlogs();
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <div className="home">
            <div className="blogs">
                {loading ? (
                    <LoaderSpinner />
                ) : (
                    blogs.slice(0, visibleBlogs).map((item, idx) => (
                        <div className="blog-container" key={idx}>
                            <img className="blog-image" src={item?.image || dummyImg} alt={item?.title} />
                            <div className="blog-content-wrapper">
                                <h4 className="blog-title">{item?.title}</h4>
                                <p className="blog-excerpt">{item?.content?.substring(0, 70)}...</p>
                                <div className="blog-meta">
                                    <span>{item?.date_published}</span>
                                    <span className="claps">{item?.claps || '3K'}</span>
                                    <span className="comments">{item?.comments || '48'}</span>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="featured">
                <h4>This is featured content</h4>
                <p>meet the team</p>
            </div>
        </div>
    );
};

export default Blogs;
