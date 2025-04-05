import React, { CSSProperties } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Smartphone, Monitor, Store, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";

// 이미지 임포트 추가
import nightaryImg from "../assets/nightary.png";
import mayBeCleanImg from "../assets/may_be_clean.png";
import easyImageDownloaderImg from "../assets/easy_image_downloader.png";
import pickiverseImg from "../assets/pickiverse.png";
import payBotImg from "../assets/pay_bot.png";
import qrMakerImg from "../assets/qr_maker.png";
import multiWindowImg from "../assets/multi_window.png";
import daitssuImg from "../assets/daitssu.png";

// 프로젝트 타입 정의
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageStyle?: CSSProperties;
  containerStyle?: CSSProperties;
  isVertical?: boolean; // 세로로 긴 이미지인지 여부
  tech: string[];
  links: Record<string, string>;
  longDescription: string;
  features: string[];
  challenges?: string; // 프로젝트를 진행하면서 겪은 고민과 해결 과정
}

export const projects: Project[] = [
  {
    id: "pickiverse",
    title: "피키버스",
    description: "이상형 월드컵 플랫폼",
    image: pickiverseImg,
    containerStyle: { backgroundColor: "white" },
    tech: ["Flutter", "iOS", "Android", "Web", "Firebase"],
    links: {
      ios: "https://apps.apple.com/kr/app/%ED%94%BC%ED%82%A4%EB%B2%84%EC%8A%A4/id6742077036?uo=2",
      android: "https://play.google.com/store/apps/details?id=com.pickiverse.app",
      web: "https://pickiverse.com",
    },
    longDescription: `
      피키버스는 사용자들이 자신만의 이상형 월드컵을 쉽게 만들고 공유할 수 있는 플랫폼입니다.
      다양한 주제의 이상형 월드컵을 즐길 수 있으며, 친구들과 함께 결과를 공유하며 즐길 수 있습니다.

      Flutter 프레임워크를 활용하여 iOS, Android, 웹 모두에서 동일한 사용자 경험을 제공하는 크로스 플랫폼 앱으로 개발했습니다.
      Firebase를 백엔드로 활용하여 실시간 데이터 동기화, 사용자 인증, 스토리지 등의 기능을 구현했습니다.
      
      부드러운 애니메이션과 직관적인 인터페이스로 사용자들이 쉽게 접근하고 이용할 수 있도록 설계했으며,
      사용자들의 피드백을 지속적으로 반영하여 기능을 개선하고 있습니다.
    `,
    challenges: `
      피키버스를 개발하면서 가장 큰 고민은 다양한 플랫폼(iOS, Android, 웹)에서 일관된 사용자 경험을 제공하는 것이었습니다.
      특히 이상형 월드컵의 핵심인 이미지 전환 애니메이션을 모든 플랫폼에서 부드럽게 구현하는 데 많은 시간을 투자했습니다.
      
      초기에는 성능 최적화 문제로 웹에서 이미지 로딩 속도와 애니메이션 프레임 드롭 현상이 발생했습니다.
      이를 해결하기 위해 이미지 프리로딩, 캐싱 전략, 그리고 GPU 가속을 활용한 렌더링 최적화를 적용했습니다.
      
      또한 사용자 생성 콘텐츠를 관리하는 과정에서 부적절한 콘텐츠 필터링 문제가 있었습니다.
      이를 위해 Firebase Cloud Functions를 활용한 이미지 분석 및 필터링 시스템을 구축하여 해결했습니다.
      
      마지막으로 멀티플랫폼 배포 과정에서 각 플랫폼별 요구사항과 제약조건을 맞추는 것이 도전적이었습니다.
      특히 iOS App Store와 Google Play Store의 심사 기준을 모두 충족시키기 위해 여러 차례 앱 구조를 재설계해야 했습니다.
    `,
    features: [
      "다양한 이상형 월드컵 템플릿 제공",
      "사용자 커스텀 이상형 월드컵 생성",
      "실시간 결과 공유 및 통계",
      "크로스 플랫폼 지원 (iOS/Android/Web)",
      "소셜 로그인 및 계정 연동",
    ],
  },
  {
    id: "paybot",
    title: "정산봇",
    description: "Slack 봇으로 정산을 간편하게",
    image: payBotImg,
    tech: ["Slack API", "Bolt.js", "Node.js", "MongoDB", "nginx"],
    links: {
      slack: "https://slack.com/marketplace/A087W0YSC7N-",
    },
    longDescription: `
      정산봇은 Slack 워크스페이스 내에서 팀원들 간의 정산을 간편하게 도와주는 봇 서비스입니다.
      회식, 선물, 식사 등 다양한 상황에서 발생하는 복잡한 정산 과정을 Slack 메시지만으로 손쉽게 진행할 수 있습니다.

      Slack API와 Bolt.js 프레임워크를 활용하여 개발되었으며, 사용자가 '/계좌등록' 명령어를 통해 자신의 계좌를 안전하게 등록하고
      '/정산하기' 명령어로 특정 유저와 1/N로 정산 요청을 할 수 있습니다. 정산 요청 시 자동으로 대상 유저에게 DM을 보내
      요청자의 계좌 정보와 함께 토스 송금 페이지로 바로 이동할 수 있는 링크를 제공합니다.
      
      Node.js 기반 서버는 nginx를 통해 홈서버에 배포되었으며, MongoDB를 데이터베이스로 활용하여 
      사용자의 계좌 정보를 암호화하여 안전하게 저장하고 정산 내역을 체계적으로 관리합니다.
      반복적이고 귀찮은 정산 과정을 자동화하여 팀 협업 시 발생하는 금전적 문제를 
      투명하고 효율적으로 해결할 수 있도록 돕습니다.
    `,
    challenges: `
      1. 해당 서비스를 배포하고 싶었지만, 추가적인 서버를 AWS나 클라우드 서비스를 대여하고 싶지 않았습니다.
      과연 클라우드 서비스로 배포를 했을 때 많은 사용자가 사용하는지, 가용성이 그만큼 중요한지에 대해서 고민을 하였고, 결국 홈서버로 띄우도록 하였습니다.
      홈서버로 작동하니, 공유기에서 포트포워딩, https로 통신하기 위해 certbot과 nginx를 통해 서버 설정을 하는 등 작은 문제들이 많았습니다.

      2. 처음에는 모든 데이터를 메모리에 저장하고, 메모리에 없으면 계좌 등록을 요청하였더니 홈서버가 꺼지거나 새로운 버전을 배포할 때마다 데이터가 초기화되는 문제가 있었습니다.
      이를 해결하기 위해서는 데이터베이스를 사용하는 것이 필수적이었는데, 서버용 컴퓨터가 포맷되거나 천재지변이 발생하더라도 다시 복구할 수 있도록 클라우드 서비스를 사용하고자 하였습니다.
      AWS RDSB를 처음에 사용할까 생각하였는데, 비싼 RDS를 대신하여 MongoDB Atlas를 사용하여 무료로 데이터를 저장하고 관리하고자 하였습니다.
      저장되는 값은 AES-256 알고리즘을 통해 암호화하였고, 이를 통해 데이터베이스가 외부에 노출되어도 개인 정보를 암호화하여 피해를 최소화할 수 있었습니다.
    `,
    features: [
      "'/계좌등록' 명령어로 계좌 정보 암호화 저장",
      "'/정산하기' 명령어로 특정 유저와 1/N 정산 요청",
      "정산 요청 시 자동 DM 발송 기능",
      "토스 송금 페이지 자동 연동",
      "암호화된 계좌 정보 관리 시스템",
    ],
  },
  {
    id: "may-be-clean",
    title: "깨끗해질지도",
    description: "소비로서 친환경을 실천할 수 있게 도와주는 서비스",
    image: mayBeCleanImg,
    isVertical: true,
    tech: ["Flutter", "iOS", "Android", "Firebase", "Google Maps API"],
    links: {
      ios: "https://apps.apple.com/kr/app/%EA%B9%A8%EB%81%97%ED%95%B4%EC%A7%88%EC%A7%80%EB%8F%84/id6449622294",
      android: "https://play.google.com/store/apps/details?id=com.may_be_clean.plant",
      github: "https://github.com/May-Be-Clean",
    },
    longDescription: `
      깨끗해질지도는 친환경 소비를 실천할 수 있는 장소들을 지도 기반으로 제공하는 모바일 애플리케이션입니다.
      제로웨이스트 상점, 친환경 제품 판매점, 리필스테이션, 비건 식당 등 지속 가능한 소비를 할 수 있는 장소들을 쉽게 찾을 수 있습니다.

      Flutter를 활용하여 개발되었으며, Google Maps API를 통합하여 사용자의 현재 위치 기반으로 주변의 친환경 장소들을 탐색할 수 있습니다.
      Firebase를 백엔드로 활용하여 실시간 데이터 업데이트, 사용자 인증, 장소 리뷰 및 평가 기능 등을 구현했습니다.
      
      사용자들이 직접 친환경 장소를 등록하고 리뷰할 수 있는 커뮤니티 기능을 통해 지속적으로 데이터베이스를 확장하고 있으며,
      친환경 소비에 대한 정보와 팁을 제공하여 사용자들의 환경 의식을 높이는 데 기여하고 있습니다.
    `,
    features: [
      "지도 기반 친환경 장소 탐색",
      "카테고리 및 거리별 필터링",
      "사용자 리뷰 및 평가 시스템",
      "새로운 친환경 장소 등록 기능",
      "친환경 소비 가이드 및 정보 제공",
    ],
  },
  {
    id: "nightary",
    title: "Nightary",
    description: "수면 상태를 배터리 형태로 보여주는 수면 측정 트래커",
    image: nightaryImg,
    tech: ["Flutter", "Health API", "Firebase", "Local Storage"],
    links: {
      github: "https://github.com/GDSC-snowflowerthon/Nightary-team12-mobile",
    },
    longDescription: `
      Nightary는 사용자의 수면 패턴을 분석하고 수면 상태를 배터리 형태로 시각화하여 보여주는 수면 측정 트래커 앱입니다.
      Google 개발자 학생 클럽(GDSC) 해커톤에서 개발된 이 앱은 사용자가 자신의 수면 상태를 직관적으로 파악하고 개선할 수 있도록 도와줍니다.

      Flutter를 기반으로 개발되었으며, 스마트폰의 센서 데이터와 사용자 입력을 분석하여 수면의 질과 양을 측정합니다.
      배터리 시각화 기능을 통해 사용자는 자신의 수면 상태를 에너지 레벨로 쉽게 이해할 수 있으며,
      수면 패턴에 따른 맞춤형 조언을 받아 건강한 수면 습관을 형성할 수 있습니다.
      
      다양한 수면 데이터를 기록하고 분석하는 기능을 제공하며, 수면 목표 설정 및 알림 기능을 통해
      사용자가 규칙적인 수면 습관을 유지할 수 있도록 도와줍니다.
    `,
    features: [
      "배터리 형태의 직관적인 수면 상태 시각화",
      "수면 패턴 분석 및 통계",
      "맞춤형 수면 개선 조언",
      "수면 목표 설정 및 알림",
      "야간 모드 및 수면 환경 최적화 기능",
    ],
  },
  {
    id: "da-it-ssu",
    title: "다잇슈",
    description: "숭실대 학생들을 위한 모든 서비스",
    image: daitssuImg,
    tech: ["Flutter", "Firebase", "Node.js", "RESTful API"],
    links: {
      github: "https://github.com/DaITssu",
    },
    longDescription: `
      다잇슈는 숭실대학교 학생들을 위한 종합 서비스 앱으로, 학교 생활에 필요한 다양한 기능을 한 곳에 모았습니다.
      강의 정보, 식단표, 학사 일정, 공지사항 등 학교 생활에 필요한 정보를 손쉽게 확인할 수 있습니다.

      숭실대학교 학생들로 구성된 개발팀이 직접 기획하고 개발한 이 앱은 학생들의 실제 니즈를 반영하여 설계되었습니다.
      Flutter를 사용하여 크로스 플랫폼 앱으로 개발되었으며, Firebase를 백엔드로 활용하여 실시간 데이터 업데이트와 사용자 인증을 구현했습니다.
      
      학교 공식 API 및 웹크롤링을 통해 최신 정보를 제공하며, 강의평가, 학교 시설 예약, 동아리 정보 등
      학생들의 캠퍼스 라이프를 더욱 편리하게 만들어주는 다양한 기능을 지속적으로 개발하고 있습니다.
    `,
    features: [
      "실시간 학사 일정 및 공지사항 알림",
      "강의 정보 검색 및 강의평가",
      "학교 식당 메뉴 및 운영 시간 정보",
      "캠퍼스 지도 및 시설 안내",
      "학생 커뮤니티 및 정보 공유 기능",
    ],
  },
  {
    id: "easy-image-downloader",
    title: "Easy Image Downloader",
    description: "이미지 손쉽게 다운로드 할 수 있는 Chrome Extension",
    image: easyImageDownloaderImg,
    tech: ["JavaScript", "Chrome Extension API", "HTML", "CSS"],
    links: {
      store: "https://chromewebstore.google.com/detail/easy-image-downloader/lnldmkhkjnkcfndnhibbnaohplecldmb?authuser=0&hl=ko",
      youtube: "https://www.youtube.com/watch?v=iLoTBTHKjzk&ab_channel=HALFMOON",
    },
    longDescription: `
      Easy Image Downloader는 웹 페이지 내의 이미지를 손쉽게 다운로드할 수 있는 크롬 확장 프로그램입니다.
      복잡한 과정 없이 원클릭으로 웹페이지의 이미지를 빠르게 저장할 수 있으며, 여러 이미지를 한 번에 다운로드하는 기능도 제공합니다.

      순수 JavaScript와 Chrome Extension API를 활용하여 개발되었으며, 불필요한 광고나 추적 코드 없이 가볍고 빠른 성능을 자랑합니다.
      웹페이지의 모든 이미지를 자동으로 감지하여 크기, 해상도, 파일 형식별로 분류하여 보여주며,
      사용자는 원하는 이미지만 선택하여 다운로드할 수 있습니다.
      
      이미지 해상도 필터링, 파일명 커스터마이징, 저장 경로 설정 등 다양한 옵션을 제공하여
      사용자가 필요에 맞게 이미지를 관리할 수 있도록 도와줍니다.
    `,
    features: [
      "원클릭 이미지 다운로드",
      "페이지 내 모든 이미지 자동 감지",
      "이미지 해상도 및 크기별 필터링",
      "다중 이미지 일괄 다운로드",
      "맞춤형 저장 경로 및 파일명 설정",
    ],
  },
  {
    id: "qr-maker",
    title: "QR Maker",
    description: "광고 없는 QR코드 생성기",
    image: qrMakerImg,
    tech: ["React", "Next.js", "QR Code API", "PWA"],
    links: {
      web: "https://www.qrmaker.site/",
      github: "https://github.com/halfmoon-mind/qr-maker",
    },
    longDescription: `
      QR Maker는 불필요한 광고 없이 빠르고 쉽게 QR 코드를 생성할 수 있는 웹 애플리케이션입니다.
      URL, 텍스트, 연락처, Wi-Fi 정보 등 다양한 데이터 유형의 QR 코드를 생성할 수 있으며, 커스텀 디자인 옵션도 제공합니다.

      React와 Next.js를 기반으로 개발되었으며, PWA(Progressive Web App)로 구현되어 오프라인에서도 사용 가능하고
      모바일 기기에서도 앱처럼 설치하여 사용할 수 있습니다.
      
      사용자 친화적인 인터페이스와 빠른 로딩 속도로 몇 번의 클릭만으로 고품질 QR 코드를 생성할 수 있으며,
      색상 커스터마이징, 오류 수정 레벨 조정, 다양한 출력 형식(PNG, SVG, PDF) 지원 등 
      전문적인 QR 코드 생성에 필요한 다양한 기능을 무료로 제공합니다.
    `,
    features: [
      "다양한 데이터 유형 QR 코드 생성 (URL, 텍스트, 연락처, Wi-Fi 등)",
      "커스텀 색상 및 디자인 옵션",
      "고해상도 이미지 다운로드 (PNG, SVG, PDF)",
      "오프라인 지원 (PWA)",
      "광고 없는 깨끗한 사용자 경험",
    ],
  },
  {
    id: "multiple-window-connection",
    title: "Multiple Window Connection",
    description: "여러 개의 웹브라우저가 동적으로 연결되는 시스템",
    image: multiWindowImg,
    tech: ["JavaScript", "WebSocket", "HTML5", "CSS3"],
    links: {
      web: "https://mutliple-windows.s3.ap-northeast-2.amazonaws.com/index.html",
      github: "https://github.com/halfmoon-mind/multiple-window-connection",
    },
    longDescription: `
      Multiple Window Connection은 여러 웹 브라우저 창이 실시간으로 데이터를 주고받을 수 있는 시스템입니다.
      웹소켓 기술을 활용하여 여러 디스플레이나 기기에 분산된 창들 간의 실시간 동기화를 구현했습니다.

      순수 JavaScript와 WebSocket 프로토콜을 기반으로 개발되었으며, 서버를 통한 실시간 양방향 통신으로
      여러 창 간의 데이터와 상태를 즉각적으로 동기화합니다.
      
      이 시스템은 다중 모니터 프레젠테이션, 분산형 대시보드, 협업 작업 환경 등 다양한 용도로 활용할 수 있으며,
      창 간의 콘텐츠 이동, 드래그 앤 드롭 상호작용, 동시 편집 등의 기능을 지원합니다.
      브라우저 창을 연결하는 간단한 아이디어로 시작했지만, 웹 기반 협업 도구와 분산 UI 시스템의 
      가능성을 보여주는 실험적 프로젝트입니다.
    `,
    features: [
      "실시간 창 간 데이터 동기화",
      "드래그 앤 드롭으로 창 간 콘텐츠 이동",
      "자동 창 배치 및 관리",
      "다중 사용자 지원",
      "화면 분할 및 동기화 뷰",
    ],
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
    case "youtube":
      return <Youtube size={20} />;
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
    case "youtube":
      return "데모 영상";
    default:
      return "링크";
  }
};

const Projects = () => {
  return (
    <>
      <Meta
        title="프로젝트 | 심상현 (Eddy) | 풀스택 개발자 & 플러터 엔지니어"
        description="심상현(Eddy)의 주요 개발 프로젝트 모음입니다. 다양한 기술스택과 플랫폼을 활용한 프로젝트를 확인하세요."
        keywords="프로젝트, Flutter, React, 모바일 앱, 웹 애플리케이션, 포트폴리오"
      />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen pt-20 pb-20 px-4 max-w-6xl mx-auto">
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
                  <div
                    className={`relative overflow-hidden h-48 flex items-center justify-center ${
                      project.id === "pickiverse" ? "bg-white" : "bg-gray-700/30"
                    }`}
                    style={project.containerStyle}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`transform group-hover:scale-110 transition-transform duration-500 ${
                        project.isVertical ? "h-full object-contain" : "w-full object-contain"
                      }`}
                      style={project.imageStyle}
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
    </>
  );
};

export default Projects;
