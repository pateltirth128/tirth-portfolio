export const personalInfo = {
  name: "Tirth Patel",
  handle: "Tirth Patel",
  terminalUser: "tirth@blue-team:~$",
  role: "CS Student @ University of Regina | Aspiring Cybersecurity Professional",
  email: "pateltirth1228@gmail.com",
  linkedin: "https://www.linkedin.com/in/tirth1228",
  github: "https://github.com/pateltirth128/",
  instagram: "https://www.instagram.com/_tirth128",
  telegram: "https://t.me/tirth1228",
  discord: "https://discord.com/users/1283509028353478666",
  cv: "/cv.pdf",
  about:
    "INTJ: analytical, independent, and always planning the next step. I teach myself new tools by taking things apart to see how they work, from operating systems to networks. Currently seeking a co-op work term in cybersecurity/IT.",
};

export const heroTyping = ["tirth128.life", "quick_learner.sh", "learn_everything.py"];

export const heroIntro = {
  line1: "Computer Science Student @",
  highlight: "University of Regina",
  line2: "Member of the University of Regina Co-op Program.",
  line3:
    "Exploring cybersecurity, from operating systems to networks and ethical hacking. Currently seeking a co-op work term.",
};

export const skills = [
  "Python", "Java", "C", "C++", "HTML", "CSS", "JavaScript", "TypeScript",
  "Next.js", "Tailwind", "SQL", "Git", "GitHub", "Linux", "Bash",
  "Wireshark", "Nmap", "Networking", "Ethical Hacking",
];

type EducationItem = {
  school: string;
  degree: string;
  period: string;
  url?: string;
  grade?: string;
  details?: string[];
};

export const education: EducationItem[] = [
  {
    school: "University of Regina",
    degree: "BSc Computer Science",
    period: "Sep 2024 – Aug 2028",
    url: "https://www.uregina.ca/science/computer-science/index.html",
  },
  {
    school: "Parth School of Science and Competition",
    degree: "High School (Science)",
    period: "2021 – 2023",
    grade: "80.25%",
    details: [
      "Subjects: Physics, Chemistry, Mathematics, English, Computer Science.",
    ],
  },
];

export const certifications = [
  {
    name: "Tech Department Internship | Experience Letter",
    issuer: "Kanan.co",
    date: "Aug 16, 2024",
    url: "/tech-letter.pdf",
  },
  {
    name: "Ethical Hacking",
    issuer: "MSME, Govt. of India",
    date: "June 27, 2023",
    url: "/ethical-hacking.pdf",
  },
  {
    name: "Mastercard Cybersecurity Job Simulation",
    issuer: "Forage",
    date: "Sep 04, 2026",
    url: "/cert-forage.pdf",
  },
];

export const fieldExperience = [
  {
    role: "Intern – Tech Department",
    company: "Kanan.co (Kanan International Pvt. Ltd.)",
    url: "https://www.kanan.co/",
    logo: "/logos/kanan.svg",
    logoWide: true,
    logoLight: true,
    department: "Advanced Technology Portal Team · Head Office",
    location: "Vadodara, India",
    period: "Mar 2024 – Jul 2024",
    letter: "/tech-letter.pdf",
    summary:
      "Internship in the Tech Department supporting Kanan.co's online learning portal and internal platforms. Provided technical assistance to faculty and students, managed user access through CRM and authentication tools, and rotated through each department to learn how work flows across the organization.",
    highlights: [
      {
        title: "Technical Support",
        points: [
          "Monitored live online classes and provided technical assistance to faculty members facing issues.",
          "Resolved student questions and maintained strong working relationships with students.",
          "Adapted quickly to new technologies and problem solved within a dynamic team environment.",
        ],
      },
      {
        title: "Access & Platforms",
        points: [
          "Used CRM and user authentication tools to grant users access to the online portal.",
          "Supported the implementation and maintenance of the K-APPLY system.",
          "Contributed to enhancements of the CRM platform and improvements to the KYS platform.",
        ],
      },
      {
        title: "Content & Operations",
        points: [
          "Reviewed online portal videos and organized the video database.",
          "Rotated through each department to learn end to end workflows.",
          "Gained hands-on exposure to CRM, K-APPLY, Community App, and K-PREP.",
        ],
      },
    ],
    tools: [
      "CRM", "User Access Management", "K-APPLY", "KYS",
      "Community App", "K-PREP", "Technical Support", "Database Organization",
    ],
  },
];

export const experiences = [
  {
    role: "Co-op Student",
    company: "University of Regina Co-op Program",
    url: "https://www.uregina.ca/centre-for-experiential-and-service-learning/",
    logo: "/logos/uregina.png",
    logoWide: false,
    logoLight: true,
    location: "Regina, SK",
    period: "2024 – Present",
    current: true,
    icon: "cap",
    summary:
      "Enrolled in the University of Regina Co-op Program and actively pursuing a work term in IT, cybersecurity, or software, bringing hands-on IT support experience, a strong work ethic, and a fast learning curve.",
    highlights: [
      {
        title: "Focus Areas",
        points: [
          "Cybersecurity, networking, and systems administration.",
          "IT support, troubleshooting, and hardware/software deployment.",
          "Operating systems, Linux, and security tooling (Wireshark, Nmap).",
        ],
      },
      {
        title: "What I Bring",
        points: [
          "Five months of IT support internship experience in a professional office.",
          "Proven reliability, adaptability, and time management across multiple jobs while studying full-time.",
          "Self-driven learner who picks up new tools and technologies quickly.",
        ],
      },
    ],
    tools: ["Problem Solving", "Adaptability", "Self-Starter", "Time Management", "Continuous Learning"],
  },
  {
    role: "Fresh Associate/Produce (Cross-Trained: Deli, Bakery, Meat)",
    company: "Walmart Canada",
    url: "https://www.walmart.ca/en",
    logo: "/logos/walmart.webp",
    logoWide: true,
    logoLight: true,
    location: "Regina, SK",
    period: "Jun 2025 – Present",
    current: true,
    icon: "leaf",
    summary:
      "Selected by management for cross-department training across four fresh departments, trusted to maintain quality and accuracy in a fast-paced, high-volume environment with minimal supervision.",
    highlights: [
      {
        title: "Operations & Quality",
        points: [
          "Cross-trained across Produce, Deli, Bakery, and Meat based on adaptability and consistent performance.",
          "Maintained product quality, freshness, and food safety standards.",
          "Kept inventory accurate while juggling multiple simultaneous responsibilities.",
        ],
      },
      {
        title: "Teamwork & Customer Service",
        points: [
          "Collaborated with team members across departments to keep operations running smoothly.",
          "Delivered friendly, helpful customer service in a high-traffic store.",
          "Worked independently with minimal supervision, prioritizing tasks during peak hours.",
        ],
      },
    ],
    tools: ["Cross-Functional", "Inventory Accuracy", "Customer Service", "Teamwork", "Multitasking", "Reliability"],
  },
  {
    role: "Crew Trainer",
    company: "McDonald's Canada",
    url: "https://www.mcdonalds.com/ca/en-ca.html",
    logo: "/logos/mcdonalds.png",
    logoWide: false,
    logoLight: false,
    location: "Regina, SK",
    period: "Oct 2024 – Mar 2026",
    current: false,
    icon: "food",
    summary:
      "Promoted to Crew Trainer, responsible for onboarding and coaching new team members while delivering fast, accurate service in a high-volume restaurant.",
    highlights: [
      {
        title: "Leadership & Training",
        points: [
          "Trained and mentored new crew members on procedures, food safety, and service standards.",
          "Led by example on shift, helping the team stay consistent during rush periods.",
          "Communicated clearly with coworkers and management to keep shifts running smoothly.",
        ],
      },
      {
        title: "Service & Operations",
        points: [
          "Delivered fast, accurate, friendly customer service under time pressure.",
          "Maintained food safety, cleanliness, and quality standards.",
          "Handled high-volume shifts while staying calm, organized, and detail-oriented.",
        ],
      },
    ],
    tools: ["Leadership", "Mentoring", "Communication", "Customer Service", "Food Safety", "Working Under Pressure"],
  },
];

export const volunteering = [
  {
    role: "Animal Care Assistant (Volunteer)",
    organization: "VCARE – Vadodara Center for Animal Rescue and Emergency",
    url: "https://www.vadodaracare.org.in/",
    logo: "/logos/vcare.png",
    logoWide: true,
    logoLight: true,
    period: "Mar 2021 – Jul 2024 · Vadodara, India",
    description:
      "Prepared and distributed food and water on daily feeding schedules while following strict hygiene, infection-control, and food safety standards. Cleaned and sanitized cages, kennels, and prep areas, helped manage food and supply inventory, and worked collaboratively with staff and volunteers to keep the shelter running smoothly.",
  },
];

export const projects = [
  {
    slug: "cerberus-threat-monitoring",
    title: "Cerberus Threat Monitoring Dashboard",
    shortDesc:
      "Open-source security dashboard to check IPs, domains, and servers against 60+ blacklists, plus DNS, SSL, WHOIS, and email-security lookups.",
    tech: ["FastAPI", "React", "Docker", "SQLAlchemy", "Tailwind CSS", "JWT"],
    impact: "60+ Blacklists Scanned",
    link: "https://github.com/pateltirth128/cerberus-threat-monitoring-dashboard",
    logo: "/logos/cerberus.png",
    content: `
      <h3 class="text-xl font-bold text-white mb-4">Overview</h3>
      <p class="mb-6">A self-hosted toolkit to monitor IP addresses, domains, and servers from one interface: reputation checks, DNS lookups, SSL validation, and uptime monitoring, with no vendor lock-in.</p>

      <h3 class="text-xl font-bold text-white mb-4">Features</h3>
      <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-400">
        <li><strong>Reputation:</strong> scans 60+ DNSBL providers and AbuseIPDB, with bulk checks of up to 20 targets and /24 subnet scans.</li>
        <li><strong>Analysis:</strong> WHOIS, DNS records, SSL certificates, and SPF/DKIM/DMARC checks.</li>
        <li><strong>Monitoring:</strong> scheduled re-checks with email and webhook alerts, history charts, and CSV export.</li>
        <li><strong>Security:</strong> JWT login, rate limiting, and SSRF protection on private targets.</li>
      </ul>

      <h3 class="text-xl font-bold text-white mb-4">Stack</h3>
      <p class="mb-6">FastAPI and SQLAlchemy backend, React 18 and Vite frontend with Tailwind and Recharts, SQLite, deployed with Docker Compose.</p>

      <h3 class="text-xl font-bold text-white mb-4">Latest Updates</h3>
      <ul class="list-disc pl-5 space-y-2 text-gray-400">
        <li><strong>New help pop-ups:</strong> a help button, a "How to check" guide on the home page, and a "Find your password" guide on the sign-in page.</li>
        <li><strong>Bug fix:</strong> the dashboard's "Blacklisted now" counter always showed 0. It now counts listed assets correctly.</li>
        <li><strong>Design fix:</strong> the "Monitoring" card on the asset page now matches the dark theme.</li>
        <li><strong>Docs:</strong> fresh screenshots of every main page, including Quick Check and Sign In.</li>
      </ul>
    `,
  },
  {
    slug: "aws-cloudtrail-monitoring",
    title: "AWS CloudTrail Security Monitoring",
    shortDesc:
      "Real-time AWS alerting for backdoor IAM accounts, privilege escalation, and log tampering, tested with a simulated attack on my own account.",
    tech: ["AWS CloudTrail", "EventBridge", "SNS", "IAM", "S3", "MITRE ATT&CK"],
    impact: "4 of 5 Attacks Detected",
    link: "https://github.com/pateltirth128/aws-cloudtrail-security-monitoring",
    logo: "/logos/aws.png",
    content: `
      <h3 class="text-xl font-bold text-white mb-4">Overview</h3>
      <p class="mb-6">An alerting pipeline that emails me within seconds when an attacker creates backdoor accounts, escalates privileges, or disables logging. I simulated the attack on my own account, then investigated it like a SOC analyst.</p>

      <h3 class="text-xl font-bold text-white mb-4">Detections</h3>
      <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-400">
        <li><strong>iam-persistence:</strong> CreateUser, AttachUserPolicy, CreateAccessKey (MITRE T1136.003, T1098.003, T1098.001).</li>
        <li><strong>cloudtrail-tampering:</strong> StopLogging, DeleteTrail, UpdateTrail (MITRE T1562.008).</li>
        <li><strong>root-login:</strong> root console sign-in (MITRE T1078.004).</li>
      </ul>

      <h3 class="text-xl font-bold text-white mb-4">Result</h3>
      <p class="mb-6">4 of 5 attacker actions alerted within seconds. The root login was missed because it was recorded in us-east-2 while the rule watched us-east-1, since EventBridge rules are regional. A cross-region forwarding rule is the fix in progress.</p>

      <h3 class="text-xl font-bold text-white mb-4">Lessons</h3>
      <ul class="list-disc pl-5 space-y-2 text-gray-400">
        <li>Test detections; the rule looked right until the simulation proved otherwise.</li>
        <li>Verify coverage per region, because "global" events aren't always logged globally.</li>
        <li>Enforce MFA and enable log file validation.</li>
      </ul>

      <h3 class="text-xl font-bold text-white mb-4">Latest Updates</h3>
      <ul class="list-disc pl-5 space-y-2 text-gray-400">
        <li>Added a short "How to Reproduce" guide so anyone can rebuild the setup in their own AWS account.</li>
        <li>Made the MITRE ATT&amp;CK mapping more exact (T1098.003 for giving a backdoor user admin rights).</li>
      </ul>
    `,
  },
  {
    slug: "flappy-bird-reverse",
    title: "Flappy Bird: Left to Right (and Back)",
    shortDesc:
      "A Flappy Bird twist, built in both Python (pygame) and C++ (raylib), where the bird turns around every 5 points and flies back through the pipes.",
    tech: ["Python", "pygame", "C++", "raylib", "Git"],
    impact: "Python + C++",
    link: "https://github.com/pateltirth128/flappy-bird",
    logo: "/logos/flappy.png",
    content: `
      <h3 class="text-xl font-bold text-white mb-4">Overview</h3>
      <p class="mb-6">The bird starts on the left, flies right, and every 5 points turns around and flies back. Everything is drawn with code, with no image files. I built it first in Python, then rebuilt it in C++ as a standalone Windows <code>.exe</code>.</p>

      <h3 class="text-xl font-bold text-white mb-4">Features</h3>
      <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-400">
        <li>Direction switch every 5 points, with a TURN AROUND! alert.</li>
        <li>Bird flips and tilts with its movement.</li>
        <li>Endless random pipes, saved high score, pause, and restart.</li>
        <li><strong>Bug fix:</strong> the bird used to crash when turning, because it reversed while still inside the pipe it had just passed. It now waits for open space before turning.</li>
      </ul>

      <h3 class="text-xl font-bold text-white mb-4">C++ Version</h3>
      <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-400">
        <li>Split into <code>Bird</code>, <code>Pipe</code> and <code>Game</code> classes, so <code>main.cpp</code> is only 3 lines.</li>
        <li>Fixed 60 Hz timestep with VSync, so it plays at the same speed on every monitor.</li>
        <li>Builds into one standalone <code>.exe</code> with no install needed.</li>
      </ul>

      <h3 class="text-xl font-bold text-white mb-4">How It Works</h3>
      <p>A 60 FPS loop runs events, then update, then draw. One variable, <code>d</code>, stores the direction (1 or -1); pipes move by <code>-d * SPEED</code>, so flipping <code>d</code> scrolls the whole world the other way.</p>
    `,
  },
  {
    slug: "portfolio-website",
    title: "Personal Portfolio Website",
    shortDesc: "Terminal-themed portfolio built with Next.js, TypeScript, and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Git"],
    impact: "You're Looking At It",
    link: "",
    logo: "/logos/personal.png",
    logoWide: true,
    content: `
      <h3 class="text-xl font-bold text-white mb-4">Overview</h3>
      <p class="mb-6">A dark, terminal-inspired portfolio showing my experience, credentials, and projects.</p>

      <h3 class="text-xl font-bold text-white mb-4">What I Built</h3>
      <ul class="list-disc pl-5 space-y-2 text-gray-400">
        <li><strong>Data-driven:</strong> all content lives in one TypeScript file.</li>
        <li><strong>Static pages:</strong> each project gets its own generated page.</li>
        <li><strong>Canvas animation:</strong> skill words fall down the page into a glowing line.</li>
        <li><strong>Small touches:</strong> a custom cherry-blossom tab icon and a hidden surprise behind the Transcript button.</li>
      </ul>

      <h3 class="text-xl font-bold text-white mb-4">Source Code</h3>
      <p>The full code is on <a href="https://github.com/pateltirth128/tirth-portfolio" target="_blank" rel="noopener noreferrer" class="text-neon underline">GitHub</a>.</p>
    `,
  },
];