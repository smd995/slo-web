import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    // 전역 a11y 설정
    a11y: {
      // axe-core 설정
      config: {
        rules: [
          // 색상 대비 검사 활성화
          {
            id: "color-contrast",
            enabled: true,
          },
          // 포커스 순서 검사
          {
            id: "focus-order-semantics",
            enabled: true,
          },
          // ARIA 라벨 검사
          {
            id: "aria-label",
            enabled: true,
          },
          // 키보드 접근성 검사
          {
            id: "keyboard",
            enabled: true,
          },
        ],
      },
      // 검사할 요소 지정 (선택사항)
      context: "#storybook-root",
      // 수동 검사 활성화
      manual: true,
    },
  },
};

export default preview;
