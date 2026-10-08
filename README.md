# Tirth Patel | Portfolio

A terminal-themed personal portfolio built with Next.js, TypeScript and Tailwind CSS.

I'm a Computer Science student at the University of Regina and a member of the U of R Co-op Program, focused on cybersecurity: blue team operations, SOC work and cloud security. This site brings together my education, projects, experience and verified credentials in one place.

**Live site:** [tirth1228-portfolio.vercel.app](https://tirth1228-portfolio.vercel.app)
**LinkedIn:** [linkedin.com/in/tirth1228](https://www.linkedin.com/in/tirth1228)
**Email:** pateltirth1228@gmail.com

![Home](doc/about.png)

---

## Sections

### Academic History
BSc in Computer Science at the University of Regina (2024 to 2028), along with high school.

![Academic History](doc/education.png)

### Projects
Security and software projects, each with its own case study page and source code on GitHub.

- **Cerberus Threat Monitoring Dashboard:** checks IPs, domains and servers against 60+ blacklists, with DNS, SSL, WHOIS and email security lookups.
- **AWS CloudTrail Security Monitoring:** real-time alerting for backdoor IAM accounts, privilege escalation and log tampering, tested with a simulated attack on my own AWS account.
- **Flappy Bird: Left to Right (and Back):** a Flappy Bird twist built in both Python (pygame) and C++ (raylib), where the bird turns around every 5 points.

![Projects](doc/projects.png)

### Experience
IT internship experience, the University of Regina Co-op Program, part-time roles and volunteering.

<p>
  <img src="doc/experience-field.png" alt="Field Experience" width="49%" />
  <img src="doc/experience-other.png" alt="Other Experience" width="49%" />
</p>

![Volunteering](doc/experience-volunteering.png)

### Verified Credentials
Certificates and experience letters, each linked to the original document.

![Verified Credentials](doc/certifications.png)

---

## Features

- Terminal-inspired design with a typing animation in the hero section
- Responsive layout that adapts from wide screens down to mobile, including browser zoom
- Interactive card effects and an animated falling-words background built on HTML canvas
- Case study pages for each project
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

The site is deployed on Vercel and redeploys automatically on every push to `main`.

## Contact

Open to co-op and internship opportunities across tech, including cybersecurity, SOC, cloud security, IT support and service desk, data analytics, and software development.

Reach me at **pateltirth1228@gmail.com** or on [LinkedIn](https://www.linkedin.com/in/tirth1228).
