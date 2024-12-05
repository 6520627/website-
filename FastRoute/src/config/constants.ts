export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

export const COMPANY_INFO = {
  name: import.meta.env.VITE_COMPANY_NAME || "GM Express Routes",
  email: import.meta.env.VITE_COMPANY_EMAIL || "contact@gmexpressroutes.com",
  phone: import.meta.env.VITE_COMPANY_PHONE || "+1 (305) 555-0123",
  address: import.meta.env.VITE_COMPANY_ADDRESS || "123 Business Street, Miami, FL 33101",
  social: {
    facebook: "https://facebook.com/gmexpressroutes",
    instagram: "https://instagram.com/gmexpressroutes",
    twitter: "https://twitter.com/gmexpressroutes",
  }
};