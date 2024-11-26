import { createSkelItem, createSkelRoot, generatePlaceholder, SkelItemProps } from "@skel-ui/core";
import React from "react";
import { Text, View } from "react-native";

const $createSkelItem = createSkelItem(false);

// function Root<T extends React.ElementType = typeof View>({
//   as,
//   children,
//   isLoading = true,
//   ...rest
// }: SkelRootProps<T>) {
//   const Component = as || View;
//   return (
//     <IsLoadingProvider value={isLoading}>
//       <Component {...rest} aria-hidden={isLoading}>
//         {children}
//       </Component>
//     </IsLoadingProvider>
//   );
// }
//
//

function SkelItem<T extends React.ElementType>({ as, ...rest }: { as: T } & SkelItemProps<T>) {
  return $createSkelItem(as, false, View)(rest as never);
}

const Skel = {
  Root: createSkelRoot(View),
  Item: SkelItem,
  // React Native Elements
  View: $createSkelItem(View),
  Text: $createSkelItem(Text),
};

export default Skel;
export { generatePlaceholder };
