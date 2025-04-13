export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  coverImage: string;
  contentPath: string; // 마크다운 파일의 경로
  excerpt: string; // 블로그 포스트 요약
  content?: string; // 블로그 포스트 내용 (선택적)
  ogImage?: string; // 오픈 그래프 이미지 (기본값은 coverImage)
}

export const BLOG_CONTENT_DIR = "/content/blog";
