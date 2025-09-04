import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Twitter, Link2, Check } from 'lucide-react';
import RelatedArticles from './RelatedArticles';
import { blogPosts } from '../data/blogData';
import { findBlogBySlug } from '../utils/slugify';

const BlogDetail: React.FC = () => {
  const { blogSlug } = useParams<{ blogSlug: string }>();
  const navigate = useNavigate();
  const [isCopied, setIsCopied] = useState(false);
  
  const blog = findBlogBySlug(blogSlug || '', blogPosts);
  
  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Blog Post Not Found</h1>
        <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors duration-200 mx-auto"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Blog List</span>
        </button>
      </div>
    );
  }

  const handleShare = async (platform: 'twitter' | 'copy') => {
    const url = window.location.href;
    
    if (platform === 'twitter') {
      const text = `Check out this article: ${blog.title}`;
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
    } else {
      try {
        await navigator.clipboard.writeText(url);
        setIsCopied(true);
        // Reset the copied state after 2 seconds
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      } catch (error) {
        console.error('Failed to copy to clipboard:', error);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={() => navigate('/')}
        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Blog List</span>
      </button>
      
      <nav className="text-sm text-gray-400 mb-6">
        <span>Blog</span>
        <span className="mx-2">•</span>
        <span>{blog.title}</span>
      </nav>
      
      <article>
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {blog.title}
          </h1>
          
          <div className="flex items-center space-x-4 mb-8">
          <a 
              href={blog.author.profile}
              target="_blank" 
              rel="noopener noreferrer"
              // className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer"
              title="Visit Author's Portfolio"
            >
            <img
              src={blog.author.avatar}
              alt={blog.author.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            </a>
            <div>
            <a 
              href={blog.author.profile}
              target="_blank" 
              rel="noopener noreferrer"
              // className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer"
              title="Visit Author's Portfolio"
            >
              <p className="text-white font-medium">By {blog.author.name}</p>
              </a>
              <p className="text-gray-400 text-sm">{blog.date}</p>
            </div>
          </div>
          
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </header>
        
        <div 
          className="prose prose-lg prose-invert max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        
        <div className="border-t border-gray-700 pt-8 mb-12">
          <h3 className="text-white font-semibold mb-4">Share this article:</h3>
          <div className="flex space-x-4">
            <button
              onClick={() => handleShare('twitter')}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Twitter className="w-4 h-4" />
              <span>Twitter</span>
            </button>
            
            <button
              onClick={() => handleShare('copy')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                isCopied 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'bg-gray-700 hover:bg-gray-600 text-white'
              }`}
            >
              {isCopied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Link2 className="w-4 h-4" />
                  <span>Copy Link</span>
                </>
              )}
            </button>
          </div>
        </div>
        
        {/* <RelatedArticles currentBlogId={blog.id} /> */}
      </article>
    </div>
  );
};

export default BlogDetail;