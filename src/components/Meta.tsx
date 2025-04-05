import React from "react";
import { Helmet } from "react-helmet-async";

interface MetaProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

const Meta: React.FC<MetaProps> = ({ title, description, keywords, ogImage, ogUrl }) => {
  const defaultImage = "/assets/og-image.svg"; // 기본 이미지 경로 (public 폴더 내의 이미지)
  const siteUrl = "https://halfmoon-mind.vercel.app"; // 실제 사이트 URL

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl || siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || defaultImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={ogUrl || siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />

      {/* 추가 메타 태그 */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      <link rel="canonical" href={ogUrl || siteUrl} />
    </Helmet>
  );
};

export default Meta;
