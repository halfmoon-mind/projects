/**
 * 마크다운 파일을 불러오는 유틸리티 함수
 * @param path 마크다운 파일 경로 (public 폴더 기준)
 * @returns 마크다운 텍스트 내용
 */
export const loadMarkdownContent = async (path: string): Promise<string> => {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to load markdown file: ${path}`);
    }
    return await response.text();
  } catch (error) {
    console.error('Error loading markdown content:', error);
    return '# 컨텐츠를 불러올 수 없습니다';
  }
};
