import React from "react";
import { motion } from "framer-motion";

// 애니메이션 변수
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

interface SectionProps {
  title: string;
  children: React.ReactNode;
  delay?: number;
}

const Section = ({ title, children, delay = 0 }: SectionProps) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="space-y-4 bg-gradient-to-br from-slate-900/50 to-slate-800/30 p-6 rounded-xl backdrop-blur-sm"
  >
    <h2 className="text-2xl font-bold text-white/90 border-b border-white/10 pb-2 inline-block">{title}</h2>
    {children}
  </motion.section>
);

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
            "DRM 적용된 HLS/DASH 스트리밍 방식 동영상 플레이어 개발하고, 불안정한 네트워크 환경에서 적절하게 화면이 보여질 수 있도록 지속적으로 기능 개선",
            "전세계 스토어 대상으로 배포하여 다국어 지원 어플리케이션 개발 경험",
            "유저가 인앱결제를 시도 할 때, 서버가 응답하지 않을 경우를 대비해 1분마다 영수증 검증 처리 재시도하면서 유저와 인증 정보를 Sentry 서버에 로그로 남기겨 CS 대응에 수월하도록 처리",
          ],
        },
        {
          name: (
            <>
              모픽 - 웹소설 콘텐츠 플랫폼 (
              <a href="https://mofic.io" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                웹사이트
              </a>{" "}
              /{" "}
              <a
                href="https://apps.apple.com/kr/app/%EB%AA%A8%ED%94%BD-%EB%8D%94-%EB%A7%8E%EC%9D%80-%EC%86%8C%EC%84%A4-%EC%86%8D%EC%9C%BC%EB%A1%9C/id6469601198"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300"
              >
                AppStore
              </a>{" "}
              /{" "}
              <a
                href="https://play.google.com/store/apps/details?id=com.toodat.android&hl=ko"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300"
              >
                PlayStore
              </a>
              )
            </>
          ),
          description: [
            "Fastlane을 활용한 CI/CD 파이프라인 구축하여 배포 소요 시간 60% (6분) 감소",
            "Amplitude를 활용하여 유저 사용시간 분석하고, 야간 시간대 유저 참여를 높이기 위해 주도적으로 다크모드의 기능 우선순위를 조정하여 개발",
            "기능 추가 이후 야간 시간대 기존와 대비하여 유저 session 35% 증가",
            "팀 내 모바일 엔지니어링을 주도하며 Clean Architecture, MVVM 구조를 설계하여 앱을 제작",
            "Geek News, Toss Tech와 같은 뉴스레터, 테크블로그를 읽으며 기존 앱 아키텍쳐를 지속적으로 개선",
            "Sentry를 로그 레벨과 Stack Trace, Routing history를 적극적으로 활용하여 Sentry 도입 이후 버그 픽스 소요 시간 30% 단축",
            "신속한 비즈니스 검증 및 요구사항 수정을 빠르게 반영하기 위해 Server Driven UI를 적용",
            "앱 배포 없이 Admin 페이지에서 손쉽게 메인페이지의 화면 구성을 수정할 수 있도록 구현",
            "Flutter에서 지원하는 EPUB 파일 뷰어 패키지가 없어 웹소설 뷰어 패키지 제작",
            "초기에 만든 웹뷰를 활용한 epub.js 뷰어보다 로딩 속도 40% 감소",
            "앱 리브랜딩 경험",
            "하드 코딩된 데이터 제거하고, 관리 포인트를 각 페이지가 아니라 하나의 모듈에서 관리하도록 설정",
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
                className="text-purple-400 hover:text-purple-300"
              >
                AppStore
              </a>{" "}
              /{" "}
              <a
                href="https://play.google.com/store/apps/details?id=day.gathering.app&hl=ko"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300"
              >
                PlayStore
              </a>
              )
            </>
          ),
          description: [
            "일간/주간/월간 커스텀 캘린더 제작",
            "기존에 모든 반복 일정이 각각 다른 일정으로 처리되는 것에 불편함을 느껴 반복 일정 관리 알고리즘 개발",
            "DB 레코드 40% 감소",
            "그룹 서비스(그룹 일정 추가, 게시글) Full Stack 개발 (Node.js, Flutter)",
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
        "슬랙 워크스페이스에서 팀원들과의 비용 정산을 쉽고 빠르게 처리할 수 있도록 도와주는 봇",
        "주요 기능: 계좌 등록, 정산 요청, 토스 송금 연동",
        "사용자 계좌 정보를 AES-256 암호화 알고리즘으로 안전하게 저장하고 관리",
        "토스 송금 페이지 연동으로 버튼 클릭 한 번으로 자동 송금 기능 구현",
        "1인당 금액 자동 계산 및 정산 대상자들에게 자동 DM 발송 기능 구현",
      ],
    },
    {
      name: "Nightary",
      period: "2024년 1월",
      link: "https://github.com/GDSC-snowflowerthon/Nightary-team12-mobile",
      description: [
        "iOS HealthKit 활용하여 수면 시간과 질을 측정하고 적절한 수면 시간 확보 도우미 서비스",
        "수면 시간이 어느 날짜에 해당하는지 결정하는 알고리즘 구현",
        "iOS WidgetKit 활용해 유저가 수면이 부족한 시간에 도달하면 홈화면에서 바로 볼 수 있도록 구현",
      ],
    },
    {
      name: "깨끗해질지도",
      period: "2023년 5월 - 6월",
      link: "https://github.com/May-Be-Clean",
      description: [
        "소비를 통해서 친환경을 실천할 수 있도록 주변의 친환경 가게들을 소개해주는 서비스",
        "google map sdk 활용해 지도를 구현하여 주변 친환경 가게를 찾고, debouncer 활용하여 화면 이동 시 너무 많은 api 호출 안되도록 최적화",
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
    },
    {
      title: "2023 GDSC SSUMall Seminar - 플러터, 어디까지 배워볼래?",
      link: "https://archive-halfmoon-mind.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A5%E1%84%90%E1%85%A5_%E1%84%8B%E1%85%A5%E1%84%83%E1%85%B5%E1%84%81%E1%85%A1%E1%84%8C%E1%85%B5_%E1%84%87%E1%85%A2%E1%84%8B%E1%85%AF%E1%84%87%E1%85%A9%E1%86%AF%E1%84%85%E1%85%A2.pdf",
    },
  ];

  const skills = ["React.js", "Next.js", "AWS (EC2, S3, Lambda 등)", "Flutter", "SwiftUI", "Amplitude", "Google Analytics", "Appsflyer"];

  const awards = ["Nightary, 2024 GDSC 해커톤 대상", "깨끗해질지도, 제11회 K-해커톤 장려상 [과학기술정보통신부]"];

  const education = [
    {
      school: "숭실대학교",
      major: "컴퓨터학부",
      period: "2019년 3월 - 2024년 2월",
    },
  ];

  const intro =
    "Flutter Engineer로 2년간 근무하면서 3개의 프로덕션 서비스를 배포 및 유지보수 하고 있습니다. Flutter 뿐 아니라 다양한 분야의 지식을 배우면서 엔지니어링 퀄리티를 높이고 있습니다. 엔지니어로서의 관점 뿐만 아니라 비즈니스의 본질을 이해하고 유연하게 문제를 해결합니다. 일상생활 속의 불편함을 인지하고 이를 기술로서 풀어내는 제너럴리스트입니다. 또한 AI를 적극적으로 활용하여 Product에 빠르게 비즈니스 임팩트를 낼 수 있는 방안을 항상 고민하고 적극적으로 제시하는 Product Engineer입니다.";

  const contact = {
    phone: "010-5378-8095",
    email: "simsanghyeon00@gmail.com",
    github: "https://github.com/halfmoon-mind",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 py-20 px-6">
      <div className="w-full max-w-4xl mx-auto">
        {/* 헤더 섹션 */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 border-b border-white/10 pb-8"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-indigo-700 blur-2xl opacity-20"
            />
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 mb-2">심상현</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white/80 space-y-1"
            >
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <p>{contact.phone}</p>
              </div>
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <p>{contact.email}</p>
              </div>
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                  {contact.github}
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="md:col-span-2">
              <p className="text-white/70 leading-relaxed text-sm md:text-base">{intro}</p>
            </motion.div>
          </div>
        </motion.header>

        {/* 메인 콘텐츠 */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
          {/* 경력 섹션 */}
          <Section title="경력" delay={0.2}>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/5 hover:bg-white/10 rounded-lg p-6 space-y-6 transition-all duration-300 border border-white/5 hover:border-purple-500/20 shadow-lg hover:shadow-purple-500/5"
                >
                  <div className="flex flex-col md:flex-row justify-between md:items-center">
                    <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                    <div className="flex items-center mt-2 md:mt-0">
                      <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-medium">{exp.company}</span>
                      <span className="mx-2 text-white/40">|</span>
                      <span className="text-white/60 text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {exp.projects.map((project, pIndex) => (
                      <div key={pIndex} className="space-y-3">
                        <div className="flex items-center space-x-3 bg-gradient-to-r from-purple-500/20 to-transparent px-3 py-2 rounded-lg">
                          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                          <h4 className="text-lg font-semibold text-purple-200">{project.name}</h4>
                        </div>

                        <ul className="text-white/70 space-y-2 list-none ml-4 pl-2 border-l-2 border-purple-500/20">
                          {project.description.map((desc, i) => (
                            <li
                              key={i}
                              className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-2 before:h-2 before:bg-purple-400/50 before:rounded-full hover:text-white transition-colors duration-200"
                            >
                              {desc}
                            </li>
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
          <Section title="사이드 프로젝트" delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/5 hover:bg-white/10 rounded-lg p-6 space-y-3 transition-all duration-300 border border-white/5 hover:border-indigo-500/20 shadow-lg hover:shadow-indigo-500/5 h-full"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">{project.name}</h3>
                    <span className="px-2 py-1 rounded-md bg-indigo-500/20 text-indigo-300 text-xs">{project.period}</span>
                  </div>

                  <a href={project.link} className="text-indigo-400 hover:text-indigo-300 text-sm block transition-colors">
                    설명 링크
                  </a>

                  <ul className="text-white/70 space-y-2 list-none">
                    {project.description.map((desc, i) => (
                      <li
                        key={i}
                        className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:bg-indigo-400/50 before:rounded-full"
                      >
                        {desc}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* 기술 스택 섹션 */}
          <Section title="기술" delay={0.6}>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  className="bg-gradient-to-r from-white/10 to-purple-500/10 px-4 py-2 rounded-full text-sm border border-white/10 shadow-inner backdrop-blur-sm hover:border-purple-500/30 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </Section>

          {/* 발표 이력 */}
          <Section title="발표" delay={0.7}>
            <div className="space-y-3">
              {talks.map((talk, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  className="relative overflow-hidden group rounded-lg p-4 transition-all cursor-pointer"
                >
                  <div className="absolute inset-0 w-1 bg-gradient-to-b from-purple-400 to-blue-500 group-hover:w-full opacity-20 transition-all duration-300" />
                  <a
                    href={talk.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative z-10 text-white/80 group-hover:text-white transition-colors block ${talk.link ? "" : "pointer-events-none"}`}
                  >
                    {talk.title}
                    {talk.link && (
                      <span className="ml-2 inline-block text-purple-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </span>
                    )}
                  </a>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* 수상 내역 */}
          <Section title="수상 내역" delay={0.8}>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-r from-purple-500/10 to-transparent border-l-2 border-purple-500 pl-4 py-3 rounded-r-lg"
                >
                  <p className="text-white/80">
                    <span className="font-semibold text-purple-300">{award.split(",")[0]}</span>
                    <span>{", " + award.split(",")[1]}</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* 학력 */}
          <Section title="학력" delay={0.9}>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0 bg-white/5 p-5 rounded-lg border border-white/10"
              >
                <div>
                  <h3 className="text-lg font-semibold text-white">{edu.school}</h3>
                  <p className="text-white/60">{edu.major}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-sm">{edu.period}</span>
              </motion.div>
            ))}
          </Section>
        </motion.div>

        {/* 바닥글 */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-20 pt-8 border-t border-white/10 text-center text-white/40 text-sm"
        >
          <p>© 2025 심상현 • Last Updated: 2025.03</p>
        </motion.footer>
      </div>
    </div>
  );
};

export default Resume;
