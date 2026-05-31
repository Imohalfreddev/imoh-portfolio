export const project_data = [
    {
        title: "ImohMarket | Elite Automotive Exchange",
        image: "online-auction-system.png",
        description:
            "A production-ready, full-stack automotive marketplace engineered for the luxury vehicle industry. Elite sellers can showcase inventory and serious buyers can browse a curated showroom with real-time data persistence. Features secure role-switching between Buyer and Seller profiles, JWT authentication with bcrypt password hashing, and a premium dark mode UI. Backend powered by FastAPI and PostgreSQL via Supabase, frontend hosted on Vercel.",
        badges: ["FastAPI", "PostgreSQL", "JavaScript", "HTML5", "CSS3", "Vercel", "Render"],
        github: "https://github.com/Imohalfreddev/ImohMarket",
        live: "https://imoh-market.vercel.app/",
    },
    {
        title: "WorkFlow — Employee Management SaaS",
        image: "java.png",
        description:
            "A fully functional multi-tenant employee management system. Companies are isolated by company_id, with role-based access for Admin and Employee. Features include JWT authentication, broadcast messaging, leave request management with approval flow, real-time notifications, and a stats dashboard. Built with React, FastAPI, PostgreSQL, and Docker.",
        badges: ["FastAPI", "React", "PostgreSQL", "Docker", "JWT"],
        github: "https://github.com/Imohalfreddev/emp-mgmt",
        // 👇 This link has been updated to your working Vercel deployment
        live: "https://emp-mgmt-kj5w.vercel.app/", 
    },
    {
        title: "ClientRadar — Real-Time Lead Detection",
        image: "url-shortener.png",
        description:
            "A Node.js/Express backend that scrapes 6 free job boards every 30 minutes and surfaces software engineer postings through a clean REST API. Sources include Remote OK, Remotive, Himalayas, We Work Remotely, Jobicy, and Hacker News — all free, no API key required. Features full-text search, tag and source filtering, pagination, admin scrape triggers, and a scheduler with cron-based polling.",
        badges: ["React", "Node.js", "Express.js", "PostgreSQL", "Docker"],
        github: null,
        live: null,
        isPrivate: true, 
    },
];