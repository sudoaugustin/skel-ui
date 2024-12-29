const viewWhitelistStyles = [
  "aspectRatio",
  "bottom",
  "display",
  "flex",
  "flexBasis",
  "flexGrow",
  "flexShrink",
  "left",
  "margin",
  "marginBottom",
  "marginEnd",
  "marginHorizontal",
  "marginLeft",
  "marginRight",
  "marginStart",
  "marginTop",
  "marginVertical",
  "maxHeight",
  "maxWidth",
  "minHeight",
  "minWidth",
  "padding",
  "paddingBottom",
  "paddingEnd",
  "paddingHorizontal",
  "paddingLeft",
  "paddingRight",
  "paddingStart",
  "paddingTop",
  "paddingVertical",
  "position",
  "right",
  "top",
  "zIndex",
  "width",
  "height",
  "borderRadius",
  "borderBottomEndRadius",
  "borderBottomLeftRadius",
  "borderBottomRightRadius",
  "borderBottomStartRadius",
  "borderStartEndRadius",
  "borderStartStartRadius",
  "borderEndEndRadius",
  "borderEndStartRadius",
  "borderTopEndRadius",
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderTopStartRadius",
];

const textWhitelistStyles = ["fontFamily", "fontSize", "fontStyle", "fontWeight", "lineHeight"];

export type TStyle = { [k: string]: unknown };

export const filterStyle = (style: TStyle) => {
  const viewStyle: TStyle = {};
  const textStyle: TStyle = {};

  Object.entries(style).forEach(([name, value]) => {
    if (viewWhitelistStyles.includes(name)) {
      viewStyle[name] = value;
    } else if (textWhitelistStyles.includes(name)) {
      textStyle[name] = value;
    }
  });

  return { viewStyle, textStyle };
};
