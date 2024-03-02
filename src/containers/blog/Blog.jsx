import React from 'react';
import './blog.css';
import {Article} from '../../components';
import {blog01,blog02,blog03,blog04,blog05} from './imports';
const Blog = () => {
  return (
    <div className="gpt3_blog section_padding" id="blog">
      <div className="gpt3_blog-heading">
        <h1 className="gradient_text">
           A lot is happening,We are Blogging about it.
        </h1>
      </div>
      <div className="gpt3_blog-container">
        <div className="gpt3_blog-container_groupA">
          <Article imgUrl={blog01} date="sep26,2021" title="GPT-3 and Open AI is the future.Let us explore how it is?"/>
        </div>
        <div className="gpt3_blog-container_groupB">
        <Article imgUrl={blog02} date="Sep26,2023" title="GPT-3 and Open AI is the future.Let us explore how it is?"/>
        <Article imgUrl={blog03} date="Nov12,2023" title="Current Filters"/>
        <Article imgUrl={blog04} date="Dec15,2023" title="Memory and new controls"/>
        <Article imgUrl={blog05} date="Feb13,2024" title="New Embedding models?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog
