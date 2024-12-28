import { source } from "app/source";
import { Callout } from "fumadocs-ui/components/callout";
import { Card, Cards } from "fumadocs-ui/components/card";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug?: string[] }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const page = source.getPage(slug);

  if (!page) notFound();
  const MDX = page.data.body;
  const isHomePage = page.url === "/";
  // const time = await getGithubLastEdit({
  //   sha: "main",
  //   repo: "skel-ui",
  //   path: `apps/skel-ui.augustin.zip/content/docs/${page.file.path}`,
  //   owner: "sudoaugustin",
  // });

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      editOnGithub={{
        sha: "main",
        repo: "skel-ui",
        path: `apps/skel-ui.augustin.zip/content/docs/${page.file.path}`,
        owner: "sudoaugustin",
      }}
      footer={{ enabled: !isHomePage }}
      article={{ className: `${isHomePage && "pb-6"}` }}
      // lastUpdate={new Date(time || "")}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents, Tab, Tabs, Card, Cards, Callout }} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = source.getPage(slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
