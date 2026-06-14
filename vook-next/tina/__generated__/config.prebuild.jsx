// tina/config.ts
import { defineConfig } from "tinacms";
var branch = "main";
var config_default = defineConfig({
  branch,
  // clientId and token removed to allow local-only builds without a TinaCloud account.
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
          { type: "string", name: "welcome_title", label: "Home Welcome Title" },
          { type: "string", name: "vision", label: "Vision Statement" },
          { type: "string", name: "mission", label: "Mission Statement" },
          {
            type: "object",
            list: true,
            name: "feature_boxes",
            label: "Home Feature Boxes",
            ui: { itemProps: (item) => {
              return { label: item?.title || "Feature Box" };
            } },
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "icon", label: "Icon (FontAwesome class)" },
              { type: "string", name: "desc", label: "Description" }
            ]
          },
          { type: "string", name: "founder_name", label: "Founder Name" },
          { type: "string", name: "founder_title", label: "Founder Title" },
          { type: "image", name: "founder_image", label: "Founder Image" },
          { type: "string", name: "founder_bio", label: "Founder Bio", ui: { component: "textarea" } },
          { type: "string", name: "founder_quote", label: "Founder Quote", ui: { component: "textarea" } },
          { type: "string", name: "moses_name", label: "Moses Name" },
          { type: "string", name: "moses_title", label: "Moses Title" },
          { type: "image", name: "moses_image", label: "Moses Image" },
          { type: "string", name: "moses_bio", label: "Moses Bio", ui: { component: "textarea" } },
          {
            type: "object",
            list: true,
            name: "core_team",
            label: "Core Team (About Page)",
            ui: { itemProps: (item) => {
              return { label: item?.name || "Team Member" };
            } },
            fields: [
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "title", label: "Title/Role" },
              { type: "string", name: "initials", label: "Initials" },
              { type: "string", name: "country", label: "Location/Country" }
            ]
          },
          {
            type: "object",
            list: true,
            name: "partnerships",
            label: "Partnerships (About Page)",
            ui: { itemProps: (item) => {
              return { label: item?.title || "Partner" };
            } },
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "icon", label: "Icon (FontAwesome class)" },
              { type: "string", name: "desc", label: "Description" }
            ]
          },
          { type: "string", name: "programs_hero_title", label: "Programs Hero Title" },
          {
            type: "object",
            list: true,
            name: "departments",
            label: "Departments (Programs Page)",
            ui: { itemProps: (item) => {
              return { label: item?.title || "Department" };
            } },
            fields: [
              { type: "string", name: "id", label: "ID (lowercase, no spaces)" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "icon", label: "Icon (FontAwesome class)" },
              { type: "string", name: "short", label: "Short Description" },
              { type: "string", name: "details", label: "Full Details", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            list: true,
            name: "strategic_programs",
            label: "Strategic Programs",
            ui: { itemProps: (item) => {
              return { label: item?.title || "Program" };
            } },
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "tag", label: "Tag (e.g. Outreach)" },
              { type: "string", name: "desc", label: "Description" }
            ]
          },
          { type: "string", name: "courses_hero_title", label: "Courses Hero Title" },
          { type: "string", name: "beneficiaries_title", label: "Beneficiaries Title" },
          { type: "string", name: "beneficiaries_text", label: "Beneficiaries Text" }
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
