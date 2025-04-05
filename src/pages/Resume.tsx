import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Meta from "../components/Meta";

// 애니메이션 변수
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 12 },
  },
};

interface SectionProps {
  title: string;
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const Section = ({ title, children, delay = 0, className = "" }: SectionProps) => {
  const controls = useAnimation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      controls.start("visible");
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [controls, delay]);

  return (
    <motion.section
      initial="hidden"
      animate={controls}
      variants={itemVariants}
      className={`space-y-4 p-3 md:p-6 rounded-xl bg-white/5 backdrop-blur-sm overflow-hidden ${className}`}
    >
      <h2 className="text-2xl font-semibold text-white border-b border-white/10 pb-2 mb-4">{title}</h2>
      <div className="relative z-10">{children}</div>
    </motion.section>
  );
};

const Resume = () => {
  const experiences = [
    {
      company: "어터",
      position: "Flutter Mobile Engineer",
      period: "2023년 10월 - 현재",
      projects: [
        {
          name: "슈룹 - 숏폼 드라마 플랫폼",
          description: [
            "<strong class='text-[#61dafb]'>DRM</strong> 적용된 <strong class='text-[#61dafb]'>HLS/DASH 스트리밍</strong> 방식 동영상 플레이어 개발하고, 불안정한 네트워크 환경에서 적절하게 화면이 보여질 수 있도록 지속적으로 기능 개선",
            "전세계 스토어 대상으로 배포하여 <strong class='text-[#61dafb]'>다국어 지원</strong> 어플리케이션 개발 경험",
            "유저가 인앱결제를 시도 할 때, 서버가 응답하지 않을 경우를 대비해 1분마다 <strong class='text-[#61dafb]'>영수증 검증 처리 재시도</strong>하면서 유저와 인증 정보를 <strong class='text-[#61dafb]'>Sentry</strong> 서버에 로그로 남기겨 CS 대응에 수월하도록 처리",
          ],
        },
        {
          name: (
            <>
              모픽 - 웹소설 콘텐츠 플랫폼 (
              <a
                href="https://mofic.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white underline transition-colors"
              >
                웹사이트
              </a>{" "}
              /{" "}
              <a
                href="https://apps.apple.com/kr/app/%EB%AA%A8%ED%94%BD-%EB%8D%94-%EB%A7%8E%EC%9D%80-%EC%86%8C%EC%84%A4-%EC%86%8D%EC%9C%BC%EB%A1%9C/id6469601198"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white underline transition-colors"
              >
                AppStore
              </a>{" "}
              /{" "}
              <a
                href="https://play.google.com/store/apps/details?id=com.toodat.android&hl=ko"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white underline transition-colors"
              >
                PlayStore
              </a>
              )
            </>
          ),
          description: [
            "<strong class='text-[#61dafb]'>Fastlane</strong>을 활용한 <strong class='text-[#61dafb]'>CI/CD 파이프라인</strong> 구축하여 배포 소요 시간 <strong class='text-[#61dafb]'>60% (6분) 감소</strong>",
            "<strong class='text-[#61dafb]'>Amplitude</strong>를 활용하여 유저 사용시간 분석하고, 야간 시간대 유저 참여를 높이기 위해 주도적으로 <strong class='text-[#61dafb]'>다크모드</strong>의 기능 우선순위를 조정하여 개발",
            "기능 추가 이후 야간 시간대 기존와 대비하여 유저 session <strong class='text-[#61dafb]'>35% 증가</strong>",
            "팀 내 모바일 엔지니어링을 주도하며 <strong class='text-[#61dafb]'>Clean Architecture</strong>, <strong class='text-[#61dafb]'>MVVM</strong> 구조를 설계하여 앱을 제작",
            "Geek News, Toss Tech와 같은 뉴스레터, 테크블로그를 읽으며 기존 앱 아키텍쳐를 지속적으로 개선",
            "<strong class='text-[#61dafb]'>Sentry</strong>를 로그 레벨과 <strong class='text-[#61dafb]'>Stack Trace</strong>, <strong class='text-[#61dafb]'>Routing history</strong>를 적극적으로 활용하여 Sentry 도입 이후 버그 픽스 소요 시간 <strong class='text-[#61dafb]'>30% 단축</strong>",
            "신속한 비즈니스 검증 및 요구사항 수정을 빠르게 반영하기 위해 <strong class='text-[#61dafb]'>Server Driven UI</strong>를 적용",
            "앱 배포 없이 <strong class='text-[#61dafb]'>Admin 페이지</strong>에서 손쉽게 메인페이지의 화면 구성을 수정할 수 있도록 구현",
            "Flutter에서 지원하는 <strong class='text-[#61dafb]'>EPUB</strong> 파일 뷰어 패키지가 없어 웹소설 뷰어 패키지 제작",
            "초기에 만든 웹뷰를 활용한 epub.js 뷰어보다 로딩 속도 <strong class='text-[#61dafb]'>40% 감소</strong>",
            "앱 리브랜딩 경험",
            "하드 코딩된 데이터 제거하고, 관리 포인트를 각 페이지가 아니라 <strong class='text-[#61dafb]'>하나의 모듈</strong>에서 관리하도록 설정",
          ],
        },
      ],
    },
    {
      company: "허슬러즈",
      position: "Software Engineer",
      period: "2022년 4월 - 2023년 5월 (1년 1개월)",
      projects: [
        {
          name: (
            <>
              게더링 - 소셜 공유 캘린더 플랫폼 (
              <a
                href="https://apps.apple.com/kr/app/%EA%B2%8C%EB%8D%94%EB%A7%81-%ED%95%A8%EA%BB%98-%EC%93%B0%EB%8A%94-%EA%B3%B5%EC%9C%A0-%EC%BA%98%EB%A6%B0%EB%8D%94/id1643475991"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white underline transition-colors"
              >
                AppStore
              </a>{" "}
              /{" "}
              <a
                href="https://play.google.com/store/apps/details?id=day.gathering.app&hl=ko"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white underline transition-colors"
              >
                PlayStore
              </a>
              )
            </>
          ),
          description: [
            "<strong class='text-[#61dafb]'>일간/주간/월간</strong> 커스텀 캘린더 제작",
            "기존에 모든 반복 일정이 각각 다른 일정으로 처리되는 것에 불편함을 느껴 <strong class='text-[#61dafb]'>반복 일정 관리 알고리즘</strong> 개발",
            "DB 레코드 <strong class='text-[#61dafb]'>40% 감소</strong>",
            "그룹 서비스(그룹 일정 추가, 게시글) <strong class='text-[#61dafb]'>Full Stack</strong> 개발 (Node.js, Flutter)",
          ],
        },
      ],
    },
  ];

  const projects = [
    {
      name: "정산봇",
      period: "2023년 - 현재",
      link: "https://slack.com/marketplace/A087W0YSC7N-",
      description: [
        "<strong class='text-[#61dafb]'>슬랙 워크스페이스</strong>에서 팀원들과의 비용 정산을 쉽고 빠르게 처리할 수 있도록 도와주는 봇",
        "주요 기능: 계좌 등록, 정산 요청, <strong class='text-[#61dafb]'>토스 송금 연동</strong>",
        "사용자 계좌 정보를 <strong class='text-[#61dafb]'>AES-256 암호화 알고리즘</strong>으로 안전하게 저장하고 관리",
        "<strong class='text-[#61dafb]'>토스 송금 페이지 연동</strong>으로 버튼 클릭 한 번으로 자동 송금 기능 구현",
        "1인당 금액 자동 계산 및 정산 대상자들에게 <strong class='text-[#61dafb]'>자동 DM 발송</strong> 기능 구현",
      ],
    },
    {
      name: "Nightary",
      period: "2024년 1월",
      link: "https://github.com/GDSC-snowflowerthon/Nightary-team12-mobile",
      description: [
        "<strong class='text-[#61dafb]'>iOS HealthKit</strong> 활용하여 수면 시간과 질을 측정하고 적절한 수면 시간 확보 도우미 서비스",
        "수면 시간이 어느 날짜에 해당하는지 결정하는 <strong class='text-[#61dafb]'>알고리즘</strong> 구현",
        "<strong class='text-[#61dafb]'>iOS WidgetKit</strong> 활용해 유저가 수면이 부족한 시간에 도달하면 홈화면에서 바로 볼 수 있도록 구현",
      ],
    },
    {
      name: "깨끗해질지도",
      period: "2023년 5월 - 6월",
      link: "https://github.com/May-Be-Clean",
      description: [
        "소비를 통해서 친환경을 실천할 수 있도록 주변의 <strong class='text-[#61dafb]'>친환경 가게</strong>들을 소개해주는 서비스",
        "<strong class='text-[#61dafb]'>google map sdk</strong> 활용해 지도를 구현하여 주변 친환경 가게를 찾고, <strong class='text-[#61dafb]'>debouncer</strong> 활용하여 화면 이동 시 너무 많은 api 호출 안되도록 최적화",
      ],
    },
  ];

  const talks = [
    {
      title: "2025 YourSSU 홈커밍 - 주니어와 취준생에게 전하는 Flutter 사용 경험",
      link: "",
    },
    {
      title: "2024 GDXC - 과거의 나, 현재의 나",
      link: "",
    },
    {
      title: "GDSC 2024 Final Event - 학교에서 배운 내용으로 현업에서 써먹기",
      link: "https://archive-halfmoon-mind.s3.ap-northeast-2.amazonaws.com/EDDY_3%E1%84%80%E1%85%B5_GDSC_FinalEvent.pdf",
    },
    {
      title: "2024 SSU DEVCON - Flutter로 다채로운 이벤트 페이지 구축하기",
      link: "https://archive-halfmoon-mind.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%AE%E1%86%BC%E1%84%89%E1%85%B5%E1%86%AFDEVCON+-+%E1%84%89%E1%85%B5%E1%86%B7%E1%84%89%E1%85%A1%E1%86%BC%E1%84%92%E1%85%A7%E1%86%AB+%E1%84%87%E1%85%A1%E1%86%AF%E1%84%91%E1%85%AD.pdf",
      youtube: "https://www.youtube.com/watch?v=JpzyT2XPNqw&ab_channel=GDSCSoongsil",
    },
    {
      title: "2023 GDSC SSUMall Seminar - 플러터, 어디까지 배워볼래?",
      link: "https://archive-halfmoon-mind.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A5%E1%84%90%E1%85%A5_%E1%84%8B%E1%85%A5%E1%84%83%E1%85%B5%E1%84%81%E1%85%A1%E1%84%8C%E1%85%B5_%E1%84%87%E1%85%A2%E1%84%8B%E1%85%AF%E1%84%87%E1%85%A9%E1%86%AF%E1%84%85%E1%85%A2.pdf",
    },
  ];

  const skills = ["React.js", "Next.js", "AWS (EC2, S3, Lambda 등)", "Flutter", "SwiftUI", "Amplitude", "Google Analytics", "Appsflyer"];

  const awards = [
    {
      title: "Nightary, 2024 GDSC 해커톤 대상",
      link: "https://github.com/GDSC-snowflowerthon/Nightary-team12-mobile",
    },
    {
      title: "깨끗해질지도, 제11회 K-해커톤 장려상 [과학기술정보통신부]",
      link: "https://github.com/May-Be-Clean",
    },
  ];

  const education = [
    {
      school: "숭실대학교",
      major: "컴퓨터학부",
      period: "2019년 3월 - 2024년 2월",
    },
  ];

  const intro = `<strong class='text-[#61dafb]'>Flutter Engineer</strong>로 2년간 근무하면서 3개의 프로덕션 서비스를 배포 및 유지보수 하고 있습니다.
Flutter 뿐 아니라 다양한 분야의 지식을 배우면서 <strong class='text-[#61dafb]'>엔지니어링 퀄리티</strong>를 높이고 있습니다.
엔지니어로서의 관점 뿐만 아니라 <strong class='text-[#61dafb]'>비즈니스의 본질</strong>을 이해하고 유연하게 문제를 해결합니다.

일상생활 속의 불편함을 인지하고 이를 기술로서 풀어내는 <strong class='text-[#61dafb]'>제너럴리스트</strong>입니다.
또한 <strong class='text-[#61dafb]'>AI</strong>를 적극적으로 활용하여 Product에 빠르게 <strong class='text-[#61dafb]'>비즈니스 임팩트</strong>를 낼 수 있는 방안을 항상 고민하고 적극적으로 제시하는 <strong class='text-[#61dafb]'>Product Engineer</strong>입니다.`;

  const contact = {
    phone: "010-5378-8095",
    email: "simsanghyeon00@gmail.com",
    github: "https://github.com/halfmoon-mind",
  };

  return (
    <>
      <Meta
        title="이력서 | 심상현 (Eddy) | 풀스택 개발자 & 플러터 엔지니어"
        description="심상현(Eddy)의 개발자 이력서입니다. Flutter 모바일 엔지니어링 경험과 다양한 프로젝트 개발 경험, 기술 스택, 수상 내역 및 발표 경력을 확인하세요."
        keywords="심상현, 이력서, Flutter 개발자, 리액트 개발자, 풀스택 개발자, 모바일 앱 개발, 웹 개발, 플러터 엔지니어, 개발자 포트폴리오"
        ogImage="/assets/og-image.png"
        ogUrl="https://halfmoon-mind.vercel.app/resume"
      />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen pt-20 pb-20 px-4 max-w-6xl mx-auto">
        {/* 헤더 섹션 */}
        <motion.header
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-10 pb-6 border-b border-white/10"
        >
          <motion.div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold">심상현</h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-3 md:col-span-1"
            >
              <h3 className="text-xs uppercase tracking-widest text-white/60 mb-3 font-medium">연락처</h3>
              <div className="flex items-center space-x-3">
                <span className="text-white/70">📞</span>
                <p className="text-sm text-gray-400">{contact.phone}</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-white/70">✉️</span>
                <a href={`mailto:${contact.email}`} className="text-sm text-gray-400 hover:text-white hover:underline transition-colors">
                  {contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-white/70">💻</span>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white hover:underline transition-colors"
                >
                  Github
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="md:col-span-2">
              <h3 className="text-xs uppercase tracking-widest text-white/60 mb-4 font-medium">소개</h3>
              <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line" dangerouslySetInnerHTML={{ __html: intro }} />
            </motion.div>
          </div>
        </motion.header>

        {/* 메인 콘텐츠 */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
          {/* 경력 섹션 */}
          <Section title="경력" delay={0.2} className="experience-section">
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div key={index} variants={itemVariants} className="bg-white/[0.03] rounded-lg p-3 md:p-5 space-y-4 border border-white/5">
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-3">
                    <div className="space-y-1">
                      <h3 className="text-lg font-medium text-white">{exp.position}</h3>
                      <span className="text-gray-400 text-sm">{exp.company}</span>
                    </div>
                    <div>
                      <span className="px-3 py-1 rounded-full bg-white/10 text-gray-400 text-xs">{exp.period}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {exp.projects.map((project, pIndex) => (
                      <div key={pIndex} className="space-y-3">
                        <h4 className="text-base font-medium text-white bg-white/[0.04] px-2 md:px-4 py-1.5 md:py-2 rounded-md border-l-2 border-white/50">
                          {project.name}
                        </h4>

                        <ul className="text-gray-400 space-y-2 list-none">
                          {project.description.map((desc, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -5 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.05 }}
                              className="relative pl-4 text-sm before:content-['•'] before:absolute before:left-0 before:top-0 before:text-white/50 hover:text-white/90 transition-colors duration-200"
                              dangerouslySetInnerHTML={{ __html: desc }}
                            />
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* 사이드 프로젝트 섹션 */}
          <Section title="사이드 프로젝트" delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/[0.03] rounded-lg p-3 md:p-5 space-y-3 border border-white/5 h-full"
                >
                  <div className="flex justify-between items-start gap-2 flex-wrap">
                    <h3 className="text-lg font-medium text-white">{project.name}</h3>
                    <span className="px-3 py-1 rounded-md bg-white/10 text-gray-400 text-xs">{project.period}</span>
                  </div>

                  <a
                    href={project.link}
                    className="text-gray-400 hover:text-white hover:underline text-sm flex items-center space-x-1.5 transition-colors"
                  >
                    <span>자세히 보기</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>

                  <ul className="text-gray-400 space-y-2 list-none">
                    {project.description.map((desc, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -5 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="relative pl-4 text-sm before:content-['•'] before:absolute before:left-0 before:top-0 before:text-white/50 hover:text-white/90 transition-colors duration-200"
                        dangerouslySetInnerHTML={{ __html: desc }}
                      />
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* 기술 스택 섹션 */}
          <Section title="기술" delay={0.4}>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  className="bg-white/[0.06] px-3 py-1.5 rounded-md text-sm border border-white/10 hover:border-white/30 transition-all text-white/90"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </Section>

          {/* 발표 이력 */}
          <Section title="발표" delay={0.5}>
            <div className="space-y-3">
              {talks.map((talk, index) => (
                <motion.div key={index} variants={itemVariants} className="group rounded-md p-2 md:p-3 transition-all hover:bg-white/[0.05]">
                  <a
                    href={talk.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 group-hover:text-white hover:underline transition-colors block ${
                      talk.link ? "" : "pointer-events-none"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-sm">{talk.title}</span>
                      <div className="flex items-center">
                        {talk.youtube && (
                          <a
                            href={talk.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-red-400 hover:text-red-300 hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="bi bi-youtube"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                            </svg>
                          </a>
                        )}
                        {talk.link && (
                          <span className="text-white/40 group-hover:text-white/80">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </span>
                        )}
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* 수상 내역 */}
          <Section title="수상 내역" delay={0.6}>
            <div className="space-y-3">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/[0.04] border-l-2 border-white/50 px-3 md:px-4 py-2 md:py-3 rounded-r-md"
                >
                  <a
                    href={award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white hover:underline transition-colors block group"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-medium text-white/90 text-sm">{award.title.split(",")[0]}</span>
                        <span className="text-gray-400 text-sm">{", " + award.title.split(",")[1]}</span>
                      </div>
                      <span className="text-white/40 group-hover:text-white/80">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* 학력 */}
          <Section title="학력" delay={0.7}>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0 bg-white/[0.04] px-3 md:px-5 py-3 md:py-4 rounded-lg border border-white/5"
              >
                <div className="space-y-0.5">
                  <h3 className="text-lg font-medium text-white">{edu.school}</h3>
                  <p className="text-gray-400 text-sm">{edu.major}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/10 text-gray-400 text-xs">{edu.period}</span>
              </motion.div>
            ))}
          </Section>
        </motion.div>

        {/* 바닥글 */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 pt-6 border-t border-white/10 text-center text-gray-500 text-xs"
        >
          <p>© 2025 심상현. All rights reserved.</p>
        </motion.footer>
      </motion.div>
    </>
  );
};

export default Resume;
