export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "618de4d8fcf1a2014dcbbaae",
                  title: "Sanity Studio",
                  name: "sanity-templafy-studio",
                  apiId: "199f8565-04a4-48cf-b351-d18c5d18ccaa",
                },
                {
                  buildHookId: "618de4d8eac5e5e530f91edf",
                  title: "Blog Website",
                  name: "sanity-templafy",
                  apiId: "a202c9c7-02d0-4bdb-8531-7b836076ab44",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/rpahlevi-cmg/sanity-templafy",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-templafy.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
