import type { Meta } from "@storybook/react";
import Skel from "../src";
import "../src/styles.css";
import { PostCard, PostCardAnimations, PostCardList } from "./components";

export default {
  title: "Skel",
  component: Skel.Root,
} satisfies Meta<typeof Skel.Root>;

export { PostCard, PostCardAnimations, PostCardList };

