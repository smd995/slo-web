// Pages에 올 수 있는 로직:

// 라우팅 관련: useNavigate, useParams, useSearchParams
// 데이터 페칭 트리거: useQuery, useMutation 호출만
// 레이아웃 조합: 컴포넌트들을 배치하는 JSX만
// URL 상태 동기화: 쿼리 파라미터 ↔ 상태 연결
// 페이지 메타데이터: SEO, 타이틀 등

// Pages에 올 수 없는 로직:

// 계산/변환 로직 → 커스텀 훅으로
// 폼 검증 → 컴포넌트로
// API 호출 구현 → 서비스 함수로
// 상태 조작 로직 → 커스텀 훅으로
// 이벤트 핸들러 구현 → 컴포넌트로

import { useEffect } from "react";
import { HomeUI } from "./home-ui/HomeUI";

const Home = () => {
  useEffect(() => {
    const metaTags = [
      { name: "description", content: "Slo 서비스의 메인 페이지입니다." },
      { name: "keywords", content: "slo, 서비스, 홈" },
      { property: "og:title", content: "Slo - 홈" },
      {
        property: "og:description",
        content: "Slo 서비스의 메인 페이지입니다.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://slo.vercel.app/" },
      { property: "og:image", content: "/slo.svg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Slo - 홈" },
      {
        name: "twitter:description",
        content: "Slo 서비스의 메인 페이지입니다.",
      },
      { name: "twitter:image", content: "/slo.svg" },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const meta = document.createElement("meta");
      if (name) meta.setAttribute("name", name);
      if (property) meta.setAttribute("property", property);
      meta.setAttribute("content", content);
      meta.setAttribute("data-page", "true");
      document.head.appendChild(meta);
    });

    document.title = "Slo - 홈";

    return () => {
      const pageMetas = document.querySelectorAll('meta[data-page="true"]');
      pageMetas.forEach((meta) => meta.remove());
    };
  }, []);

  return <HomeUI isLoggined={false} likeCount={0}></HomeUI>;
};

export default Home;
