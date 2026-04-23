// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import starlightHeadingBadges from "starlight-heading-badges";
import starlightTags from "starlight-tags";
import remarkMath from "remark-math";
import rehypeMathJax from "rehype-mathjax";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathJax],
  },
  integrations: [
    starlight({
      title: "My Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      defaultLocale: "ja",
      // locales: {
      //   ja: { label: "日本語", lang: "ja" },
      // },
      sidebar: [
        {
          label: "初心者向けガイド",
          items: [
            { label: "Neverlandとは？", link: "/guides/what-is-neverland" },
            { label: "レンディングで稼ぐ", link: "/guides/lend-borrow" },
            { label: "veDUSTロックで稼ぐ", link: "/guides/vedust-lock" },
          ],
        },
        {
          label: "基礎知識",
          items: [],
        },
        {
          label: "戦略",
          items: [],
        },
      ],
      plugins: [
        starlightLinksValidator(),
        starlightHeadingBadges(),
        starlightTags({ configPath: "./config/tags.yml" }),
      ],
    }),
  ],
});
