export const headerTitleList = [
  "Solutions",
  "Developers",
  "Community",
  "ZK Resources",
  "Blog",
  "Company",
  "Use Polygon",
];

export const footerLinks = {
  solutions: {
    title: "Solutions",
    polygon_pos: "Polygon PoS",
    polygon_zkevm: "Polygon zkEVM",
    polygon_cdk: "Polygon CDK",
    polygon_miden: "Polygon Miden",
    polygon_id: "Polygon ID",
    aggregation_layer: "Aggregation Layer",
  },
  use_polygon: {
    title: "Use Polygon",
    polygon_portal: "Polygon Portal",
    staking: "Staking",
    polygon_scan: "Polygon Scan",
    faucet: "Faucet",
    token_mapper: "Token Mapper",
    ecosystem_dapps: "Ecosystem dApps",
  },
  developers: {
    title: "Developers",
    developer_hub: "Developer Hub",
    tech_docs: "Tech Docs",
    github: "GitHub",
    forum: "Forum",
    security: "Security",
  },
  community: {
    title: "Community",
    community_home: "Community Home",
    polygon_guilds: "Polygon Guilds",
    advocate_program: "Advocate Program",
    events: "Events",
    ecosystem_jobs: "Ecosystem Jobs",
    governance_pillars: "Governance Pillars",
    devx_global_tour: "DevX Global Tour",
  },
  general: {
    title: "General",
    about: "About",
    blog: "Blog",
    careers: "Careers",
    sustainability: "Sustainability",
    matic_token: "Matic Token",
    polygon_ventures: "Polygon Ventures",
    brand_guidelines: "Brand Guidelines",
    institutions: "Institutions",
    contact_us: "Contact Us",
  },
  resources: {
    title: "Resources",
    whitepaper: "Whitepaper",
    zk_research: "zk Research",
  },
  legal: {
    title: "Legal",
    legal_terms_home: "Legal Terms Home",
    terms_of_use: "Terms of Use",
    privacy_policy: "Privacy Policy",
  },
};

export interface IAggregatedList {
  title: string;
  text: string;
}

export const aggregatedList = [
  {
    title: "Build",
    text: "Get access to our documents, and start building",
  },
  {
    title: "Stake",
    text: "Get access to our documents, and start building",
  },
  {
    title: "Use Polygon",
    text: "Get access to our documents, and start building",
  },
];

export const scalingCategories = [
  {
    type: "Public Chains",
    posts: [
      {
        id: 1,
        title: "Polygon PoS",
        text: "Support the most widely used Ethereum scaling ecosystem that offers EVM compatibility and an ultimate user experience with fast transactions at near-zero gas fees today.",
        video: "/video/scaling-1.mp4",
        img: "/ui/scaling-1.webp",
        status: "LIVE",
      },
      {
        id: 2,
        title: "Polygon zkEVM",
        text: "Unlock Ethereum scalability while maintaining security with the first ZK-rollup that offers EVM equivalence with fast transactions at near-zero gas cost today.",
        video: "/video/scaling-2.mp4",
        img: "/ui/scaling-2.webp",
        status: "LIVE",
      },
      {
        id: 3,
        title: "Polygon Miden",
        text: "A decentralized rollup that leverages private data storage and local transaction execution. Because privacy scales better.",
        video: "/video/scaling-3.mp4",
        img: "/ui/scaling-3.webp",
        status: "COMING SOON",
      },
    ],
  },
  {
    type: "App Specific Chains",
    posts: [
      {
        id: 1,
        title: "Polygon CDK",
        text: "Build Ethereum Layer 2s with industry-leading ZK tech & ecosystem.",
        video: "/video/scaling-2.mp4",
        img: "/ui/scaling-2.webp",
        status: "LIVE",
      },
    ],
  },
  {
    type: "Decentralized Identity",
    posts: [
      {
        id: 1,
        title: "Polygon ID",
        text: "Build trusted and secure relationships between users and dApps, following the principles of self sovereign identity and privacy by default.",
        video: "/video/scaling-3.mp4",
        img: "/ui/scaling-3.webp",
        status: "LIVE",
      },
    ],
  },
];
