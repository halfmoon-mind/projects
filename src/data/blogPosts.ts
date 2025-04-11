import { BlogPost, BLOG_CONTENT_DIR } from "../types/BlogPost";

export const blogPosts: Record<string, BlogPost> = {
  "MySQL에서-emoji-저장": {
    slug: "MySQL에서-emoji-저장",
    title: "MySQL에서 emoji 저장",
    date: "2023-04-30",
    readingTime: "3 min read",
    coverImage: "https://velog.velcdn.com/images/halfmoon_mind/post/642cf83f-eaea-40c0-bbfd-8e540365f7c3/image.png",
    contentPath: `${BLOG_CONTENT_DIR}/MySQL에서-emoji-저장.md`,
    excerpt: "MySQL에서 emoji를 저장할 때, 정상적으로 저장이 안되는 문제를 해결해보기",
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
