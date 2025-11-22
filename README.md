# P.N.A.S.Sresty - Full Stack Developer Portfolio

A modern, responsive portfolio website showcasing skills, projects, and professional experience. Built with HTML5, CSS3, JavaScript, and Bootstrap 5.

![Portfolio Preview](https://via.placeholder.com/800x400/2d3436/ffffff?text=Portfolio+Preview)

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices
- **Modern UI/UX** - Clean and professional design
- **Smooth Animations** - AOS (Animate On Scroll) library integration
- **Interactive Elements** - Hover effects and smooth scrolling
- **Contact Form** - Functional contact form with validation
- **Project Showcase** - Modal popups for project details
- **Social Links** - Direct links to GitHub and LinkedIn profiles
- **Loading Animations** - Professional loading experience
- **Scroll to Top** - Convenient navigation feature

## 📁 Project Structure

```
port/
├── index.html              # Main HTML file
├── styles.css              # Custom CSS styles
├── script.js               # JavaScript functionality
├── simple-test.html        # Simple test file for debugging
├── test.html               # Test file for functionality
├── README.md               # This file
├── Adithya.jpg             # Profile photo
├── project1.jpeg           # Project images
├── project2.jpeg
├── project3.jpeg
├── Techsonix.jpg           # Internship certificate
└── Adithya Resume.pdf      # Resume PDF
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables
- **JavaScript (ES6+)** - Interactive functionality
- **Bootstrap 5** - Responsive framework
- **Font Awesome** - Icons
- **AOS Library** - Scroll animations
- **Google Fonts** - Typography (Poppins)

## 🚀 Quick Start

### Method 1: Simple File Opening
1. **Navigate to your project folder**
2. **Double-click on `index.html`**
3. **It will open in your default browser**

### Method 2: Using Live Server (Recommended)
1. **Open VS Code** in your project folder
2. **Install Live Server extension** (if not already installed)
3. **Right-click on `index.html`**
4. **Select "Open with Live Server"**
5. **Your portfolio will open at `http://localhost:5500`**

### Method 3: Python HTTP Server
```bash
cd /path/to/your/portfolio
python -m http.server 8000
```
Then open: `http://localhost:8000`

### Method 4: Using Node.js
```bash
cd /path/to/your/portfolio
npx http-server
```
Then open: `http://localhost:8080`

## 📋 Sections

### 1. **Hero Section**
- Personal introduction
- Profile photo
- "View My Work" button

### 2. **About Section**
- Personal description
- Skills with progress bars
- Technical expertise

### 3. **Education Section**
- Academic background
- Timeline layout
- Institution details

### 4. **Internships Section**
- Professional experience
- Certificate display
- Company information

### 5. **Projects Section**
- Portfolio showcase
- Project cards with images
- "Learn More" modals

### 6. **Contact Section**
- Contact information
- Functional contact form
- Social media links

## 🔧 Customization

### Changing Personal Information
Edit the following in `index.html`:
- Name and title in the hero section
- About section content
- Education details
- Contact information
- Social media links

### Modifying Colors
Update CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2d3436;
    --secondary-color: #0984e3;
    --accent-color: #00b894;
    --text-color: #333;
    --light-bg: #f5f7fa;
    --white: #ffffff;
}
```

### Adding Projects
Duplicate the project card structure:
```html
<div class="col-md-4 mb-4">
    <div class="card">
        <img src="your-project-image.jpg" class="card-img-top" alt="Project Name">
        <div class="card-body">
            <h5 class="card-title">Project Name</h5>
            <p class="card-text">Project description</p>
            <a href="#" class="btn btn-primary project-learn-more" 
               data-title="Project Name" 
               data-description="Detailed description" 
               data-image="your-project-image.jpg">Learn More</a>
        </div>
    </div>
</div>
```

## 🐛 Troubleshooting

### Issue: Page Not Loading
1. **Try `simple-test.html`** first to verify basic functionality
2. **Check browser console** (F12) for error messages
3. **Ensure all files** are in the same folder
4. **Try a different browser** (Chrome, Firefox, Edge)

### Issue: Buttons Not Working
1. **Open browser console** (F12)
2. **Look for console messages**:
   - "Script file loaded!"
   - "Portfolio loaded successfully!"
   - "View My Work button found!"
3. **Check for JavaScript errors**

### Issue: Images Not Displaying
1. **Verify image files** are in the correct folder
2. **Check file names** match exactly (case-sensitive)
3. **Ensure image formats** are supported (.jpg, .jpeg, .png)

### Issue: External Resources Not Loading
1. **Check internet connection**
2. **Try refreshing the page**
3. **Clear browser cache**
4. **Disable browser extensions** temporarily

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 🔗 Links

- **GitHub Profile**: [https://github.com/Penjarla-adithya18](https://github.com/Penjarla-adithya18)
- **LinkedIn Profile**: [https://www.linkedin.com/in/sresty](https://www.linkedin.com/in/sresty)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📞 Contact

- **Email**: p.n.a.s.sresty@gmail.com
- **GitHub**: [@Penjarla-adithya18](https://github.com/Penjarla-adithya18)
- **LinkedIn**: [sresty](https://www.linkedin.com/in/sresty)

## 🙏 Acknowledgments

- Bootstrap 5 for the responsive framework
- Font Awesome for the icons
- AOS library for scroll animations
- Google Fonts for typography

---

**Made with ❤️ by P.N.A.S.Sresty** 