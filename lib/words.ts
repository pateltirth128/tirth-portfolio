import { skills, experiences, fieldExperience } from "@/lib/data";

// Extra security terms added to the falling-word animation, on top of skills and job tools.
const extraWords = [
  "SOC", "Blue Team", "Red Team", "Purple Team", "Threat Hunting",
  "Incident Response", "Digital Forensics", "Malware Analysis", "Reverse Engineering",
  "Vulnerability Scanning", "Penetration Testing", "OSINT", "Phishing",
  "Social Engineering", "Zero Trust", "Least Privilege", "Defense in Depth",
  "Firewall","Wazuh", "Splunk", "Metasploit","Burp Suite", "Kali Linux", "John the Ripper", "Hashcat", "Hydra",
  "Netcat", "Sysmon", "Event Logs", "Log Analysis", "Packet Capture","TCP/IP", "DNS", "DHCP", "HTTP", "TLS", "SSH", "VPN", "VLAN", "Subnetting", "OSI Model",
  "Active Directory", "Encryption", "Hashing","AWS", "CloudTrail", "EventBridge", "GuardDuty", "S3", "EC2", "Cloud Security",
  "Docker", "PowerShell", "Windows Server", "Ubuntu", "Virtualization", "VirtualBox","SQL Injection", "XSS", "CSRF", "Brute Force",
  "Privilege Escalation", "Lateral Movement", "Persistence","Cyber Kill Chain", "Risk Assessment", "Patch Management",
];

// Easter-egg word shown in red: exactly ONE every 5 minutes.
const lateWords = ["[HireHim]"];
const LATE_EVERY_MS = 5 * 60 * 1000; // one red word every 5 minutes
let lastLateAt = 0;                  // time the last red word was shown (0 = page start)
export const isLateWord = (word: string) => lateWords.includes(word);

export const fountainWords = Array.from(
  new Set([
    ...skills,
    ...experiences.flatMap((e) => e.tools),
    ...fieldExperience.flatMap((f) => f.tools),
    ...extraWords,
  ])
);

const pick = (list: string[]) => list[Math.floor(Math.random() * list.length)];

export const randomWord = () => {
  const now = typeof performance !== "undefined" ? performance.now() : 0;
  // After 5 minutes have passed since the last red word, show one red word, then reset the timer
  if (now - lastLateAt >= LATE_EVERY_MS) {
    lastLateAt = now;
    return pick(lateWords);
  }
  return pick(fountainWords);
};

export const monoFont = () =>
  getComputedStyle(document.body).getPropertyValue("--font-jetbrains").trim() || "monospace";