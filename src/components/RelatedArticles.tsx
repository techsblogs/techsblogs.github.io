import React from 'react';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { ArrowRight } from 'lucide-react';
import { slugify } from '../utils/slugify';

interface RelatedArticlesProps {
  currentBlogId: string;
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ currentBlogId }) => {
  const navigate = useNavigate();
  
  const relatedBlogs = blogPosts
    .filter(blog => blog.id !== currentBlogId)
    .slice(0, 2);

  const handleRelatedBlogClick = (blog: any) => {
    const slug = slugify(blog.title);
    navigate(`/${slug}`);
  };
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Related Articles</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {relatedBlogs.map((blog) => (
          <article
            key={blog.id}
            onClick={() => handleRelatedBlogClick(blog)}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02] cursor-pointer group"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            
            <div className="p-6">
              <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium mb-3">
                {blog.category}
              </span>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-200">
                {blog.title}
              </h3>
              
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {blog.excerpt}
              </p>
              
              <button className="flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors duration-200">
                <span className="text-sm font-medium">Read More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;