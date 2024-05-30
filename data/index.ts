export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: [
      "/firebase.svg",
      "/tail.svg",
      "/ts.svg",
      "/three.svg",
      "/fm.svg",
    ],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Totally impressed by Salman. He understand the requirements quickly and was able to provide quick fixes to the bugs. His communication skills and problem solving abilities are top notch. I would definitely hire him again soon. Highly Recommended!",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "I had the pleasure of working with Salman on a project which my team was stuck to resolve so it required a skilled React Native Developer with a strong focus on animations. I can confidently say that Salman exceeded all expectations and showcased an exceptional level of expertise",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "We had a great experience working with Mohammad. He displayed a great deal of business comprehension, patience, skills and productivity. This work involved solving complex problems of a different variety and Mohammad was able to provide great reliable solutions to our needs. I would highly recommend Mohammad to everyone!",

    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Salman is an amazing software engineer. I would rate him top 10 on my personal list (15+ years industry exp), and will definitely use him again. He is very knowledgeable with js, react, mobile app development, full-stack, and has a great design and product sense which is absolutely critical for fast-paced startups. He can speak and write english very well and makes himself available during our working hours in the US.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Muhammad is a professional developer who possesses excellent communication skills. Working with him is very easy, as he is attentive to the project's requirements and motivated to meet them.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const imgArray = [
  {
    name: "/reactJs.png",
    size: 100,
  },
  {
    name: "/reactNative.png",
    size: 50,
  },
  {
    name: "/vueJs.png",
    size: 80,
  },
  {
    name: "/expressJs.png",
    size: 100,
  },
  {
    name: "/nodejs.png",
    size: 100,
  },
  {
    name: "/mongoDb.png",
    size: 100,
  },
  {
    name: "/googleCloud.png",
    size: 130,
  },
  {
    name: "/aws.png",
    size: 100,
  },
  {
    name: "/Microsoft.png",
    size: 120,
  },
  {
    name: "/goLangIcon.svg",
    size: 75,
  },
  {
    name: "/python.png",
    size: 120,
  },
  {
    name: "/oddo.png",
    size: 75,
  },
  {
    name: "/Azure.png",
    size: 100,
  },
  {
    name: "/Adobe.png",
    size: 100,
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Sr. Software Engineer",
    project: "Racqy",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity Assisted in the development of a web-based platform using React.js, enhancing interactivity",
    className: "md:col-span-2",
    thumbnail: "/getracqy_logo.jpeg",
    href: "https://racqy.com/",
    experiencId: "racqy",
    images: ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"],
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    project: "Roam Around - AI Travel Agent",
    desc: "Salman is an amazing software engineer. I would rate him top 10 on my personal list (15+ years industry exp), and will definitely use him again. He is very knowledgeable with js, react, mobile app development, full-stack, and has a great design and product sense which is absolutely critical for fast-paced startups. He can speak and write english very well and makes himself available during our working hours in the US.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/roamaround_logo.jpeg",
    href: "https://justasklayla.com/",
    experiencId: "roamaround",
    images: ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"],
  },
  {
    id: 3,
    title: "Full Stack Developer",
    project: "RedShelf",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores Assisted in the development of a web-based platform using React.js, enhancing interactivity",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/redshelf_logo.jpeg",
    href: "https://www.about.redshelf.com/",
    experiencId: "redshelf",
    images: ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"],
  },
  {
    id: 4,
    title: "React Native Developer",
    project: "Chorus Sleep (YC W’21)",
    desc: "Developed and maintained user-facing features using modern frontend technologies Assisted in the development of a web-based platform using React.js, enhancing interactivity",
    className: "md:col-span-2",
    thumbnail: "/chorus_wellness_logo.jpeg",
    href: "https://www.chorussleep.com/",
    experiencId: "chorussleep",
    images: ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"],
  },
  {
    id: 5,
    title: "Software Engineer",
    project: "ESketchers ",
    desc: "Developed and maintained user-facing features using modern frontend technologies...",
    className: "md:col-span-2",
    thumbnail: "/esketchers_logo.jpeg",
    href: "https://esketchers.com/",
    experiencId: "esketchers",
    images: ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"],
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/MSalmanAwan5",
  },
  {
    id: 2,
    img: "/link.svg",
    href: "https://www.linkedin.com/in/msalmanawan/",
  },
];
