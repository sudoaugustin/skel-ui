import plugin from "tailwindcss/plugin";

export default function tailwindcssPlugin() {
  const variants = [
    { name: "loaded", value: false },
    { name: "loading", value: true },
  ];
  return plugin(({ addVariant }) => {
    variants.forEach(({ name, value }) => {
      addVariant(name, `&[data-loading='${value}']`);
      addVariant(`peer-${name}`, `:merge(.peer)[data-loading='${value}'] ~ &`);
      addVariant(`group-${name}`, `:merge(.group)[data-loading='${value}'] &`);
    });
  });
}
