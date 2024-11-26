import { createSkelItem, createSkelRoot, generatePlaceholder, SkelItemProps } from "@skel-ui/core";
import React from "react";

const tags = [
  "a",
  "address",
  "article",
  "aside",
  "b",
  "bdi",
  "bdo",
  "blockquote",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "hr",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "map",
  "mark",
  "menu",
  "menuitem",
  "meter",
  "nav",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "track",
  "u",
  "ul",
  "video",
  "wbr",
  "webview",
] as const;

const voidTags = ["br", "hr", "img", "wbr", "embed", "input"];

type TElements = {
  [K in (typeof tags)[number]]: React.FunctionComponent<SkelItemProps<K>>;
};

const $createSkelItem = createSkelItem();

// function Root<T extends React.ElementType = "div">({ as, children, isLoading = true, ...rest }: SkelRootProps<T>) {
//   const Component = as || "div";
//   return (
//     <IsLoadingProvider value={isLoading}>
//       <Component {...rest} aria-hidden={isLoading} data-loading={isLoading}>
//         {children}
//       </Component>
//     </IsLoadingProvider>
//   );
// }

// function Item<T extends React.ElementType = "p">({ as, sw, sh, radius, asChild, children, ...rest }: ItemProps<T>) {
//   const isLoading = useIsLoading();
//   const component = as || "p";
//   const Component = asChild ? Slot : typeof component === "string" ? component : isLoading ? "div" : component;

//   return (
//     <Component
//       {...rest}
//       style={
//         {
//           ...rest.style,
//           "--skel-ui-width": sw,
//           "--skel-ui-height": sh,
//           "--skel-ui-radius": radius,
//         } as React.CSSProperties
//       }
//       aria-hidden={isLoading}
//       data-loading={isLoading}
//       data-skel-item
//     >
//       {isLoading && !asChild ? " ‌ " : typeof children === "function" ? children() : children}
//     </Component>
//   );
// }

function SkelItem<T extends React.ElementType>({ as, ...rest }: { as: T } & SkelItemProps<T>) {
  return $createSkelItem(as, false, "div")(rest as never);
}

const Skel = {
  Root: createSkelRoot("div"),
  Item: SkelItem,
  // HTML Native Elements
  ...(tags.reduce((eles, tag) => ({ ...eles, [tag]: $createSkelItem(tag, voidTags.includes(tag)) }), {}) as TElements),
};

export default Skel;
export { generatePlaceholder };
