export const routes = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Services",
    link: "/services",

    subRoutes: [
      {
        name: "Wedding",
        link: "/wedding",
      },
      {
        name: "Theme Party",
        link: "/theme-party",
      },
      {
        name: "Birthday Party",
        link: "/birthday",
      },
    ],
  },
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
];
