import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Pranjal Rana",
  initials: "PR",
  url: "https://pranjalrana.com",
  location: "Dehradun, India",
  locationLink: "",
  description:
    "A builder who loves to break things down and rebuild them better.",
  summary:
    "Im Pranjal Rana, a builder passionate about building performant, elegant systems. I’ve led award-winning projects like a mental health support platform [Winners in Google Solution Challenge 2025](https://www.linkedin.com/posts/hack2skill_gdg-on-campus-solution-challenge-2025-ugcPost-7350492948934840320-sQEZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEH5f7YBvuoCqA8P1knoKr_NwZToibJUF-w) and a **vision assistant for the blind**   (Microsoft Imagine Cup grant). My stack includes Next.js, TypeScript, FastAPI, and AWS, with a focus on clean architecture and real-time UX. I contribute to open-source tools like [Superflex](https://github.com/aquila-lab/superflex-vscode) and [Continue](https://github.com/continuedev/continue) and love creating tech that empowers people.",
  avatarUrl: "https://avatars.githubusercontent.com/u/129268721?v=4",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Databases",
    "Docker",
    "AI/ML",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "pranajlrana1235@gmail.com",
    tel: "+91 6280823503",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/PRANJALRANA11",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pranjalrana/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/pranajlrana1235",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      // email: {
      //   name: "Send Email",
      //   url: "#",
      //   icon: Icons.email,

      //   navbar: false,
      // },
    },
  },

  work: [
    {
      company: "Smart Software Services BV",
      href: "",
      badges: [],
      location: "Remote",
      title: "Software Engineer Consultant",
      logoUrl: "",
      start: "March 2025",
      end: "Present",
      description:
        "Built crypto checkout system from scratch reducing the client's cost on outer checkout dependency by 40%. Worked on real-time dashboards . Writing CI/CD for deployments . Building shopify like gift-card store.",
    },
    {
      company: "CodeMate",
      href: "https://codemate.ai",
      badges: [],
      location: "Remote",
      title: "Full Stack And AI Engineer Intern",
      logoUrl:
        "https://yt3.ggpht.com/UzevtBXU3wJKFdFlpYbSUGaok_oJN7Ry_jGeSeSzAEi6jfi9foeRjh4K3RYABZHLNrd4XWfiIvc=s88-c-k-c0x00ffffff-no-rj",
      start: "Sept 2024",
      end: "Nov 2024",
      description:
        "CodeMate is Vs code extension like cody which have over 50k downloads. Revamped the whole extension react code to vanilla js, improving the performance by 30%.  Implemented a client-server, which will be downloaded on the user's system, and improved the response time between the client-server and cloud server by 10% by implementing web sockets. Improved the embedding creation pipeline for 30% of the creation of embeddings .Implemented ghost inline suggestions in vs code.",
    },
    {
      company: "Mentra",
      badges: [],
      href: "https://yourmentra.com",
      location: "Remote",
      title: "SDE Intern",
      logoUrl: "https://yourmentra.com/assets/logov2-839tCyk0.svg",
      start: "April 2024",
      end: "August 2024",
      description:
        "Mentra is an early-stage startup that offers a mental health services platform that connects potential therapists to patients. Worked with team of 5 web developers and provided end-to-end solutions. I worked on implementing WebRTC call recording feature and also reducing the call pick latency by 30%. Implemented stripe payment gateway on the site. Performed lazy loading and memoizations to decrease load times by 30%.",
    },
  ],
  education: [
    {
      school: "Graphic Era University",
      href: "https://geu.ac.in",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "https://dl.geu.ac.in/uploads/image/KWqx6liP-geu-logo.webp",
      start: "2023",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Supogen",
      href: "https://supogen.com",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Technical Teams use this tool to speed up there support workflows",
      technologies: [
        "Next.js",
        "discord",
        "github oauth",
        "Open AI",
        "Postgres",
        "Fastapi",
      ],
      links: [
        {
          type: "Website",
          href: "https://supogen.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/VARUNCHOPRA11/SupogenFe",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://3rlswxutjhdzbxmm.public.blob.vercel-storage.com/demo.mp4",
    },
    {
      title: "Property Finder",
      href: "https://kendal-assignment.vercel.app",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "This tool helps you to locate a property and list properties in a region.",
      technologies: ["Next.js", "Appwrite", "Maps Api", "Shadcn"],
      links: [
        {
          type: "Website",
          href: "https://kendal-assignment.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://tga5khbbk9a1lpph.public.blob.vercel-storage.com/Screen%20Recording%202025-11-23%20at%205.00.23%E2%80%AFPM.mp4",
    },
    {
      title: "Voicy",
      href: "https://voice-ai-builds.vercel.app",
      dates: "May 2024 - June 2024",
      active: true,
      description:
        "This is an empathetic bot, which also captures your engagement levels.",
      technologies: ["Next.js", "hume", "Shadcn"],
      links: [
        {
          type: "Website",
          href: "https://voice-ai-builds.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/PRANJALRANA11/Voice-AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://tga5khbbk9a1lpph.public.blob.vercel-storage.com/Screen%20Recording%202025-11-23%20at%204.54.56%E2%80%AFPM.mp4",
    },
    {
      title: "Real-Time Video Chat App with Live Streaming",
      href: "https://drive.google.com/file/d/16Lh_EO_piVjed7LbfEv75Z3An8auwPyd/view?usp=sharing",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Here we can join the room of a video chat and simultaneusly live stream that call as a youtube playback",
      technologies: ["Reactjs", "Hono", "FFmpeg", "MediaSoup"],
      links: [
        {
          type: "Demo",
          href: "https://drive.google.com/file/d/16Lh_EO_piVjed7LbfEv75Z3An8auwPyd/view?usp=sharing",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/PRANJALRANA11/Realtime-video-chat-app-with-live-stream",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://tga5khbbk9a1lpph.public.blob.vercel-storage.com/Screen%20Recording%202025-11-23%20at%205.27.03%E2%80%AFPM.mp4",
    },
    {
      title: "Cally",
      href: "https://callyyai.vercel.app",
      dates: "May 2025 - June 2025",
      active: true,
      description:
        "Cally is your dentist booking assistant to whom you can call and book your appointments.",
      technologies: [
        "Next.js",
        "Elevenlabs",
        "Cerebras",
        "Llama",
        "Aws",
        "Twilio",
        "Assembly AI",
      ],
      links: [
        {
          type: "Demo",
          href: "https://www.loom.com/share/df386b2eabff406d87d36dc1abc3d871",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Website",
          href: "https://callyyai.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/PRANJALRANA11/Cally",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cally-demo.png",
      video: "",
    },

    {
      title: "Arc",
      href: "https://arc-dev-flax.vercel.app",
      dates: "April 2023 - March 2024",
      active: true,
      description: "This tools helps you create react ui in seconds",
      technologies: ["Next.js", "Web Containers", "Open AI", "Shadcn"],
      links: [
        {
          type: "Website",
          href: "https://arc-dev-flax.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/PRANJALRANA11/arc-dev",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/arc-demo.png",
      video: "",
    },

    {
      title: "CompareLLM",
      href: "https://llmpare.vercel.app/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "CompareLLM is a tool for comparing the performance of different LLMs.",
      technologies: [
        "Next.js",
        "Typescript",
        "Langchain",
        "OpenAI",
        "TailwindCSS",
        "Hugging Face",
      ],
      links: [
        {
          type: "Website",
          href: "llmpare.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/PRANJALRANA11/comparellm",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://pranjal-rana.vercel.app/_next/image?url=%2Fimages%2Fllmpare.png&w=2048&q=75",
      video: "",
    },
    {
      title: "DataMate",
      href: "https://pranjalrana11.github.io/datamate-csr/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "DataMate is your data assistant. A conversational interface for your data where you can load, clean, transform, and visualize without a single line of code.",
      technologies: [
        "FastApi",
        "Typescript",
        "React",
        "Jupyter Kernel",
        "Gemini Pro",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/PRANJALRANA11/datamate",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://pranjal-rana.vercel.app/_next/image?url=%2Fimages%2Fdatadm.png&w=2048&q=75",
      video: "",
    },

    {
      title: "VISION AI",
      href: "https://github.com/VarunChopra11/VisionAssistant",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Vision Assistant is a smart AI-powered wearable that provides real-time voice-guided navigation for the visually impaired.",
      technologies: ["Rasp", "Gemini Live Api", "Websockets", "React"],
      links: [
        {
          type: "Website",
          href: "https://github.com/VarunChopra11/VisionAssistant",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/VarunChopra11/VisionAssistant",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/vision.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Google Solution Challenge 2025",
      dates: "July 11th - 12th, 2025",
      location: "Gurgaon, India",
      description: "Developed a vision assistant for blind people",
      image: "/solution.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/VarunChopra11/VisionAssistant",
        },
      ],
    },
    {
      title: "Graphethon 2025",
      dates: "May 14th - 16th, 2025",
      location: "Dehradun, India",
      description:
        "Developed a college navigation robot for easily campus navigation for newcomers",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV4bQQy20iXPmJp7BttQADYGBcmk3v0SJeRQ&s",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Varunchopra11/Hellum_campus_tour_bot",
        },
      ],
    },
    {
      title: "PromptX",
      dates: "March 23rd - 24th, 2025",
      location: "Dehradun, India",
      description:
        "Developed a collaborative dashboards for students and teachers.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://voice-ai-builds.vercel.app",
        },
      ],
    },
    {
      title: "Imagine Cup 2024",
      dates: "September 3rd -  December 4th, 2024",
      location: "Remote",
      description:
        "Developed a mental health assistant bot for depressed people.",
      image: "/imagine.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/PRANJALRANA11/Hackoholic",
        },
      ],
    },
    {
      title: "Docker AI/ML Hackathon",
      dates: "October 21st - November 21st, 2023",
      location: "Davis, California",
      description:
        "Developed a docker extension to inspect and reduce size of docker images efficiently",
      image:
        "https://s3.amazonaws.com/challengepost/sponsors/logos/000/031/978/highres/Screenshot_2023-09-19_at_1.07.31_PM.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/docker-image-optimizer?ref_content=my-projects-tab&ref_feature=my_projects",
        },
      ],
    },
    {
      title: "UC Berkeley AI Hackathon",
      dates: "October 21st - November 21st, 2024",
      location: "Berkeley",
      description: "Developing realtime transcription system for blind people",
      image: "https://ai.hackberkeley.org/_next/static/media/logo.de9dbd92.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [],
    },
  ],
} as const;
