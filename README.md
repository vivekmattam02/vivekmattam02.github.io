# Vivekananda Swamy Mattam - Academic Portfolio

A clean, academic-style portfolio website inspired by [Jon Barron's website](https://jonbarron.info/).

## Structure

```
portfolio/
├── index.html          # Main HTML file
├── stylesheet.css      # CSS styles
├── images/             # Project thumbnails and profile photo
│   ├── portfolio.jpg              # Your profile photo (from your React site)
│   ├── datacenter.jpg             # HSRN Robot thumbnail
│   ├── esvc.jpg                   # E.S.V.C. thumbnail
│   ├── vip.jpg                    # VIP Self-Drive thumbnail
│   ├── bark.jpg                   # B.A.R.K. Door thumbnail
│   ├── slap.jpg                   # S.L.A.P. Hand thumbnail
│   ├── highspeed_nav.jpg          # High-Speed Nav (need to add)
│   ├── quadruped_rl.jpg           # Quadruped RL (need to add)
│   ├── perception.jpg             # Robot Perception (need to add)
│   ├── scara.jpg                  # SCARA project (need to add)
│   ├── nyu.jpg                    # NYU logo for experience
│   ├── xmachines.jpg              # Xmachines logo
│   └── favicon.ico                # Browser favicon
└── data/
    └── Vivek_Mattam_CV.pdf        # Your CV/Resume PDF
```

## Setup Instructions

### 1. Copy Your Existing Images

From your React portfolio `src/assets/images/`, copy these files to `images/`:
- `portfolio.jpg` (your profile photo)
- `datacenter.jpg`
- `esvc.jpg`
- `vip.jpg`
- `bark.jpg`
- `slap.jpg`

### 2. Add Missing Images

You need to add thumbnails for these projects (160x120px recommended):
- `highspeed_nav.jpg` - Bell Labs high-speed navigation project
- `quadruped_rl.jpg` - Unitree Go2 reinforcement learning
- `perception.jpg` - Robot perception coursework
- `scara.jpg` - SCARA manipulator project
- `nyu.jpg` - NYU logo for experience section
- `xmachines.jpg` - Xmachines company logo

### 3. Add Your CV

Place your CV as `data/Vivek_Mattam_CV.pdf`

### 4. Deploy to GitHub Pages

**Option A: Replace your React site**
```bash
# In your vivekmattam02.github.io repo
git checkout gh-pages
# Remove React build files
rm -rf static/ asset-manifest.json index.html etc.
# Copy new portfolio files
cp -r portfolio/* .
git add .
git commit -m "Switch to Jon Barron style portfolio"
git push origin gh-pages
```

**Option B: Deploy from main branch**
```bash
# Copy portfolio files to repo root
cp -r portfolio/* .
git add .
git commit -m "Add Jon Barron style portfolio"
git push origin main
# Then in GitHub Settings > Pages, set source to main branch
```

## Content Mapping

Your React portfolio content has been converted:

| React Component | Barron Section |
|----------------|----------------|
| `Main.tsx` About Me | Header bio section |
| `Project.tsx` | Projects section |
| `Timeline.tsx` | Experience section |
| `Expertise.tsx` | Technical Skills section |

## Customization

### Highlighted Projects

Projects with `class="highlight"` get a yellow background. Current highlights:
- High-Speed Autonomous Navigation (Bell Labs)
- Reinforcement Learning for Quadruped Locomotion

Adjust in `index.html` based on what you want recruiters to notice first.

### Adding New Projects

Copy this template:

```html
<tr>
    <td style="padding:20px;width:25%;vertical-align:middle">
        <div class="one">
            <img src="images/YOUR_IMAGE.jpg" width="160" alt="Project Name">
        </div>
    </td>
    <td style="padding:20px;width:75%;vertical-align:middle">
        <span class="papertitle">Project Title</span>
        <br>
        <strong>Vivekananda Swamy Mattam</strong>
        <br>
        <em>Context/Venue</em>, Year
        <br>
        <a href="#">link</a>
        <p></p>
        <p>Description.</p>
        <p><em>Tech: Tools used</em></p>
    </td>
</tr>
```

### Color Scheme

Edit `stylesheet.css`:
- Link color: `#1772d0` (blue)
- Hover color: `#f09228` (orange)
- Highlight background: `#ffffd0` (light yellow)
- Title color: `#224b8d` (dark blue)

## What's Different from Your React Site

1. **No JavaScript required** - Pure HTML/CSS, loads instantly
2. **Single page** - Everything visible at once, no scrolling through sections
3. **Academic style** - More appropriate for research/grad school applications
4. **Simpler hosting** - No build step needed

## Credits

- Template inspired by [Jon Barron](https://jonbarron.info/)
- Original React template by [Yuji Sato](https://github.com/yujisatojr/react-portfolio-template)
