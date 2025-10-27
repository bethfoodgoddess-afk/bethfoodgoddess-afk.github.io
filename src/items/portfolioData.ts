export interface FolioItem {
  label: string;
  url: string;
  description?: string;
  screenshot?: { light: string; dark: string };
  icon?: string;
  color?: string;
}

export const portfolioItems: FolioItem[] = [
  {
    label: "AI Muse",
    url: "https://www.aimuse.cc/gallery",
    description: "A website for AI agent demo. (My current project.)",
    screenshot: { light: '/portfolio/aimuse-light.png', dark: '/portfolio/aimuse-dark.png' },
    icon: "Code",
    color: "text-blue-500",
  },
  {
    label: "Mis Sitios",
    url: "https://www.missitios.com/galeria",
    screenshot: { light: '/portfolio/missitios-light.png', dark: '/portfolio/missitios-dark.png' },
    icon: "MonitorSmartphoneIcon",
    color: "text-green-500",
  },
  {
    label: "AI Browser Extensions",
    url: "https://www.aiextensions.cc",
    description: "A collection of Chrome extensions which use AI.",
    screenshot: { light: '/portfolio/aiextensions-light.png', dark: '/portfolio/aiextensions-dark.png' },
    icon: "Zap",
    color: "text-purple-500",
  },
  {
    label: "Web Search Bot",
    url: "",
    description: "A simple demo LLM chatbot that uses Web search to augment its knowledge.",
    screenshot: { light: '/image-frame-light.png', dark: '/image-frame-dark.png' }, // No real screenshot found
    icon: "Search",
    color: "text-orange-500",
  },
  {
    label: "FAQ Generator",
    url: "",
    description: "Another RAG app, which generates a set of FAQs based on a given document(s).",
    screenshot: { light: '/image-frame-light.png', dark: '/image-frame-dark.png' }, // No real screenshot found
    icon: "HelpCircle",
    color: "text-blue-500",
  },
  {
    label: "Research Agent",
    url: "",
    description: "'Deep research' has become one of the most popular applications of (autonomous) 'AI Agent'. This is a PoC demo app.",
    screenshot: { light: '/image-frame-light.png', dark: '/image-frame-dark.png' }, // No real screenshot found
    icon: "Brain",
    color: "text-green-500",
  },
  {
    label: "Python Expert AI",
    url: "https://pythonbot.codingjoy.cc",
    description: "This is a RAG-based Q&A chatbot, augmented with the Python grammar documentation. Next.js-based frontend, with Python-based backend, Langchain and FastAPI.",
    screenshot: { light: '/portfolio/pythonbot-1-light.png', dark: '/portfolio/pythonbot-1-dark.png' },
    icon: "Atom",
    color: "text-purple-500",
  },
  {
    label: "Patent AI Agent",
    url: "https://www.patentaiagent.com",
    description: "A PoC AI agent that can do patent prosecution and/or patent examination. This is a long-term project. For now, this chatbot knows about MPEP and it can answer any questions related to the patent examination process in the U.S.",
    screenshot: { light: '/portfolio/patentaiagent-light.png', dark: '/portfolio/patentaiagent-dark.png' },
    icon: "FileText",
    color: "text-orange-500",
  }
];

export const otherPortfolioItems: FolioItem[] = [
  {
    label: "Simple Chatbot",
    url: "https://doctorbot.wanderforlife",
    description: "A plain-vanilla LLM chatbot who pretends to be a doctor. Next.js-based app written in Typescript. Backend running on Google Cloud.",
    screenshot: { light: '/portfolio/chatbot-1-light.png', dark: '/portfolio/chatbot-1-dark.png' },
    icon: "MessageSquare",
    color: "text-blue-500",
  },
  {
    label: "Einstein's Books",
    url: "https://www.einsteinsbooks.com",
    description: "The official website for the 'Einstein's Books' project. WIP. Notice that LLM chatbots are taking over all my websites.",
    screenshot: { light: '/portfolio/einsteinsbooks-light.png', dark: '/portfolio/einsteinsbooks-dark.png' },
    icon: "Book",
    color: "text-green-500",
  },
  {
    label: "Feynman Physics",
    url: "https://www.feynmanphysics.com",
    description: "Learn the college-level physics using the Feynman Lectures on Physics. WIP.",
    screenshot: { light: '/portfolio/feynmanphysics-light.png', dark: '/portfolio/feynmanphysics-dark.png' },
    icon: "Atom",
    color: "text-purple-500",
  },
  {
    label: "Nutty Physics",
    url: "https://www.nuttyphysics.com",
    description: "Modern physics for the crazy ones, the misfits, the rebels, and the troublemakers. Coming soon.",
    screenshot: { light: '/portfolio/nuttyphysics-light.png', dark: '/portfolio/nuttyphysics-dark.png' },
    icon: "Zap",
    color: "text-orange-500",
  },
  {
    label: "Open Memo",
    url: "https://www.openmemo.com",
    description: "A general-purpose RAG-based chatbot, which understands the dynamically changing content of the website. For example, if the website includes an app with possibly changing state over time, then the chatbot is aware of the current state of the app. Under construction.",
    screenshot: { light: '/portfolio/openmemo-light.png', dark: '/portfolio/openmemo-dark.png' },
    icon: "Cloud",
    color: "text-blue-500",
  },
  {
    label: "SevenJam",
    url: "https://www.sevenjam.com",
    description: "Another general-purpose RAG-based chatbot, which I'm currently experimenting with. We believe that the front pages of all websites will include a chatbot. Do you agree? We would go even further and say that the main part of at least the front page of every website will be a chatbot.",
    screenshot: { light: '/portfolio/sevenjam-light.png', dark: '/portfolio/sevenjam-dark.png' },
    icon: "Bot",
    color: "text-green-500",
  },
  {
    label: "Coding Joy",
    url: "https://www.codingjoy.cc",
    description: "A placeholder educational website. Currently the knowledge of the frontpage chatbot is augmented with all my programming books. Not sure how much it has 'understood' them though. Ultimately, an LLM is really a black box.",
    screenshot: { light: '/portfolio/codingjoy-light.png', dark: '/portfolio/codingjoy-dark.png' },
    icon: "BookOpen",
    color: "text-purple-500",
  }
];

