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

import { HomeUI } from "./home-ui/HomeUI";

const Home = () => {
  return <HomeUI isLoggined={false} likeCount={0}></HomeUI>;
};

export default Home;
