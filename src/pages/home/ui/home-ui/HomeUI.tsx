interface HomeUIProps {
  isLoggined: boolean;
  likeCount: number;
}

export const HomeUI = ({ isLoggined, likeCount }: HomeUIProps) => {
  return (
    // Home-page
    <div className="home-page">
      <a href="#main-content" className="sr-only focus:not-sr-only">
        메인 콘텐츠로 바로가기
      </a>
      {/* Header */}
      <header className="site-header" role="banner">
        <div className="header-container">
          {/* Header.Left */}
          <div className="header-left">
            {/* Header.Logo */}
            <h1 className="logo">
              <a href="/" aria-label="홈으로 이동">
                로고
              </a>
            </h1>
            {/* Header.Navigation */}
            <nav
              className="main-navigation"
              role="navigation"
              aria-label="주 메뉴"
            >
              <ul>
                <li>
                  <a href="/" aria-label="모임 찾기">
                    모임 찾기
                  </a>
                </li>
                <li>
                  <a href="/liked" aria-label={`찜한 모임, 총 ${likeCount}개`}>
                    찜한 모임
                    {likeCount > 0 && (
                      <span className="count" aria-label={`${likeCount}개`}>
                        {likeCount}
                      </span>
                    )}
                  </a>
                </li>
                <li>
                  <a href="/reviews" aria-label="모든 리뷰">
                    모든 리뷰
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Header.Right */}
          <div className="header-right">
            {!isLoggined ? (
              <a href="/login" className="login-button" aria-label="로그인">
                로그인
              </a>
            ) : (
              <div className="user-menu">
                <button
                  type="button"
                  aria-label="사용자 메뉴 열기"
                  aria-expanded="false"
                  aria-haspopup="menu"
                  className="avatar-button"
                >
                  <img
                    src="/avatar.png"
                    alt="사용자 아바타"
                    className="avatar"
                  />
                </button>
                {/* 드롭다운 메뉴 */}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" role="main" className="main-content">
        {/* 페이지 헤더 */}
        <header className="page-header">
          <h2 className="page-title">모임 찾기</h2>
          <p className="page-description">관심있는 모임을 찾아보세요</p>
        </header>

        {/* 카테고리 필터 & 모임 만들기 버튼 */}
        <section className="filter-section" aria-labelledby="filter-heading">
          <h3 id="filter-heading" className="sr-only">
            카테고리 필터
          </h3>
          {/* 큰 카테고리 */}
          <div
            className="main-categories"
            role="tablist"
            aria-label="주요 카테고리"
          >
            <button
              role="tab"
              aria-selected="true"
              aria-controls="subcategory-food-tour"
              id="tab-food-tour"
              className="category-tab active"
            >
              맛집 투어
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="subcategory-oneday"
              id="tab-oneday"
              className="category-tab"
            >
              원데이클래스
            </button>
          </div>
          {/* 하위 카테고리 */}
          <div
            id="subcategory-food-tour"
            role="tabpanel"
            aria-labelledby="tab-food-tour"
            className="subcategories"
          >
            <fieldset>
              <legend className="sr-only">맛집 투어 하위 카테고리</legend>
              <div className="subcategory-options">
                <label>
                  <input
                    type="radio"
                    name="subcategory"
                    value="all"
                    defaultChecked
                  />
                  <span>전체</span>
                </label>
                <label>
                  <input type="radio" name="subcategory" value="food" />
                  <span>음식</span>
                </label>
                <label>
                  <input type="radio" name="subcategory" value="cafe" />
                  <span>카페</span>
                </label>
              </div>
            </fieldset>
          </div>

          {/* 모임 만들기 버튼 - 모달 처리 */}
          <div className="create-meeting-wrapper">
            <a href="/meetings/create" className="create-meeting-button">
              <span>모임 만들기</span>
              <span aria-hidden="true">+</span>
            </a>
          </div>
        </section>

        {/* 구분선 */}
        <hr className="section-divider" aria-hidden="true" />

        {/* 추가 필터 */}
        <section
          className="additional-filters"
          aria-labelledby="additional-filters-heading"
        >
          <h3 id="additional-filters-heading" className="sr-only">
            추가 필터
          </h3>
          <div className="filter-group">
            {/* 지역 필터 */}
            <div className="filter-item">
              <label htmlFor="location-filter" className="filter-label">
                지역
              </label>
              <select
                id="location-filter"
                className="filter-select"
                aria-describedby="location-help"
              >
                <option value="">전체 지역</option>
                <option value="seoul">서울</option>
                <option value="busan">부산</option>
              </select>
              <span id="location-help" className="sr-only">
                모임이 열리는 지역을 선택해주세요
              </span>
            </div>

            {/* 날짜 필터 */}
            <div className="filter-item">
              <label htmlFor="date-filter" className="filter-label">
                날짜
              </label>
              <input
                type="date"
                id="date-filter"
                className="filter-input"
                aria-describedby="date-help"
              />
              <span id="date-help" className="sr-only">
                모임 날짜를 선택해주세요
              </span>
            </div>

            {/* 마감임박 필터 */}
            <div className="filter-item">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  className="filter-checkbox"
                  aria-describedby="urgent-help"
                />
                <span>마감임박</span>
              </label>
              <span id="urgent-help" className="sr-only">
                마감이 임박한 모임만 보기
              </span>
            </div>
          </div>
        </section>

        {/* 모임 리스트 */}
        <section
          className="meetings-section"
          aria-labelledby="meetings-heading"
        >
          <h3 id="meetings-heading" className="meetings-title">
            모임 목록
          </h3>
          <div className="meetings-grid" role="grid" aria-label="모임 목록">
            <div role="row">
              <div className="meeting-card" role="gridcell">
                모임 카드 내용
              </div>
              <div className="meeting-card" role="gridcell">
                모임 카드 내용
              </div>
            </div>
          </div>

          {/* 빈 상태 처리 */}
          <div className="empty-state" role="status" aria-live="polite">
            {/* 검색 결과가 없을 때 표시 */}
          </div>
        </section>

        {/* 페이지네이션 또는 무한스크롤 */}
        <nav
          className="pagination"
          role="navigation"
          aria-label="페이지 네비게이션"
        >
          {/* 페이지네이션 컨트롤 */}
        </nav>
      </main>

      {/* 푸터는 필요시 추가 */}
      <footer className="site-footer" role="contentinfo">
        {/* 푸터 내용 */}
      </footer>
    </div>
  );
};
