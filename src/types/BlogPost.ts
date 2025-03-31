export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  coverImage: string;
  contentPath: string; // 마크다운 파일의 경로
}

export const BLOG_CONTENT_DIR = '/content/blog';
