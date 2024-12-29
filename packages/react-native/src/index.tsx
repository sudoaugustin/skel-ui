import { IsLoadingContext, SkelComponentProps, SkelRoot } from "@skel-ui/core";
import type { ComponentProps, ComponentType, ReactNode } from "react";
import React from "react";
import * as ReactNative from "react-native";
import { Animation, UIOptions, UIOptionsContext } from "./Animation";

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

function SkelProvider({
  color,
  radius,
  shimmer,
  children,
  animation,
  skelUIPulse,
}: UIOptions & { children: ReactNode }) {
  const value = React.useMemo(
    () => ({ color, radius, shimmer, animation, skelUIPulse }),
    [color, radius, shimmer, animation, skelUIPulse],
  );

  return <UIOptionsContext.Provider value={value}>{children}</UIOptionsContext.Provider>;
}

function SkelItem<T extends ComponentType<ComponentProps<T>>>({
  component,
  ...rest
}: { component: T } & ComponentProps<T> & Pick<SkelComponentProps<T>, "sw" | "sh" | "sr">) {
  return createSkelComponent(component)(rest as never);
}

// function SkelAnimationConfig({
//   children,
//   ...animationOptions
// }: Exclude<UIOptions["animation"], { component: ReactNode }> & {
//   children: ReactNode;
// }) {
//   const options = useContext(UIOptionsContext);
//   const newOptions = useMemo(
//     () => ({ ...options, animation: { ...options, ...animationOptions } }),
//     [options, animationOptions],
//   );

//   return <UIOptionsContext.Provider value={newOptions}>{children}</UIOptionsContext.Provider>;
// }

export const Root = SkelRoot;
export const Item = SkelItem;
export const Provider = SkelProvider;
// export const AnimationConfig = SkelAnimationConfig;

export const View = createSkelComponent(ReactNative.View);
export const Text = createSkelComponent(ReactNative.Text);
export const Image = createSkelComponent(ReactNative.Image);
export const Button = createSkelComponent(ReactNative.Button);
export const Pressable = createSkelComponent(ReactNative.Pressable);
export const TextInput = createSkelComponent(ReactNative.TextInput);
export const TouchableOpacity = createSkelComponent(ReactNative.TouchableOpacity);
export const TouchableHighlight = createSkelComponent(ReactNative.TouchableHighlight);
export const TouchableWithoutFeedback = createSkelComponent(ReactNative.TouchableWithoutFeedback);

// TODO: Build a new component that will wrap the UIOptions for list to set different animation options.
