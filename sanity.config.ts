import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./lib/sanity/schemas";
import { projectId, dataset, previewSecretId } from "./lib/sanity/config";
import settings from "./lib/sanity/schemas/settings";
import homepage from "./lib/sanity/schemas/homepage";
import { pageStructure, singletonPlugin } from "./lib/sanity/plugins/settings";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { table } from "@sanity/table";
import { codeInput } from "@sanity/code-input";
import { team_page } from "@cms/schemas/page/team_page";
import { about_page } from "@cms/schemas/page/about_page";

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = ["post"];
console.log(projectId);

export default defineConfig({
  name: "default",
  title: "LegalPrism CMS",
  basePath: "/studio",
  projectId: projectId,
  dataset: dataset,

  plugins: [
    deskTool({
      structure: pageStructure([settings, team_page, about_page, homepage]),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      // defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    singletonPlugin(["settings"]),
    visionTool(),
    unsplashImageAsset(),
    table(),
    codeInput(),
  ],

  schema: {
    types: schemaTypes,
  },
});
