const path = require("node:path");
const jetpack = require("fs-jetpack");

const root = "../../packages/react/stories/components";
const folders = ["PostCard", "PostCardList"];

folders.forEach((folder) => {
  const files = ["index.tsx", "index.css"];
  files.forEach((file) => {
    const content = jetpack
      .read(`${root}/${folder}/${file}`)
      .replace("../Image", "@ui/Image")
      .replace("../../hooks", "hooks")
      .replace("../../../src", "@skel-ui/react");

    jetpack.write(`./content/code/${folder}/${file}`, content);
  });
});
