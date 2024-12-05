# GM Express Routes Website

A modern, responsive website for GM Express Routes freight and logistics services.

## Getting Started

1. Clone the repository
2. Copy `.env.example` to `.env` and fill in your EmailJS credentials
3. Install dependencies:
```bash
npm install
```

4. Run the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

VITE_SITE_URL=https://gmexpressroutes.com
VITE_COMPANY_NAME="GM Express Routes"
VITE_COMPANY_EMAIL=contact@gmexpressroutes.com
VITE_COMPANY_PHONE="+1 (305) 555-0123"
VITE_COMPANY_ADDRESS="123 Business Street, Miami, FL 33101"
```

## Deployment

The site is configured for deployment on Vercel or Netlify. Simply connect your repository and the build settings will be automatically configured.

### Build Commands

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

## Features

- Responsive design
- Dark mode support
- Contact form with EmailJS integration
- Quote request modal
- SEO optimized
- Performance optimized
- Modern animations
- Accessibility compliant

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- EmailJS
- React Router
- Lucide Icons

## License

MIT