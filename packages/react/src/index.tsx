"use client";
import { IsLoadingContext, SkelComponentProps, SkelRoot } from "@skel-ui/core";
import type { ComponentProps, ComponentType, ElementType } from "react";
import React from "react";

type SkelCustomProps<T extends ComponentType<ComponentProps<T>>> = { as: T } & ComponentProps<T> &
  Pick<SkelComponentProps<T>, "sw" | "sh" | "sr">;

function createSkelComponent<T extends ElementType>(type: T, isVoidTag = false) {
  return ({ sw, sh, sr, style, children, ...props }: SkelComponentProps<T>) => {
    const isLoading = React.useContext(IsLoadingContext);

    const loadingStyle = isLoading
      ? {
          width: sw,
          height: sh,
          borderRadius: sr,
          color: "transparent",
          cursor: "default",
          userSelect: "none",
          pointerEvents: "none",
        }
      : {};

    return React.createElement(
      type,
      {
        ...props,
        style: { ...style, ...loadingStyle },
        "aria-hidden": isLoading,
        "data-loading": isLoading,
        // Use base64 transparent image while loading to avoid broken image ui. This doesn't trigger error on other media tags.
        ...(isLoading && "src" in props && props.src === undefined
          ? {
              src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgEB/6mZBQAAAABJRU5ErkJggg==",
            }
          : {}),
      },
      isVoidTag ? undefined : isLoading && typeof type === "string" ? " ‌ " : children,
    );
  };
}

function SkelCustom<T extends ComponentType<ComponentProps<T>>>({ as, ...rest }: SkelCustomProps<T>) {
  return createSkelComponent(as)(rest as never);
}

export const Root = SkelRoot;
export const Custom = SkelCustom;

export const a = createSkelComponent("a");
export const address = createSkelComponent("address");
export const article = createSkelComponent("article");
export const aside = createSkelComponent("aside");
export const b = createSkelComponent("b");
export const br = createSkelComponent("br", true);
export const bdi = createSkelComponent("bdi");
export const bdo = createSkelComponent("bdo");
export const blockquote = createSkelComponent("blockquote");
export const button = createSkelComponent("button");
export const canvas = createSkelComponent("canvas");
export const caption = createSkelComponent("caption");
export const cite = createSkelComponent("cite");
export const code = createSkelComponent("code");
export const col = createSkelComponent("col");
export const colgroup = createSkelComponent("colgroup");
export const data = createSkelComponent("data");
export const datalist = createSkelComponent("datalist");
export const dd = createSkelComponent("dd");
export const del = createSkelComponent("del");
export const details = createSkelComponent("details");
export const dfn = createSkelComponent("dfn");
export const dialog = createSkelComponent("dialog");
export const div = createSkelComponent("div");
export const dl = createSkelComponent("dl");
export const dt = createSkelComponent("dt");
export const em = createSkelComponent("em");
export const embed = createSkelComponent("embed", true);
export const fieldset = createSkelComponent("fieldset");
export const figcaption = createSkelComponent("figcaption");
export const figure = createSkelComponent("figure");
export const footer = createSkelComponent("footer");
export const form = createSkelComponent("form");
export const h1 = createSkelComponent("h1");
export const h2 = createSkelComponent("h2");
export const h3 = createSkelComponent("h3");
export const h4 = createSkelComponent("h4");
export const h5 = createSkelComponent("h5");
export const h6 = createSkelComponent("h6");
export const header = createSkelComponent("header");
export const hgroup = createSkelComponent("hgroup");
export const hr = createSkelComponent("hr", true);
export const i = createSkelComponent("i");
export const iframe = createSkelComponent("iframe");
export const img = createSkelComponent("img", true);
export const input = createSkelComponent("input", true);
export const ins = createSkelComponent("ins");
export const kbd = createSkelComponent("kbd");
export const label = createSkelComponent("label");
export const legend = createSkelComponent("legend");
export const li = createSkelComponent("li");
export const main = createSkelComponent("main");
export const map = createSkelComponent("map");
export const mark = createSkelComponent("mark");
export const menu = createSkelComponent("menu");
export const menuitem = createSkelComponent("menuitem");
export const meter = createSkelComponent("meter");
export const nav = createSkelComponent("nav");
export const object = createSkelComponent("object");
export const ol = createSkelComponent("ol");
export const optgroup = createSkelComponent("optgroup");
export const option = createSkelComponent("option");
export const output = createSkelComponent("output");
export const p = createSkelComponent("p");
export const param = createSkelComponent("param");
export const picture = createSkelComponent("picture");
export const pre = createSkelComponent("pre");
export const progress = createSkelComponent("progress");
export const q = createSkelComponent("q");
export const rp = createSkelComponent("rp");
export const rt = createSkelComponent("rt");
export const ruby = createSkelComponent("ruby");
export const s = createSkelComponent("s");
export const samp = createSkelComponent("samp");
export const section = createSkelComponent("section");
export const select = createSkelComponent("select");
export const small = createSkelComponent("small");
export const source = createSkelComponent("source");
export const span = createSkelComponent("span");
export const strong = createSkelComponent("strong");
export const sub = createSkelComponent("sub");
export const summary = createSkelComponent("summary");
export const sup = createSkelComponent("sup");
export const table = createSkelComponent("table");
export const tbody = createSkelComponent("tbody");
export const td = createSkelComponent("td");
export const textarea = createSkelComponent("textarea");
export const tfoot = createSkelComponent("tfoot");
export const th = createSkelComponent("th");
export const thead = createSkelComponent("thead");
export const time = createSkelComponent("time");
export const tr = createSkelComponent("tr");
export const track = createSkelComponent("track");
export const u = createSkelComponent("u");
export const ul = createSkelComponent("ul");
export const video = createSkelComponent("video");
export const wbr = createSkelComponent("wbr", true);
export const webview = createSkelComponent("webview");
