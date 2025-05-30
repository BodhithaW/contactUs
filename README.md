# ESOFT Metro Campus Website

This is the official website for ESOFT Metro Campus, built with Next.js and modern web technologies.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [Git](https://git-scm.com/)

## Creating a New Next.js Application

If you want to create a new Next.js application from scratch, follow these steps:

### 1. Create Next.js App

You can create a new Next.js app using any of these methods:

```bash
# Using npx
npx create-next-app@latest

# Using yarn
yarn create next-app

# Using pnpm
pnpm create next-app
```

### 2. Configuration Options

During creation, you'll be prompted to configure your project:

```bash
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use `src/` directory? No / Yes
Would you like to use App Router? No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
```

### 3. Navigate to Project

```bash
cd my-app
```

### 4. Start Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Your new Next.js app will be running at `http://localhost:3000`

### 5. Project Structure Created

```
my-app/
├── node_modules/
├── public/
├── src/
│   └── app/
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.js
│       └── page.js
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── README.md
└── tailwind.config.js (if selected)
```

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd fullstack
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory of the project. Add the following environment variables:

```env
# Environment
NODE_ENV=development

# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

Replace the EmailJS configuration values with your own from the EmailJS dashboard.

> **Note**: Never commit the `.env.local` file to version control. It's already included in `.gitignore`.

### 4. Run the Development Server

```bash
npm run dev
```

The application will start running at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run start` - Starts the production server
- `npm run lint` - Runs the linter to check code quality

## Next.js Development Modes

### Development Mode
```bash
npm run dev
```
This command starts the application in development mode with hot-code reloading, error reporting, and development-specific features:
- Access the app at `http://localhost:3000`
- Changes are reflected immediately without server restart
- Detailed error messages and debugging information
- Source maps for better debugging
- Fast Refresh for React components

### Production Mode
1. Build the application:
```bash
npm run build
```
This creates an optimized production build with:
- Code minification
- Bundle optimization
- Static file generation
- Automatic image optimization
- Environment variable injection

2. Start the production server:
```bash
npm run start
```
This runs the application in production mode:
- Optimized performance
- Disabled development features
- Production-level logging
- Serves pre-built files

### Additional Development Features
- **Static File Serving**: Place files in the `public/` directory to serve them at the root URL
- **API Routes**: Create API endpoints in `src/app/api/` directory
- **Environment Variables**: Use `.env.local` for local development and `.env` for production
- **Hot Module Replacement**: Changes reflect instantly during development
- **Error Handling**: Detailed error reporting in development mode

## Project Structure

```
fullstack/
├── src/
│   ├── app/           # Next.js app directory
│   ├── components/    # React components
│   ├── config/        # Configuration files
│   └── constants/     # Constants and static data
├── public/            # Static files
└── package.json       # Project dependencies and scripts
```

## Environment Variables Explanation

- `NODE_ENV`: Determines the environment (development/production)
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`: Your EmailJS service ID for email functionality
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`: Your EmailJS public key
- `NEXT_PUBLIC_BASE_URL`: The base URL for the application

## Production Deployment

For production deployment:

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm run start
```

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request


