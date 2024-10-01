import React from "react";

type HTMLProps<T extends React.ElementType> = Omit<React.ComponentPropsWithoutRef<T>, "children">;

type RootProps<T extends React.ElementType = "div"> = {
  as?: T;
  children: React.ReactNode;
  isLoading: boolean;
} & HTMLProps<T>;

type ItemProps<T extends React.ElementType = "p"> = {
  as?: T;
  color?: string;
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

function Item<T extends React.ElementType = "p">({ as, color, radius, children, ...rest }: ItemProps<T>) {
  const isLoading = React.useContext(IsLoadingContext);
  const component = as || "p";
  const Component = typeof component === "string" ? component : isLoading ? "div" : component;

  return (
    <Component
      {...rest}
      style={
        {
          // @ts-ignore
          ...rest.style,
          "--skel-ui-color": color,
          "--skel-ui-radius": radius,
        } as React.CSSProperties
      }
      data-loading={isLoading}
    >
      {isLoading ? "‌" : typeof children === "function" ? children() : children}
    </Component>
  );
}

export function generatePlaceholder<T = { [k: string]: unknown }>(length: number, primary: string) {
  return Array(length)
    .fill(null)
    .map((_, index) => ({ [primary]: `id-${index}` }) as T);
}

const Skel = { Root, Item };

export default Skel;
