// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import starlightHeadingBadges from "starlight-heading-badges";
import starlightTags from "starlight-tags";
import starlightObsidian, { obsidianSidebarGroup } from "starlight-obsidian";

// https://astro.build/config
export default defineConfig({
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
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        // Add the generated sidebar group to the sidebar.
        obsidianSidebarGroup,
      ],
      plugins: [
        starlightLinksValidator(),
        starlightHeadingBadges(),
        starlightTags({ configPath: "./config/tags.yml" }),
        // Generate the Obsidian vault pages.
        starlightObsidian({
          vault: "./src/content/docs/vault",
          ignore: ["templates"],
        }),
      ],
    }),
  ],
});
