# Smruti Ranjan Dash — Portfolio

A responsive dark portfolio built with React, Vite, and Tailwind CSS.

## Included
- Responsive navigation and sections for profile, skills, experience, projects, education, and contact
- Subtle scroll-reveal and floating animations, with reduced-motion support
- Live public GitHub repository listing via GitHub's public REST API
- Downloadable resume at `/resume.pdf`
- Contact form that opens the visitor's default email app (no backend or form data storage)
- Vercel-ready configuration and SEO metadata

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Deploy to Vercel
1. Create a GitHub repository and push this project.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy. The included `vercel.json` supports SPA routing.

## Before publishing
- Verify the resume details and update the PDF if needed.
- Replace project cards' profile-level GitHub links with exact repository URLs once the corresponding repositories are public.
- Add project screenshots, demos, and measurable outcomes only when verified.
- Consider a custom domain and a privacy-friendly analytics solution if required.

## Contact form behavior
The contact form uses a `mailto:` link. It does not transmit or store data on a server. For a hosted form endpoint, integrate a provider such as Formspree or a custom backend and add spam protection.
