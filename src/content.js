export const siteData = {
  zh: {
    meta: {
      name: "肖童学",
      role: "全栈开发工程师 / AI 应用工程师",
      email: "2325826552@qq.com",
      github: "https://github.com/coniern",
    },
    nav: [
      { id: "hero", label: "首页" },
      { id: "work", label: "作品" },
      { id: "resume", label: "简历" },
      { id: "contact", label: "联系" },
    ],
    hero: {
      kicker: "FULL-STACK + AI",
      title: ["做更完整的", "数字产品。"],
      subtitle:
        "我做的不只是页面，也包括后端、仓库整理、项目包装和 AI 能力接入。目标是做出真正能交付、能展示、能说明价值的产品。",
      badges: ["React / Vue", "Java / Spring Boot", "AI 工作流", "仓库治理"],
      primary: "查看作品",
      secondary: "联系我",
    },
    introCards: [
      {
        id: "delivery",
        title: "交付",
        body:
          "从界面、接口、业务流程到仓库结构，我更关心的是能不能把事情完整做完。",
      },
      {
        id: "ai",
        title: "AI",
        body:
          "我把 AI 当成产品能力来设计，而不是单独塞一个聊天框就结束。",
      },
      {
        id: "craft",
        title: "表达",
        body:
          "好的项目不仅要能运行，还要能被别人看懂、记住、愿意点进去继续看。",
      },
    ],
    projects: [
      {
        id: "meow-cup",
        index: "01",
        title: "Meow Cup Landing",
        stack: "React / GSAP / Vite",
        summary:
          "把一个产品视觉页重构成更完整的品牌落地页，重点优化图片叙事、动效节奏和移动端结构。",
        bullets: [
          "围绕图片内容做版式，而不是机械堆模块",
          "调整视觉层级和动效节奏",
          "拆分内容、组件和动画逻辑",
        ],
        repo: "https://github.com/coniern/meow-cup-landing",
      },
      {
        id: "thesis-management",
        index: "02",
        title: "Thesis Management System",
        stack: "Vue 3 / Spring Boot / MySQL",
        summary:
          "毕业论文管理系统，覆盖管理员、教师、学生三类角色的选题、进度、上传与管理流程。",
        bullets: [
          "是真实业务流，不只是前端展示",
          "体现前后端协同和中后台能力",
          "仓库说明和结构已整理成可展示状态",
        ],
        repo: "https://github.com/coniern/Thesis-management-system",
      },
      {
        id: "project-platform",
        index: "03",
        title: "Project Management Platform",
        stack: "Java / Spring Boot / JSP",
        summary:
          "项目管理平台原型，用来展示 Java 后端结构理解和旧仓库清理重构能力。",
        bullets: [
          "适合体现 Java 后端项目理解",
          "反映技术债处理和仓库治理意识",
          "README 和垃圾文件已显著清理",
        ],
        repo: "https://github.com/coniern/project-JavaWeb-system",
      },
    ],
    resume: {
      title: "简历摘要",
      subtitle: "偏全栈和 AI 应用方向。",
      positioning:
        "我擅长把前端、后端、产品表达、仓库包装和 AI 落地整合成一个完整产出。",
      roles: [
        "全栈开发工程师",
        "AI 应用工程师",
        "偏产品与交互的前端工程师",
        "创业团队通才型工程师",
      ],
      skills: [
        {
          title: "前端",
          text: "React / Vue 3 / Vite / GSAP / 响应式布局 / Element Plus",
        },
        {
          title: "后端",
          text: "Java / Spring Boot / Node.js / REST API / JWT / MyBatis Plus",
        },
        {
          title: "AI / 工作流",
          text: "Prompt 设计 / LLM 接入 / 工作流自动化 / AI 产品能力嵌入",
        },
      ],
    },
    contact: {
      title: "联系我",
      subtitle: "欢迎全栈、前端、AI 应用相关机会。",
      links: [
        {
          label: "邮箱",
          value: "2325826552@qq.com",
          href: "mailto:2325826552@qq.com",
        },
        {
          label: "GitHub",
          value: "github.com/coniern",
          href: "https://github.com/coniern",
        },
      ],
      actionTitle: "留下一个入口。",
      actionBody: "如果你在找能把产品、代码、仓库和表达都一起做完整的人，可以直接联系我。",
      actionButton: "现在联系",
    },
  },
  en: {
    meta: {
      name: "Tongxue Xiao",
      role: "Full-Stack Developer / AI Application Engineer",
      email: "2325826552@qq.com",
      github: "https://github.com/coniern",
    },
    nav: [
      { id: "hero", label: "Home" },
      { id: "work", label: "Work" },
      { id: "resume", label: "Resume" },
      { id: "contact", label: "Contact" },
    ],
    hero: {
      kicker: "FULL-STACK + AI",
      title: ["Build better", "digital products."],
      subtitle:
        "I work across interface design, backend systems, repository cleanup, and AI feature integration. The goal is software that can be shipped, explained, and remembered.",
      badges: ["React / Vue", "Java / Spring Boot", "AI workflows", "Repo cleanup"],
      primary: "View work",
      secondary: "Contact me",
    },
    introCards: [
      {
        id: "delivery",
        title: "Delivery",
        body:
          "From interface, API, and workflow to repository structure, I care about finishing the whole thing well.",
      },
      {
        id: "ai",
        title: "AI",
        body:
          "I treat AI as product capability, not as a one-off feature dropped into a page.",
      },
      {
        id: "craft",
        title: "Clarity",
        body:
          "A good project should not only run. It should also be understandable, memorable, and worth exploring further.",
      },
    ],
    projects: [
      {
        id: "meow-cup",
        index: "01",
        title: "Meow Cup Landing",
        stack: "React / GSAP / Vite",
        summary:
          "A product visual page rebuilt into a stronger campaign-style landing site with better image storytelling, motion, and mobile structure.",
        bullets: [
          "Reworked layout around image content instead of generic sections",
          "Improved visual hierarchy and motion pacing",
          "Separated content, components, and animation logic",
        ],
        repo: "https://github.com/coniern/meow-cup-landing",
      },
      {
        id: "thesis-management",
        index: "02",
        title: "Thesis Management System",
        stack: "Vue 3 / Spring Boot / MySQL",
        summary:
          "A graduation thesis management system covering topic selection, progress, uploads, and administration across multiple user roles.",
        bullets: [
          "A real workflow-oriented full-stack project",
          "Shows frontend organization and backend business understanding",
          "Repository structure and README were cleaned for portfolio use",
        ],
        repo: "https://github.com/coniern/Thesis-management-system",
      },
      {
        id: "project-platform",
        index: "03",
        title: "Project Management Platform",
        stack: "Java / Spring Boot / JSP",
        summary:
          "A project management platform prototype used to show Java backend structure understanding and repository cleanup discipline.",
        bullets: [
          "Useful as a backend-focused portfolio project",
          "Reflects technical-debt awareness and repo hygiene work",
          "README and tracked clutter were significantly improved",
        ],
        repo: "https://github.com/coniern/project-JavaWeb-system",
      },
    ],
    resume: {
      title: "Resume Snapshot",
      subtitle: "Positioned toward full-stack and AI application roles.",
      positioning:
        "I combine frontend, backend, product communication, repository polish, and AI implementation into one delivery profile.",
      roles: [
        "Full-Stack Developer",
        "AI Application Engineer",
        "Frontend Engineer with product focus",
        "Generalist engineer in startup teams",
      ],
      skills: [
        {
          title: "Frontend",
          text: "React / Vue 3 / Vite / GSAP / Responsive layout / Element Plus",
        },
        {
          title: "Backend",
          text: "Java / Spring Boot / Node.js / REST API / JWT / MyBatis Plus",
        },
        {
          title: "AI / Workflow",
          text: "Prompt design / LLM integration / workflow automation / embedded AI features",
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Open to full-stack, frontend, and AI application opportunities.",
      links: [
        {
          label: "Email",
          value: "2325826552@qq.com",
          href: "mailto:2325826552@qq.com",
        },
        {
          label: "GitHub",
          value: "github.com/coniern",
          href: "https://github.com/coniern",
        },
      ],
      actionTitle: "Leave an entry point.",
      actionBody: "If you are looking for someone who can handle product, code, repository cleanup, and delivery together, reach out directly.",
      actionButton: "Contact now",
    },
  },
};
