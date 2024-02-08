export const course = {
  result: {
    dashboardList: [
      {
        desctiption: "Begin Your Web Development Journey",
        items: [
          {
            img: "/images/home/js-small.jpeg",
            name: "JavaScript",
            width: 200,
            height: 200,
          },
          {
            img: "/images/home/html-small.jpeg",
            name: "HTML",
            width: 200,
            height: 200,
          },
          {
            img: "/images/home/css-small.jpeg",
            name: "CSS",
            width: 200,
            height: 200,
          },
        ],
      },
      {
        desctiption: "Become a React Master",
        items: [
          {
            img: "/images/home/react-middle.jpeg",
            name: "React",
            width: 250,
            height: 250,
          },
          {
            img: "/images/home/redux-middle.jpeg",
            name: "Redux",
            width: 250,
            height: 250,
          },
        ],
      },
      {
        desctiption: "Conquer Backend Development",
        items: [
          {
            img: "/images/home/node-small.jpeg",
            name: "Node.js",
            width: 200,
            height: 200,
          },
          {
            img: "/images/home/js-small.jpeg",
            name: "JS",
            width: 200,
            height: 200,
          },
          {
            img: "/images/home/express-small.jpeg",
            name: "Express",
            width: 200,
            height: 200,
          },
        ],
      },
      {
        desctiption: "Enhance Your Development Skills",
        items: [
          {
            img: "/images/home/git-big.jpeg",
            name: "Git",
            width: 354,
            height: 200,
          },
        ],
      },
    ],
  },
};

interface IFooterItem {
  result: {
    footerList: {
      description: string;
      items: {
        name?: string;
        img?: string;
        type?: string;
      }[];
    }[];
  };
}

export const footerItems: IFooterItem = {
  result: {
    footerList: [
      {
        description: "EXPLORE",
        items: [
          {
            name: "Courses",
          },
          {
            name: "Codeplayground",
          },
          {
            name: "Discuss",
          },
          {
            name: "Jobs",
          },
        ],
      },
      {
        description: "COMMUNITY",
        items: [
          {
            name: "Community Guidelines",
          },
          {
            name: "Help",
          },
          {
            name: "Privacy Policy",
          },
          {
            name: "Blog",
          },
        ],
      },
      {
        description: "COURSES",
        items: [
          {
            name: "HTML",
          },
          {
            name: "JavaScript",
          },
          {
            name: "Python",
          },
          {
            name: "React",
          },
        ],
      },
      {
        description: "RESOURCES",
        items: [
          {
            name: "Get the Apps",
          },
          {
            name: "About Us",
          },
          {
            name: "Contact Us",
          },
          {
            name: "Terms of Use",
          },
        ],
      },
      {
        description: "GET CONNECTED",
        items: [
          {
            name: "Facebook",
            img: "/images/footer/facebook.svg",
          },
          {
            name: "Twitter",
            img: "/images/footer/twitter.svg",
          },
          {
            name: "Instagram",
            img: "/images/footer/instagram.svg",
          },
          {
            name: "Linkedin",
            img: "/images/footer/linkedin.svg",
          },
        ],
      },
      {
        description: "MOBILE APPS",
        items: [
          {
            type: "store",
            img: "/images/footer/app-store-dark.png",
          },
          {
            type: "store",
            img: "/images/footer/google-play-dark.png",
          },
        ],
      },
    ],
  },
};
