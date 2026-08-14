# Hilal Muhammad — Professional Personal Portfolio

[![Vercel Ready](https://img.shields.io/badge/Deployment-Vercel%20Ready-000000?style=for-the-badge&logo=vercel)](https://vercel.app)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![Flutter](https://img.shields.io/badge/Specialization-Flutter%20Developer-02569B?style=for-the-badge&logo=flutter)](https://flutter.dev)

A modern, highly professional, responsive personal portfolio website for **Hilal Muhammad**, Software Engineering Graduate & Flutter Developer. Designed specifically to present credentials cleanly to HR managers, recruiters, technical leads, internship coordinators, and potential clients.

---

## 🌟 Technologies Used

- **React 19** — Frontend UI framework
- **Vite 6** — Lightning-fast build tool and dev server
- **Tailwind CSS 4** — Modern utility-first styling with dark mode support
- **Lucide React** — Clean vector developer icons
- **FormSubmit** — Free zero-config email contact form backend

---

## 🚀 Quick Start (Run Locally)

### Prerequisites
Make sure you have **Node.js** (v18+ recommended) and **npm** installed.

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
The output files will be compiled into the `dist/` directory.

---

## 📝 Centralized Configuration & Data Editing

All personal details, skills, projects, and contact methods are centralized in one file:
📍 `src/data/portfolio.js`

### 1. How to Update Personal Information (Email, Phone, Bio, Social)
Open `src/data/portfolio.js` and modify `personalInfo`:
```javascript
export const personalInfo = {
  name: "Hilal Muhammad",
  title: "Flutter Developer | Software Engineering Graduate",
  location: "Charsadda, KPK, Pakistan",
  phone: "+92 325 9397651",
  email: "ihilalmuhammad44@gmail.com",
  github: "https://github.com/ihilalmuhammad",
  whatsappNumber: "923259397651",
  whatsappMessage: "Hello Hilal, I found your portfolio and would like to discuss an opportunity.",
  cvPath: "/assets/Hilal-Muhammad-CV.pdf"
};
```

### 2. How to Update Resume / CV PDF File
Place your updated CV PDF file inside the `public/assets/` directory named exactly:
```
public/assets/Hilal-Muhammad-CV.pdf
```
When visitors click **"Download CV"**, this PDF file will download automatically.

### 3. How to Add Real Project URLs & Screenshots
In `src/data/portfolio.js`, update the `projectsData` array:

#### For Edovra (Google Play Link):
Add your official Play Store link under `playStoreUrl`:
```javascript
{
  id: "edovra",
  title: "Edovra",
  // ...
  playStoreUrl: "https://play.google.com/store/apps/details?id=your.package.name",
}
```

#### Adding Project Images/Screenshots:
1. Place project screenshots in `public/assets/projects/` (e.g. `public/assets/projects/sportify.png`).
2. Update the `image` field in `src/data/portfolio.js`:
```javascript
image: "/assets/projects/sportify.png"
```

### 4. How to Configure the Contact Form
The contact form uses [FormSubmit](https://formsubmit.co), a free service requiring no backend code or secret API keys.

To direct form submissions to your personal email, set your email in `src/data/portfolio.js`:
```javascript
export const formConfig = {
  endpoint: "https://formsubmit.co/ihilalmuhammad44@gmail.com",
  useService: true
};
```
*Note: The first time a message is submitted through FormSubmit, check your email inbox to confirm activation.*

---

## 🌐 Free Deployment on Vercel

You can deploy this website for free on Vercel in less than 2 minutes:

### Option A: Via GitHub (Recommended)
1. Initialize Git repository and commit your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Hilal Muhammad portfolio"
   ```
2. Create a new repository on GitHub named `hilal-muhammad-portfolio` and push your code:
   ```bash
   git remote add origin https://github.com/ihilalmuhammad/portfolio.git
   git branch -M main
   git push -u origin main
   ```
3. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
4. Import your GitHub repository `portfolio`.
5. Keep default settings (Vite output framework detection is automatic).
6. Click **Deploy**. Your site will be live at `https://hilal-muhammad.vercel.app`.

### Option B: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 🎨 Design Principles & Audience Target

- **Audience**: HR Managers, Technical Recruiters, Internship Coordinators, and Clients.
- **Positioning**: Honest & professional representation as a fresh BS Software Engineering graduate with practical Flutter mobile experience and AI-assisted workflows.
- **No Exaggerated Claims**: Uses "AI-Assisted Development" instead of claiming senior/expert status. No fake percentages or fake testimonials.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
