# Wedding Invitation Template Business

A dynamic, customizable wedding invitation template system that allows you to create unique wedding websites for different couples with different themes and colors.

## 🚀 Features

- **Dynamic Theming**: Easily change colors, fonts, and styling through JSON configuration
- **Pre-built Themes**: 5 beautiful theme variations included
- **Fully Customizable**: Edit all content through simple JSON files
- **Responsive Design**: Beautiful on all devices
- **Professional Components**: Hero, Gallery, Timeline, Addresses, Countdown
- **Easy Deployment**: Ready for Vercel, Netlify, or any hosting platform

## 🎨 Available Themes

1. **Romantic Rose** - Classic pink and gold wedding theme
2. **Ocean Blue** - Beach wedding with blues and teals
3. **Lavender Dream** - Purple and mauve elegant theme
4. **Forest Green** - Nature-inspired green theme
5. **Sunset Coral** - Warm coral and peach theme

## 🏗️ How to Use for Your Business

### For Each New Wedding:

1. **Copy the data.json template**
2. **Customize the theme colors**:
   ```json
   {
     "theme": {
       "name": "custom-theme",
       "primaryColor": "Your HSL color",
       "secondaryColor": "Your HSL color",
       // ... more colors
     }
   }
   ```
3. **Update couple information**
4. **Add their photos to the gallery**
5. **Customize timeline and addresses**
6. **Deploy to a unique subdomain/domain**

### Template Structure:

```
public/
  ├── data.json (main template)
  └── templates/
      ├── ocean-blue.json
      ├── lavender-dream.json
      └── ... (more themes)
```

### Quick Setup for New Client:

1. Choose a pre-made theme from `/public/templates/`
2. Copy to `data.json`
3. Replace couple names, dates, and venue info
4. Upload client's photos
5. Deploy to `couple-name.yourdomain.com`

## 🛠️ Customization Guide

### Colors
All colors use HSL format for better control:
```json
"primaryColor": "210 100% 70%" // Hue Saturation Lightness
```

### Theme Structure
```json
{
  "theme": {
    "name": "theme-name",
    "primaryColor": "HSL values",
    "secondaryColor": "HSL values",
    "accentColor": "HSL values",
    "backgroundColor": "HSL values",
    "foregroundColor": "HSL values",
    "customColors": {
      "special-color-1": "HSL values",
      "special-color-2": "HSL values"
    }
  }
}
```

## 💼 Business Model Ideas

1. **Package Pricing**:
   - Basic: Pre-made theme + content customization
   - Premium: Custom colors + additional customizations
   - Luxury: Completely custom design

2. **Subscription Model**:
   - Host multiple couples' sites
   - Annual packages for wedding planners

3. **White Label**:
   - License to wedding planners and venues
   - Custom branding options

## 🚀 Deployment

Each wedding site can be deployed to:
- Vercel (recommended)
- Netlify
- Your own hosting with custom domains

### Environment Setup:
1. Set up domain structure: `couple-name.yourbusiness.com`
2. Automate deployment with GitHub Actions
3. Use environment variables for different configurations

## 📁 File Structure for Business

```
your-business/
├── templates/          # Pre-made theme templates
├── client-sites/      # Individual client deployments
│   ├── emma-james/    # Copy of template customized
│   ├── sarah-michael/ # Copy of template customized
│   └── ...
└── assets/           # Shared assets and base images
```

## 🎯 Next Steps

1. Set up automated deployment pipeline
2. Create client onboarding form
3. Build photo upload system
4. Add more theme variations
5. Create admin dashboard for managing multiple sites

---

Perfect for wedding photographers, planners, and digital agencies looking to offer custom wedding websites!