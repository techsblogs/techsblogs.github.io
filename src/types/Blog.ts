export interface Author {
  name: string;
  avatar: string;
  profile: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: Author;
  image: string;
  category: string;
  readTime: string;
}