import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Smartphone, Monitor, Store } from "lucide-react";
import { Link } from "react-router-dom";

export const projects = [
  {
    id: "pickeebus",
    title: "피키버스",
    description: "이상형 월드컵 플랫폼",
    image: "https://images.unsplash.com/photo-1541877944-ac82a216a4e8?auto=format&fit=crop&w=800&q=80",
    tech: ["Flutter", "iOS", "Android", "Web"],
    links: {
      ios: "https://apps.apple.com/kr/app/%ED%94%BC%ED%82%A4%EB%B2%84%EC%8A%A4/id6742077036?uo=2",
      android: "https://play.google.com/store/apps/details?id=com.pickiverse.app",
      web: "https://pickiverse.com",
    },
    longDescription: `
      이상형 월드컵 플랫폼인 피키버스는 사용자들이 다양한 주제로 이상형 월드컵을 만들고 공유할 수 있는 서비스입니다.
      모바일과 웹 모두 지원하여 언제 어디서나 쉽게 접근할 수 있습니다.

      Flutter를 활용하여 iOS, Android, 웹에서 모두 사용 가능한 크로스 플랫폼 애플리케이션으로 개발했습니다.
      사용자 친화적인 UI와 부드러운 애니메이션으로 재미있는 사용자 경험을 제공합니다.
    `,
    features: ["다양한 이상형 월드컵 템플릿", "직접 이상형 월드컵 생성 기능", "결과 공유 기능", "크로스 플랫폼 지원 (iOS/Android/Web)"],
  },
  {
    id: "settlement-bot",
    title: "정산봇",
    description: "Slack 봇으로 정산을 간편하게",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80",
    tech: ["Slack API", "Node.js", "Database"],
    links: {
      slack: "https://slack.com/marketplace/A087W0YSC7N-",
    },
    longDescription: `
      정산봇은 Slack 내에서 간편하게 정산을 할 수 있도록 도와주는 봇 서비스입니다.
      팀 내에서 회식, 여행, 선물 등 다양한 상황에서 발생하는 정산을 Slack 메시지만으로 손쉽게 진행할 수 있습니다.

      Slack API를 활용하여 사용자 친화적인 명령어와 인터페이스를 구현했으며,
      복잡한 더치페이 계산과 분할 결제도 자동으로 처리합니다.
    `,
    features: ["간편한 정산 명령어", "자동 더치페이 계산", "정산 내역 관리", "알림 및 리마인더 기능"],
  },
  {
    id: "eco-map",
    title: "깨끗해질지도",
    description: "소비로서 친환경을 실천할 수 있게 도와주는 서비스",
    image: "https://images.unsplash.com/photo-1572204292164-b35ba943fca7?auto=format&fit=crop&w=800&q=80",
    tech: ["Flutter", "iOS", "Android", "Maps API"],
    links: {
      ios: "https://apps.apple.com/kr/app/%EA%B9%A8%EB%81%97%ED%95%B4%EC%A7%88%EC%A7%80%EB%8F%84/id6449622294",
      android: "https://play.google.com/store/apps/details?id=com.may_be_clean.plant",
      github: "https://github.com/May-Be-Clean",
    },
    longDescription: `
      깨끗해질지도는 소비를 통해 친환경을 실천할 수 있는 장소를 지도 기반으로 제공하는 모바일 애플리케이션입니다.
      제로웨이스트 상점, 친환경 제품을 판매하는 가게, 리필스테이션 등 친환경 소비가 가능한 장소를 쉽게 찾을 수 있습니다.

      Flutter를 사용하여 iOS와 Android 모두 지원하며, 사용자 위치 기반 서비스로 주변의 친환경 가게를 손쉽게 탐색할 수 있습니다.
      친환경 소비에 대한 정보와 팁도 함께 제공하여 사용자들의 지속 가능한 소비를 장려합니다.
    `,
    features: ["지도 기반 친환경 가게 탐색", "카테고리별 필터링", "사용자 리뷰 및 평가", "친환경 소비 가이드"],
  },
  {
    id: "nightary",
    title: "Nightary",
    description: "수면 상태를 배터리 형태로 보여주는 수면 측정 트래커",
    image: "https://images.unsplash.com/photo-1585645568877-e5ff21352faf?auto=format&fit=crop&w=800&q=80",
    tech: ["Flutter", "Health API", "Local Storage"],
    links: {
      github: "https://github.com/GDSC-snowflowerthon/Nightary-team12-mobile",
    },
    longDescription: `
      Nightary는 사용자의 수면 패턴을 분석하고 수면 상태를 배터리 형태로 시각화하여 보여주는 수면 측정 트래커 앱입니다.
      사용자가 자신의 수면 상태를 한눈에 파악하고 개선할 수 있도록 도와줍니다.

      스마트폰의 센서 데이터와 사용자 입력을 분석하여 수면의 질과 양을 측정하며,
      수면 패턴에 맞는 맞춤형 조언을 제공합니다. 배터리 시각화를 통해 직관적으로 수면 상태를 이해할 수 있습니다.
    `,
    features: ["배터리 형태 수면 시각화", "수면 패턴 분석", "수면 개선 알림 및 조언", "수면 통계 및 보고서"],
  },
  {
    id: "doitssue",
    title: "다잇슈",
    description: "숭실대 학생들을 위한 모든 서비스",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=800&q=80",
    tech: ["Flutter", "Firebase", "RESTful API"],
    links: {
      github: "https://github.com/DaITssu",
    },
    longDescription: `
      다잇슈는 숭실대학교 학생들을 위한 종합 서비스 앱으로, 학교 생활에 필요한 다양한 기능을 한 곳에 모았습니다.
      강의 정보, 식단표, 학사 일정, 공지사항 등 학교 생활에 필요한 정보를 손쉽게 확인할 수 있습니다.

      실시간 데이터를 제공하여 항상 최신 정보를 확인할 수 있으며, 사용자 친화적인 UI로 필요한 정보를 빠르게 찾을 수 있습니다.
      학생들의 피드백을 적극 반영하여 지속적으로 기능을 개선하고 있습니다.
    `,
    features: ["학사 일정 및 공지사항 알림", "강의 정보 및 평가", "학교 식당 메뉴 정보", "캠퍼스 지도 및 시설 안내"],
  },
  {
    id: "easy-image-downloader",
    title: "Easy Image Downloader",
    description: "이미지 손쉽게 다운로드 할 수 있는 Chrome Extension",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
    tech: ["JavaScript", "Chrome Extension API", "CSS"],
    links: {
      store: "https://chromewebstore.google.com/detail/easy-image-downloader/lnldmkhkjnkcfndnhibbnaohplecldmb?authuser=0&hl=ko",
    },
    longDescription: `
      Easy Image Downloader는 웹 페이지 내의 이미지를 손쉽게 다운로드할 수 있는 크롬 확장 프로그램입니다.
      원하는 이미지를 빠르게 찾아 다운로드할 수 있으며, 여러 이미지를 한 번에 다운로드하는 기능도 제공합니다.

      웹 브라우징 중 유용한 이미지를 발견했을 때, 복잡한 과정 없이 간단하게 저장할 수 있어 사용자의 시간을 절약해줍니다.
      이미지 해상도 확인 및 필터링 기능도 제공하여 원하는 품질의 이미지만 다운로드할 수 있습니다.
    `,
    features: ["원클릭 이미지 다운로드", "다중 이미지 일괄 다운로드", "이미지 해상도 및 크기 필터링", "커스텀 저장 경로 설정"],
  },
  {
    id: "qr-maker",
    title: "QR Maker",
    description: "광고 없는 QR코드 생성기",
    image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "QR Code API", "PWA"],
    links: {
      web: "https://www.qrmaker.site/",
      github: "https://github.com/halfmoon-mind/qr-maker",
    },
    longDescription: `
      QR Maker는 불필요한 광고 없이 빠르고 쉽게 QR 코드를 생성할 수 있는 웹 애플리케이션입니다.
      URL, 텍스트, 연락처, Wi-Fi 정보 등 다양한 데이터 유형의 QR 코드를 생성할 수 있습니다.

      사용자 친화적인 인터페이스로 몇 번의 클릭만으로 고품질 QR 코드를 생성하고 다운로드할 수 있습니다.
      PWA(Progressive Web App)로 개발되어 오프라인에서도 사용 가능하며, 모바일 기기에서도 앱처럼 사용할 수 있습니다.
    `,
    features: ["다양한 데이터 유형 QR 코드 생성", "커스텀 색상 및 디자인", "고해상도 이미지 다운로드", "광고 없는 깨끗한 UI"],
  },
  {
    id: "window-connection",
    title: "Multiple Window Connection",
    description: "여러 개의 웹브라우저가 동적으로 연결되는 시스템",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    tech: ["JavaScript", "WebSocket", "HTML5"],
    links: {
      web: "https://mutliple-windows.s3.ap-northeast-2.amazonaws.com/index.html",
      github: "https://github.com/halfmoon-mind/multiple-window-connection",
    },
    longDescription: `
      Multiple Window Connection은 여러 웹 브라우저 창이 실시간으로 데이터를 주고받을 수 있는 시스템입니다.
      여러 디스플레이에 분산된 콘텐츠를 동기화하거나, 협업 작업을 위한 다중 창 환경을 구축할 수 있습니다.

      WebSocket을 활용한 실시간 데이터 전송으로 지연 없이 모든 창에서 동일한 정보를 볼 수 있습니다.
      사용자 인터페이스 분할, 다중 모니터 프레젠테이션, 공동 작업 환경 등 다양한 용도로 활용할 수 있습니다.
    `,
    features: ["실시간 창 간 데이터 동기화", "드래그 앤 드롭으로 창 간 콘텐츠 이동", "자동 창 배치 및 관리", "다중 사용자 지원"],
  },
];

const getLinkIcon = (linkType: string) => {
  switch (linkType) {
    case "github":
      return <Github size={20} />;
    case "ios":
      return <Smartphone size={20} />;
    case "android":
      return <Smartphone size={20} />;
    case "web":
      return <Monitor size={20} />;
    case "store":
      return <Store size={20} />;
    case "slack":
      return <ExternalLink size={20} />;
    default:
      return <ExternalLink size={20} />;
  }
};

const getLinkLabel = (linkType: string) => {
  switch (linkType) {
    case "github":
      return "GitHub";
    case "ios":
      return "iOS";
    case "android":
      return "Android";
    case "web":
      return "웹사이트";
    case "store":
      return "스토어";
    case "slack":
      return "Slack";
    default:
      return "링크";
  }
};

const Projects = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen pt-20 px-4 max-w-6xl mx-auto">
      <div className="space-y-12">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="text-gray-400">제가 작업한 주요 프로젝트들입니다</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white/5 rounded-xl overflow-hidden group"
            >
              <Link to={`/projects/${project.id}`} className="block">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-white/10 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 pt-4">
                    {project.links &&
                      Object.entries(project.links).map(([linkType, url], linkIndex) => (
                        <a
                          key={linkIndex}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {getLinkIcon(linkType)}
                          <span>{getLinkLabel(linkType)}</span>
                        </a>
                      ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
