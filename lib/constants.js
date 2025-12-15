// Centralized site constants for dates and external links
export const HERO_DATE = 'March 28, 2026'
export const EVENT_DATE = HERO_DATE
export const EVENT_FULL = `${HERO_DATE} 11:00 AM - 4:30 PM`
export const EVENT_YEAR = 2026
export const ENTRY_FEE = '$25'

export const LOCATION_URL = 'https://goo.gl/maps/se4i7cSCAxGcRvYHA'
export const SCHEDULE_URL = 'https://drive.google.com/file/d/1_pGeCsgjBPJoBectF0f7YiK0PXAKdIQ6/view?usp=sharing'
export const REGISTRATION_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScTMfqCA_lCq22GF5dJI-7NHUpDXHzLT3mwgkUh_7qO_v-t4Q/viewform?usp=sf_link'
export const MAILTO = 'mailto:team@hillshacks.com'
// Embed-friendly form URL (docs forms support `embedded=true`)
export const REGISTRATION_EMBED_URL = REGISTRATION_FORM_URL.replace('/viewform', '/viewform?embedded=true')

// Sponsor packet PDF (placeholder - replace with real file if available)
export const SPONSOR_PACKET_URL = 'https://example.com/sponsor-packet.pdf'

// Map embed query (used to build maps embed URL)
export const MAP_QUERY = encodeURIComponent('108 Stiring Rd, Warren, NJ 07059')
