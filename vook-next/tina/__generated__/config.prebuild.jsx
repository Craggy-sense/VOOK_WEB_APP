// tina/config.ts
import { defineConfig } from "tinacms";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "pages",
        label: "Pages",
        path: "src/content/pages",
        format: "md",
        fields: [
          { type: "image", name: "slide1_image", label: "Slide 1 Image" },
          { type: "string", name: "slide1_title", label: "Slide 1 Title" },
          { type: "string", name: "slide1_subtitle", label: "Slide 1 Subtitle" },
          { type: "string", name: "slide1_text", label: "Slide 1 Text" },
          { type: "image", name: "slide2_image", label: "Slide 2 Image" },
          { type: "string", name: "slide2_title", label: "Slide 2 Title" },
          { type: "string", name: "slide2_subtitle", label: "Slide 2 Subtitle" },
          { type: "string", name: "slide2_text", label: "Slide 2 Text" },
          { type: "string", name: "vision", label: "Vision Statement" },
          { type: "string", name: "mission", label: "Mission Statement" },
          { type: "image", name: "founder_image", label: "Founder Image" },
          { type: "string", name: "founder_bio", label: "Founder Bio", ui: { component: "textarea" } },
          { type: "string", name: "founder_quote", label: "Founder Quote", ui: { component: "textarea" } },
          { type: "image", name: "moses_image", label: "Moses Image" },
          { type: "string", name: "moses_bio", label: "Moses Bio", ui: { component: "textarea" } }
        ]
      },
      {
        name: "settings",
        label: "Settings",
        path: "src/content/settings",
        format: "json",
        fields: [
          { type: "string", name: "primary_color", label: "Primary Brand Color" },
          { type: "string", name: "email", label: "Email Address" },
          { type: "string", name: "phone", label: "Phone Number" },
          { type: "string", name: "address", label: "Physical Address" }
        ]
      },
      {
        name: "courses",
        label: "Courses",
        path: "src/content/courses",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "icon", label: "Icon (FontAwesome class)" },
          { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } }
        ]
      },
      {
        name: "blogs",
        label: "Blogs",
        path: "src/content/blogs",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "datetime", name: "date", label: "Date" },
          { type: "string", name: "author", label: "Author" },
          { type: "image", name: "image", label: "Featured Image" },
          { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          { type: "rich-text", name: "body", label: "Body", isBody: true }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
