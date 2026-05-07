# e-Portfolio

A clean, professional academic e-Portfolio built with vanilla HTML, CSS, and JavaScript.
No build tools or frameworks required — works with GitHub Pages or Vercel out of the box.

---

## 📁 Project Structure

```
eportfolio/
├── index.html              ← Main entry point (do not rename)
├── assets/
│   ├── css/
│   │   └── style.css       ← All styles
│   └── js/
│       ├── data.js         ← ⭐ YOUR CONTENT — edit this file!
│       └── main.js         ← App logic (no need to edit)
└── README.md
```

---

## ✏️ How to Customize

### 1. Edit your personal info
Open `assets/js/data.js` and update the `owner` section:
```js
owner: {
  name: "Your Full Name",
  program: "Bachelor of Science in Computer Engineering",
  school: "Jose Rizal University",
  bio: "Your short bio here...",
  email: "youremail@example.com",
  photo: "assets/img/photo.jpg", // add your photo here
}
```

### 2. Add your photo
Create a folder `assets/img/` and place your photo there.
Then update `photo: "assets/img/photo.jpg"` in `data.js`.

### 3. Upload your artifact files
For each artifact, upload your PDF/file to your repository or a cloud service (Google Drive, OneDrive), then paste the link:
```js
fileLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view",
```
For video artifacts:
```js
fileLink: "https://youtu.be/YOUR_VIDEO_ID",
// or for web apps:
webLink: "https://your-app.vercel.app",
```

### 4. Edit the write-ups
In `data.js`, each artifact has a `writeup` object with:
- `cpe_so.tags` — the Student Outcomes this artifact contributes to
- `cpe_so.text` — your explanation of the CpE SO contribution
- `personal.text` — your personal goals reflection

### 5. Add more subjects (future courses)
In `data.js`, add a new object to the `subjects` array. Copy the structure from an existing subject. The new subject will automatically appear in the navigation and homepage — no other files need to be changed.

---

## 🚀 Deployment

### GitHub Pages
1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)` folder
4. Your portfolio will be live at `https://yourusername.github.io/repo-name`

### Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **New Project** and import your repository
3. Leave all settings as default (Framework: Other)
4. Click **Deploy**
5. Your portfolio will be live at `https://your-project.vercel.app`

---

## 📝 Artifact Checklist

For each subject, ensure you have all 4 artifacts:

| # | Type | Required |
|---|------|---------|
| 1 | Compilation of PTs / Lab Activities (PDF) | ✅ |
| 2 | Journal Article (PDF) | ✅ |
| 3 | Source Code (PDF) | ✅ |
| 4 | Video / Working Model / Web App Link | ✅ |

Each artifact must have write-ups for:
- [ ] Contribution to CpE Student Outcomes
- [ ] Contribution to Personal Goals
