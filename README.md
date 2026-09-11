# NACOS Nile ![visitors](https://visitor-badge.laobi.icu/badge?page_id=NACOS-NILE.Web&left_text=-&logo=github&radius=10)

Welcome to the repository for the **NACOS Nile University of Nigeria Chapter**.

---

## 🎯 Objective

Your goal is to build an inspiring, modern, and fully responsive landing page that serves as the digital front door for NACOS Nile. The landing page should celebrate our computing community, showcase our leaders and activities, and provide easy navigation to essential departmental portals and student resources.

---

## 🎁 Prizes

Put your skills to the test and get your NACOS Nile dues waived!

- 🥇 **Solo Submission Winner**: **₦50,000 CASH PRIZE**.
- 👥 **Team of 2 Winners**: **₦25,000 CASH PRIZE EACH**.

---

## 📸 Provided Assets & Resources

All static assets are located in the [`public/`](public/) directory:

### 1. Executive Council (Exco) Profiles & Photos


| Photo File | Name | Office / Role | Bio / Tagline |
| :--- | :--- | :--- | :--- |
| [`president.jpg`](public/excos-pics/president.jpg) | **Zikora Fortune Nwafor** | President | *"Passionate about building active student communities."* |
| [`vp.jpg`](public/excos-pics/vp.jpg) | **Abdullah Ali Ahmad** | Vice President | *"Advocating for student welfare and academic excellence."* |
| [`sg.jpg`](public/excos-pics/sg.jpg) | **Sheila Jato** | Secretary General | *"Keeping the engines running smoothly."* |
| [`fc.jpg`](public/excos-pics/fc.jpg) | **Amira Ibrahim** | Financial Secretary | *"Making the important financial decisions."* |
| [`pro.jpg`](public/excos-pics/pro.jpg) | **Elvis Francis** | Public Relations Officer | *"Applying creativity to communication."* |
| [`dtd.jpg`](public/excos-pics/dtd.jpg) | **Ivoke Kamsi** | Director of Training & Development (DTD) | *"Driving technical growth and leading coding workshops for Nile computing students."* |
| [`provost.jpg`](public/excos-pics/provost.jpg) | **Zubaida Abdulazeez** | Provost | *"Managing the day-to-day operations of NACOS Nile."* |
| [`socials.jpg`](public/excos-pics/socials.jpg) | **Saidat Ahmed** | Director of Socials | *"Prioritizing social activities and events."* |
| [`welfare.jpg`](public/excos-pics/welfare.jpg) | **Danielle Ekunwe** | Director of Welfare | *"Your well-being is my priority."* |


### 2. Official Branding & Logo
- **Logo**: Located at [`public/logo.svg`](public/logo.svg).
- **Official Brand Colors**:
  - Primary Blue: `#274193` (NACOS Nile Royal Blue)
  - Dark Accent: `#0d1733`
  - Accent / Highlights: `#3b82f6` / `#60a5fa`
  - Clean whites, grays, and dark background tokens for dark mode compatibility.

---

## 📋 Required Sections & Features

Your landing page submission should feature the following core sections:

1. **Navbar / Header**:
   - NACOS Nile logo and chapter branding.
   - Navigation links (e.g., *About*, *Disciplines*, *Events*, *Excos*, *Community*, *Contact*).
   - Quick action CTA button (e.g., *"Join Community"*, *"Get Involved"*).

2. **Hero Section**:
   - High-impact headline and subheadline capturing the spirit of Nile University's computing students.
   - Primary Call-to-Action (CTA) and Secondary CTA (e.g., *"Join Community"* / *"Explore Programs"*).
   - Interactive or visually compelling illustration, hero graphic, or animated elements.

3. **About NACOS Nile & Disciplines**:
   - Concise summary of the association’s mission, vision, and core disciplines:
     - Computer Science
     - Software Engineering
     - Cyber Security
     - Information Technology
     - Information Systems
     - Data Science

4. **Key Initiatives, Events & Programs**:
   - Highlighting activities such as:
     - Tech bootcamps and coding workshops
     - Annual Hackathon / Tech Week
     - Industry mentorship and career talks
     - Academic tutorials and study groups

5. **Student Community & Social Channels**:
   - Links to join community channels (Discord, WhatsApp group, Telegram, Twitter/X, Instagram, LinkedIn).
   - Target for the **"Join Community"** CTA in the header and hero.

6. **Footer**:
   - Chapter address (Nile University of Nigeria, Abuja, FCT).
   - Quick links, copyright disclaimer, and creator credits.

---

## 🛠️ Technical Stack & Guidelines

The project is built on modern industry standards:
- **Framework**: [Next.js](https://nextjs.org/) (App Router, `src/app/`)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Linting**: [ESLint](https://eslint.org/)

### Development Rules:
- **Zero Build Errors**: Your code **must** pass `npm run build` and `npm run lint` cleanly without TypeScript or ESLint errors.
- **Component Modularity**: Organize reusable UI components inside `src/components/` (e.g., `Navbar.tsx`, `Hero.tsx`, `ExcoCard.tsx`, `Footer.tsx`).
- **Responsive Design**: Mobile-first approach. The page must look and function effortlessly on mobile phones, tablets, laptops, and ultra-wide displays.
- **Accessibility & Performance**:
  - Proper semantic HTML (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - Meaningful `alt` attributes on all images.
  - Accessible color contrast ratios.
  - Good Core Web Vitals (fast LCP, no cumulative layout shift).

---

## 🚀 How to Participate & Submit

1. **Fork the Repository**:
   Fork the official [`NACOS-NILE/Web`](https://github.com/NACOS-NILE/Web) repository to your GitHub account.

2. **Clone and Branch**:
   If you are new to Git and GitHub, watch this tutorial on how to clone and work with repositories: [Git & GitHub Video Guide](https://youtu.be/8Dd7KRpKeaE).

   ```bash
   git clone https://github.com/<your-username>/Web.git
   cd Web
   git checkout -b submission/landing-page
   ```

3. **Install Dependencies & Start Development**:
   ```bash
   npm install
   npm run dev
   ```

4. **Verify Your Work**:
   Before submitting, make sure everything compiles and lints with no errors:
   ```bash
   npm run build
   npm run lint
   ```

5. **Open a Pull Request**:
   - Create a Pull Request against the `main` branch of `NACOS-NILE/Web`.
   - **PR Title Format** (using your Student ID):
     - Solo: `Submission: [StudentID] - NACOS Nile Landing Page`  
       *Example: `Submission: [211206123] - NACOS Nile Landing Page`*
     - Team of 2: `Submission: [StudentID_1, StudentID_2] - NACOS Nile Landing Page`  
       *Example: `Submission: [211206123, 211206456] - NACOS Nile Landing Page`*

---

## 📜 Contest Rules & Code of Conduct

1. **Team Size**: **Maximum of 2 students per submission** (solo developers or pairs).
2. **Student ID Requirement**: Valid Nile University student IDs must be included in the PR to qualify for dues waiver eligibility.
3. **Originality**: Plagiarism is strictly prohibited. You may use open-source UI libraries (e.g. Lucide Icons, Framer Motion, Tabler Icons) as long as they are properly declared in `package.json`.
4. **Respect & Professionalism**: All imagery, copy, and themes must maintain a high standard of respect in line with Nile University student guidelines.
5. **Fair Play**: Have fun, help each other grow, and build an incredible landing page for NACOS Nile!

Good luck to all builders! May the best landing page win! 💻✨
