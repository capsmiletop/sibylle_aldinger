# Sibylle Aldinger Website - Editing Guide

This is a clean, well-structured static HTML/CSS website that is easy to edit and maintain.

## 📁 Project Structure

```
sibylle_aldinger/
├── index.html          # Home page
├── about.html          # About page
├── kontakt.html        # Contact page with booking
├── lerncoaching.html   # Learning coaching page
├── beratung.html       # Consultation page
├── kommunikation.html  # Communication page
├── impressum.html      # Legal page
├── datenschutz.html    # Privacy policy
├── css/
│   └── main.css        # Main stylesheet (with CSS variables)
├── js/
│   └── main.js         # Main JavaScript
├── images/             # All images
└── README.md           # This file
```

## 🎨 Customizing Colors

All colors are defined as CSS variables in `css/main.css`. To change colors, edit the `:root` section:

```css
:root {
  --color-primary: #b1d3cc;      /* Main brand color (mint green) */
  --color-secondary: #f3bfb1;    /* Secondary color (peach) */
  --color-text: #000;            /* Text color */
  --color-text-light: #fff;      /* Light text color */
  --color-bg: #fff;              /* Background color */
  --color-border: #000;          /* Border color */
}
```

**Example:** To change the primary color to blue, change `--color-primary: #b1d3cc;` to `--color-primary: #0066cc;`

## 📝 Editing Text Content

### Home Page (`index.html`)
- **Hero Section:** Edit the `<h1>` and `<p>` tags in the `.hero` section
- **Quote Section:** Edit the text in the first `.card` after the hero
- **Vision Section:** Edit the text in each `.card` with class "card"
- **Stats:** Change the numbers in `data-count` attributes (e.g., `data-count="200"`)

### Other Pages
- Simply edit the text content within the HTML tags
- Headings use `<h1>`, `<h2>`, `<h3>` tags
- Paragraphs use `<p>` tags
- Lists use `<ul>` and `<li>` tags

## 🖼️ Changing Images

1. **Replace image files** in the `images/` folder
2. **Update image paths** in the HTML:
   - For hero images: `<section class="hero" style="background-image: url('images/your-image.jpg');">`
   - For regular images: `<img src="images/your-image.jpg" alt="Description">`

**Image Tips:**
- Use optimized images (WebP format recommended)
- Keep file sizes small for faster loading
- Use descriptive alt text for accessibility

## 🔗 Adding/Editing Links

- **Navigation links:** Edit the `<a href="...">` tags in the `.nav-menu`
- **Footer links:** Edit links in the `.footer-links` section
- **Social media links:** Update URLs in `.footer-social` section

## 📅 Zeeg Booking Integration

The booking system is integrated on the `kontakt.html` page. To set up:

1. **Get your Zeeg booking link** from your Zeeg account
2. **Edit `kontakt.html`** and replace `YOUR-ZEEG-USERNAME` with your actual Zeeg username/ID:

```html
<!-- Option 1: Embedded iframe -->
<iframe 
    src="https://zeeg.me/YOUR-ZEEG-USERNAME" 
    width="100%" 
    height="600" 
    frameborder="0">
</iframe>

<!-- Option 2: Direct link button -->
<a href="https://zeeg.me/YOUR-ZEEG-USERNAME" target="_blank" class="btn">
    Termin buchen
</a>
```

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop (1920px and above)
- Laptop (1200px - 1919px)
- Tablet (768px - 1199px)
- Mobile (480px - 767px)
- Small Mobile (below 480px)

All responsive styles are in `css/main.css` using media queries.

## 🚀 Deployment

### Option 1: Static Hosting (Recommended)
Upload all files to:
- **Netlify** (drag & drop)
- **Vercel** (connect GitHub)
- **GitHub Pages** (push to repository)
- Any web hosting service

### Option 2: Traditional Web Hosting
1. Upload all files via FTP to your web server
2. Ensure `index.html` is in the root directory
3. Test the website in a browser

## 🛠️ Common Edits

### Change Font Sizes
Edit CSS variables in `css/main.css`:
```css
h1 { font-size: clamp(3rem, 8vw, 6rem); }
h2 { font-size: clamp(2rem, 5vw, 4rem); }
```

### Change Spacing
Edit spacing variables:
```css
--spacing-sm: 1rem;   /* Small spacing */
--spacing-md: 2rem;   /* Medium spacing */
--spacing-lg: 4rem;   /* Large spacing */
```

### Add a New Page
1. Copy an existing HTML file (e.g., `about.html`)
2. Rename it (e.g., `newpage.html`)
3. Update the content
4. Add a link in the navigation menu

## 📧 Contact Information

To update contact information, edit:
- **Email:** `kontakt.html` - Update the email address
- **Address:** `kontakt.html` and `impressum.html` - Update the address
- **Social Media:** Footer section in all pages - Update Instagram/Facebook links

## 🔒 Privacy & Legal Pages

- **Impressum:** Legal information (`impressum.html`)
- **Datenschutz:** Privacy policy (`datenschutz.html`)

Update these pages with your current legal information.

## 💡 Tips for Easy Editing

1. **Use a code editor** like VS Code, Sublime Text, or Notepad++
2. **Test changes locally** by opening HTML files in a browser
3. **Keep backups** before making major changes
4. **Validate HTML** using online validators
5. **Check mobile view** using browser developer tools (F12)

## 🐛 Troubleshooting

**Images not showing?**
- Check file paths are correct
- Ensure image files exist in the `images/` folder
- Check file names match exactly (case-sensitive)

**Styles not applying?**
- Clear browser cache (Ctrl+F5)
- Check CSS file path in HTML: `<link rel="stylesheet" href="css/main.css">`
- Verify CSS file exists

**Navigation not working?**
- Check JavaScript file is loaded: `<script src="js/main.js"></script>`
- Verify file paths are correct
- Check browser console for errors (F12)

## 📚 Additional Resources

- **HTML Basics:** [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
- **CSS Basics:** [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)
- **Zeeg Documentation:** [Zeeg Help Center](https://help.zeeg.me)

---

**Need Help?** If you need assistance with editing, consider hiring a web developer or using online tutorials.

**Last Updated:** 2024

