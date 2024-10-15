import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sai Kumaresh",
  initials: "L",
  url: "https://saikumaresh.github.io",
  location: "Chennai, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Developer | Python | Salesforce | Network Automation",
  summary:
    "👋 Hi there! I'm Sai Kumaresh, a passionate software developer 🎓 specializing in Software Development & Problem Solving at [Scaler Academy](/#education). 💼 With experience at [Wipro, L&T, and BeyondX](/#work), I've worked on Salesforce applications, automated network tasks 🌐, and developed a GUI for image steganography 🖼️. I'm always eager for new challenges 🚀 and discussions on tech topics like Python, networking, and cybersecurity! 💡 Feel free to connect with me!",
  avatarUrl: "/me.JPG",
  skills: [
    "Python",
    "Web Development",
    "Network Automation",
    "Databases & SQL",
    "Salesforce",
    "Linux",
    "Django",
    "Technical Content writing",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "saikumaresh007@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/saikumaresh",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sai-kumaresh/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Codechef: {
        name: "Codechef",
        url: "https://www.codechef.com/users/saikumaresh007",
        icon: Icons.codechef,

        navbar: true,
      },
      Medium: {
        name: "Medium",
        url: "https://medium.com/@saikumaresh",
        icon: Icons.medium,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
    
  work: [
    {
      company: "Wipro Ltd.",
      href: "https://www.wipro.com/",
      badges: [],
      location: "Chennai",
      title: "Software Developer",
      logoUrl: "/Wipro.svg",
      start: "July 2021",
      end: "March 2024",
      description:
        "- Developed and managed key backend features for a busy web app, focusing on scalability. \n\n - Created user interface with Salesforce to boost user interaction.\n- Enhanced data retrieval efficiency through optimized queries and query optimization techniques.\n- Collaborated effectively with the development team to ensure efficient data management and system performance.\n- Worked on AMS for Estee Lauder's internal website, improving functionality and user experience.\n- Performed support and development activities to maintain and enhance the internal website's performance.\n- Fixed multiple defects, developed new features, and automated processes, resulting in a 20% increase in overall system efficiency.\n",    
    },
    {
      company: "L&T Smart World & Communication",
      href: "https://www.larsentoubro.com/corporate/products-and-services/construction/smart-world-communication/",
      badges: [],
      location: "Chennai, India",
      title: "Network Automation Intern",
      logoUrl: "/lnt.png",
      start: "January 2021",
      end: "June 2021",
      description:
        "- Implemented Zero Touch Provisioning, Network Topology Mapper, and Root Cause Analysis using Python, GNS3, Netmiko, SSH, OSPF, and Graphviz. \n - Streamlined network provisioning, reducing setup time by 80% through automation scripts and improved network visualization. \n - Optimized OSPF routing in network topology, enhancing efficiency by 15% and reducing potential downtime risks. \n - Learnt about the use of NETCONF, YANG, Python and other tools for network automation. \n",
    },
    {
      company: "BeyondX",
      badges: [],
      href: "https://www.linkedin.com/company/beyondxtec",
      location: "Remote",
      title: "Python Developer/Technical Content",
      logoUrl: "/beyondx.jpg",
      start: "June 2020",
      end: "May 2021",
      description:
        "- Implemented GUI using Tkinter to conceal text in images and extract hidden messages, offering user-selectable output formats. \n - Published Cybersecurity, Networking, and Web Hosting blogs to drive industry engagement and knowledge sharing. [Check it out here](medium.com/@saikumaresh) \n - Oversaw the development, content creation and marketing team of over 5 members, resulting in improved content quality and outreach.",    
    },
  ],
  education: [
    {
      school: "Scaler Academy(Woolf University)",
      href: "https://scaler.com/academy/profile/16240195f69a",
      degree: "M.S. Computer Science",
      logoUrl: "/scaler.png",
      start: "2023",
      end: "2025",
    },
    {
      school: "Vellore Institute of Technology, Chennai",
      href: "https://chennai.vit.ac.in/",
      degree: "B.Tech Electronics and Communication",
      logoUrl: "/vit.png",
      start: "2017",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Network Automation with Python",
      href: "https://github.com/saikumaresh/networkautomation",
      dates: "Jan 2021 - June 2021",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/saikumaresh/networkautomation",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://www.youtube.com/watch?v=Yg2ciii1YOo",
    },
    {
      title: "Image Steganography",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
