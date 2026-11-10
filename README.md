# G. Ganesh — Personal Portfolio

A responsive portfolio website built with plain HTML, CSS and JavaScript. It is prepared for GitHub Pages and includes a public-safe resume.

## Files

- `index.html` — portfolio page, SEO metadata and Person structured data
- `styles.css` — responsive styling
- `script.js` — navigation, theme and project interactions
- `assets/Ganesh-Public-Resume.pdf` — public resume with date of birth and detailed home address omitted
- `assets/` — favicon and profile fallback image
- `robots.txt` and `sitemap.xml` — search-engine discovery files

## Publish using GitHub Pages

1. Sign in to [GitHub](https://github.com/).
2. Create a **new public repository** named exactly `galeti143.github.io`. Leave **Add a README file**, `.gitignore`, and license unchecked because this package already contains the website files.
3. Open the new repository and choose **Add file → Upload files**.
4. Extract this ZIP on your Mac. Upload the *contents* of the `Ganesh-Portfolio` folder (not the outer folder) so `index.html` is at the repository root. Include the `assets` folder, `styles.css`, `script.js`, `robots.txt`, `sitemap.xml`, and `.nojekyll`.
5. Commit the upload to the `main` branch.
6. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, then save.
7. Wait for GitHub Pages to finish building, then visit `https://galeti143.github.io/`.

## Help Google discover the site

1. Open [Google Search Console](https://search.google.com/search-console/).
2. Add the URL-prefix property `https://galeti143.github.io/`.
3. Complete the verification method Google provides. If Google gives you an HTML verification file, upload that file to the repository root and wait for GitHub Pages to publish it before clicking Verify.
4. In Search Console, submit `https://galeti143.github.io/sitemap.xml`.
5. Use URL Inspection for the home page and select **Request indexing**.
6. Add the portfolio URL to your GitHub profile README and LinkedIn profile.

Google controls when and where the page appears. Indexing can take days or weeks, and a broad search for only “Ganesh” is very competitive. Use the more distinctive search phrase **“Galeti Ganesh portfolio”** as well.

## Privacy check

The public resume intentionally omits date of birth and detailed home address. It includes the email address, phone number, broad location, education, internships, projects, and links shown in the source resume/profile. Review the contact details before publishing. The original uploaded resume is not included in this package.

## Local preview on Mac

Double-click `index.html` to open it in a browser, or open the folder in Visual Studio Code and use the Live Server extension.
