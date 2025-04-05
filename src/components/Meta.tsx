import React from "react";
import { Helmet } from "react-helmet-async";

interface MetaProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleSection?: string;
  articleAuthor?: string;
}

const Meta: React.FC<MetaProps> = ({
  title,
  description,
  keywords,
  ogImage,
  ogUrl,
  articlePublishedTime,
  articleModifiedTime,
  articleSection,
  articleAuthor,
}) => {
  const siteUrl = "https://halfmoon-mind.vercel.app"; // 실제 사이트 URL
  const defaultImage = `${siteUrl}/assets/og-image.png`; // 기본 이미지 경로 (절대 URL)
  const fullTitle = `${title} | 심상현 (Eddy)`;

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
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:site_name" content="심상현(Eddy) 포트폴리오" />

      {/* 블로그 글인 경우 추가 메타 태그 */}
      {isArticle && (
        <>
          {articlePublishedTime && <meta property="article:published_time" content={articlePublishedTime} />}
          {articleModifiedTime && <meta property="article:modified_time" content={articleModifiedTime} />}
          {articleSection && <meta property="article:section" content={articleSection} />}
          {articleAuthor && <meta property="article:author" content={articleAuthor} />}
        </>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={ogUrl || siteUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />
      <meta name="twitter:creator" content="@eddysim_dev" />

      {/* 추가 메타 태그 */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      <link rel="canonical" href={ogUrl || siteUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="심상현(Eddy)" />
    </Helmet>
  );
};

export default Meta;
