# Release Notes - Canadian Market Adaptation

## Version 1.0.0 - Canadian Market Launch
**Date:** December 2024

### 🎯 Major Changes

#### **Market Localization**
- **Location**: Changed from "Wollongong, Australia" to "Toronto, Canada"
- **Email**: Updated from "info@fliight.com.au" to "info@fliight.ca"
- **Company Focus**: Removed "Australian" references, now focuses on "UAV technologies" globally

#### **Product Portfolio Restructuring**
- **Removed DeltaQuad Products**: Completely removed DeltaQuad Pro and DeltaQuad Evo from the website
- **Focus on Arace Systems**: Website now exclusively showcases Arace Phoenix, Arace Angel, and Arace Griffin Pro
- **Updated Navigation**: Removed DeltaQuad links from header dropdown and footer navigation

#### **Technical Updates**
- **Routing**: Removed DeltaQuad routes from App.jsx
- **Components**: Updated all product payload references from "AVT Australia" to "AVT Canada"
- **Meta Tags**: Updated Open Graph and Twitter meta URLs to fliight.ca
- **Redirects**: Updated all redirect URLs in _redirects file to point to fliight.ca

### 📁 Files Modified

#### **Core Components**
- `src/components/Footer.jsx` - Updated location, email, removed DeltaQuad links
- `src/components/Header.jsx` - Removed DeltaQuad from navigation dropdown
- `src/components/AboutComponent.jsx` - Updated company vision statement
- `src/components/DronesCarousel.jsx` - Removed DeltaQuad products from carousel

#### **Product Components**
- `src/components/AraceAngelProductPayloadsCarousel.jsx` - Updated AVT reference
- `src/components/AracePhoenixProductPayloadsCarousel.jsx` - Updated AVT reference  
- `src/components/AraceGriffinProductPayloadsCarousel.jsx` - Updated AVT reference

#### **Configuration Files**
- `src/App.jsx` - Removed DeltaQuad routes and imports
- `index.html` - Updated meta tags for Canadian domain
- `public/_redirects` - Updated all redirect URLs to fliight.ca
- `README.md` - Updated documentation for Canadian market

### 🚀 Deployment Notes

#### **Netlify Deployment**
- Website is configured for deployment on Netlify
- All redirects updated to point to fliight.ca domain
- Meta tags optimized for Canadian market

#### **Domain Configuration**
- Primary domain: fliight.ca
- All legacy .au redirects updated to .ca
- Social media meta tags updated

### 🔧 Technical Specifications
- **Framework**: React with Vite
- **Styling**: Tailwind CSS
- **Deployment**: Netlify-ready
- **Market**: Canadian market focus
- **Products**: Arace systems only (Phoenix, Angel, Griffin Pro)

### 📞 Contact Information
- **Location**: Toronto, Canada
- **Email**: info@fliight.ca
- **Phone**: +(61) 428 279 876 (unchanged as per requirements)

### 🎯 Next Steps
- Deploy to Netlify
- Configure custom domain (fliight.ca)
- Update any remaining references as needed
- Monitor analytics for Canadian market performance

---

**Note**: This release maintains all existing functionality while adapting the website specifically for the Canadian market. All DeltaQuad references have been removed, and the focus is now exclusively on Arace systems. 