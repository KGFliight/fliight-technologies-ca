import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  image = '/logo-512.png',
  type = 'website',
  canonical = null 
}) => {
  const location = useLocation()
  
  useEffect(() => {
    // Update document title
    document.title = title || 'Fliight Technologies Canada - Advanced VTOL Drones & UAV Solutions'
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description || 'Leading Canadian UAV solutions provider specializing in Arace VTOL drones for long-range ISR, firefighting, mapping, and surveillance.')
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords || 'drone, VTOL, UAV, Arace, long range, ISR, firefighting, mapping, surveillance, Canadian drone company, Toronto drone services')
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', title || 'Fliight Technologies Canada - Advanced VTOL Drones & UAV Solutions')
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', description || 'Leading Canadian UAV solutions provider specializing in Arace VTOL drones for long-range ISR, firefighting, mapping, and surveillance.')
    }
    
    const ogImage = document.querySelector('meta[property="og:image"]')
    if (ogImage) {
      ogImage.setAttribute('content', `https://fliight.ca${image}`)
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) {
      ogUrl.setAttribute('content', `https://fliight.ca${location.pathname}`)
    }
    
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]')
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title || 'Fliight Technologies Canada - Advanced VTOL Drones & UAV Solutions')
    }
    
    const twitterDescription = document.querySelector('meta[property="twitter:description"]')
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description || 'Leading Canadian UAV solutions provider specializing in Arace VTOL drones for long-range ISR, firefighting, mapping, and surveillance.')
    }
    
    const twitterImage = document.querySelector('meta[property="twitter:image"]')
    if (twitterImage) {
      twitterImage.setAttribute('content', `https://fliight.ca${image}`)
    }
    
    const twitterUrl = document.querySelector('meta[property="twitter:url"]')
    if (twitterUrl) {
      twitterUrl.setAttribute('content', `https://fliight.ca${location.pathname}`)
    }
    
    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonical || `https://fliight.ca${location.pathname}`)
    }
    
    // Track page view in Google Analytics
    if (window.gtag) {
      window.gtag('config', 'G-7XY08GK076', {
        page_title: title,
        page_location: `https://fliight.ca${location.pathname}`,
        page_path: location.pathname
      })
    }
  }, [title, description, keywords, image, type, canonical, location.pathname])
  
  return null
}

export default SEOHead 