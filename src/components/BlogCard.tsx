import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BlogPost } from '../types/Blog';

interface BlogCardProps {
  blog: BlogPost;
  onClick: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, onClick }) => {
  return (
    <article 
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02] cursor-pointer group"
      onClick={onClick}
    >
      <div className="md:flex">
        <div className="md:w-1/3">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="md:w-2/3 p-6 md:p-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-red-400 text-sm font-medium">{blog.date}</span>
            <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">
              {blog.category}
            </span>
          </div>
          
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-200">
            {blog.title}
          </h2>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            {blog.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={blog.author.avatar}
                alt={blog.author.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-gray-400 text-sm">{blog.author.name}</span>
              <span className="text-gray-500 text-sm">• {blog.readTime}</span>
            </div>
            
            <button className="flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors duration-200">
              <span className="text-sm font-medium">Read More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;