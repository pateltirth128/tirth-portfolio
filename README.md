# Tirth Patel | Portfolio

A terminal-themed personal portfolio built with Next.js, TypeScript and Tailwind CSS.

I'm a Computer Science student at the University of Regina, exploring cybersecurity from operating systems to networks and ethical hacking. I'm in the U of R Co-op Program and currently looking for a co-op work term. This site puts my education, projects, experience and credentials in one place.

**Live site:** [tirth1228-portfolio.vercel.app](https://tirth1228-portfolio.vercel.app)
**LinkedIn:** [linkedin.com/in/tirth1228](https://www.linkedin.com/in/tirth1228)
**Email:** pateltirth1228@gmail.com

<a href="https://tirth1228-portfolio.vercel.app">
  <img src="doc/about.png" alt="Portfolio home page" />
</a>

---

## Sections

### About
A terminal-style intro (`tirth@blue-team:~$`) with a short bio, my CV, and the tools I work with: Python, Java, C, C++, JavaScript, TypeScript, SQL, Linux, Bash, Wireshark and Nmap.

### Academic History
BSc in Computer Science at the University of Regina (Sep 2024 to Aug 2028), along with high school.

![Academic History](doc/education.png)

### Projects
Each project has its own case study page and source code on GitHub.

| Project | What it does | Built with |
|---|---|---|
| [Cerberus Threat Monitoring Dashboard](https://github.com/pateltirth128/cerberus-threat-monitoring-dashboard) | Checks IPs, domains and servers against 60+ blacklists, with DNS, SSL, WHOIS and email security lookups | FastAPI, React, Docker |
| [AWS CloudTrail Security Monitoring](https://github.com/pateltirth128/aws-cloudtrail-security-monitoring) | Alerts on backdoor IAM accounts, privilege escalation and log tampering, tested with a simulated attack on my own AWS account | CloudTrail, EventBridge, SNS |
| [Flappy Bird: Left to Right (and Back)](https://github.com/pateltirth128/flappy-bird) | A Flappy Bird twist where the bird turns around every 5 points, built twice | Python (pygame), C++ (raylib) |
| Personal Portfolio Website | This site | Next.js, TypeScript, Tailwind CSS |

![Projects](doc/projects.png)

### Experience
- **Field Experience:** Tech Department internship at Kanan.co (Mar 2024 to Jul 2024)
- **Other Experience:** U of R Co-op Program, Walmart Canada, McDonald's Canada
- **Volunteering:** VCARE animal rescue, Vadodara

<p>
  <img src="doc/experience-field.png" alt="Field Experience" width="49%" />
  <img src="doc/experience-other.png" alt="Other Experience" width="49%" />
</p>

![Volunteering](doc/experience-volunteering.png)

### Verified Credentials
Certificates and experience letters, each linked to the original document:
- Tech Department Internship, Experience Letter (Kanan.co)
- Ethical Hacking (MSME, Govt. of India)
- Mastercard Cybersecurity Job Simulation (Forage)

![Verified Credentials](doc/certifications.png)

---

## Features

- Terminal-inspired design with a typing animation in the hero section
- Responsive layout from wide screens down to mobile, including browser zoom
- Interactive card effects and an animated falling-words background built on HTML canvas
- A case study page for each project
- All site content managed from a single data file

## Tech Stack

| Area | Tools |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Animation | Typewriter Effect, HTML canvas |
| Hosting | Vercel |

## Project Structure

```
app/            Pages and global styles
components/     Section and UI components
lib/data.ts     All site content (education, projects, experience, credentials)
public/         Images, logos and CV
doc/            README screenshots
```

## Run Locally

```bash
git clone https://github.com/pateltirth128/tirth-portfolio.git
cd tirth-portfolio
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Deployment

Deployed on Vercel, and redeploys automatically on every push to `main`.

## Contact

Looking for a co-op work term in IT, cybersecurity, or software. Happy to chat about SOC, cloud security, IT support, data analytics or development roles too.

Reach me at **pateltirth1228@gmail.com** or on [LinkedIn](https://www.linkedin.com/in/tirth1228).
