import { BlogPost, BLOG_CONTENT_DIR } from '../types/BlogPost';

export const blogPosts: Record<string, BlogPost> = {
  'getting-started-with-react': {
    slug: 'getting-started-with-react',
    title: 'Getting Started with React',
    date: '2024-03-15',
    readingTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
    contentPath: `${BLOG_CONTENT_DIR}/getting-started-with-react.md`,
  },
  'typescript-best-practices': {
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices',
    date: '2024-03-10',
    readingTime: '8 min read',
    coverImage: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=800&q=80',
    contentPath: `${BLOG_CONTENT_DIR}/typescript-best-practices.md`,
  },
};

// 단일 포스트 가져오기
export const getBlogPost = (slug: string): BlogPost | undefined => {
  return blogPosts[slug];
};

// 모든 포스트 가져오기
export const getAllBlogPosts = (): BlogPost[] => {
  return Object.values(blogPosts);
};
