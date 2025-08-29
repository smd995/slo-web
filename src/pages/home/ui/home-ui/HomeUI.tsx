import { LogOut, User } from "lucide-react";

interface HomeUIProps {
  isLoggined: boolean;
  likeCount: number;
}

export const HomeUI = ({ isLoggined, likeCount }: HomeUIProps) => {
  return (
    // Home-page
    <div className="home-page min-h-screen flex flex-col">
      <a href="#main-content" className="sr-only focus:not-sr-only">
        메인 콘텐츠로 바로가기
      </a>
      {/* Header */}
      <header
        className="site-header bg-primary-600 flex h-[60px] items-center flex-shrink-0"
        role="banner"
      >
        <div className="header-container mx-auto flex h-[60px] w-full max-w-[1200px] items-center justify-between px-4">
          {/* Header.Left */}
          <div className="header-left flex items-center gap-3.5 sm:gap-7">
            {/* Header.Logo */}
            <h1 className="logo">
              <a href="/" aria-label="홈으로 이동">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 719.32 396.03"
                  fill={"#FFFFFF"}
                  height={22}
                  style={{ width: "auto" }}
                  role="img"
                  aria-label="SLO 로고"
                >
                  <path d="M192.3,262.05c-13.53-13.72-61.31-21.72-81.41-28.09C53.94,215.93,9.88,186.77,12.61,120.16,17.12,10.27,152.7-20.26,235.68,25.18c18.08,9.9,41.1,26.88,33.45,50.49-2.36,7.3-13.86,21.22-20,26-18.45,14.38-30.47-1-48.21-7.74-24.44-9.29-62.22-15.45-84.18,2.35-12.17,9.87-15.61,29.1-6.06,41.89,13.47,18.03,61.2,25.43,82.97,32.03,52,15.75,92.83,41.39,95.04,100.96,4.51,121.52-144.64,141.57-231.72,101.72-41.71-19.09-76.54-48.53-24.23-84.59,20.48-14.12,25.73-2.51,42.61,7.22,28.6,16.48,82.43,33.16,111.22,10.61,12.84-10.05,17.87-31.75,5.73-44.06Z" />
                  <path d="M566.45,106.99l11.7-.28c155.5,5.01,178.17,230.41,35.27,274.25-62.31,19.12-131.99-10.21-161.31-68.22-45.48-89.98,12.45-200.36,114.34-205.75ZM565.43,177.97c-75.78,8.59-70.42,144.58,12.71,137.71,79.96-6.61,74.11-147.55-12.71-137.71Z" />
                  <path d="M395.31,375.34c-2.38,2.23-6.89,4-10.15,4.36-9.43,1.03-35.72,1.18-44.91-.09-6.12-.84-11.93-5.35-13.54-11.46l-.07-338.97c.54-5.12,5.55-9.67,10.61-10.39,8.84-1.25,43.18-1.37,51.84-.03,5.73.89,9.76,5.95,10.48,11.52l-.84,339.98c-.99,1.51-2.18,3.91-3.42,5.08Z" />
                </svg>
              </a>
            </h1>
            {/* Header.Navigation */}
            <nav
              className="main-navigation"
              role="navigation"
              aria-label="주 메뉴"
            >
              <ul className=" flex items-center gap-3 sm:gap-6">
                <li>
                  <a href="/" aria-label="모임 찾기">
                    <div className="flex h-[60px] cursor-pointer items-center text-sm font-semibold transition text-white hover:text-white/80 active:text-white/60">
                      모임찾기
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/liked" aria-label={`찜한 모임, 총 ${likeCount}개`}>
                    <div className="group flex h-[60px] cursor-pointer items-center text-sm font-semibold transition text-white hover:text-white/80 active:text-white/60">
                      <span>찜한모임</span>
                      {likeCount > 0 && (
                        <span className="count inline-flex ml-2 h-5 items-center justify-center rounded-full px-[7px] text-xs transition text-secondary-900 font-semibold bg-white group-hover:bg-white/20 group-hover:text-white active:bg-white/10 active:text-white">
                          {likeCount}
                        </span>
                      )}
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/reviews" aria-label="모든 리뷰">
                    <div className="flex h-[60px] cursor-pointer items-center text-sm font-semibold transition text-white hover:text-white/80 active:text-white/60">
                      모든리뷰
                    </div>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Header.Right */}
          <div className="header-right">
            {!isLoggined ? (
              <a href="/login" className="login-button" aria-label="로그인">
                <div className="cursor-pointer text-sm font-semibold transition text-white hover:text-white/80 active:text-white/60">
                  로그인
                </div>
              </a>
            ) : (
              <div className="user-menu">
                {/* 드롭다운 메뉴 */}
                <div className="relative inline-block text-left" id="dropdown">
                  <button
                    type="button"
                    aria-label="사용자 메뉴 열기"
                    aria-expanded="false"
                    aria-haspopup="menu"
                    className="avatar-button"
                  >
                    <img
                      src="/image/avatar.png"
                      alt="사용자 아바타"
                      className="avatar h-10 w-10 cursor-pointer"
                    />
                  </button>

                  <div
                    id="dropdown-list"
                    className="absolute z-10 right-0 w-full mt-2 bg-white rounded-xl shadow-xl overflow-hidden min-w-[120px]"
                  >
                    <button
                      className="dropdown-option flex items-center gap-2 w-full px-3 py-2 text-sm text-left hover:bg-secondary-100 text-secondary-900 h-10"
                      data-value="option1"
                    >
                      <User size={16} />
                      <span>마이페이지</span>
                    </button>
                    <hr className="border-t border-gray-200" />
                    <button
                      className="dropdown-option flex items-center gap-2 w-full px-3 py-2 text-sm text-left text-red-600 hover:bg-secondary-100 h-10"
                      data-value="option2"
                    >
                      <LogOut size={16} />
                      <span>로그아웃</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main
        id="main-content"
        role="main"
        className="main-content flex-1 flex flex-col"
      >
        <div className="fixed-sections flex-shrink-0">
          {/* 페이지 헤더 */}
          <header className="page-header mb-8 flex items-center gap-6">
            {/* 페이지 헤더 아이콘 */}
            <div className="page-header-icon-area bg-primary-50 flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-2 border-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="48"
                viewBox="0 0 53 48"
                fill="none"
              >
                <path
                  d="M26.7016 2.32927C26.3764 2.34799 26.1206 2.48404 25.784 2.81301L25.3211 3.27475L24.8256 2.51676C24.4026 1.85501 24.2789 1.74081 23.827 1.66642C22.8719 1.49968 22.3737 2.36507 22.6204 3.74399C22.7574 4.4515 23.3778 5.92605 24.0819 7.11129L24.5141 7.86037L24.8509 7.6067C25.2599 7.29867 26.6059 5.68163 27.1674 4.82514C27.9872 3.58563 27.7436 2.26092 26.7016 2.32927ZM26.2186 4.76681C25.8402 5.31572 25.3025 6.0035 25.0169 6.27514C24.5179 6.76406 24.4938 6.78218 24.2674 6.48145C23.914 6.01231 23.3051 4.22752 23.2464 3.49878C23.1996 2.68568 23.4488 2.29063 23.991 2.33472C24.491 2.37286 24.5605 2.49019 24.716 3.44764C24.7832 3.88723 24.9227 4.34776 25.0314 4.49211C25.1854 4.6966 25.2516 4.68442 25.495 4.40684C25.6483 4.23486 26.0631 3.80936 26.4328 3.4743L27.1093 2.87058L27.0138 3.31953C26.9691 3.56057 26.609 4.20884 26.2186 4.76681Z"
                  fill="black"
                />
                <path
                  d="M21.4885 8.67716C21.2106 8.84327 20.9312 9.18974 20.7835 9.62144C20.5557 10.287 20.5254 10.3168 20.1368 10.0431C19.4012 9.55024 18.6808 9.42422 18.1912 9.73895C16.8377 10.5818 17.7568 12.1825 20.7232 14.1422C21.4947 14.6474 22.2369 15.0622 22.3813 15.0513C22.7482 15.0362 23.6475 12.3499 23.6998 11.0818C23.7738 9.33879 22.5996 8.07281 21.4885 8.67716ZM22.5546 11.4333C22.4825 12.1722 22.3068 13.0967 22.1652 13.5104C21.9251 14.212 21.9009 14.2238 21.4702 13.9558C20.4771 13.3346 19.3312 12.2793 18.9872 11.6993C18.2039 10.4064 18.9738 9.62497 19.8844 10.7806C20.7174 11.8695 20.9204 12.0395 21.203 12.0357C21.3654 12.031 21.4927 11.8938 21.4824 11.6893C21.463 11.0999 21.8296 9.61781 22.0725 9.31914C22.3031 9.05645 22.3329 9.08675 22.5094 9.56915C22.6154 9.84656 22.6446 10.7005 22.5546 11.4333Z"
                  fill="black"
                />
                <path
                  d="M42.3647 12.4713C40.5838 12.8331 38.4133 14.1409 37.5228 15.3653C37.1054 15.9496 36.4654 17.174 36.1593 18.0645L35.575 19.7063L34.3228 18.621C31.7905 16.367 28.98 15.7549 26.5591 16.9514C23.6095 18.3706 22.9138 22.7394 24.973 26.9412C25.9469 28.9447 29.62 32.6179 32.1523 34.1205C35.3802 36.0127 37.662 36.764 40.222 36.7919C42.1977 36.7919 42.6151 36.7084 43.9508 35.9849C44.7856 35.5118 46.177 34.4544 47.0396 33.5918C53.2171 27.4977 54.7198 18.4262 50.184 14.4192C48.2918 12.7774 45.0082 11.9426 42.3647 12.4713ZM47.5405 13.8348C49.8223 15.0035 50.991 16.9792 51.1579 19.9845C51.4084 24.4368 49.4327 29.2508 45.9265 32.8405C43.6726 35.1223 42.0029 36.0962 40.3333 36.124C36.048 36.1519 28.6461 31.0317 26.4478 26.5516C24.973 23.602 24.9452 20.2628 26.3643 18.5654C28.1731 16.4227 30.2044 16.5897 32.9036 19.0941C33.7941 19.9289 34.7402 20.9585 34.9906 21.4037C35.9924 23.1011 36.9107 22.7394 37.1054 20.5689C37.4115 16.9236 39.6377 14.0853 42.7264 13.2783C43.9508 12.9444 46.3717 13.2505 47.5405 13.8348Z"
                  fill="black"
                />
                <path
                  d="M40.1521 23.8685C39.8276 23.965 39.6963 24.2618 39.7513 24.7036C39.8751 25.6977 40.6656 25.5152 40.6522 24.5073C40.656 23.8619 40.556 23.7341 40.1521 23.8685Z"
                  fill="black"
                />
                <path
                  d="M35.7314 24.4991C35.4123 24.6122 35.2965 24.9153 35.3742 25.3537C35.549 26.3401 36.329 26.1171 36.2638 25.1113C36.2343 24.4665 36.1278 24.3441 35.7314 24.4991Z"
                  fill="black"
                />
                <path
                  d="M41.7176 27.0972C41.6141 26.9722 41.145 27.1313 40.7082 27.4494C39.7282 28.1365 38.0968 28.3284 36.8896 27.9027C35.8661 27.5417 35.4849 27.7024 35.499 28.4155C35.5146 29.0406 37.4998 29.7702 38.7176 29.58C40.4556 29.3372 42.2858 27.8286 41.7176 27.0972Z"
                  fill="black"
                />
                <path
                  d="M8.63317 22.0991C10.2972 21.3688 12.8248 21.1873 14.258 21.6751C14.9358 21.9122 16.1644 22.5443 16.9276 23.0958L18.351 24.101L18.7493 22.4926C19.5205 19.1914 21.4651 17.0719 24.1332 16.6551C27.3617 16.1158 30.4473 19.2859 31.1849 23.9067C31.5431 26.1054 30.657 31.2238 29.4529 33.9109C27.9047 37.3172 26.4725 39.2459 24.396 40.7435C22.7811 41.8818 22.3919 42.054 20.8833 42.2321C19.9284 42.3264 18.182 42.2637 16.9799 42.0556C8.41973 40.6335 1.96526 34.0844 3.36412 28.1961C3.9649 25.764 6.16783 23.1899 8.63317 22.0991ZM5.1882 26.1954C3.99646 28.4653 4.17941 30.7535 5.77434 33.3061C8.13467 37.0895 12.523 39.8861 17.4569 40.8002C20.6138 41.3667 22.5395 41.2009 23.9203 40.2618C27.439 37.8157 30.5393 29.3663 29.755 24.4379C29.2612 21.1773 27.3601 18.4319 25.2222 17.8621C22.5094 17.1528 20.9452 18.4596 20.1818 22.0616C19.935 23.257 19.7548 24.6436 19.8066 25.1518C19.9657 27.1164 19.0067 27.3497 17.5971 25.6879C15.2468 22.8847 11.792 21.8472 8.8024 22.9671C7.60926 23.3996 5.80682 25.0445 5.1882 26.1954Z"
                  fill="black"
                />
                <path
                  d="M17.0098 30.1402C17.3306 30.0322 17.6089 30.1991 17.8185 30.5919C18.29 31.4757 17.5387 31.7819 16.969 30.9505C16.5941 30.4251 16.6022 30.2631 17.0098 30.1402Z"
                  fill="black"
                />
                <path
                  d="M20.9836 28.1088C21.3095 28.0173 21.5788 28.1984 21.7679 28.6015C22.1933 29.5084 21.4272 29.7755 20.9011 28.9158C20.5537 28.3718 20.5702 28.2104 20.9836 28.1088Z"
                  fill="black"
                />
                <path
                  d="M17.59 33.6805C17.6026 33.5187 18.0777 33.3784 18.618 33.3868C19.8148 33.3839 21.2589 32.6008 22.0003 31.5574C22.629 30.6727 23.0331 30.5844 23.4324 31.1754C23.7798 31.6954 22.5775 33.4354 21.4725 33.9815C19.9121 34.7843 17.547 34.6057 17.59 33.6805Z"
                  fill="black"
                />
              </svg>
            </div>
            {/* 페이지 헤더 텍스트 */}
            <div className="page-header-text-area flex flex-col justify-center">
              <p className="text-secondary-700">함께 할 사람이 없나요?</p>
              <h3 className="text-secondary-900 text-lg leading-none font-semibold sm:text-2xl mt-2">
                지금 모임에 참여해보세요
              </h3>
            </div>
          </header>

          {/* 카테고리 필터 & 모임 만들기 버튼 */}
          <section
            className="filter-section flex justify-between"
            aria-labelledby="filter-heading"
          >
            {/* 카테고리 필터 */}
            <div>
              <h3 id="filter-heading" className="sr-only">
                카테고리 필터
              </h3>
              {/* 큰 카테고리 */}
              <div
                className="main-categories flex gap-3"
                role="tablist"
                aria-label="주요 카테고리"
              >
                <button
                  role="tab"
                  aria-selected="true"
                  aria-controls="subcategory-food-tour"
                  id="tab-food-tour"
                  className="category-tab border-b-2 cursor-pointer h-10 text-lg text-secondary-900 border-secondary-900 font-semibold"
                >
                  맛집투어
                </button>
                <button
                  role="tab"
                  aria-selected="false"
                  aria-controls="subcategory-oneday"
                  id="tab-oneday"
                  className="category-tab text-secondary-400 border-transparent"
                >
                  원데이클래스
                </button>
              </div>
              {/* 하위 카테고리 */}
              <div
                id="subcategory-food-tour"
                role="tabpanel"
                aria-labelledby="tab-food-tour"
                className="subcategories mt-2.5 flex gap-2 sm:mt-3.5"
              >
                <fieldset>
                  <legend className="sr-only">맛집 투어 하위 카테고리</legend>
                  <div className="subcategory-options flex gap-2">
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="subcategory"
                        value="all"
                        defaultChecked
                        className="sr-only"
                      />
                      <span className="block rounded-xl transition px-3 py-2 text-sm sm:px-4 sm:py-[10px] bg-gray-900 text-white ">
                        전체
                      </span>
                    </label>
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="subcategory"
                        value="food"
                        className="sr-only"
                      />
                      <span className="block rounded-xl transition px-3 py-2 text-sm sm:px-4 sm:py-[10px] bg-secondary-200 text-secondary-900">
                        음식
                      </span>
                    </label>
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="subcategory"
                        value="cafe"
                        className="sr-only"
                      />
                      <span className="block rounded-xl transition px-3 py-2 text-sm sm:px-4 sm:py-[10px] bg-secondary-200 text-secondary-900">
                        카페
                      </span>
                    </label>
                  </div>
                </fieldset>
              </div>
            </div>

            {/* 모임 만들기 버튼 - 모달 처리 */}
            <div className="create-meeting-wrapper">
              <a href="/meetings/create" className="create-meeting-button">
                <span className="flex items-center justify-center rounded-xl font-medium transition-colors bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 h-11 px-6 text-sm">
                  모임 만들기
                </span>
              </a>
            </div>
          </section>

          {/* 구분선 */}
          <p
            className="text-gray-500 dark:text-gray-400"
            aria-hidden="true"
          ></p>
          <hr
            className="section-divider h-0.5 my-4 bg-gray-200 border-0 dark:bg-gray-700"
            aria-hidden="true"
          />
          <p
            className="text-gray-500 dark:text-gray-400"
            aria-hidden="true"
          ></p>

          {/* 추가 필터 */}
          <section
            className="additional-filters"
            aria-labelledby="additional-filters-heading"
          >
            <h3 id="additional-filters-heading" className="sr-only">
              추가 필터
            </h3>
            <div className="filter-group flex w-full items-center justify-between">
              {/* filter-group left */}
              <div className="filter-group-left flex gap-2">
                {/* 지역 필터 드롭다운 */}
                <div className="dropdown-container relative inline-block text-left w-28">
                  <button
                    id="region-trigger"
                    className="dropdown-trigger flex cursor-pointer items-center justify-between rounded-xl px-3 py-2 text-sm h-10 text-secondary-800 border-secondary-100 border-2 bg-white focus:ring-0 focus:outline-none"
                    aria-haspopup="listbox"
                    aria-expanded="false"
                    aria-controls="region-list"
                    aria-describedby="region-description"
                    aria-label="지역 필터 선택"
                  >
                    <span className="dropdown-text truncate inline-block">
                      지역 전체
                    </span>
                    <span className="ml-2">
                      <svg
                        className="transform"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M12.7151 15.4653C12.3975 15.7654 11.9008 15.7654 11.5832 15.4653L5.8047 10.006C5.26275 9.49404 5.6251 8.58286 6.37066 8.58286H17.9276C18.6732 8.58286 19.0355 9.49404 18.4936 10.006L12.7151 15.4653Z"
                          fill="#000000"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    id="region-list"
                    className="dropdown-list absolute z-10 mt-2 w-full min-w-[110px] overflow-hidden rounded-xl bg-white shadow-xl"
                    role="listbox"
                    aria-labelledby="region-trigger"
                    aria-activedescendant=""
                  >
                    <button
                      className="dropdown-option text-secondary-800 hover:bg-secondary-100 h-10 w-full cursor-pointer text-left text-sm px-4 py-2"
                      data-value=""
                      role="option"
                      aria-selected="true"
                      id="region-option-all"
                    >
                      지역 전체
                    </button>
                    <button
                      className="dropdown-option text-secondary-800 hover:bg-secondary-100 h-10 w-full cursor-pointer text-left text-sm px-4 py-2"
                      data-value="konkuk-university"
                      role="option"
                      aria-selected="false"
                      id="region-option-konkuk"
                    >
                      건대입구
                    </button>
                    <button
                      className="dropdown-option text-secondary-800 hover:bg-secondary-100 h-10 w-full cursor-pointer text-left text-sm px-4 py-2"
                      data-value="euljiro-3ga"
                      role="option"
                      aria-selected="false"
                      id="region-option-euljiro"
                    >
                      을지로3가
                    </button>
                    <button
                      className="dropdown-option text-secondary-800 hover:bg-secondary-100 h-10 w-full cursor-pointer text-left text-sm px-4 py-2"
                      data-value="sillim"
                      role="option"
                      aria-selected="false"
                      id="region-option-sillim"
                    >
                      신림
                    </button>
                    <button
                      className="dropdown-option text-secondary-800 hover:bg-secondary-100 h-10 w-full cursor-pointer text-left text-sm px-4 py-2"
                      data-value="hongik-university"
                      role="option"
                      aria-selected="false"
                      id="region-option-hongik"
                    >
                      홍대입구
                    </button>
                  </div>
                  <div id="region-description" className="sr-only">
                    지역별로 결과를 필터링할 수 있습니다
                  </div>
                </div>

                {/* 날짜 필터 드롭다운 */}
                <div className="dropdown-container relative inline-block text-left w-28">
                  <button
                    id="date-trigger"
                    className="dropdown-trigger flex cursor-pointer items-center justify-between rounded-xl px-3 py-2 text-sm h-10 text-secondary-800 border-secondary-100 border-2 bg-white focus:ring-0 focus:outline-none"
                    aria-haspopup="dialog"
                    aria-expanded="true"
                    aria-controls="date-picker"
                    aria-label="날짜 필터 선택"
                  >
                    <span className="dropdown-text truncate inline-block">
                      날짜 전체
                    </span>
                    <span className="ml-2">
                      <svg
                        className="transform"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M12.7151 15.4653C12.3975 15.7654 11.9008 15.7654 11.5832 15.4653L5.8047 10.006C5.26275 9.49404 5.6251 8.58286 6.37066 8.58286H17.9276C18.6732 8.58286 19.0355 9.49404 18.4936 10.006L12.7151 15.4653Z"
                          fill="#000000"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    id="date-picker"
                    className="absolute z-50 mt-2 left-0 border-secondary-200 rounded-xl border bg-white shadow-lg p-4 w-72"
                    role="dialog"
                    aria-labelledby="date-trigger"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <button
                        type="button"
                        className="hover:bg-secondary-100 rounded p-1 transition-colors"
                      >
                        <svg
                          className="h-4 w-4 rotate-90"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>
                      <h3 className="font-semibold">2025년 8월</h3>
                      <button
                        type="button"
                        className="hover:bg-secondary-100 rounded p-1 transition-colors"
                      >
                        <svg
                          className="h-4 w-4 -rotate-90"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>
                    </div>

                    <div className="mb-2 grid grid-cols-7 gap-1">
                      <div className="text-secondary-600 py-2 text-center text-sm font-medium">
                        월
                      </div>
                      <div className="text-secondary-600 py-2 text-center text-sm font-medium">
                        화
                      </div>
                      <div className="text-secondary-600 py-2 text-center text-sm font-medium">
                        수
                      </div>
                      <div className="text-secondary-600 py-2 text-center text-sm font-medium">
                        목
                      </div>
                      <div className="text-secondary-600 py-2 text-center text-sm font-medium">
                        금
                      </div>
                      <div className="text-secondary-600 py-2 text-center text-sm font-medium">
                        토
                      </div>
                      <div className="text-secondary-600 py-2 text-center text-sm font-medium">
                        일
                      </div>
                    </div>

                    <div className="grid grid-cols-7 gap-1 mb-4">
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-400">
                        28
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-400">
                        29
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-400">
                        30
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-400">
                        31
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-900 hover:bg-secondary-100">
                        1
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-900 hover:bg-secondary-100">
                        2
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-900 hover:bg-secondary-100">
                        3
                      </button>

                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-900 hover:bg-secondary-100">
                        4
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-900 hover:bg-secondary-100">
                        5
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-900 hover:bg-secondary-100">
                        6
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-900 hover:bg-secondary-100">
                        7
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-900 hover:bg-secondary-100">
                        8
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-900 hover:bg-secondary-100">
                        9
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-900 hover:bg-secondary-100">
                        10
                      </button>

                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-900 hover:bg-secondary-100">
                        11
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-900 hover:bg-secondary-100">
                        12
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-900 hover:bg-secondary-100">
                        13
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-900 hover:bg-secondary-100">
                        14
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-900 hover:bg-secondary-100">
                        15
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-900 hover:bg-secondary-100">
                        16
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-900 hover:bg-secondary-100">
                        17
                      </button>

                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-900 hover:bg-secondary-100">
                        18
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-900 hover:bg-secondary-100">
                        19
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-900 hover:bg-secondary-100">
                        20
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-900 hover:bg-secondary-100">
                        21
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-900 hover:bg-secondary-100">
                        22
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-900 hover:bg-secondary-100">
                        23
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-900 hover:bg-secondary-100">
                        24
                      </button>

                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-900 hover:bg-secondary-100">
                        25
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-900 hover:bg-secondary-100">
                        26
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-900 hover:bg-secondary-100">
                        27
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-900 hover:bg-secondary-100">
                        28
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors bg-primary-100 text-primary-900 font-semibold">
                        29
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-900 hover:bg-secondary-100">
                        30
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-900 hover:bg-secondary-100">
                        31
                      </button>

                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-400">
                        1
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-400">
                        2
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-400">
                        3
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-400">
                        4
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-400">
                        5
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-400">
                        6
                      </button>
                      <button className="h-8 w-8 rounded-lg text-sm transition-colors text-secondary-400">
                        7
                      </button>
                    </div>

                    <div className="flex gap-2 pt-2 border-t border-secondary-100">
                      <button
                        type="button"
                        className="flex-1 px-3 py-2 text-sm text-secondary-600 hover:bg-secondary-50 rounded-lg transition-colors"
                      >
                        전체
                      </button>
                      <button
                        type="button"
                        className="flex-1 px-3 py-2 text-sm bg-primary-600 text-white hover:bg-primary-700 rounded-lg transition-colors"
                      >
                        오늘
                      </button>
                    </div>
                  </div>
                  <div id="date-picker" className="sr-only">
                    날짜 선택 다이얼로그가 여기에 위치합니다
                  </div>
                </div>
              </div>

              {/* filter-group right */}
              <div className="dropdown-container relative inline-block text-left w-28">
                <button
                  id="sort-trigger"
                  className="dropdown-trigger flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm h-10 text-secondary-800 border-secondary-100 border-2 bg-white focus:ring-0 focus:outline-none"
                  aria-haspopup="listbox"
                  aria-expanded="false"
                  aria-controls="sort-list"
                  aria-label="정렬 방식 선택"
                >
                  <svg
                    data-testid="SortIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="14"
                    viewBox="0 0 20 14"
                    fill="none"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 6L5 2M5 2L9 6M5 2V12"
                      stroke="#000000"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M19 8L15 12M15 12L11 8M15 12V2"
                      stroke="#000000"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="dropdown-text">최신순</span>
                </button>
                <div
                  id="sort-list"
                  className="dropdown-list absolute z-10 mt-2 w-full min-w-[110px] overflow-hidden rounded-xl bg-white shadow-xl"
                  role="listbox"
                  aria-labelledby="sort-trigger"
                  aria-activedescendant="sort-option-latest"
                >
                  <button
                    className="dropdown-option selected text-secondary-800 hover:bg-secondary-100 h-10 w-full cursor-pointer text-left text-sm px-4 py-2"
                    data-value="latest"
                    role="option"
                    aria-selected="true"
                    id="sort-option-latest"
                  >
                    <div>최신순</div>
                  </button>
                  <button
                    className="dropdown-option text-secondary-800 hover:bg-secondary-100 h-10 w-full cursor-pointer text-left text-sm px-4 py-2"
                    data-value="deadline"
                    role="option"
                    aria-selected="false"
                    id="sort-option-deadline"
                  >
                    마감임박순
                  </button>
                  <button
                    className="dropdown-option text-secondary-800 hover:bg-secondary-100 h-10 w-full cursor-pointer text-left text-sm px-4 py-2"
                    data-value="participants"
                    role="option"
                    aria-selected="false"
                    id="sort-option-participants"
                  >
                    참여인원순
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* 모임 리스트 */}
        <section
          className="meetings-section"
          aria-labelledby="meetings-heading"
        >
          <h3 id="meetings-heading" className="meetings-title sr-only">
            모임 목록
          </h3>

          <div className="mt-6 flex flex-col gap-4">
            <article className="border-secondary-100 relative flex cursor-pointer overflow-hidden rounded-3xl border-2 bg-white transition flex-col sm:flex-row hover:ring-primary-200 hover:shadow-lg hover:ring-2">
              <div className="relative h-[156px] w-full sm:w-72 sm:flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=200&fit=crop"
                  alt="React 스터디 모임"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-2 py-1 bg-heart-base text-white text-xs font-semibold rounded-lg">
                  D-3
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between gap-6 overflow-hidden p-4 sm:gap-0 sm:pt-4 sm:pr-4 sm:pb-4 sm:pl-6">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex min-w-0 flex-col gap-2">
                    <header className="flex min-w-0 items-center">
                      <h3 className="text-secondary-900 min-w-0 truncate text-lg font-semibold">
                        React 심화 스터디
                      </h3>
                      <span className="text-secondary-500 mx-2 flex-shrink-0 text-sm sm:text-lg">
                        |
                      </span>
                      <p className="text-secondary-700 min-w-0 truncate">
                        강남역
                      </p>
                    </header>

                    <div className="flex items-center gap-2">
                      <span className="info-chip-date px-2 py-1 rounded-lg text-xs font-medium">
                        9월 2일
                      </span>
                      <span className="info-chip-time px-2 py-1 rounded-lg text-xs font-medium">
                        19:00
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <button className="flex size-11 items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                      <svg
                        className="h-6 w-6 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="flex items-end justify-between gap-6">
                  <div className="flex flex-1 flex-col gap-2">
                    <div className="flex items-center gap-3 text-sm text-secondary-700">
                      <div className="flex items-center gap-1">
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                        <span className="font-medium">8/12</span>
                      </div>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                        모집중
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full transition-all duration-300"></div>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="text-primary-600 flex items-center gap-1 text-sm font-semibold">
                      <span>Join now</span>
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="border-secondary-100 relative flex cursor-pointer overflow-hidden rounded-3xl border-2 bg-white transition flex-col sm:flex-row hover:ring-primary-200 hover:shadow-lg hover:ring-2">
              <div className="relative h-[156px] w-full sm:w-72 sm:flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop"
                  alt="TypeScript 워크샵"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-2 py-1 bg-gray-500 text-white text-xs font-semibold rounded-lg">
                  마감
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between gap-6 overflow-hidden p-4 sm:gap-0 sm:pt-4 sm:pr-4 sm:pb-4 sm:pl-6">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex min-w-0 flex-col gap-2">
                    <header className="flex min-w-0 items-center">
                      <h3 className="text-secondary-900 min-w-0 truncate text-lg font-semibold">
                        TypeScript 워크샵
                      </h3>
                      <span className="text-secondary-500 mx-2 flex-shrink-0 text-sm sm:text-lg">
                        |
                      </span>
                      <p className="text-secondary-700 min-w-0 truncate">
                        홍대입구
                      </p>
                    </header>

                    <div className="flex items-center gap-2">
                      <span className="info-chip-date px-2 py-1 rounded-lg text-xs font-medium">
                        8월 30일
                      </span>
                      <span className="info-chip-time px-2 py-1 rounded-lg text-xs font-medium">
                        14:00
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <button className="flex size-11 items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                      <svg
                        className="h-6 w-6 text-red-400"
                        fill="currentColor"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="flex items-end justify-between gap-6">
                  <div className="flex flex-1 flex-col gap-2">
                    <div className="flex items-center gap-3 text-sm text-primary-500">
                      <div className="flex items-center gap-1 text-primary-500">
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                        <span className="font-medium">15/15</span>
                      </div>
                      <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded">
                        마감
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full transition-all duration-300"></div>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="text-primary-400 text-sm font-semibold">
                      Closed
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="border-secondary-100 relative flex cursor-pointer overflow-hidden rounded-3xl border-2 bg-white transition flex-col sm:flex-row hover:ring-primary-200 hover:shadow-lg hover:ring-2">
              <div className="relative h-[156px] w-full sm:w-72 sm:flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=400&h=200&fit=crop"
                  alt="Vite 빌드 최적화"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-2 py-1 bg-orange-500 text-white text-xs font-semibold rounded-lg">
                  D-7
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between gap-6 overflow-hidden p-4 sm:gap-0 sm:pt-4 sm:pr-4 sm:pb-4 sm:pl-6">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex min-w-0 flex-col gap-2">
                    <header className="flex min-w-0 items-center">
                      <h3 className="text-secondary-900 min-w-0 truncate text-lg font-semibold">
                        Vite 빌드 최적화 워크샵
                      </h3>
                      <span className="text-secondary-500 mx-2 flex-shrink-0 text-sm sm:text-lg">
                        |
                      </span>
                      <p className="text-secondary-700 min-w-0 truncate">
                        판교역
                      </p>
                    </header>

                    <div className="flex items-center gap-2">
                      <span className="info-chip-date px-2 py-1 rounded-lg text-xs font-medium">
                        9월 5일
                      </span>
                      <span className="info-chip-time px-2 py-1 rounded-lg text-xs font-medium">
                        15:30
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <button className="flex size-11 items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                      <svg
                        className="h-6 w-6 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="flex items-end justify-between gap-6">
                  <div className="flex flex-1 flex-col gap-2">
                    <div className="flex items-center gap-3 text-sm text-gray-700">
                      <div className="flex items-center gap-1 text-secondary-700">
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                        <span className="font-medium">5/10</span>
                      </div>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                        모집중
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary-500 h-2 rounded-full transition-all duration-300"></div>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="text-primary-600 flex items-center gap-1 text-sm font-semibold">
                      <span>Join now</span>
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="border-secondary-100 relative flex cursor-pointer overflow-hidden rounded-3xl border-2 bg-white transition flex-col sm:flex-row pointer-events-none">
              <div className="relative h-[156px] w-full sm:w-72 sm:flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop"
                  alt="웹 개발 부트캠프"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between gap-6 overflow-hidden p-4 sm:gap-0 sm:pt-4 sm:pr-4 sm:pb-4 sm:pl-6">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex min-w-0 flex-col gap-2">
                    <header className="flex min-w-0 items-center">
                      <h3 className="text-secondary-900 min-w-0 truncate text-lg font-semibold">
                        웹 개발 부트캠프
                      </h3>
                      <span className="text-secondary-500 mx-2 flex-shrink-0 text-sm sm:text-lg">
                        |
                      </span>
                      <p className="text-secondary-700 min-w-0 truncate">
                        선릉역
                      </p>
                    </header>

                    <div className="flex items-center gap-2">
                      <span className="info-chip-date px-2 py-1 rounded-lg text-xs font-medium">
                        8월 25일
                      </span>
                      <span className="info-chip-time px-2 py-1 rounded-lg text-xs font-medium">
                        10:00
                      </span>
                    </div>
                  </div>

                  <button className="bg-heart-base pointer-events-auto z-30 flex size-11 shrink-0 items-center justify-center rounded-full">
                    <svg
                      className="h-6 w-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16l-4-4m0 0l4-4m-4 4h18"
                      ></path>
                    </svg>
                  </button>
                </div>

                <div className="flex items-end justify-between gap-6">
                  <div className="flex flex-1 flex-col gap-2">
                    <div className="flex items-center gap-3 text-sm text-primary-500">
                      <div className="flex items-center gap-1 text-primary-500">
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                        <span className="font-medium">20/20</span>
                      </div>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                        종료
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-400 h-2 rounded-full transition-all duration-300"></div>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="text-primary-400 text-sm font-semibold">
                      Closed
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[rgba(0,0,0,0.8)] text-center">
                <p className="text-center leading-5 text-white">
                  종료된 챌린지예요,
                  <br />
                  다음 기회에 만나요 🙏
                </p>
              </div>
            </article>

            <div className="flex min-h-[300px] flex-col items-center justify-center text-center text-gray-500">
              <p className="leading-lg">
                아직 모임이 없어요.
                <br />
                지금 바로 모임을 만들어보세요!
              </p>
            </div>
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
