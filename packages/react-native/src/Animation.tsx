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
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { TStyle, filterStyle } from "./funcs";

type UIOptions = {
  radius?: number;
  colors?: [string, string];
  animation?: { easing?: EasingFunction | EasingFunctionFactory; duration?: number } | { component: ReactNode };
  skelUIPulse?: boolean;
};

type AnimationProps = Pick<SkelComponentProps<typeof View>, "sw" | "sh" | "sr"> & {
  style?: TStyle;
  numberOfLines?: number;
};

type AnimationItemProps = {
  colors: NonNullable<UIOptions["colors"]>;
  animation: NonNullable<Exclude<UIOptions["animation"], { component: ReactNode }>>;
};

export const UIOptionsContext = createContext<UIOptions>({});

function Pluse({ colors, animation }: AnimationItemProps) {
  const opacity = useSharedValue(0.5);

  useFrameCallback(() => {
    if (opacity.value === 1) opacity.value = withTiming(0.5, animation);
    if (opacity.value === 0.5) opacity.value = withTiming(1, animation);
  });

  return (
    <Animated.View style={{ width: "100%", height: "100%", opacity, backgroundColor: colors[0] }} aria-hidden>
      <Text> ‌ </Text>
    </Animated.View>
  );
}

function Gradient({ colors, animation }: AnimationItemProps) {
  const translateX = useSharedValue("-100%");

  useEffect(() => {
    translateX.value = withRepeat(withTiming("100%", animation), -1, false);
  }, []);

  return (
    <View style={{ backgroundColor: colors[0] }}>
      <Animated.View
        style={{ width: "100%", height: "100%", transform: [{ translateX: translateX as unknown as number }] }}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ width: "100%", height: "100%" }}
          colors={[...colors, colors[0]]}
        />
      </Animated.View>
    </View>
  );
}

export function Animation({ sw, sh, sr, style = {}, numberOfLines = 1 }: AnimationProps) {
  const text = useMemo(() => new Array(numberOfLines).fill(" ‌ ").join("\n"), [numberOfLines]);
  const { viewStyle, textStyle } = filterStyle(style);
  const { colors = ["#cbd5e1", "#f1f0f0"], radius = 4, animation = {}, skelUIPulse } = useContext(UIOptionsContext);

  const isCustomAnimation = "component" in animation;
  const animationItemProps = {
    colors: colors,
    animation: { duration: skelUIPulse ? 1000 : 2000, easing: Easing.bezier(0.4, 0, 0.6, 1), ...animation },
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
        {isCustomAnimation ? (
          animation.component
        ) : skelUIPulse ? (
          <Pluse {...animationItemProps} />
        ) : (
          <Gradient {...animationItemProps} />
        )}
      </View>
    </View>
  );
}
