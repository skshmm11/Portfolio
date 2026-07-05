# Saksham Arora — Portfolio

Personal portfolio website built with plain HTML, CSS, and JavaScript. No frameworks, no build step — clone it and open it.

🔗 **Live site:** _add your GitHub Pages / deployment link here_

## Preview

_add a screenshot here, e.g._
`![Portfolio preview](preview.png)`

## About

I'm a 3rd-year B.Tech CSE student at CGC University, Mohali. This site is a running log of things I've actually built, versioned like software releases (v0.1 → v0.9) rather than a generic project list.

## Built with

- HTML5
- CSS3 (custom, no framework)
- Vanilla JavaScript
- Fonts: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk), [Inter](https://fonts.google.com/specimen/Inter), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

## Features

- Responsive layout (mobile, tablet, desktop)
- Scroll-reveal animations on section entry
- "Build log" style project section with version tags
- Contact form that opens the visitor's email client directly — no backend required
- Accessible focus states and reduced-motion support

## Project structure

```
├── index.html      # Page structure and content
├── style.css       # All styling and design tokens
├── script.js       # Nav toggle, scroll reveal, contact form
└── README.md
```

## Running locally

No build tools or dependencies needed.

```bash
git clone https://github.com/skshmm11/<repo-name>.git
cd <repo-name>
```

Then just open `index.html` in your browser, or serve it locally:

```bash
# Python
python3 -m http.server 5500

# or Node
npx serve .
```

Visit `http://localhost:5500` (or the port shown).

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, select the `main` branch and `/ (root)` folder.
4. Save — your site will be live at `https://skshmm11.github.io/<repo-name>/`.

## To-do

- [ ] Swap placeholder project links in the Build Log section with real live-demo and GitHub URLs
- [ ] Add a screenshot/preview image to this README
- [ ] Add live deployment link above

## Contact

- Email: arorasaksham773@gmail.com
- GitHub: [@skshmm11](https://github.com/skshmm11)
- LinkedIn: [Saksham Arora](https://www.linkedin.com/in/saksham-arora-978682325)
- Phone: +91 97000 13904

## License

Feel free to use this as a reference for your own portfolio structure. Please don't copy the content verbatim.
