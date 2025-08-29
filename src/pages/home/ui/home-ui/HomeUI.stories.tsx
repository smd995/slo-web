import type { Meta, StoryObj } from "@storybook/react-vite";
import { HomeUI } from "./HomeUI";

const meta: Meta<typeof HomeUI> = {
  title: "pages/HomeUI",
  component: HomeUI,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        compoent:
          "홈페이지 UI 컴포넌트입니다. 모임 찾기, 카테고리 필터, 모임 목록 등의 기능을 제공합니다.",
      },
    },
  },
  argTypes: {
    isLoggined: {
      control: "boolean",
      description: "사용자 로그인 상태",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    likeCount: {
      control: { type: "number", min: 0, max: 999 },
      description: "찜한 모임 개수",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HomeUI>;

export const Default: Story = {};

export const LoggedInUser: Story = {
  args: {
    isLoggined: true,
    likeCount: 0,
  },
  parameters: {
    docs: {
      description: {
        story:
          "로그인한 사용자의 기본 상태입니다. 찜한 모임이 없는 상태를 보여줍니다.",
      },
    },
  },
};

export const LoggedInUserWithLikes: Story = {
  args: {
    isLoggined: true,
    likeCount: 12,
  },
  parameters: {
    docs: {
      description: {
        story:
          "로그인한 사용자가 여러 모임을 찜한 상태입니다. 찜 개수가 표시됩니다.",
      },
    },
  },
};
