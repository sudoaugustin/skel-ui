import { IsLoadingContext, SkelComponentProps, SkelRoot } from "@skel-ui/core";
import type { ComponentProps, ComponentType, ContextType, ReactNode } from "react";
import React from "react";
import * as ReactNative from "react-native";
import { Animation, UIOptionsContext } from "./Animation";

function createSkelComponent<T extends React.ElementType>(type: T) {
  return ({ sw, sh, sr, children, ...props }: SkelComponentProps<T>) => {
    const isLoading = React.useContext(IsLoadingContext);

    return isLoading ? (
      <Animation
        sw={sw}
        sh={sh}
        sr={sr}
        style={{ width: props.width, height: props.height, ...props.style }}
        numberOfLines={props.numberOfLines}
      />
    ) : (
      React.createElement(type, props, children)
    );
  };
}

export function SkelProvider({
  colors,
  radius,
  children,
  animation,
  skelUIPulse,
}: ContextType<typeof UIOptionsContext> & { children: ReactNode }) {
  const value = React.useMemo(
    () => ({ colors, radius, animation, skelUIPulse }),
    [colors, radius, animation, skelUIPulse],
  );

  return <UIOptionsContext.Provider value={value}>{children}</UIOptionsContext.Provider>;
}

function SkelCustom<T extends ComponentType<ComponentProps<T>>>({
  component,
  ...rest
}: { component: T } & ComponentProps<T> & Pick<SkelComponentProps<T>, "sw" | "sh" | "sr">) {
  return createSkelComponent(component)(rest as never);
}

export const Root = SkelRoot;
export const Custom = SkelCustom;
export const Provider = SkelProvider;

export const View = createSkelComponent(ReactNative.View);
export const Text = createSkelComponent(ReactNative.Text);
export const Image = createSkelComponent(ReactNative.Image);
export const Pressable = createSkelComponent(ReactNative.Pressable);
