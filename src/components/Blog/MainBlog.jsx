import React from 'react';
import Blog from './Blog';
import BlogThree from './BlogThree';
import BlogTwo from './BlogTwo';
import './Blog.css'

const MainBlog = () => {
    return (
        <div>
            <h2 style={{color: 'tomato'}}>Blog Component & Author</h2>
            <Blog></Blog>
            <BlogTwo></BlogTwo>
            <BlogThree></BlogThree>
        </div>
    );
};

export default MainBlog;