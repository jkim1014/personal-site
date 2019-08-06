const randomString = length => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - Math.random() * y)
    .toString(36)
    .slice(1);
};

const pages = [
  {
    route: "/",
    title: "Joon Kim",
    heading: "ABOUT THIS SITE"
  },
  {
    route: "/about",
    title: "About | Joon Kim",
    heading: "ABOUT ME"
  },
  {
    route: "/projects",
    title: "Projects | Joon Kim",
    heading: "PROJECTS"
  },
  {
    route: "/stats",
    title: "Stats | Joon Kim",
    heading: "STATS"
  },
  {
    route: "/contact",
    title: "Contact | Joon Kim",
    heading: "CONTACT"
  }
];

export { pages, randomString };
