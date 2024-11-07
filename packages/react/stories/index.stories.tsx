import type { Meta } from "@storybook/react";
import Skel, { generatePlaceholder } from "../src";
import "../src/styles.css";
import { Image, PostCard, PostCardAnimations, PostCardList } from "./components";
import { usePosts } from "./hooks";

export default {
  title: "Skel",
  component: Skel.Root,
} satisfies Meta<typeof Skel.Root>;

export { PostCard, PostCardList, PostCardAnimations };
