import { ComponentPropsWithoutRef, createContext, createElement, ElementType, ReactNode, useContext } from "react";

type SkelRootProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  isLoading: boolean;
} & Omit<ComponentPropsWithoutRef<T>, "children">;

export type SkelItemProps<T extends ElementType> = { sw?: string; sh?: string; radius?: string } & Omit<
  ComponentPropsWithoutRef<T>,
  "children"
> & { children?: ReactNode | (() => ReactNode) };

const IsLoadingContext = createContext(false);

export const SkelProvider = ({ children }: { children: ReactNode }) => {
  return <IsLoadingContext.Provider value={false}>{children}</IsLoadingContext.Provider>;
};

export const createSkelRoot =
  <D extends ElementType>(ele: D) =>
  <T extends ElementType = D>({ as, children, isLoading = true, ...rest }: SkelRootProps<T>) => {
    const Component = as || ele;
    const conditionalProps = typeof ele === "string" ? { "data-loading": isLoading } : {};

    return (
      <IsLoadingContext.Provider value={isLoading}>
        {/* @ts-ignore */}
        <Component {...rest} {...conditionalProps} aria-hidden={isLoading}>
          {children}
        </Component>
      </IsLoadingContext.Provider>
    );
  };

export const createSkelItem =
  (isWeb = true) =>
  <T extends ElementType>(type: T, isVoid = false, slotElement?: ElementType) =>
  ({ sw, sh, radius, style, children, ...props }: SkelItemProps<T>) => {
    const isLoading = useContext(IsLoadingContext);

    const $style = isWeb
      ? { ...style, "--skel-ui-width": sw, "--skel-ui-height": sh, "--skel-ui-radius": radius }
      : style;

    return createElement(
      slotElement ? (isLoading ? slotElement : type) : type,
      {
        ...props,
        style: $style,
        ...(type === "img" ? { src: "" } : {}),
        ...(isWeb ? { "data-loading": isLoading, "data-skel-item": true } : {}),
      },
      isVoid ? undefined : isLoading ? " ‌ " : typeof children === "function" ? children() : children,
    );
  };

// biome-ignore lint/suspicious/noExplicitAny: Using unknown has issues with iterable objects and calling methods
export const generatePlaceholder = <T = { [k: string]: any }>(length: number, primary: string) => {
  return Array(length)
    .fill(null)
    .map((_, index) => ({ [primary]: `skel-ui-id-${index}` }) as T);
};
