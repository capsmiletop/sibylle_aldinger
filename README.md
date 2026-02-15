# Sibylle Aldinger Website - Editing Guide

## 📝 Quick Start

This website is built with clean, beginner-friendly HTML and CSS. You can easily edit text, prices, and images without any coding experience.

---

## 🎨 **Editing Text Content**

### Finding Text in HTML Files

1. Open any HTML file (e.g., `index.html`, `about.html`, `kontakt.html`) in a text editor
2. Look for text between HTML tags like:
   ```html
   <h1>Your Heading Text Here</h1>
   <p>Your paragraph text here</p>
   ```
3. Simply replace the text between the tags

### Example: Changing a Heading

**Before:**
```html
<h1>Welcome to My Website</h1>
```

**After:**
```html
<h1>Welcome to Sibylle's Learning Center</h1>
```

### Example: Changing Paragraph Text

**Before:**
```html
<p>This is some text that you want to change.</p>
```

**After:**
```html
<p>This is your new text that replaces the old text.</p>
```

---

## 💰 **Editing Prices**

Prices are typically found in sections with clear labels. Look for:

```html
<div class="price-section">
    <h3>Lernförderung</h3>
    <p class="price">€50 pro Stunde</p>
</div>
```

Simply change the price value:
```html
<p class="price">€60 pro Stunde</p>
```

---

## 🖼️ **Changing Images**

### Replacing an Image

1. Find the image tag in the HTML file:
   ```html
   <img src="images/your-image.jpg" alt="Description">
   ```

2. Replace `your-image.jpg` with your new image filename:
   ```html
   <img src="images/new-image.jpg" alt="Description">
   ```

3. Make sure your new image is in the `images/` folder

### Adding a New Image

1. Save your image to the `images/` folder
2. Add the image tag where you want it:
   ```html
   <img src="images/my-new-photo.jpg" alt="Description of the image">
   ```

### Image Best Practices

- Use `.jpg` or `.webp` format for photos
- Use `.png` for images with transparency
- Recommended sizes:
  - Hero images: 1920px wide
  - Content images: 800-1200px wide
  - Thumbnails: 400px wide

---

## 🎨 **Changing Colors**

Colors are controlled by CSS variables, making them easy to change.

### Location
Open `css_style/[page-name].css` and look for color values, or edit the main color variables.

### Primary Colors
- **Primary Color (Teal)**: `#b1d3cc`
- **Secondary Color (Peach)**: `#f3bfb1`
- **Text Color**: `#000` (black)
- **Background**: `#fff` (white)

### Example: Changing the Primary Color

Find and replace:
```css
background-color: #b1d3cc;
```

With your new color:
```css
background-color: #your-color-here;
```

---

## 📄 **File Structure**

```
sibylle_aldinger/
├── index.html          # Home page
├── about.html          # About page
├── kontakt.html        # Contact page
├── lerncoaching.html   # Learning coaching page
├── beratung.html       # Consultation page
├── kommunikation.html  # Communication page
├── impressum.html      # Legal/Imprint page
├── datenschutz.html    # Privacy policy
├── css_style/          # CSS files (one per page)
│   ├── index.css
│   ├── about.css
│   └── ...
├── css/                # Font files
│   ├── BeVietnam-*.woff2
│   └── Dynalight-*.woff2
└── images/             # All images
    └── *.jpg, *.webp, *.png
```

---

## 🔧 **Common Edits**

### Changing Contact Information

Open `kontakt.html` and look for:
```html
<p>Email: your-email@example.com</p>
<p>Phone: +49 123 456 789</p>
```

### Updating Social Media Links

Find links like:
```html
<a href="https://instagram.com/yourprofile">Instagram</a>
```

### Modifying Navigation Menu

The navigation is usually at the top of each HTML file. Look for:
```html
<nav>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    ...
</nav>
```

---

## ⚠️ **Important Notes**

1. **Always backup files** before making changes
2. **Test in a browser** after editing
3. **Keep image filenames** lowercase with no spaces (use hyphens: `my-image.jpg`)
4. **Don't delete** HTML tags, only change the content between them
5. **Save files** with `.html` extension

---

## 🚀 **Testing Your Changes**

1. Open the HTML file in a web browser (Chrome, Firefox, Edge)
2. Check that:
   - Text displays correctly
   - Images load properly
   - Links work
   - Page looks good on mobile (resize browser window)

---

## 📞 **Need Help?**

- **Text not showing?** Check that you didn't accidentally delete HTML tags
- **Image not loading?** Verify the filename matches exactly (case-sensitive)
- **Colors not changing?** Make sure you saved the CSS file
- **Layout broken?** Check that you didn't remove any closing tags `</div>`, `</p>`, etc.

---

## 📚 **HTML Basics for Beginners**

### Common HTML Tags

- `<h1>`, `<h2>`, `<h3>` = Headings (h1 is largest)
- `<p>` = Paragraph
- `<a href="...">` = Link
- `<img src="...">` = Image
- `<div>` = Container/box
- `<ul>` = Unordered list
- `<li>` = List item

### Tag Rules

- Most tags need to be **opened** and **closed**:
  ```html
  <p>Text here</p>
  ```
- Some tags are **self-closing**:
  ```html
  <img src="image.jpg">
  ```

---

## ✅ **Quick Checklist Before Publishing**

- [ ] All text updated correctly
- [ ] Prices are current
- [ ] Images load properly
- [ ] Links work (test all navigation)
- [ ] Contact information is correct
- [ ] Page looks good on mobile
- [ ] No broken images or links

---

**Last Updated:** 2024

