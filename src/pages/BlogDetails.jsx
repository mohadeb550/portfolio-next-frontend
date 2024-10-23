import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa'; // For date icon
import { useParams } from 'react-router-dom';
import { useGetSingleBlogQuery } from '../redux/features/blogs/blogApi';
import Container from '../components/Container';

const BlogDetails = () => {
    const { id } = useParams();
    const { data } = useGetSingleBlogQuery(id);
    const blog = data?.data;

  const { title, description, image, date } = blog || {}

  return (
    <Container>
<div className=" mx-auto p-6  text-white rounded-lg shadow-lg mt-10">
      {/* Blog Image */}
      <div className="w-full h-60 md:h-96 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Blog Content */}
      <div className="mt-12">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gradient">
          {title}
        </h1>

        {/* Date */}
        <div className="flex items-center mt-2 text-gray-400">
          <FaCalendarAlt className="mr-2" />
          <span>{date}</span>
        </div>

        {/* Description */}
        <p className="mt-4 text-lg leading-relaxed text-gray-300">
          {description}
        </p>
      </div>
    </div>
</Container>
  );
};

export default BlogDetails;
