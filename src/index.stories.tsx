import type { Meta } from "@storybook/react";
import React from "react";
import useSWR from "swr";
import { fetcher } from "../utils";
import Skeleto from "./index";

export default {
  title: "React Skeleto",
  component: Skeleto.Root,
} satisfies Meta<typeof Skeleto.Root>;

export const Default = () => {
  const { data: post, isLoading } = useSWR("posts/1", fetcher);

  return (
    <div className="p-4 min-h-screen flex items-center justify-center">
      <Skeleto.Root isLoading={isLoading}>
        <Skeleto.Item as="h1">{post?.title}</Skeleto.Item>
      </Skeleto.Root>
    </div>
  );
};
