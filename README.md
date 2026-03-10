# Kerna Marketing Website

This project is a multi-page marketing website built as part of the Kerna Frontend Internship assignment.

The website represents Kerna, a strategy-driven PR and marketing agency that helps small businesses grow through smart strategy, creative design, and practical execution.

---

## Tech Stack Used

- Next.js (React Framework)
- Tailwind CSS
- JavaScript
- HTML & CSS

The project uses the Next.js App Router structure for building multiple pages.

---

## Website Pages

The site contains four main pages:

### Home
Includes:
- Hero section
- About Kerna
- Services
- How We Work
- Why Choose Kerna
- Work Preview
- Careers Preview
- Contact Section

### Work
Displays three sample projects with:
- Title
- Industry
- Description
- Problem → Solution summary

### Careers
Lists three internship roles:
- Web Development Intern
- Marketing / Sales Intern
- Branding & Research Intern

Each role includes:
- Description
- Skills required
- Duration (12 weeks)
- Apply button

### Contact / Apply
Contains an application form with fields for:
- Full Name
- Email
- Role applying for
- Portfolio / GitHub / LinkedIn
- Short message

The form includes basic client-side validation and a success message.

---

## Theme System

The website implements a light and dark theme system.

Features:
- Detects system theme using `prefers-color-scheme`
- Provides manual theme toggle in the navigation bar
- Stores user preference in `localStorage`
- Overrides system theme if a user preference exists

Dark mode is implemented using Tailwind CSS `dark` class.

---

## Templates Used

No paid templates or website builders were used.

The layout and components were built manually using:
- Next.js
- Tailwind CSS

All tools used are free and open-source.

---

## Known Limitations

- The application form does not connect to a backend server.
- Form submissions are handled only on the client side.
- The project uses placeholder content for sample work and internship descriptions.

---

## Deployment

The project can be deployed easily using Vercel.

Steps:
1. Push the project to GitHub
2. Import the repository into Vercel
3. Deploy the project

---

## Author

Arun Shivhare
Frontend Internship Assignment