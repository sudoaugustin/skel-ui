import React from "react";

type As<T> = React.ElementType | React.JSXElementConstructor<T>;

type RootProps = {
  children: React.ReactNode;
  isLoading: boolean;
};

type ItemProps<T extends As<T>> = {
  as?: T;
  children?: React.ReactNode | (() => React.ReactNode);
  color?: string;
  radius?: string;
} & (T extends React.ElementType ? Omit<React.ComponentPropsWithoutRef<T>, "children"> : {});

const IsLoadingContext = React.createContext(false);

function Root({ isLoading = true, children }: RootProps) {
  return <IsLoadingContext.Provider value={isLoading}>{children}</IsLoadingContext.Provider>;
}

function Item<T extends As<T>>({ as, color, radius, children, ...props }: ItemProps<T>) {
  const isLoading = React.useContext(IsLoadingContext);
  const Component = as || "p";

  return (
    <Component
      {...props}
      style={
        {
          // @ts-ignore
          ...props.style,
          "--skel-ui-color": color,
          "--skel-ui-radius": radius,
        } as React.CSSProperties
      }
      data-loading={isLoading}
    >
      {isLoading ? null : typeof children === "function" ? children() : children}
    </Component>
  );
}

export default { Root, Item };
