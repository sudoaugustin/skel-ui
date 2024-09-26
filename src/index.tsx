import React from "react";

type RootProps = {
  children: React.ReactNode;
  isLoading: boolean;
};

type ItemProps<T extends React.ElementType = "p"> = {
  as?: T;
  children: React.ReactNode | (() => React.ReactNode);
} & Omit<React.ComponentPropsWithoutRef<T>, "children">;

const IsLoadingContext = React.createContext(false);

function SkeletoRoot({ isLoading, children }: RootProps) {
  return <IsLoadingContext.Provider value={isLoading}>{children}</IsLoadingContext.Provider>;
}

function SkeletoItem<T extends React.ElementType = "p">({ as, children, ...props }: ItemProps<T>) {
  const isLoading = React.useContext(IsLoadingContext);
  const Component = as || "p";

  return <Component {...props}>{isLoading ? null : typeof children === "function" ? children() : children}</Component>;
}

export default { Root: SkeletoRoot, Item: SkeletoItem };
