const path = require("node:path");
const jetpack = require("fs-jetpack");

const root = "../../packages/react/stories/components";
const folders = ["PostCard", "PostCardList", "PostCardNested"];

folders.forEach((folder) => {
  const files = ["index.tsx", "index.css", "PostCardList.tsx"];
  files.forEach((file) => {
    const content = jetpack.read(`${root}/${folder}/${file}`);
    if (content) {
      content
        .replace("../Image", "@ui/Image")
        .replace("../../hooks", "hooks")
        .replace("../../../src", "@skel-ui/react")
        .replace(
          `
type Props = {
    isLoading?: boolean;
  };`,
          "",
        )
        .replace("props: Props", "")
        .replace("props.isLoading !== undefined ? props.isLoading : isLoading", "isLoading");

      jetpack.write(`./codes/${folder}/${file}`, content);
    }
  });
});
