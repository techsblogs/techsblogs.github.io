import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/:blogSlug" element={<BlogDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;