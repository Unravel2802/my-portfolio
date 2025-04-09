# 🧠 Personal Website Plan – Polymath Portfolio

## 🔷 Overall Concept

**Identity:** A modern, clean site to showcase a multi-disciplinary journey through software engineering, machine learning, design, and the humanities.

**Main Theme:** "Polymath Developer" — bridging technology, design, and thought.

---

## 🔷 Pages & Structure

### 1. 🏠 Landing Page (`/`)
- Hero Section: Large title with animated or styled "Polymath Developer"
- Subtext: Short explanation of polymathy and your motivation
- Navigation links to all sections: Portfolio | Journal | Goals | Contact
- Optional: Background animation or image, smooth scroll hint

---

### 2. 💼 Portfolio Page (`/portfolio`)
**Sections:**
- **About Me**
  - Short professional bio
  - Profile picture
  - Highlights from resume
- **Experience**
  - Internships: VNPT, FPT
  - Course Assistant work
  - Bullet-point style for clarity
- **Projects**
  - Featured projects like TarotTutor
  - Each includes:
    - Project title + tech stack
    - Description
    - Live link or GitHub link

---

### 3. 📚 Journal Blog (`/journal`)
- **Purpose:** Share book reflections, research breakdowns, and general thinking
- **Categories:**
  - Books
  - Machine Learning Research
  - Psychology / Philosophy insights
- Posts rendered from markdown or CMS (optional)
- Each post has:
  - Title
  - Date
  - Tag (e.g. [ML], [Book], [Thought])
  - Body content

---

### 4. 🎯 Goals List (`/goals`)
- Real-time or frequently updated
- Goals organized by:
  - Web Development
  - Machine Learning
  - UI/UX Design
  - Medical AI
  - Mathematics
  - Psychology
  - Philosophy
- Each goal:
  - Title + short description
  - Optional due date
  - Completion checkbox or progress bar

---

### 5. 📬 Contact Page (`/contact`)
- Simple contact info:
  - Email
  - Phone
  - LinkedIn / GitHub links
- Optional: Contact form (Name, Email, Message)
  - Hook up with EmailJS or Formspree for email delivery

---

## 🔷 Navigation (Navbar Component)
```jsx
<Link to="/">Home</Link>
<Link to="/portfolio">Portfolio</Link>
<Link to="/journal">Journal</Link>
<Link to="/goals">Goals</Link>
<Link to="/contact">Contact</Link>
```

---

## 🔷 Tech Stack

- **Frontend:** React.js (Vite or CRA)
- **Styling:** CSS Modules / TailwindCSS
- **Routing:** React Router
- **Optional Backend:** Firebase (for real-time goals), EmailJS
- **Markdown Support:** react-markdown for journal/blog

---

## 🔷 Next Steps
1. Set up React project with routing
2. Build individual page components
3. Add CSS design from `global.css`
4. Create dummy content to test layout
5. Integrate backend or markdown blog system

