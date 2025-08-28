export const weddingThemes = {
  'romantic-rose': {
    name: 'Romantic Rose',
    primaryColor: '15 85% 75%',
    secondaryColor: '345 25% 95%',
    accentColor: '38 85% 85%',
    backgroundColor: '354 100% 98%',
    foregroundColor: '342 15% 25%',
    customColors: {
      'rose-gold': '15 85% 75%',
      'champagne': '38 85% 85%',
      'blush': '345 60% 90%',
      'dusty-rose': '345 25% 80%',
      'sage': '150 20% 85%'
    }
  },
  'ocean-blue': {
    name: 'Ocean Blue',
    primaryColor: '210 100% 70%',
    secondaryColor: '210 25% 95%',
    accentColor: '180 85% 85%',
    backgroundColor: '210 100% 98%',
    foregroundColor: '210 15% 25%',
    customColors: {
      'ocean-blue': '210 100% 70%',
      'seafoam': '180 85% 85%',
      'powder-blue': '210 60% 90%',
      'navy': '210 25% 40%',
      'mint': '160 50% 85%'
    }
  },
  'lavender-dream': {
    name: 'Lavender Dream',
    primaryColor: '270 60% 75%',
    secondaryColor: '270 25% 95%',
    accentColor: '300 40% 85%',
    backgroundColor: '270 50% 98%',
    foregroundColor: '270 15% 25%',
    customColors: {
      'lavender': '270 60% 75%',
      'mauve': '300 40% 85%',
      'lilac': '270 50% 90%',
      'plum': '270 30% 60%',
      'cream': '45 30% 95%'
    }
  },
  'forest-green': {
    name: 'Forest Green',
    primaryColor: '120 40% 50%',
    secondaryColor: '120 20% 95%',
    accentColor: '80 50% 75%',
    backgroundColor: '120 30% 98%',
    foregroundColor: '120 15% 25%',
    customColors: {
      'forest': '120 40% 50%',
      'sage': '120 20% 75%',
      'mint': '160 40% 85%',
      'moss': '100 30% 60%',
      'ivory': '60 20% 96%'
    }
  },
  'sunset-coral': {
    name: 'Sunset Coral',
    primaryColor: '15 80% 65%',
    secondaryColor: '15 25% 95%',
    accentColor: '45 70% 80%',
    backgroundColor: '25 60% 98%',
    foregroundColor: '15 15% 25%',
    customColors: {
      'coral': '15 80% 65%',
      'peach': '25 70% 80%',
      'apricot': '30 60% 85%',
      'terracotta': '15 50% 55%',
      'cream': '50 30% 95%'
    }
  }
};

export type ThemeName = keyof typeof weddingThemes;