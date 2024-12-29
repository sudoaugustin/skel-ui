const jetpack = require("fs-jetpack");

const stories = ["PostCard.tsx", "PostCardList.tsx"];

function writeOutput(filename, content, isNative) {
  jetpack.write(`./codes/snippets/${isNative ? "native/" : ""}${filename}`, content);
}

// For React
stories.forEach((filename) => {
  let content = `${jetpack.read(`../../packages/react/stories/components/${filename}`)}\n\n`;
  if (content) {
    content = content
      .replace("\n", "")
      .replace("./Image", "@ui/image")
      .replace('import { usePost } from "commons-utils/hooks";\n', "")
      .replace('import { usePosts } from "commons-utils/hooks";\n', "")
      .replace(
        `
type Props = {
  isLoading?: boolean;
};\n`,
        "",
      )
      .replace("props: Props", "")
      .replace("props.isLoading !== undefined ? props.isLoading : isLoading", "isLoading")
      .replaceAll("../../src", "@skel-ui/react");

    writeOutput(filename, content);
  }
});

let content = jetpack.read("./codes/PostCard.Old.tsx");
content = content
  .replace('"use client";\n', "")
  .replace('import { usePost } from "commons-utils/hooks";\n', "")
  .replaceAll("../", "");
writeOutput("PostCard.Old.tsx", content);
