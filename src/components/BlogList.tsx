import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogPost } from '../types/Blog';
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import { blogPosts } from '../data/blogData';
import { slugify } from '../utils/slugify';

const BlogList: React.FC = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  
  // Sort blogs by date (latest first)
  const sortedBlogs = [...blogPosts].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
  
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = sortedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(sortedBlogs.length / blogsPerPage);

  const handleBlogSelect = (blog: BlogPost) => {
    const slug = slugify(blog.title);
    navigate(`/${slug}`);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
        Latest Articles
      </h1>
      
      <div className="grid gap-8 mb-12">
        {currentBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            onClick={() => handleBlogSelect(blog)}
          />
        ))}
      </div>
      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default BlogList;