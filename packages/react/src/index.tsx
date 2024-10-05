import React from "react";

type HTMLProps<T extends React.ElementType> = Omit<React.ComponentPropsWithoutRef<T>, "children">;

type RootProps<T extends React.ElementType = "div"> = {
  as?: T;
  children: React.ReactNode;
  isLoading: boolean;
} & HTMLProps<T>;

type ItemProps<T extends React.ElementType = "p"> = {
  as?: T;
  width?: string;
  height?: string;
  radius?: string;
  children?: React.ReactNode | (() => React.ReactNode);
} & HTMLProps<T>;

const IsLoadingContext = React.createContext(false);

function Root<T extends React.ElementType = "div">({ as, isLoading = true, children, ...rest }: RootProps<T>) {
  const Component = as || "div";
  return (
    <IsLoadingContext.Provider value={isLoading}>
      <Component {...rest} data-loading={isLoading}>
        {children}
      </Component>
    </IsLoadingContext.Provider>
  );
}

function Item<T extends React.ElementType = "p">({
  as,
  color,
  width,
  height,
  radius,
  children,
  ...rest
}: ItemProps<T>) {
  const isLoading = React.useContext(IsLoadingContext);
  const component = as || "p";
  const Component = typeof component === "string" ? component : isLoading ? "div" : component;

  return (
    <Component
      {...rest}
      style={
        {
          ...rest.style,
          "--skel-ui-width": width,
          "--skel-ui-height": height,
          "--skel-ui-radius": radius,
        } as React.CSSProperties
      }
      data-loading={isLoading}
      data-skel-item
    >
      {isLoading ? " ‌ " : typeof children === "function" ? children() : children}
    </Component>
  );
}

// function generateString(children: unknown) {
//   const str =
//     typeof children === "object" || typeof children === "function"
//       ? "        "
//       : typeof children === "string"
//         ? children.replace(/undefined/g, " ")
//         : `${children}`;

//   return str.replace(/./g, " ‌ ");
// }

export function generatePlaceholder<T = { [k: string]: unknown }>(length: number, primary: string) {
  return Array(length)
    .fill(null)
    .map((_, index) => ({ [primary]: `skel-ui-id-${index}` }) as T);
}

const Skel = { Root, Item };

export default Skel;
