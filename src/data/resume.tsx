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
        "- Implemented Zero Touch Provisioning, Network Topology Mapper, and Root Cause Analysis using Python, GNS3, Netmiko, SSH, OSPF, and Graphviz. \n\n - Developed a Python script to automate network discovery based on Core Router IP and login details, significantly reducing manual intervention.\n\n - Enhanced network visualization by generating detailed network graphs, aiding in quick network analysis and troubleshooting.",
      technologies: [
        "Network Automation",
        "Cisco CCNA",
        "Python",
        "Automation",
        "Web Development",
        "Netconf/YANG",
        "GNS-3",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/saikumaresh/networkautomation",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/scaler.png",
      video:
        "https://www.youtube.com/watch?v=Yg2ciii1YOo",
    },
    {
      title: "Image Steganography",
      href: "https://github.com/saikumaresh/Steganography",
      dates: "June 2020 - May 2021",
      active: true,
      description:
        "A python GUI which can we used to encrypt and hide a secret message with a passowrd inside an image. The message can be retrieved at the end using the same tool.",
      technologies: [
        "Python",
        "Cryptography",
        "Tkinter",
        "Databases and SQL",
        "Web Development",
        "Image processing",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/saikumaresh/Steganography",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/saikumaresh/Steganography",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://www.youtube.com/watch?v=TWEXCYQKyDc",
    },
    {
      title: "AI Search",
      href: "https://saikumaresh.netlify.app/",
      dates: "September 2024 - October 2024",
      active: true,
      description:
        "An AI Search website with Gemini AI Integration.",
      technologies: [
        "AI",
        "Netlify",
        "Web Development",
        "HTML,CSS",
        "API",
        "Gemini AI",
      ],
      links: [
        {
          type: "Website",
          href: "https://saikumaresh.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/saikumaresh/geminiai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://www.youtube.com/watch?v=798VKff1v2U",
    },
    {
      title: "Portfolio",
      href: "https://saikumaresh.vercel.app/",
      dates: "October 2024 - November 2024",
      active: true,
      description:
        "My portfolio website.",
      technologies: [
        "AI",
        "Vercel",
        "Web Development",
        "HTML,CSS",
        "Magic UI",
        "React",
        "Tailwind",
        "Django",
      ],
      links: [
        {
          type: "Website",
          href: "https://saikumaresh.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/saikumaresh/Steganography",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://www.youtube.com/watch?v=TWEXCYQKyDc",
    },
  ],
} as const;
