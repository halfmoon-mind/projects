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
import paybotImg from "../assets/paybot.png";
import qrMakerImg from "../assets/qr_maker.png";
import multipleWindowConnectionImg from "../assets/multiple_window_connection.png";
import daItssuImg from "../assets/da_it_ssu.png";

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
    tech: ["Flutter", "Fastlane", "Bloc", "Nest.js", "Next.js", "Cloudflare Images", "Mantine UI", "Supabase"],
    links: {
      ios: "https://apps.apple.com/kr/app/%ED%94%BC%ED%82%A4%EB%B2%84%EC%8A%A4/id6742077036?uo=2",
      android: "https://play.google.com/store/apps/details?id=com.pickiverse.app",
      web: "https://pickiverse.com",
    },
    longDescription: `
피키버스는 사용자들이 자신만의 이상형 월드컵을 쉽게 만들고 공유할 수 있는 플랫폼입니다.

다양한 주제의 이상형 월드컵을 즐길 수 있으며, 친구들과 함께 결과를 공유하며 즐길 수 있습니다.

기존 이상형 월드컵 플랫폼을 개선하여 더 간편하게 동시에 여러 이미지 업로드, 태그 기반 검색, 최근 댓글, 하루 동안 가장 많이 참여한 월드컵 등 다양한 기능을 추가하였습니다.

부드러운 애니메이션과 직관적인 인터페이스로 사용자들이 쉽게 접근하고 이용할 수 있도록 설계했으며, 사용자들의 피드백을 지속적으로 반영하여 기능을 개선하고 있습니다.
    `,
    challenges: `
#### 1. AWS S3 -> Cloudflare Images 전환

- 기존에 AWS S3를 사용해서 이미지를 저장하고 불러오도록 하였고, 이미지에 대한 제한을 따로 두지 않았습니다. 하지만 어느 유저가 용량이 50MB 이상되는 움짤 이미지를 30개 업로드하여 공유하여, S3 저장소 비용으로 1달에 32$ 이상 부가되었습니다.
- 이런 방식으로 AWS S3 비용을 감당하기 어렵다고 판단하여 이를 해결하기 위해 다른 방안 중, Cloudflare Images를 사용하도록 변경하였고 유저의 이미지 업로드 용량을 10MB로 제한하였습니다.
- 또한 image varient 기능을 활용하여 홈, 탐색 화면처럼 유저들의 고화질 이미지를 사용하는 곳에서는 낮은 해상도, 실제 게임 화면에서는 원본 해상도를 사용하도록 하여 이미지 트래픽 비용을 혁신적으로 줄일 수 있었습니다.

#### 2. 프론트엔드 속도 최적화

- Next.js를 통한 SSR을 적극적으로 사용하여 초기 렌더링 속도를 더 빠르게 하여 유저들의 빠른 게임 진행을 돕고자 하였습니다.
- 스켈레톤 로딩 애니메이션을 사용하여 유저들의 빠른 게임 진행을 돕고자 하였습니다.

#### 3. 국제화

- locale을 위한 middleware를 구현하여, 유저의 선호 언어를 통해 자동으로 리다이렉션 및 언어 설정을 하도록 하였고, i18n을 통해 각 텍스트를 1:1 매핑하여 국제화를 지원하도록 하였습니다.

#### 4. 비용 절감을 위한 노력들

- Frontend는 Vercel, Database는 Supabase를 사용하여 비용을 최소화할 수 있도록 노력하였습니다.
- 이미지 저장소를 Cloudflare Images로 전환하여 1달에 5달러로 절감하였습니다.
- AWS EC2에서 AMD 기반 cpu를 사용하는 서버로 변경하여, 기존 사용 비용에서 10% 이상 절감하였습니다. 또한 ALB를 통한 HTTP가 아닌, certbot과 nginx를 통한 HTTPS 통신을 사용하여 비용을 최소화하였습니다.

#### 5. Flutter

- 로그인 및 게임 생성 처리를 웹뷰를 활용하여, 이미 만들어진 웹 화면을 사용하여 빠르게 로그인 및 게임 생성하고, 불필요한 개발을 줄이도록 하였습니다.
- Fastlane을 통해 지속적으로 빠르게 앱 배포 및 업데이트를 진행할 수 있도록 하였습니다.
- 전세계 타겟으로 영어, 한국어 스토어 현지화를 진행하였습니다.

#### 6. 서비스 홍보

- 적은 인지도, SEO를 개선하기 위해 최대한 다양한 플랫폼(블라인드, DC, 지식in, 트위터 등)에 백링크 늘리기, 서비스 홍보용 게시글을 작성하였습니다.
- 하루에 1회 이상 이상형 월드컵을 플레이하는 헤비 유저들을 대상으로 설문조사 및 인터뷰를 진행하여 필요한 기능, 개선사항을 지속적으로 검증하고 반영하였습니다.
- PlayStore, AppStore에 있는 다른 앱들을 참고하여 키워드 및 게시글을 지속적으로 개선하고 있습니다.
    `,
    features: [
      "사용자 커스텀 이상형 월드컵 생성",
      "실시간 결과 공유 및 통계",
      "크로스 플랫폼 지원 (iOS/Android/Web)",
      "소셜 로그인 및 계정 연동",
      "국제화 지원",
      "최근 댓글, 하루 동안 가장 많이 참여한 월드컵 등 다양한 기능",
    ],
  },
  {
    id: "paybot",
    title: "정산봇",
    description: "Slack 봇으로 정산을 간편하게",
    image: paybotImg,
    tech: ["Slack API", "Bolt.js", "Node.js", "MongoDB", "nginx"],
    links: {
      slack: "https://slack.com/marketplace/A087W0YSC7N-",
    },
    longDescription: `
정산봇은 Slack 워크스페이스 내에서 팀원들 간의 정산을 간편하게 도와주는 봇 서비스입니다.
회식, 선물, 식사 등 다양한 상황에서 발생하는 복잡한 정산 과정을 Slack 메시지만으로 손쉽게 진행할 수 있습니다.

Slack API와 Bolt.js 프레임워크를 활용하여 개발되었으며, 사용자가 \`/계좌등록\` 명령어를 통해 자신의 계좌를 안전하게 등록하고
\`/정산하기\` 명령어로 특정 유저와 1/N로 정산 요청을 할 수 있습니다. 정산 요청 시 자동으로 대상 유저에게 DM을 보내
요청자의 계좌 정보와 함께 토스 송금 페이지로 바로 이동할 수 있는 링크를 제공합니다.
      
Node.js 기반 서버는 nginx를 통해 홈서버에 배포되었으며, MongoDB를 데이터베이스로 활용하여 
사용자의 계좌 정보를 암호화하여 안전하게 저장하고 정산 내역을 체계적으로 관리합니다.
반복적이고 귀찮은 정산 과정을 자동화하여 팀 협업 시 발생하는 금전적 문제를 
투명하고 효율적으로 해결할 수 있도록 돕습니다.
    `,
    challenges: `
#### 1. 배포 환경 선택의 고민

해당 서비스를 배포하고 싶었지만, 추가적인 서버를 AWS나 클라우드 서비스를 대여하고 싶지 않았습니다. 과연 클라우드 서비스로 배포를 했을 때 많은 사용자가 사용하는지, 가용성이 그만큼 중요한지에 대해서 고민을 하였고, 결국 홈서버로 띄우도록 하였습니다.

홈서버로 작동하니, 공유기에서 포트포워딩, https로 통신하기 위해 certbot과 nginx를 통해 서버 설정을 하는 등 작은 문제들이 많았습니다.

또한 Slack OAuth 로직은 무조건 도메인을 통해서 확인해야해서, 로컬에서 수정사항을 반영하였을 때 적절하게 수정되었는지 nginx 설정을 바꾸기도 하는 등 적용하기 어려운 부분도 있었습니다.

#### 2. 데이터 영속성 문제 해결

처음에는 모든 데이터를 메모리에 저장하였는데, 홈서버가 꺼지거나 새로운 버전을 배포할 때마다 데이터가 초기화되는 문제가 있었습니다.

이를 해결하기 위해서는 데이터베이스를 사용하는 것이 필수적이었는데, 서버용 컴퓨터가 포맷되거나 천재지변이 발생하더라도 다시 복구할 수 있도록 서버와 같은 컴퓨터에서 돌아가는게 아니라 클라우드 서비스를 사용하고자 하였습니다.

AWS RDS를 처음에 사용할까 생각하였는데, 비싼 RDS를 대신하여 MongoDB Atlas를 사용하여 무료로 데이터를 저장하고 관리하고자 하였습니다.

저장되는 값은 AES-256 알고리즘을 통해 암호화하였고, 이를 통해 데이터베이스가 외부에 노출되어도 개인 정보를 암호화하여 피해를 최소화할 수 있었습니다.
    `,
    features: [
      "'/계좌등록' 명령어로 계좌 정보 암호화 저장",
      "'/정산하기' 명령어로 특정 유저들과 1/N 정산 요청",
      "정산 요청 시 자동 DM 발송 기능",
      "토스 송금하기로 자동 연결, 금액 및 계좌 정보 자동 연동",
      "암호화된 계좌 정보 관리 시스템",
    ],
  },
  {
    id: "may-be-clean",
    title: "깨끗해질지도",
    description: "소비로서 친환경을 실천할 수 있게 도와주는 서비스",
    image: mayBeCleanImg,
    isVertical: true,
    tech: ["Flutter", "Google Maps API", "GetX", "Spring Boot"],
    links: {
      ios: "https://apps.apple.com/kr/app/%EA%B9%A8%EB%81%97%ED%95%B4%EC%A7%88%EC%A7%80%EB%8F%84/id6449622294",
      android: "https://play.google.com/store/apps/details?id=com.may_be_clean.plant",
      github: "https://github.com/May-Be-Clean",
    },
    longDescription: `
깨끗해질지도는 친환경 소비를 실천할 수 있는 장소들을 지도 기반으로 제공하는 모바일 애플리케이션입니다.
제로웨이스트 상점, 친환경 제품 판매점, 리필스테이션, 비건 식당 등 지속 가능한 소비를 할 수 있는 장소들을 쉽게 찾을 수 있습니다.

Flutter를 활용하여 개발되었으며, Google Maps API를 통합하여 사용자의 현재 위치 기반으로 주변의 친환경 장소들을 탐색할 수 있습니다.
실시간 데이터 업데이트, 사용자 인증, 장소 리뷰 및 평가 기능 등을 구현했습니다.

사용자들이 직접 친환경 장소를 등록하고 리뷰할 수 있는 커뮤니티 기능을 통해 지속적으로 데이터베이스를 확장하고 있으며,
친환경 소비에 대한 정보와 팁을 제공하여 사용자들의 환경 의식을 높이는 데 기여하고 있습니다.
    `,
    features: [
      "지도 기반 친환경 장소 탐색",
      "카테고리 및 거리별 필터링",
      "사용자 리뷰 및 평가 시스템",
      "사용자 주도의 친환경 가게 등록",
      "친환경 소비 가이드 및 정보 제공",
    ],
  },
  {
    id: "nightary",
    title: "Nightary",
    description: "수면 상태를 배터리 형태로 보여주는 수면 측정 트래커",
    image: nightaryImg,
    tech: ["Flutter", "HealthKit", "WidgetKit", "Local Storage"],
    links: {
      github: "https://github.com/GDSC-snowflowerthon/Nightary-team12-mobile",
    },
    longDescription: `
Nightary는 사용자의 수면 패턴을 분석하고 수면 상태를 배터리 형태로 시각화하여 보여주는 수면 측정 트래커 앱입니다.
Google Developer Student Club(GDSC) 해커톤, 눈꽃톤에서 개발된 이 앱은 사용자가 자신의 수면 상태를 직관적으로 파악하고 개선할 수 있도록 도와줍니다.

Flutter를 기반으로 개발되었으며, Apple Watch의 센서 기반으로 HealthKit을 통하여 수면의 질과 양을 측정합니다.
홈화면에서 위젯을 통한 배터리 시각화로 사용자는 자신의 수면 상태를 에너지 레벨로 쉽게 이해할 수 있으며, 수면 패턴에 따른 맞춤형 조언을 받아 건강한 수면 습관을 형성할 수 있습니다.

다양한 수면 데이터를 기록하고 분석하는 기능을 제공하며, 수면 목표 설정 및 알림 기능을 통해 사용자가 규칙적인 수면 습관을 유지할 수 있도록 도와줍니다.
    `,
    challenges: `
#### 1. 수면 데이터 수집 및 분석

- HealthKit을 통한 실제 수면 데이터를 분석해보니 수면 데이터가 연속적이지 않고, 수면 레벨이 바뀔 때마다 데이터가 끊어져 있거나 5~10분 간격으로 수면이 이어져 있는 패턴들을 확인하였습니다.
- 이를 단순하게 수면이 연속적이지 않다고 판단하는게 아니라, 끊긴 시점에서 5~10분 내로 수면이 이어져 있으면 수면이 이어져 있는 것으로 판단하여 수면 데이터를 분석하였습니다.
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
    description: "숭실대 학생들을 위한 종합 커뮤니티 서비스",
    image: daItssuImg,
    tech: ["Next.js", "React.js", "Emotion.js", "Storybook", "Spring Boot", "Python"],
    links: {
      github: "https://github.com/DaITssu",
      doc: "https://halfmoon-mind.notion.site/62aa28360b8d450d87aacefe41f2824c?pvs=4",
    },
    longDescription: `
다잇슈는 숭실대학교 학생들을 위한 종합 커뮤니티 서비스로, 학교 생활에 필요한 다양한 기능을 한 곳에 모았습니다.
강의 정보, 과제 마감일, 학식 메뉴, 학사 일정, 공지사항 등 학교 생활에 필요한 정보를 손쉽게 확인할 수 있습니다.

23명의 숭실대학교 학생들로 구성된 개발팀에서 프로젝트 리더로 참여하여 프론트엔드, 백엔드, 디자인, 인프라 팀을 총괄하며 개발을 이끌었습니다.
프론트엔드(React), 백엔드(Spring Boot, Python), 디자인 팀을 나누어 각 팀별 정기 회의와 팀장들과의 주간 회의를 통해 개발 진행을 관리했습니다.

프론트엔드 파트에 주로 참여하여 개발을 하였으며, Storybook을 통해 컴포넌트화를 진행하였고, Emotion.js를 통해 스타일링을 진행하였습니다.

학생들의 실제 니즈를 반영하여 설계된 이 서비스는 학생들의 학습 관리를 돕고, 학교 생활에 필요한 정보를 한 곳에서 확인할 수 있도록 했습니다.
학교 공식 시스템과 웹크롤링을 통해 최신 정보를 제공하며, 커뮤니티 기능을 통해 학생들 간의 소통도 원활하게 할 수 있도록 구성했습니다.
    `,
    challenges: `
#### 1. 대규모 팀 관리

- 23명의 대규모 인원으로 구성된 프로젝트를 관리하기 위해 팀별(프론트엔드, 백엔드, 디자인, 인프라) 세분화 및 주기적인 회의 시스템을 구축했습니다.
- 각 팀별로 주간 회의를 진행하고, 팀장들과 디자인팀은 최소 주 1회의 정기 회의를 통해 소통 문제를 최소화했습니다.

#### 2. 데이터 크롤링 및 연동

- 학교 공지사항, FUN 시스템, 스마트캠퍼스 등 다양한 학교 시스템으로부터 데이터를 크롤링하여 사용자에게 통합된 정보를 제공하는 시스템을 구축했습니다.
- 사용자가 원하는 키워드나 카테고리별로 구독 기능을 제공하여 맞춤형 알림 서비스를 구현했습니다.
    `,
    features: [
      "학생 인증 기반 로그인 시스템",
      "학과별/전체 공지사항 키워드 기반 구독 알림",
      "스마트캠퍼스 연동 강의 및 과제 마감일 통합 대시보드",
      "커뮤니티 게시글 및 댓글 기능",
      "학식 정보 제공",
    ],
  },
  {
    id: "easy-image-downloader",
    title: "Easy Image Downloader",
    description: "이미지 손쉽게 다운로드 할 수 있는 Chrome Extension",
    image: easyImageDownloaderImg,
    tech: ["JavaScript", "Chrome Extension API"],
    links: {
      store: "https://chromewebstore.google.com/detail/easy-image-downloader/lnldmkhkjnkcfndnhibbnaohplecldmb?authuser=0&hl=ko",
      youtube: "https://www.youtube.com/watch?v=iLoTBTHKjzk&ab_channel=HALFMOON",
    },
    longDescription: `
Easy Image Downloader는 구글 검색, 나무위키 내 이미지를 손쉽게 다운로드할 수 있는 크롬 확장 프로그램입니다.
복잡한 과정 없이 우클릭 1번만으로 웹페이지의 이미지를 빠르게 저장할 수 있으며, 이미지의 이름을 적절하게 변경하여 저장하는 기능도 제공합니다.

순수 JavaScript와 Chrome Extension API를 활용하여 개발되었으며, 불필요한 광고나 추적 코드 없이 가볍고 빠른 성능을 자랑합니다.
    `,
    features: ["원클릭 이미지 다운로드", "이미지 해상도 및 크기별 필터링", "맞춤형 저장 경로 및 파일명 설정"],
  },
  {
    id: "qr-maker",
    title: "QR Maker",
    description: "광고 없는 QR코드 생성기",
    image: qrMakerImg,
    tech: ["React", "Vite"],
    links: {
      web: "https://www.qrmaker.site/",
      github: "https://github.com/halfmoon-mind/qr-maker",
    },
    longDescription: `
QR Maker는 불필요한 광고 없이 빠르고 쉽게 QR 코드를 생성할 수 있는 웹 애플리케이션입니다.
URL, 텍스트, 연락처, Wi-Fi 정보 등 다양한 데이터 유형의 QR 코드를 생성할 수 있으며, 커스텀 디자인 옵션도 제공합니다.

사용자 친화적인 인터페이스와 빠른 로딩 속도로 몇 번의 클릭만으로 고품질 QR 코드를 생성할 수 있으며, 색상 커스터마이징 옵션을 제공하는 간편한 QR 코드 생성기입니다.

해당 서비스를 만들게된 계기는 많은 사람들이 간단한 QR 코드를 넣기 위해서 광고가 엄청 많은, 혹은 QR 코드를 인식했을 때 광고 사이트로 연결되는 서비스를 사용하고 있었기 때문입니다.

어렵지 않은 기술로 많은 사람들에게 도움을 주기 위해서 만들게 되었습니다.
    `,
    features: ["다양한 데이터 유형 QR 코드 생성 (URL, 텍스트, 연락처, Wi-Fi 등)", "커스텀 색상 및 디자인 옵션", "광고 없는 깨끗한 사용자 경험"],
  },
  {
    id: "multiple-window-connection",
    title: "Multiple Window Connection",
    description: "여러 개의 웹브라우저가 동적으로 연결되는 시스템",
    image: multipleWindowConnectionImg,
    tech: ["Flutter Web", "JavaScript", "Method Channel", "Local Storage"],
    links: {
      web: "https://mutliple-windows.s3.ap-northeast-2.amazonaws.com/index.html",
      github: "https://github.com/halfmoon-mind/multiple-window-connection",
    },
    longDescription: `
Multiple Window Connection은 여러 웹 브라우저 창이 실시간으로 연결된 선을 지속적으로 이어지게 보여주는 서비스입니다.

복잡한 기술을 통해 해당 서비스를 만든게 아니라 로컬 스토리지를 통해 각 창의 중앙점 위치를 저장하고, 각 중앙점들을 연결하도록 Canvas를 통해 구현하였습니다.

[해당 게시글](https://www.linkedin.com/feed/update/urn:li:activity:7135781966477438976/?utm_source=share&utm_medium=member_desktop)에서 영감을 받아 구현해보았습니다.
    `,
    features: ["실시간 창 간 데이터 동기화", "드래그를 통해 창 이동 시 지속적인 연결된 것처럼 보이도록 구현"],
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
    case "doc":
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
    case "youtube":
      return "데모 영상";
    case "doc":
      return "프로젝트 규칙";
    default:
      return "링크";
  }
};

const Projects = () => {
  return (
    <>
      <Meta
        title="프로젝트 | 심상현 | 풀스택 개발자 & 플러터 엔지니어"
        description="심상현의 주요 개발 프로젝트 포트폴리오입니다. Flutter, React, Firebase를 활용한 모바일 앱과 웹 애플리케이션, 크롬 확장 프로그램 등 다양한 프로젝트를 확인해보세요."
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
