import { SkelComponentProps } from "@skel-ui/core";
import { LinearGradient } from "expo-linear-gradient";
import { ReactNode, createContext, useContext, useEffect, useMemo } from "react";
import { Text, View } from "react-native";
import Animated, {
  Easing,
  EasingFunction,
  EasingFunctionFactory,
  useFrameCallback,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { TStyle, filterStyle } from "./funcs";

type AnimationProps = Pick<SkelComponentProps<typeof View>, "sw" | "sh" | "sr"> & {
  style?: TStyle;
  numberOfLines?: number;
};

export type UIOptions = {
  color?: string;
  radius?: number;
  shimmer?: {
    color?: string;
    // direction?: "top" | "bottom" | "left" | "right";
  };
  animation?:
    | { component: ReactNode }
    | { delay?: number; easing?: EasingFunction | EasingFunctionFactory; duration?: number };
  skelUIPulse?: boolean;
};

export const UIOptionsContext = createContext<UIOptions>({});

type AnimationItemProps = Required<Omit<UIOptions, "shimmer" | "animation" | "skelUIPulse">> & {
  shimmer: Required<NonNullable<UIOptions["shimmer"]>>;
  animation: Required<NonNullable<Exclude<UIOptions["animation"], { component: ReactNode }>>>;
};

function Pluse({ color, animation }: AnimationItemProps) {
  const opacity = useSharedValue(0.5);

  useFrameCallback(() => {
    if (opacity.value === 1 || opacity.value === 0.5) {
      const { delay, ...options } = animation;
      opacity.value = withDelay(delay, withTiming(opacity.value === 1 ? 0.5 : 1, options));
    }
  });

  return (
    <Animated.View style={{ width: "100%", height: "100%", opacity, backgroundColor: color }} aria-hidden>
      <Text> ‌ </Text>
    </Animated.View>
  );
}

function Shimmer({ color, shimmer, animation }: AnimationItemProps) {
  // const isReverse = shimmer.direction === "top" || shimmer.direction === "left";
  // const isVertical = shimmer.direction === "top" || shimmer.direction === "bottom";
  // const translate = useSharedValue(isReverse ? "100%" : "-100%");
  //
  const translate = useSharedValue("-100%");

  const cords = {
    x: { start: { x: 0, y: 0 }, end: { x: 1, y: 0 } },
    y: { start: { x: 0, y: 0 }, end: { x: 0, y: 1 } },
  };

  const style = { width: "100%", height: "100%" } as const;

  useEffect(() => {
    const { delay, ...options } = animation;
    translate.value = withDelay(delay, withRepeat(withTiming("100%", options), -1, false));
    // translate.value = withDelay(delay, withRepeat(withTiming(isReverse ? "-100%" : "100%", options), -1, false));
  }, []);

  return (
    <View style={{ backgroundColor: color }}>
      <Animated.View
        style={{
          ...style,
          transform: [{ translateX: translate as unknown as number }],
          // transform: [{ [isVertical ? "translateY" : ("translateX" as never)]: translate as unknown as number }],
        }}
      >
        <LinearGradient
          {...cords.x}
          style={style}
          colors={[color, shimmer.color, color]}
          // {...cords[shimmer.direction === "left" || shimmer.direction === "right" ? "x" : "y"]}
        />
      </Animated.View>
    </View>
  );
}

export function Animation({ sw, sh, sr, style = {}, numberOfLines = 1 }: AnimationProps) {
  const text = useMemo(() => new Array(numberOfLines).fill(" ‌ ").join("\n"), [numberOfLines]);
  const { viewStyle, textStyle } = filterStyle(style);
  const { color = "#cbd5e1", radius = 4, shimmer = {}, animation = {}, skelUIPulse } = useContext(UIOptionsContext);

  const $props = {
    color,
    radius,
    shimmer: {
      color: "#f1f0f0",
      ...shimmer,
    },
    animation: {
      delay: 0,
      easing: Easing.bezier(0.4, 0, 0.6, 1),
      duration: skelUIPulse ? 1000 : 2000,
      ...animation,
    },
  };

  return (
    <View
      style={{
        ...style,
        width: (sw || viewStyle.width) as number,
        height: (sh || viewStyle.height) as number,
        borderRadius: (sr || viewStyle.borderRadius || radius) as number,
        overflow: "hidden",
        position: "relative",
        backgroundColor: undefined,
      }}
    >
      <Text style={textStyle}>{text}</Text>
      <View style={{ inset: 0, position: "absolute" }}>
        {"component" in animation ? animation.component : skelUIPulse ? <Pluse {...$props} /> : <Shimmer {...$props} />}
      </View>
    </View>
  );
}
