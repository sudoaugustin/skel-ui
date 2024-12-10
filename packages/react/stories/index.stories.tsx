import type { Meta } from "@storybook/react";
import * as Skel from "../src";
import "../src/styles.css";
import { Animations, PostCard, PostCardList } from "./components";

export default {
  title: "Skel",
  component: Skel.Root,
} satisfies Meta<typeof Skel.Root>;

export { Animations, PostCard, PostCardList };
