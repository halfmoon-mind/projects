import React from "react";
import { Helmet } from "react-helmet-async";

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleSection?: string;
  articleAuthor?: string;
}

const Meta: React.FC<MetaProps> = ({
  title = "심상현 | 풀스택 개발자 & 플러터 엔지니어",
  description = "창의적인 문제 해결과 사용자 경험을 중요시하는 개발자입니다. 프로그래밍이라는 기술을 활용해 세상에 도움이 되는 서비스를 만들고 있습니다.",
  keywords = "심상현, 풀스택 개발자, 플러터 엔지니어, React, Flutter, JavaScript, TypeScript",
  ogImage,
  ogUrl,
  articlePublishedTime,
  articleModifiedTime,
  articleSection,
  articleAuthor,
}) => {
  const siteUrl = "https://halfmoon-mind.vercel.app"; // 실제 사이트 URL
  const defaultImage = `${siteUrl}/assets/og-image.png`; // 기본 이미지 경로 (절대 URL)
  const fullTitle = title.includes(" | 심상현") ? title : `${title} | 심상현`;

  // ogImage가 전체 URL이 아닌 경우 사이트 도메인 추가
  const fullOgImage = ogImage ? (ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`) : defaultImage;

  const isArticle = articlePublishedTime || articleModifiedTime || articleSection;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={isArticle ? "article" : "website"} />
      <meta property="og:url" content={ogUrl || siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="심상현 포트폴리오" />

      {/* 블로그 글인 경우 추가 메타 태그 */}
      {isArticle && (
        <>
          {articlePublishedTime && <meta property="article:published_time" content={articlePublishedTime} />}
          {articleModifiedTime && <meta property="article:modified_time" content={articleModifiedTime} />}
          {articleSection && <meta property="article:section" content={articleSection} />}
          {articleAuthor && <meta property="article:author" content={articleAuthor} />}
        </>
      )}

      {/* 추가 메타 태그 */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      <link rel="canonical" href={ogUrl || siteUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="심상현" />
    </Helmet>
  );
};

export default Meta;
